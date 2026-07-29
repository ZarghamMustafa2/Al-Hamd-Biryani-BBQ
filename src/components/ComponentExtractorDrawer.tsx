import React, { useState } from 'react';
import { EXTRACTED_COMPONENTS } from '../data/extractedComponents';
import { ExtractedComponent } from '../types';
import { Layers, Search, Eye, Filter, Sparkles, Code2, ChevronRight, Check } from 'lucide-react';

interface ComponentExtractorDrawerProps {
  onSelectComponent: (comp: ExtractedComponent) => void;
  selectedComponentId: string | null;
}

export const ComponentExtractorDrawer: React.FC<ComponentExtractorDrawerProps> = ({
  onSelectComponent,
  selectedComponentId,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('All');

  const categories = ['All', 'Typography', 'Main Hero Asset', 'Floating Decor', 'Interactive CTA', 'Footer Badge'];

  const filteredComponents = EXTRACTED_COMPONENTS.filter((comp) => {
    const matchesSearch =
      comp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comp.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = categoryFilter === 'All' || comp.category === categoryFilter;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-lg flex flex-col h-full">
      {/* Drawer Title Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-xl">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-bold text-slate-900 dark:text-white text-base">
              Extracted Components ({EXTRACTED_COMPONENTS.length})
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Interactive design tokens &amp; layer hierarchy
            </p>
          </div>
        </div>
      </div>

      {/* Search & Category Filter Pills */}
      <div className="py-3 space-y-2.5">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search component..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                categoryFilter === cat
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Components List */}
      <div className="flex-1 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
        {filteredComponents.map((comp) => {
          const isSelected = selectedComponentId === comp.id;
          return (
            <div
              key={comp.id}
              onClick={() => onSelectComponent(comp)}
              className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between group ${
                isSelected
                  ? 'bg-amber-50 dark:bg-amber-950/30 border-amber-500 shadow-xs'
                  : 'bg-slate-50/70 dark:bg-slate-800/40 border-slate-200/80 dark:border-slate-800 hover:border-amber-400 hover:bg-slate-100/60 dark:hover:bg-slate-800'
              }`}
            >
              <div className="flex items-center gap-3">
                {/* Color Swatch */}
                <div className="flex -space-x-1.5">
                  {comp.colors.slice(0, 3).map((col, i) => (
                    <span
                      key={i}
                      className="w-5 h-5 rounded-full border border-white dark:border-slate-900 shadow-xs"
                      style={{ backgroundColor: col }}
                    />
                  ))}
                </div>

                <div>
                  <h4 className="font-semibold text-xs text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {comp.name}
                  </h4>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[10px] text-amber-700 dark:text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded font-mono">
                      {comp.category}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      z-{comp.zIndex}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1 text-slate-400 group-hover:text-amber-500 transition-colors">
                <Eye className="w-4 h-4" />
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          );
        })}

        {filteredComponents.length === 0 && (
          <div className="text-center py-8 text-slate-400 text-xs">
            No extracted components matching filter.
          </div>
        )}
      </div>
    </div>
  );
};
