import { NextRequest, NextResponse } from 'next/server';
import { updateItem, deleteItem, getItemById } from '@/lib/db';
import { v2 as cloudinary } from 'cloudinary';
import type { ScaffoldingType } from '@/types';

export const dynamic = 'force-dynamic';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { description, type } = body as { description?: string; type?: ScaffoldingType };
    const item = await getItemById(id);
    if (!item) return NextResponse.json({ error: 'Item not found.' }, { status: 404 });
    const updates: { description?: string; type?: ScaffoldingType } = {};
    if (description !== undefined) updates.description = description.trim();
    if (type !== undefined) updates.type = type;
    const updated = await updateItem(id, updates);
    return NextResponse.json({ item: updated }, { status: 200 });
  } catch (error) {
    console.error('[PATCH]', error);
    return NextResponse.json({ error: 'Failed to update item.' }, { status: 500 });
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const item = await getItemById(id);
    if (!item) return NextResponse.json({ error: 'Item not found.' }, { status: 404 });

    // Delete from Cloudinary
    try {
      const publicId = item.image.split('/').slice(-2).join('/').split('.')[0];
      await cloudinary.uploader.destroy(publicId);
    } catch (e) {
      console.error('Cloudinary delete error:', e);
    }

    await deleteItem(id);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('[DELETE]', error);
    return NextResponse.json({ error: 'Failed to delete item.' }, { status: 500 });
  }
}