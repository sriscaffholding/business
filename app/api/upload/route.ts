import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';
import { v4 as uuidv4 } from 'uuid';
import { addItem } from '@/lib/db';
import type { ScaffoldingItem, ScaffoldingType } from '@/types';

export const dynamic = 'force-dynamic';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const ALLOWED_MIME = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
const MAX_SIZE = 10 * 1024 * 1024;

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const imageFile = formData.get('image') as File | null;
    const type = formData.get('type') as ScaffoldingType | null;
    const description = formData.get('description') as string | null;

    if (!imageFile || imageFile.size === 0)
      return NextResponse.json({ error: 'No image provided.' }, { status: 400 });
    if (!ALLOWED_MIME.includes(imageFile.type))
      return NextResponse.json({ error: 'Invalid file type.' }, { status: 400 });
    if (imageFile.size > MAX_SIZE)
      return NextResponse.json({ error: 'Image too large. Max 10MB.' }, { status: 400 });
    if (!type || !['wheel-ladder', 'single-scaffolding', 'double-scaffolding'].includes(type))
      return NextResponse.json({ error: 'Invalid type.' }, { status: 400 });
    if (!description || !description.trim())
      return NextResponse.json({ error: 'Description required.' }, { status: 400 });

    const bytes = await imageFile.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadResult = await new Promise<{ secure_url: string; public_id: string }>(
      (resolve, reject) => {
        cloudinary.uploader
          .upload_stream({ folder: 'sri-vari-scaffolding' }, (error, result) => {
            if (error || !result) reject(error);
            else resolve(result as { secure_url: string; public_id: string });
          })
          .end(buffer);
      }
    );

    const newItem: ScaffoldingItem = {
      id: uuidv4(),
      type,
      description: description.trim(),
      image: uploadResult.secure_url,
      createdAt: new Date().toISOString(),
    };

    await addItem(newItem);
    return NextResponse.json({ item: newItem }, { status: 201 });
  } catch (error) {
    console.error('[POST /api/upload]', error);
    return NextResponse.json({ error: 'Upload failed.' }, { status: 500 });
  }
}