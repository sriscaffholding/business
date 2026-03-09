import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { addItem } from '@/lib/db';
import type { ScaffoldingItem, ScaffoldingType } from '@/types';

export const dynamic = 'force-dynamic';


const ALLOWED_MIME = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
const MAX_SIZE = 10 * 1024 * 1024; // 10 MB

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const imageFile = formData.get('image') as File | null;
    const type = formData.get('type') as ScaffoldingType | null;
    const description = formData.get('description') as string | null;

    // Validation
    if (!imageFile || imageFile.size === 0) {
      return NextResponse.json({ error: 'No image provided.' }, { status: 400 });
    }
    if (!ALLOWED_MIME.includes(imageFile.type)) {
      return NextResponse.json({ error: 'Invalid file type. Use JPG, PNG, WEBP, or GIF.' }, { status: 400 });
    }
    if (imageFile.size > MAX_SIZE) {
      return NextResponse.json({ error: 'Image too large. Max 10 MB.' }, { status: 400 });
    }
    if (!type || !['wheel-ladder', 'single-scaffolding', 'double-scaffolding'].includes(type)) {
      return NextResponse.json({ error: 'Invalid type.' }, { status: 400 });
    }
    if (!description || description.trim().length === 0) {
      return NextResponse.json({ error: 'Description is required.' }, { status: 400 });
    }

    // Save image
    const ext = imageFile.name.split('.').pop()?.toLowerCase() || 'jpg';
    const filename = `${uuidv4()}.${ext}`;
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads');

    if (!existsSync(uploadsDir)) {
      await mkdir(uploadsDir, { recursive: true });
    }

    const bytes = await imageFile.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await writeFile(path.join(uploadsDir, filename), buffer);

    // Save metadata
    const newItem: ScaffoldingItem = {
      id: uuidv4(),
      type,
      description: description.trim(),
      image: filename,
      createdAt: new Date().toISOString(),
    };

    addItem(newItem);

    return NextResponse.json({ item: newItem }, { status: 201 });
  } catch (error) {
    console.error('[POST /api/upload]', error);
    return NextResponse.json({ error: 'Upload failed. Please try again.' }, { status: 500 });
  }
}
