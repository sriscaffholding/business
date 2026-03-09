'use client';

import { useEffect, useCallback } from 'react';
import type { ScaffoldingItem } from '@/types';
import { TYPE_LABELS } from '@/types';

interface ImageModalProps {
  item: ScaffoldingItem | null;
  onClose: () => void;
}

export default function ImageModal({ item, onClose }: ImageModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (item) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [item, handleKeyDown]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 modal-backdrop bg-black/80 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-dark-700 max-w-4xl w-full overflow-hidden shadow-2xl shadow-amber-500/10 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/60 hover:bg-amber-500 flex items-center justify-center transition-colors duration-200 group"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5 text-white group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image */}
        <div className="relative aspect-[16/9] bg-dark-900">
          <img
  src={`/uploads/${item.image}`}
  alt={item.description}
  className="absolute inset-0 w-full h-full object-contain"
/>
        </div>

        {/* Info */}
        <div className="p-6 border-t border-dark-500">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-amber-500 text-black font-display text-sm px-3 py-1 tracking-widest">
              {TYPE_LABELS[item.type]}
            </span>
            <span className="text-gray-500 text-xs">
              {new Date(item.createdAt).toLocaleDateString('en-IN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
        </div>
      </div>
    </div>
  );
}
