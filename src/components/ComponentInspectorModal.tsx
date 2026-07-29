import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExtractedComponent } from '../types';
import { X, Copy, Check, Sparkles, Layers, Palette, Type, Move } from 'lucide-react';

interface ComponentInspectorModalProps {
  component: ExtractedComponent | null;
  onClose: () => void;
}

export const ComponentInspectorModal: React.FC<ComponentInspectorModalProps> = ({ component, onClose }) => {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  if (!component) return null;

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const getCssSnippet = (comp: ExtractedComponent) => {
    return `.extracted-${comp.id} {
  /* ${comp.name} */
  position: relative;
  z-index: ${comp.zIndex};
  background-color: ${comp.colors[0] || 'transparent'};
  ${comp.fontSpec ? `font-family: ${comp.fontSpec};` : ''}
}`;
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 w-full max-w-lg overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="bg-amber-500/10 dark:bg-amber-500/20 px-6 py-4 border-b border-amber-500/20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-lg bg-amber-500 text-white font-bold text-xs uppercase tracking-wider">
                {component.category}
              </span>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                {component.name}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body content */}
          <div className="p-6 space-y-5 overflow-y-auto max-h-[75vh]">
            {/* Description */}
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {component.description}
            </p>

            {/* Spec Details Grid */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 mb-1">
                  <Move className="w-3.5 h-3.5 text-amber-500" />
                  <span>Position &amp; Size</span>
                </div>
                <div className="font-medium text-slate-800 dark:text-slate-200">
                  {component.position}
                </div>
                <div className="text-slate-400 text-[11px] mt-0.5">{component.dimensions}</div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 mb-1">
                  <Layers className="w-3.5 h-3.5 text-amber-500" />
                  <span>Layer Depth</span>
                </div>
                <div className="font-medium text-slate-800 dark:text-slate-200">
                  Z-Index: {component.zIndex}
                </div>
                <div className="text-slate-400 text-[11px] mt-0.5">Stacking Layer</div>
              </div>
            </div>

            {/* Color Palette */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
                  <Palette className="w-4 h-4 text-amber-500" />
                  <span>Color Tokens Extracted</span>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                {component.colors.map((color, idx) => (
                  <button
                    key={idx}
                    onClick={() => copyToClipboard(color, `color-${idx}`)}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-amber-500 text-xs font-mono transition-all cursor-pointer group"
                  >
                    <span
                      className="w-4 h-4 rounded-full border border-black/10 shadow-xs"
                      style={{ backgroundColor: color }}
                    />
                    <span className="text-slate-800 dark:text-slate-200">{color}</span>
                    {copiedText === `color-${idx}` ? (
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-slate-400 transition-opacity" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Typography if applicable */}
            {component.fontSpec && (
              <div className="bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-xl border border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  <Type className="w-4 h-4 text-amber-500" />
                  <span>Font Specification</span>
                </div>
                <div className="text-xs font-mono text-amber-700 dark:text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md inline-block">
                  {component.fontSpec}
                </div>
              </div>
            )}

            {/* CSS Snippet Code Box */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  CSS Component Code
                </span>
                <button
                  onClick={() => copyToClipboard(getCssSnippet(component), 'css')}
                  className="flex items-center gap-1 text-xs text-amber-600 dark:text-amber-400 hover:underline cursor-pointer"
                >
                  {copiedText === 'css' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedText === 'css' ? 'Copied' : 'Copy CSS'}</span>
                </button>
              </div>
              <pre className="p-3 bg-slate-900 text-amber-300 rounded-xl text-xs font-mono overflow-x-auto border border-slate-800">
                {getCssSnippet(component)}
              </pre>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="p-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 bg-amber-500 hover:bg-amber-600 text-white font-medium text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              Done Inspecting
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
