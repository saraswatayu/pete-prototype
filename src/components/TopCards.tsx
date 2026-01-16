import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface CardData {
  id: string
  label: string
  title: string
  shortcut: string
  variant: 'blue' | 'white' | 'red' | 'cta'
  content: {
    dateRange: string
    description: string
    highlights: { label: string; icon: string }[]
    actions: { label: string; icon?: string }[]
  }
}

const cards: CardData[] = [
  {
    id: 'sva',
    label: 'IXD PROFESSOR AT',
    title: 'SCHOOL OF VISUAL ARTS',
    shortcut: '⌘ 1',
    variant: 'blue',
    content: {
      dateRange: '2020→Present',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      highlights: [
        { label: "SVA'26", icon: 'SVA' },
        { label: "SVA'25", icon: '🎨' },
        { label: "SVA'24", icon: '🔥' },
        { label: "SVA'23", icon: '✨' },
      ],
      actions: [
        { label: 'GO TO CANVAS LMS', icon: '🎯' },
        { label: 'ABOUT THIS COURSE', icon: '▶' },
      ],
    },
  },
  {
    id: 'figma',
    label: 'PRODUCT DESIGNER AT',
    title: 'FIGMA',
    shortcut: '⌘ 2',
    variant: 'white',
    content: {
      dateRange: '2025→Present',
      description: 'Designing the future of collaborative design tools. Building features that empower millions of designers and teams worldwide.',
      highlights: [
        { label: 'FIGMA I', icon: '🎨' },
      ],
      actions: [
        { label: 'VIEW FIGMA PROFILE', icon: '▶' },
      ],
    },
  },
  {
    id: 'rio',
    label: 'JUNIOR DAD TO',
    title: 'RIO RUI RODRIGUEZ',
    shortcut: '⌘ 3',
    variant: 'red',
    content: {
      dateRange: '2021→Present',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      highlights: [
        { label: 'Year 3', icon: '🎂' },
        { label: 'Year 2', icon: '🎈' },
        { label: 'Year 1', icon: '👶' },
      ],
      actions: [
        { label: 'VIEW GALLERY', icon: '▶' },
      ],
    },
  },
  {
    id: 'cta',
    label: 'ADD NEW TITLE',
    title: 'REQUEST A CHAT',
    shortcut: 'R',
    variant: 'cta',
    content: {
      dateRange: '',
      description: 'Want to collaborate? Let\'s connect and discuss how we can work together on your next project.',
      highlights: [],
      actions: [
        { label: 'SCHEDULE A CALL', icon: '📅' },
        { label: 'SEND AN EMAIL', icon: '✉️' },
      ],
    },
  },
]

const variantStyles = {
  blue: {
    bg: 'bg-[#2563eb]',
    text: 'text-white',
    border: 'border-[#1e40af]',
    shortcutBg: 'bg-black/30 border-white/20',
  },
  white: {
    bg: 'bg-[#1a1a2e]',
    text: 'text-white',
    border: 'border-gray-700',
    shortcutBg: 'bg-white/20 border-white/20',
  },
  red: {
    bg: 'bg-[#ef4444]',
    text: 'text-white',
    border: 'border-[#b91c1c]',
    shortcutBg: 'bg-black/30 border-white/20',
  },
  cta: {
    bg: 'bg-white',
    text: 'text-gray-900',
    border: 'border-gray-300',
    shortcutBg: 'bg-gray-100 border-gray-300',
  },
}

const collapsedVariantStyles = {
  blue: 'bg-[#2563eb] text-white border-2 border-[#1e40af]',
  white: 'bg-white text-gray-900 border-2 border-gray-300',
  red: 'bg-[#ef4444] text-white border-2 border-[#b91c1c]',
  cta: 'bg-white text-gray-900 border-2 border-gray-300',
}

const shortcutStyles = {
  blue: 'bg-black/30 text-white border border-white/20',
  white: 'bg-gray-100 text-gray-600 border border-gray-300',
  red: 'bg-black/30 text-white border border-white/20',
  cta: 'bg-gray-100 text-gray-600 border border-gray-300',
}

function ExpandedCard({ card, onClose }: { card: CardData; onClose: () => void }) {
  const styles = variantStyles[card.variant]
  const bgColor = card.variant === 'white' ? '#1a1a2e' :
                  card.variant === 'blue' ? '#2563eb' :
                  card.variant === 'red' ? '#ef4444' : '#1a1a2e'

  return (
    <motion.div
      layoutId={`card-${card.id}`}
      className={`relative flex flex-col rounded-2xl overflow-hidden shadow-2xl ${styles.text}`}
      style={{
        backgroundColor: bgColor,
        width: '340px',
        height: '580px',
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 35,
      }}
    >
      {/* Header */}
      <div className="p-5 pb-3">
        <div className="flex justify-between items-start mb-3">
          <span className="text-[10px] font-mono uppercase tracking-widest opacity-80">
            {card.label}
          </span>
          <button
            onClick={onClose}
            className="text-[10px] font-mono px-2 py-1 rounded bg-white/20 hover:bg-white/30 transition-colors"
          >
            ESC
          </button>
        </div>

        <h2 className="text-2xl font-black tracking-tight mb-3">
          {card.title}
        </h2>

        {card.content.dateRange && (
          <p className="text-sm font-mono opacity-80 mb-3">
            {card.content.dateRange}
          </p>
        )}

        <p className="text-sm leading-relaxed opacity-80">
          {card.content.description}
        </p>
      </div>

      {/* Highlights */}
      {card.content.highlights.length > 0 && (
        <div className="px-5 py-4 flex-1">
          <p className="text-[10px] font-mono uppercase tracking-widest opacity-60 mb-4">
            HIGHLIGHTS ON IG STORIES
          </p>
          <div className="flex gap-3">
            {card.content.highlights.map((highlight, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-full border-2 border-white/30 flex items-center justify-center bg-white/10">
                  <span className="text-lg">{highlight.icon}</span>
                </div>
                <span className="text-[9px] font-mono opacity-60">
                  {highlight.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="p-5 pt-3 mt-auto space-y-2">
        {card.content.actions.map((action, i) => (
          <button
            key={i}
            className={`w-full py-3 px-5 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-3 transition-all
              ${i === 0
                ? 'bg-white text-gray-900 hover:bg-gray-100'
                : 'bg-white/20 hover:bg-white/30'
              }`}
          >
            {action.icon && <span>{action.icon}</span>}
            {action.label}
          </button>
        ))}
      </div>
    </motion.div>
  )
}

function CollapsedCard({ card, onClick }: { card: CardData; onClick: () => void }) {
  return (
    <motion.button
      layoutId={`card-${card.id}`}
      onClick={onClick}
      className={`
        relative flex flex-col items-start justify-between
        px-6 py-5 rounded-xl w-[300px] h-[85px]
        shadow-lg
        ${collapsedVariantStyles[card.variant]}
      `}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 35,
      }}
    >
      <span className="text-[10px] font-mono uppercase tracking-widest opacity-90">
        {card.label}
      </span>
      <span className="text-[15px] font-bold tracking-tight">
        {card.variant === 'cta' ? (
          <span className="flex items-center gap-3">
            <span className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center text-gray-500">
              <span className="text-lg leading-none">+</span>
            </span>
            {card.title}
          </span>
        ) : (
          card.title
        )}
      </span>
      <span
        className={`
          absolute top-3 right-3 text-[10px] font-mono px-2 py-1 rounded
          ${shortcutStyles[card.variant]}
        `}
      >
        {card.shortcut}
      </span>
    </motion.button>
  )
}

export function TopCards() {
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set())

  const toggleCard = (cardId: string) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev)
      if (newSet.has(cardId)) {
        newSet.delete(cardId)
      } else {
        newSet.add(cardId)
      }
      return newSet
    })
  }

  const closeCard = (cardId: string) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev)
      newSet.delete(cardId)
      return newSet
    })
  }

  // Handle ESC key to close all expanded cards
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && expandedCards.size > 0) {
        setExpandedCards(new Set())
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [expandedCards])

  return (
    <div
      className="flex gap-4 flex-wrap justify-center items-start"
      style={{ margin: '24px', marginTop: '28px' }}
    >
      <AnimatePresence mode="popLayout">
        {cards.map((card) => (
          expandedCards.has(card.id) ? (
            <ExpandedCard
              key={card.id}
              card={card}
              onClose={() => closeCard(card.id)}
            />
          ) : (
            <CollapsedCard
              key={card.id}
              card={card}
              onClick={() => toggleCard(card.id)}
            />
          )
        ))}
      </AnimatePresence>
    </div>
  )
}
