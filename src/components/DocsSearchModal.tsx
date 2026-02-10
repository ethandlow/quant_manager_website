"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import docsSearchIndex, { SearchPage } from "@/data/docsSearchIndex";

interface SearchResult {
  page: SearchPage;
  /** If the match is inside a step, which step */
  stepId?: string;
  stepTitle?: string;
  /** Short snippet from the matching body */
  snippet?: string;
}

function highlightMatches(text: string, words: string[]): React.ReactNode[] {
  if (words.length === 0) return [text];

  // Build a single regex matching any of the query words
  const escaped = words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const regex = new RegExp(`(${escaped.join("|")})`, "gi");

  const parts = text.split(regex);
  return parts.map((part, i) => {
    const isMatch = words.some((w) => part.toLowerCase() === w.toLowerCase());
    if (isMatch) {
      return (
        <span
          key={i}
          className="bg-[#6b7bff]/20 text-[#eef2f7] rounded px-0.5"
        >
          {part}
        </span>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

function extractSnippet(body: string, words: string[], maxLen = 120): string {
  const lower = body.toLowerCase();
  // Find the first match position
  let earliest = body.length;
  for (const w of words) {
    const idx = lower.indexOf(w.toLowerCase());
    if (idx !== -1 && idx < earliest) earliest = idx;
  }
  const start = Math.max(0, earliest - 30);
  const end = Math.min(body.length, start + maxLen);
  let snippet = body.slice(start, end).replace(/\n/g, " ");
  if (start > 0) snippet = "..." + snippet;
  if (end < body.length) snippet = snippet + "...";
  return snippet;
}

interface DocsSearchModalProps {
  open: boolean;
  onClose: () => void;
}

export default function DocsSearchModal({
  open,
  onClose,
}: DocsSearchModalProps) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [selectedIdx, setSelectedIdx] = useState(0);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Focus the input when modal opens
  useEffect(() => {
    if (open) {
      setQuery("");
      setSelectedIdx(0);
      // Small timeout to wait for animation
      const t = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  const results = useMemo<SearchResult[]>(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    const words = q.split(/\s+/).filter(Boolean);
    if (words.length === 0) return [];

    const matches: SearchResult[] = [];

    for (const page of docsSearchIndex) {
      // Check if all words match somewhere in the page (title, description, or any step)
      const allText = [
        page.title,
        page.description,
        ...page.steps.map((s) => s.title + " " + s.body),
      ]
        .join(" ")
        .toLowerCase();

      const allWordsMatch = words.every((w) => allText.includes(w));
      if (!allWordsMatch) continue;

      // Determine if match is in page title/description or a specific step
      const pageLevelText = (
        page.title +
        " " +
        page.description
      ).toLowerCase();
      const pageLevelMatch = words.every((w) => pageLevelText.includes(w));

      if (pageLevelMatch) {
        matches.push({ page });
      } else {
        // Find the first matching step
        for (const step of page.steps) {
          const stepText = (
            step.title +
            " " +
            step.body
          ).toLowerCase();
          if (words.every((w) => stepText.includes(w) || pageLevelText.includes(w))) {
            matches.push({
              page,
              stepId: step.id,
              stepTitle: step.title,
              snippet: extractSnippet(step.body, words),
            });
            break;
          }
        }
        // If no single step matched all words, still show the page
        if (!matches.find((m) => m.page.href === page.href)) {
          matches.push({ page });
        }
      }

      if (matches.length >= 8) break;
    }

    return matches;
  }, [query]);

  // Reset selected index when results change
  useEffect(() => {
    setSelectedIdx(0);
  }, [results]);

  const navigate = useCallback(
    (result: SearchResult) => {
      const url = result.stepId
        ? `${result.page.href}#${result.stepId}`
        : result.page.href;
      router.push(url);
      onClose();
    },
    [router, onClose]
  );

  // Keyboard navigation
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIdx((prev) => Math.min(prev + 1, results.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIdx((prev) => Math.max(prev - 1, 0));
      } else if (e.key === "Enter" && results[selectedIdx]) {
        e.preventDefault();
        navigate(results[selectedIdx]);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, results, selectedIdx, navigate]);

  // Scroll selected result into view
  useEffect(() => {
    if (!resultsRef.current) return;
    const el = resultsRef.current.children[selectedIdx] as HTMLElement;
    if (el) el.scrollIntoView({ block: "nearest" });
  }, [selectedIdx]);

  const words = query
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="mt-[18vh] w-full max-w-xl mx-4"
          >
            {/* Search input */}
            <div className="relative">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#9ba6b3]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M7 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM14 14l-3.5-3.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search docs..."
                className="w-full rounded-xl border border-white/[0.1] bg-[#0f141c] py-3.5 pl-11 pr-20 text-sm text-[#eef2f7] placeholder:text-[#9ba6b3]/60 focus:border-[#6b7bff]/50 focus:outline-none focus:ring-1 focus:ring-[#6b7bff]/30"
                aria-label="Search documentation"
              />
              <button
                type="button"
                onClick={onClose}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md border border-white/[0.1] bg-white/[0.05] px-2 py-1 text-xs text-[#9ba6b3] hover:text-[#eef2f7] hover:bg-white/[0.08] transition-colors"
              >
                Esc
              </button>
            </div>

            {/* Results dropdown */}
            {query.trim() && (
              <div className="mt-2 rounded-xl border border-white/[0.08] bg-[#0f141c] overflow-hidden shadow-2xl">
                {results.length === 0 ? (
                  <div className="px-4 py-6 text-center text-sm text-[#9ba6b3]">
                    No results for &ldquo;{query.trim()}&rdquo;
                  </div>
                ) : (
                  <div
                    ref={resultsRef}
                    className="max-h-[40vh] overflow-y-auto"
                  >
                    {results.map((result, i) => (
                      <button
                        key={result.page.href + (result.stepId ?? "")}
                        type="button"
                        onClick={() => navigate(result)}
                        onMouseEnter={() => setSelectedIdx(i)}
                        className={`w-full text-left px-4 py-3 transition-colors ${
                          i === selectedIdx
                            ? "bg-[#6b7bff]/[0.08]"
                            : "hover:bg-white/[0.03]"
                        } ${i > 0 ? "border-t border-white/[0.04]" : ""}`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-[#eef2f7]">
                            {highlightMatches(result.page.title, words)}
                          </span>
                          <span className="shrink-0 rounded-full bg-white/[0.06] px-2 py-0.5 text-[10px] uppercase tracking-wider text-[#9ba6b3]">
                            {result.page.category}
                          </span>
                        </div>
                        {result.stepTitle && (
                          <div className="mt-1">
                            <span className="text-xs font-medium text-[#6b7bff]/80">
                              {highlightMatches(result.stepTitle, words)}
                            </span>
                            {result.snippet && (
                              <p className="mt-0.5 text-xs text-[#9ba6b3] line-clamp-2 leading-relaxed">
                                {highlightMatches(result.snippet, words)}
                              </p>
                            )}
                          </div>
                        )}
                        {!result.stepTitle && (
                          <p className="mt-0.5 text-xs text-[#9ba6b3] line-clamp-1">
                            {highlightMatches(result.page.description, words)}
                          </p>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
