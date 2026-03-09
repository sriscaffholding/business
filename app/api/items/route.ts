import { NextResponse } from 'next/server';
import { getItems } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const items = await getItems();
    return NextResponse.json({ items }, { status: 200 });
  } catch (error) {
    console.error('[GET /api/items]', error);
    return NextResponse.json({ error: 'Failed to fetch items.' }, { status: 500 });
  }
}