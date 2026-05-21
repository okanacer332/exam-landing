import { useEffect, useRef, useState } from "react";
import { FileText, Search, X } from "lucide-react";
import type { Locale } from "../../i18n";
import { getDocContent } from "./docsMdLoader";
import { getAllDocItems, type DocItem } from "./docsNav";

interface DocsSearchModalProps {
  isOpen: boolean;
  locale: Locale;
  onClose: () => void;
}

interface SearchResult {
  item: DocItem & { section: string };
  matchType: "title" | "content";
  snippet?: string;
}

export function DocsSearchModal({ isOpen, locale, onClose }: DocsSearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const rootPath = locale === "en" ? "/en/docs" : "/dokuman";

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery("");
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
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
    getAllDocItems(locale).forEach((item) => {
      if (item.title.toLowerCase().includes(lowerQuery)) {
        newResults.push({ item, matchType: "title" });
        return;
      }
      const content = getDocContent(item.slug, locale).toLowerCase();
      const matchIndex = content.indexOf(lowerQuery);
      if (matchIndex !== -1) {
        const start = Math.max(0, matchIndex - 30);
        const end = Math.min(content.length, matchIndex + 70);
        let snippet = content.substring(start, end).replace(/\n/g, " ");
        if (start > 0) snippet = `...${snippet}`;
        if (end < content.length) snippet = `${snippet}...`;
        newResults.push({ item, matchType: "content", snippet });
      }
    });

    setResults(newResults);
  }, [locale, query]);

  if (!isOpen) return null;

  return (
    <div className="docs-search-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="docs-search-modal" onClick={(e) => e.stopPropagation()}>
        <div className="docs-search-header">
          <Search size={20} className="docs-search-icon-input" />
          <input
            ref={inputRef}
            className="docs-search-input"
            placeholder={locale === "en" ? "Search documentation..." : "Dokümantasyonda ara..."}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="button" className="docs-search-close" onClick={onClose} aria-label={locale === "en" ? "Close" : "Kapat"}>
            <X size={20} />
          </button>
        </div>

        <div className="docs-search-results">
          {query.trim() && results.length === 0 ? (
            <div className="docs-search-empty">
              {locale === "en" ? "No results for" : "Sonuç bulunamadı"}: <strong>{query}</strong>
            </div>
          ) : (
            results.map((res, i) => (
              <a key={res.item.slug + i} href={`${rootPath}/${res.item.slug}`} className="docs-search-result-item">
                <FileText size={18} className="docs-search-result-icon" />
                <div className="docs-search-result-content">
                  <div className="docs-search-result-title">{res.item.title}</div>
                  <div className="docs-search-result-section">{res.item.section}</div>
                  {res.matchType === "content" && res.snippet && <div className="docs-search-result-snippet">{res.snippet}</div>}
                </div>
              </a>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
