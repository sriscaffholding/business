'use client';

import { useState, useEffect, useCallback } from 'react';
import type { ScaffoldingItem, ScaffoldingType } from '@/types';
import { TYPE_LABELS, ALL_TYPES } from '@/types';
import { SkeletonGrid } from './SkeletonCard';
import ImageModal from './ImageModal';

type FilterType = 'all' | ScaffoldingType;

export default function GalleryGrid() {
  const [items, setItems] = useState<ScaffoldingItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<FilterType>('all');
  const [selectedItem, setSelectedItem] = useState<ScaffoldingItem | null>(null);
  const [imgLoaded, setImgLoaded] = useState<Record<string, boolean>>({});

  const fetchItems = useCallback(async () => {
    try {
      const res = await fetch('/api/items', { cache: 'no-store' });
      const data = await res.json();
      setItems(data.items || []);
    } catch (error) {
      console.error('Failed to load items:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  // Read filter from URL param on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlFilter = params.get('filter') as ScaffoldingType | null;
    if (urlFilter && ALL_TYPES.includes(urlFilter)) {
      setFilter(urlFilter);
    }
  }, []);

  const filtered =
    filter === 'all' ? items : items.filter((item) => item.type === filter);

  const filters: { value: FilterType; label: string }[] = [
    { value: 'all', label: 'All' },
    ...ALL_TYPES.map((t) => ({ value: t as FilterType, label: TYPE_LABELS[t] })),
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-10">
        <p className="text-amber-500 font-display text-base tracking-[0.3em] mb-1">OUR WORK</p>
        <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide leading-none">
          PROJECT GALLERY
        </h2>
        <div className="flex items-center gap-3 mt-3">
          <div className="h-0.5 w-12 bg-amber-500" />
          <div className="h-0.5 w-4 bg-amber-500/40" />
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-10">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`filter-btn font-display text-lg px-5 py-2 tracking-widest transition-all duration-200 ${
              filter === f.value
                ? 'active bg-amber-500 border-amber-500 text-black'
                : 'bg-transparent border-dark-500 text-gray-300 hover:border-amber-500/50 hover:text-amber-400'
            } border-2`}
          >
            {f.label}
            {f.value !== 'all' && (
              <span className={`ml-2 text-xs font-body ${filter === f.value ? 'text-black/60' : 'text-gray-500'}`}>
                ({items.filter((i) => i.type === f.value).length})
              </span>
            )}
            {f.value === 'all' && (
              <span className={`ml-2 text-xs font-body ${filter === f.value ? 'text-black/60' : 'text-gray-500'}`}>
                ({items.length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Grid */}
      {loading ? (
        <SkeletonGrid count={6} />
      ) : filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="w-16 h-16 border-2 border-amber-500/30 flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-amber-500/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-gray-500 font-display text-xl tracking-widest">NO ITEMS FOUND</p>
          <p className="text-gray-600 text-sm mt-2">
            {filter === 'all'
              ? 'No items have been uploaded yet.'
              : `No ${TYPE_LABELS[filter as ScaffoldingType]} items found.`}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, index) => (
            <div
              key={item.id}
              className="gallery-card bg-dark-700 overflow-hidden cursor-pointer group animate-slide-up"
              style={{ animationDelay: `${index * 60}ms`, animationFillMode: 'backwards' }}
              onClick={() => setSelectedItem(item)}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] bg-dark-900 overflow-hidden">
                {!imgLoaded[item.id] && (
                  <div className="absolute inset-0 shimmer" />
                )}
                <img
  src={`/uploads/${item.image}`}
  alt={item.description}
  className={`absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
    imgLoaded[item.id] ? 'opacity-100' : 'opacity-0'
  }`}
  onLoad={() => setImgLoaded((prev) => ({ ...prev, [item.id]: true }))}
/>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/10 transition-colors duration-300" />
                {/* Expand icon */}
                <div className="absolute top-3 right-3 w-8 h-8 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-200">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-amber-500/10 border border-amber-500/30 text-amber-500 text-xs font-display tracking-widest px-2 py-0.5">
                    {TYPE_LABELS[item.type]}
                  </span>
                  <span className="text-gray-600 text-xs">
                    {new Date(item.createdAt).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}
                  </span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      <ImageModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
}
