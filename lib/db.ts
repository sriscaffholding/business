import fs from 'fs';
import path from 'path';
import type { ScaffoldingItem } from '@/types';

const DATA_DIR = path.join(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'items.json');

function ensureDataFile(): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2), 'utf-8');
  }
}

export function getItems(): ScaffoldingItem[] {
  ensureDataFile();
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(raw) as ScaffoldingItem[];
  } catch {
    return [];
  }
}

export function saveItems(items: ScaffoldingItem[]): void {
  ensureDataFile();
  fs.writeFileSync(DATA_FILE, JSON.stringify(items, null, 2), 'utf-8');
}

export function addItem(item: ScaffoldingItem): ScaffoldingItem {
  const items = getItems();
  items.unshift(item);
  saveItems(items);
  return item;
}

export function deleteItem(id: string): boolean {
  const items = getItems();
  const filtered = items.filter((i) => i.id !== id);
  if (filtered.length === items.length) return false;
  saveItems(filtered);
  return true;
}

export function updateItem(
  id: string,
  updates: Partial<Pick<ScaffoldingItem, 'description' | 'type'>>
): ScaffoldingItem | null {
  const items = getItems();
  const idx = items.findIndex((i) => i.id === id);
  if (idx === -1) return null;
  items[idx] = { ...items[idx], ...updates };
  saveItems(items);
  return items[idx];
}

export function getItemById(id: string): ScaffoldingItem | null {
  const items = getItems();
  return items.find((i) => i.id === id) ?? null;
}
