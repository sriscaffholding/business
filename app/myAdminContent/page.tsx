'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import type { ScaffoldingItem, ScaffoldingType } from '@/types';
import { TYPE_LABELS, ALL_TYPES } from '@/types';

const ADMIN_PASSWORD = 'Hari@1234';

type ViewMode = 'login' | 'dashboard';
type ModalType = 'edit' | 'delete' | null;

export default function AdminPage() {
  const [view, setView] = useState<ViewMode>('login');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [items, setItems] = useState<ScaffoldingItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [uploadSuccess, setUploadSuccess] = useState('');

  // Upload form
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploadType, setUploadType] = useState<ScaffoldingType>('wheel-ladder');
  const [uploadDesc, setUploadDesc] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Edit / Delete modal
  const [modalType, setModalType] = useState<ModalType>(null);
  const [targetItem, setTargetItem] = useState<ScaffoldingItem | null>(null);
  const [editDesc, setEditDesc] = useState('');
  const [editType, setEditType] = useState<ScaffoldingType>('wheel-ladder');
  const [actionLoading, setActionLoading] = useState(false);
  const [actionMsg, setActionMsg] = useState('');

  // Check session on mount
  useEffect(() => {
    const saved = sessionStorage.getItem('sv_admin');
    if (saved === 'authenticated') setView('dashboard');
  }, []);

  const fetchItems = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/items', { cache: 'no-store' });
      const data = await res.json();
      setItems(data.items || []);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (view === 'dashboard') fetchItems();
  }, [view, fetchItems]);

  // ─── Auth ─────────────────────────────────────────────────
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem('sv_admin', 'authenticated');
      setView('dashboard');
      setAuthError('');
    } else {
      setAuthError('Incorrect password. Please try again.');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('sv_admin');
    setView('login');
    setPassword('');
  };

  // ─── Image select ──────────────────────────────────────────
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setUploadError('Please select a valid image file.');
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setUploadError('Image must be less than 10 MB.');
      return;
    }
    setImageFile(file);
    setUploadError('');
    const reader = new FileReader();
    reader.onload = (ev) => setImagePreview(ev.target?.result as string);
    reader.readAsDataURL(file);
  };

  // ─── Upload ────────────────────────────────────────────────
  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageFile) { setUploadError('Please select an image.'); return; }
    if (!uploadDesc.trim()) { setUploadError('Please add a description.'); return; }

    setUploading(true);
    setUploadError('');
    setUploadSuccess('');

    const formData = new FormData();
    formData.append('image', imageFile);
    formData.append('type', uploadType);
    formData.append('description', uploadDesc.trim());

    try {
      const res = await fetch('/api/upload', { method: 'POST', body: formData });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Upload failed');
      setUploadSuccess('Item uploaded successfully!');
      setImageFile(null);
      setImagePreview(null);
      setUploadDesc('');
      setUploadType('wheel-ladder');
      if (fileInputRef.current) fileInputRef.current.value = '';
      fetchItems();
    } catch (err) {
      setUploadError((err as Error).message);
    } finally {
      setUploading(false);
    }
  };

  // ─── Edit ──────────────────────────────────────────────────
  const openEdit = (item: ScaffoldingItem) => {
    setTargetItem(item);
    setEditDesc(item.description);
    setEditType(item.type);
    setActionMsg('');
    setModalType('edit');
  };

  const handleEdit = async () => {
    if (!targetItem) return;
    setActionLoading(true);
    try {
      const res = await fetch(`/api/items/${targetItem.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description: editDesc, type: editType }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Update failed');
      setActionMsg('Updated successfully!');
      fetchItems();
      setTimeout(() => { setModalType(null); setActionMsg(''); }, 1000);
    } catch (err) {
      setActionMsg((err as Error).message);
    } finally {
      setActionLoading(false);
    }
  };

  // ─── Delete ────────────────────────────────────────────────
  const openDelete = (item: ScaffoldingItem) => {
    setTargetItem(item);
    setActionMsg('');
    setModalType('delete');
  };

  const handleDelete = async () => {
    if (!targetItem) return;
    setActionLoading(true);
    try {
      const res = await fetch(`/api/items/${targetItem.id}`, { method: 'DELETE' });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Delete failed');
      setActionMsg('Deleted!');
      fetchItems();
      setTimeout(() => { setModalType(null); setActionMsg(''); }, 800);
    } catch (err) {
      setActionMsg((err as Error).message);
    } finally {
      setActionLoading(false);
    }
  };

  // ─── Login Screen ──────────────────────────────────────────
  if (view === 'login') {
    return (
      <div className="min-h-screen scaffold-bg flex items-center justify-center px-4 pt-20">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-amber-500 mx-auto flex items-center justify-center font-display text-black text-3xl mb-4">
              SV
            </div>
            <h1 className="font-display text-3xl text-white tracking-widest">SRI VARI SCAFFOLDING WORKS</h1>
<p className="text-amber-500 text-sm tracking-widest font-display mt-1">ADMIN PANEL</p>

          </div>

          <form onSubmit={handleLogin} className="bg-dark-700 border border-dark-500 p-8">
            <div className="absolute top-0 left-0 w-full h-1 bg-amber-500" />
            <label className="block text-amber-500 font-display tracking-widest text-sm mb-2">
              PASSWORD
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setAuthError(''); }}
              placeholder="Enter admin password"
              className="w-full bg-dark-900 border border-dark-400 text-white px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors font-body mb-4"
              autoFocus
            />
            {authError && (
              <p className="text-red-400 text-xs mb-4 flex items-center gap-1">
                <span>⚠</span> {authError}
              </p>
            )}
            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-400 text-black font-display text-xl tracking-widest py-3 transition-colors duration-200"
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ─── Dashboard ────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-dark-900 pt-20">
      {/* Top bar */}
      <div className="bg-dark-800 border-b border-dark-500 px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="font-display text-2xl text-white tracking-widest">ADMIN DASHBOARD</h1>
            <p className="text-amber-500 text-xs tracking-widest font-display">{items.length} ITEMS IN GALLERY</p>
          </div>
          <button
            onClick={handleLogout}
            className="border border-dark-400 hover:border-red-500 text-gray-400 hover:text-red-400 font-display text-sm tracking-widest px-4 py-2 transition-colors duration-200"
          >
            LOGOUT
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* ─ Upload Form ─────────────────────────────── */}
          <div className="lg:col-span-1">
            <div className="bg-dark-700 border border-dark-500 p-6 sticky top-24">
              <h2 className="font-display text-xl text-amber-500 tracking-widest mb-6">
                UPLOAD NEW ITEM
              </h2>

              <form onSubmit={handleUpload} className="space-y-5">
                {/* Image Upload */}
                <div>
                  <label className="block text-gray-400 text-xs font-display tracking-widest mb-2">
                    IMAGE *
                  </label>
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-dark-400 hover:border-amber-500/50 transition-colors cursor-pointer aspect-[4/3] flex flex-col items-center justify-center overflow-hidden relative"
                  >
                    {imagePreview ? (
                      <Image src={imagePreview} alt="Preview" fill className="object-cover" />
                    ) : (
                      <div className="text-center p-4">
                        <svg className="w-10 h-10 text-dark-400 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-gray-500 text-xs">Click to select image</p>
                        <p className="text-gray-600 text-xs mt-0.5">JPG, PNG, WEBP up to 10MB</p>
                      </div>
                    )}
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  {imageFile && (
                    <p className="text-gray-500 text-xs mt-1">{imageFile.name}</p>
                  )}
                </div>

                {/* Type */}
                <div>
                  <label className="block text-gray-400 text-xs font-display tracking-widest mb-2">
                    TYPE *
                  </label>
                  <select
                    value={uploadType}
                    onChange={(e) => setUploadType(e.target.value as ScaffoldingType)}
                    className="w-full bg-dark-900 border border-dark-400 focus:border-amber-500 text-white px-4 py-3 text-sm font-body outline-none transition-colors"
                  >
                    {ALL_TYPES.map((t) => (
                      <option key={t} value={t}>{TYPE_LABELS[t]}</option>
                    ))}
                  </select>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-gray-400 text-xs font-display tracking-widest mb-2">
                    DESCRIPTION *
                  </label>
                  <textarea
                    value={uploadDesc}
                    onChange={(e) => setUploadDesc(e.target.value)}
                    rows={4}
                    placeholder="Describe this scaffolding project..."
                    className="w-full bg-dark-900 border border-dark-400 focus:border-amber-500 text-white px-4 py-3 text-sm font-body outline-none transition-colors resize-none"
                  />
                </div>

                {/* Messages */}
                {uploadError && (
                  <p className="text-red-400 text-xs flex items-center gap-1">⚠ {uploadError}</p>
                )}
                {uploadSuccess && (
                  <p className="text-green-400 text-xs flex items-center gap-1">✓ {uploadSuccess}</p>
                )}

                <button
                  type="submit"
                  disabled={uploading}
                  className="w-full bg-amber-500 hover:bg-amber-400 disabled:bg-amber-700 disabled:cursor-not-allowed text-black font-display text-xl tracking-widest py-3 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  {uploading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-black/40 border-t-black rounded-full animate-spin" />
                      UPLOADING...
                    </>
                  ) : 'UPLOAD'}
                </button>
              </form>
            </div>
          </div>

          {/* ─ Items List ──────────────────────────────── */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-xl text-amber-500 tracking-widest mb-6">
              MANAGE GALLERY
            </h2>

            {loading ? (
              <div className="flex items-center justify-center py-20">
                <span className="w-8 h-8 border-2 border-amber-500/30 border-t-amber-500 rounded-full animate-spin" />
              </div>
            ) : items.length === 0 ? (
              <div className="bg-dark-700 border border-dark-500 p-12 text-center">
                <p className="text-gray-600 font-display text-lg tracking-widest">NO ITEMS YET</p>
                <p className="text-gray-700 text-sm mt-1">Use the upload form to add gallery items.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-dark-700 border border-dark-500 p-4 flex gap-4 items-start"
                  >
                    {/* Thumb */}
                    <div className="relative w-20 h-20 shrink-0 bg-dark-900 overflow-hidden">
                      <img
src={item.image}
  alt={item.description}
  className="absolute inset-0 w-full h-full object-cover"
/>
                    </div>
                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <span className="inline-block bg-amber-500/10 border border-amber-500/30 text-amber-500 text-xs font-display tracking-widest px-2 py-0.5 mb-1">
                        {TYPE_LABELS[item.type]}
                      </span>
                      <p className="text-gray-300 text-sm line-clamp-2 leading-relaxed">{item.description}</p>
                      <p className="text-gray-600 text-xs mt-1">
                        {new Date(item.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </p>
                    </div>
                    {/* Actions */}
                    <div className="flex gap-2 shrink-0">
                      <button
                        onClick={() => openEdit(item)}
                        className="w-9 h-9 bg-dark-600 hover:bg-amber-500/20 hover:border-amber-500/40 border border-dark-400 flex items-center justify-center transition-colors duration-200"
                        title="Edit"
                      >
                        <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => openDelete(item)}
                        className="w-9 h-9 bg-dark-600 hover:bg-red-500/20 hover:border-red-500/40 border border-dark-400 flex items-center justify-center transition-colors duration-200"
                        title="Delete"
                      >
                        <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ─── Edit Modal ──────────────────────────────────────── */}
      {modalType === 'edit' && targetItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 modal-backdrop">
          <div className="bg-dark-700 border border-dark-500 w-full max-w-md p-6 animate-scale-in">
            <h3 className="font-display text-xl text-amber-500 tracking-widest mb-5">EDIT ITEM</h3>

            <div className="mb-4">
              <label className="block text-gray-400 text-xs font-display tracking-widest mb-2">TYPE</label>
              <select
                value={editType}
                onChange={(e) => setEditType(e.target.value as ScaffoldingType)}
                className="w-full bg-dark-900 border border-dark-400 focus:border-amber-500 text-white px-4 py-3 text-sm font-body outline-none transition-colors"
              >
                {ALL_TYPES.map((t) => (
                  <option key={t} value={t}>{TYPE_LABELS[t]}</option>
                ))}
              </select>
            </div>

            <div className="mb-5">
              <label className="block text-gray-400 text-xs font-display tracking-widest mb-2">DESCRIPTION</label>
              <textarea
                value={editDesc}
                onChange={(e) => setEditDesc(e.target.value)}
                rows={4}
                className="w-full bg-dark-900 border border-dark-400 focus:border-amber-500 text-white px-4 py-3 text-sm font-body outline-none transition-colors resize-none"
              />
            </div>

            {actionMsg && (
              <p className={`text-xs mb-4 ${actionMsg.includes('success') || actionMsg.includes('Updated') ? 'text-green-400' : 'text-red-400'}`}>
                {actionMsg}
              </p>
            )}

            <div className="flex gap-3">
              <button
                onClick={handleEdit}
                disabled={actionLoading}
                className="flex-1 bg-amber-500 hover:bg-amber-400 disabled:bg-amber-700 text-black font-display tracking-widest py-3 transition-colors"
              >
                {actionLoading ? 'SAVING...' : 'SAVE'}
              </button>
              <button
                onClick={() => setModalType(null)}
                className="flex-1 border border-dark-400 hover:border-gray-400 text-gray-400 hover:text-white font-display tracking-widest py-3 transition-colors"
              >
                CANCEL
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─── Delete Modal ─────────────────────────────────────── */}
      {modalType === 'delete' && targetItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 modal-backdrop">
          <div className="bg-dark-700 border border-dark-500 w-full max-w-sm p-6 animate-scale-in">
            <div className="w-12 h-12 bg-red-500/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            <h3 className="font-display text-xl text-white tracking-widest text-center mb-2">DELETE ITEM?</h3>
            <p className="text-gray-500 text-sm text-center mb-6 line-clamp-2">{targetItem.description}</p>

            {actionMsg && (
              <p className={`text-xs mb-4 text-center ${actionMsg === 'Deleted!' ? 'text-green-400' : 'text-red-400'}`}>
                {actionMsg}
              </p>
            )}

            <div className="flex gap-3">
              <button
                onClick={handleDelete}
                disabled={actionLoading}
                className="flex-1 bg-red-500 hover:bg-red-400 disabled:bg-red-800 text-white font-display tracking-widest py-3 transition-colors"
              >
                {actionLoading ? 'DELETING...' : 'DELETE'}
              </button>
              <button
                onClick={() => setModalType(null)}
                className="flex-1 border border-dark-400 hover:border-gray-400 text-gray-400 hover:text-white font-display tracking-widest py-3 transition-colors"
              >
                CANCEL
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
