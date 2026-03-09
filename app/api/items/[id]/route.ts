import { NextRequest, NextResponse } from 'next/server';
import { updateItem, deleteItem, getItemById } from '@/lib/db';
import fs from 'fs';
import path from 'path';
import type { ScaffoldingType } from '@/types';

export const dynamic = 'force-dynamic';

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { description, type } = body as { description?: string; type?: ScaffoldingType };

    const item = getItemById(id);
    if (!item) {
      return NextResponse.json({ error: 'Item not found.' }, { status: 404 });
    }

    const updates: { description?: string; type?: ScaffoldingType } = {};
    if (description !== undefined) updates.description = description.trim();
    if (type !== undefined) updates.type = type;

    const updated = updateItem(id, updates);
    return NextResponse.json({ item: updated }, { status: 200 });
  } catch (error) {
    console.error('[PATCH /api/items/[id]]', error);
    return NextResponse.json({ error: 'Failed to update item.' }, { status: 500 });
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const item = getItemById(id);
    if (!item) {
      return NextResponse.json({ error: 'Item not found.' }, { status: 404 });
    }

    const imagePath = path.join(process.cwd(), 'public', 'uploads', item.image);
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    deleteItem(id);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('[DELETE /api/items/[id]]', error);
    return NextResponse.json({ error: 'Failed to delete item.' }, { status: 500 });
  }
}