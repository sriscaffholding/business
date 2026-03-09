import { Pool } from 'pg';
import type { ScaffoldingItem, ScaffoldingType } from '@/types';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

export async function initDB() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS items (
      id TEXT PRIMARY KEY,
      type TEXT NOT NULL,
      description TEXT NOT NULL,
      image TEXT NOT NULL,
      created_at TEXT NOT NULL
    )
  `);
}

export async function getItems(): Promise<ScaffoldingItem[]> {
  await initDB();
  const result = await pool.query('SELECT * FROM items ORDER BY created_at DESC');
  return result.rows.map((row) => ({
    id: row.id,
    type: row.type as ScaffoldingType,
    description: row.description,
    image: row.image,
    createdAt: row.created_at,
  }));
}

export async function addItem(item: ScaffoldingItem): Promise<ScaffoldingItem> {
  await initDB();
  await pool.query(
    'INSERT INTO items (id, type, description, image, created_at) VALUES ($1, $2, $3, $4, $5)',
    [item.id, item.type, item.description, item.image, item.createdAt]
  );
  return item;
}

export async function deleteItem(id: string): Promise<boolean> {
  await initDB();
  const result = await pool.query('DELETE FROM items WHERE id = $1', [id]);
  return (result.rowCount ?? 0) > 0;
}

export async function updateItem(
  id: string,
  updates: Partial<Pick<ScaffoldingItem, 'description' | 'type'>>
): Promise<ScaffoldingItem | null> {
  await initDB();
  const fields: string[] = [];
  const values: string[] = [];
  let i = 1;
  if (updates.description !== undefined) {
    fields.push(`description = $${i++}`);
    values.push(updates.description);
  }
  if (updates.type !== undefined) {
    fields.push(`type = $${i++}`);
    values.push(updates.type);
  }
  if (fields.length === 0) return null;
  values.push(id);
  const result = await pool.query(
    `UPDATE items SET ${fields.join(', ')} WHERE id = $${i} RETURNING *`,
    values
  );
  if (result.rows.length === 0) return null;
  const row = result.rows[0];
  return {
    id: row.id,
    type: row.type as ScaffoldingType,
    description: row.description,
    image: row.image,
    createdAt: row.created_at,
  };
}

export async function getItemById(id: string): Promise<ScaffoldingItem | null> {
  await initDB();
  const result = await pool.query('SELECT * FROM items WHERE id = $1', [id]);
  if (result.rows.length === 0) return null;
  const row = result.rows[0];
  return {
    id: row.id,
    type: row.type as ScaffoldingType,
    description: row.description,
    image: row.image,
    createdAt: row.created_at,
  };
}