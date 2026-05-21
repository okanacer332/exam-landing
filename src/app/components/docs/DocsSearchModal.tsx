import { useState, useEffect, useRef } from "react";
import { Search, X, FileText } from "lucide-react";
import { allDocItems, DocItem } from "./docsNav";
import { getDocContent } from "./docsMdLoader";

interface DocsSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchResult {
  item: DocItem & { section: string };
  matchType: "title" | "content";
  snippet?: string;
}

export function DocsSearchModal({ isOpen, onClose }: DocsSearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery("");
      setResults([]);
    }
  }, [isOpen]);

  // Escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const newResults: SearchResult[] = [];

    allDocItems.forEach((item) => {
      // 1. Title match
      if (item.title.toLowerCase().includes(lowerQuery)) {
        newResults.push({ item, matchType: "title" });
        return;
      }

      // 2. Content match
      const content = getDocContent(item.slug).toLowerCase();
      const matchIndex = content.indexOf(lowerQuery);
      
      if (matchIndex !== -1) {
        // Extract snippet
        const start = Math.max(0, matchIndex - 30);
        const end = Math.min(content.length, matchIndex + 70);
        let snippet = content.substring(start, end).replace(/\n/g, " ");
        if (start > 0) snippet = "..." + snippet;
        if (end < content.length) snippet = snippet + "...";

        newResults.push({ item, matchType: "content", snippet });
      }
    });

    setResults(newResults);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="docs-search-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="docs-search-modal" onClick={(e) => e.stopPropagation()}>
        <div className="docs-search-header">
          <Search size={20} className="docs-search-icon-input" />
          <input
            ref={inputRef}
            className="docs-search-input"
            placeholder="Dokümantasyonda ara..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="button" className="docs-search-close" onClick={onClose} aria-label="Kapat">
            <X size={20} />
          </button>
        </div>

        <div className="docs-search-results">
          {query.trim() && results.length === 0 ? (
            <div className="docs-search-empty">
              Sonuç bulunamadı: <strong>{query}</strong>
            </div>
          ) : (
            results.map((res, i) => (
              <a
                key={res.item.slug + i}
                href={`/dokuman/${res.item.slug}`}
                className="docs-search-result-item"
              >
                <FileText size={18} className="docs-search-result-icon" />
                <div className="docs-search-result-content">
                  <div className="docs-search-result-title">{res.item.title}</div>
                  <div className="docs-search-result-section">{res.item.section}</div>
                  {res.matchType === "content" && res.snippet && (
                    <div className="docs-search-result-snippet">{res.snippet}</div>
                  )}
                </div>
              </a>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
