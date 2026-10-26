"use client"

import dynamic from "next/dynamic"
import { useState } from "react"
import { Sparkles } from "lucide-react"

/**
 * Loaded on first interaction so the chat UI never lands in the first-paint bundle.
 * The panel stays mounted afterwards (`mounted` never resets) to keep chat history
 * when the visitor closes and reopens it.
 */
const Concierge = dynamic(
  () => import("./concierge").then((mod) => mod.Concierge),
  {
    ssr: false,
    loading: () => (
      <div
        aria-hidden
        className="fixed inset-x-3 bottom-3 z-[45] flex h-[min(82svh,660px)] items-center justify-center rounded-[1.75rem] border border-border/70 bg-background shadow-[0_30px_90px_-30px_rgba(31,28,26,0.55)] sm:inset-x-auto sm:bottom-6 sm:right-6 sm:w-[402px]"
      >
        <span className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
          Opening the studio…
        </span>
      </div>
    ),
  },
)

export function ConciergeLauncher() {
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => {
            setMounted(true)
            setOpen(true)
          }}
          className="group fixed bottom-5 right-5 z-[45] flex items-center gap-2.5 rounded-full bg-[#1f1c1a] px-4 py-3.5 text-[#f7f4ef] shadow-[0_18px_40px_-18px_rgba(31,28,26,0.8)] transition hover:bg-[#2e2926] sm:bottom-6 sm:right-6 sm:px-5"
          aria-label="Ask the Hira Mani studio concierge"
          aria-haspopup="dialog"
          aria-controls="studio-concierge"
        >
          <Sparkles className="h-4 w-4 text-[#c9c09a]" />
          <span className="hidden text-[12px] uppercase tracking-[0.18em] sm:inline">
            Ask the studio
          </span>
        </button>
      )}

      {mounted && <Concierge open={open} onClose={() => setOpen(false)} />}
    </>
  )
}
