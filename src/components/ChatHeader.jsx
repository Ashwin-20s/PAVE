import { useState } from 'react'
import { ArrowLeft, MoreVertical, RotateCcw } from 'lucide-react'
import { BUSINESS } from '../data/businessData'

const HEADER_BG = '#241A12'
const GOLD = '#C9A24B'

export default function ChatHeader({ onRestart }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)

  return (
    <div
      className="flex items-center justify-between px-3 py-2.5 shrink-0 relative"
      style={{ backgroundColor: HEADER_BG, paddingTop: 'max(10px, env(safe-area-inset-top))' }}
    >
      <div className="flex items-center gap-2.5 min-w-0">
        {/* Decorative back chevron, matches a real chat app's header shape */}
        <ArrowLeft size={19} color="rgba(255,255,255,0.55)" style={{ flexShrink: 0 }} />

        <div
          className="rounded-full overflow-hidden shrink-0"
          style={{ width: 38, height: 38, border: `1.5px solid ${GOLD}` }}
        >
          {!logoError ? (
            <img
              src={BUSINESS.logo}
              alt={BUSINESS.businessName}
              onError={() => setLogoError(true)}
              className="w-full h-full object-cover"
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center text-xs font-semibold"
              style={{ backgroundColor: '#2E2620', color: GOLD }}
            >
              {BUSINESS.businessName
                .split(' ')
                .map((w) => w[0])
                .slice(0, 2)
                .join('')}
            </div>
          )}
        </div>

        <div className="min-w-0">
          <div className="text-white font-semibold text-sm truncate">{BUSINESS.businessName}</div>
          <div className="text-xs truncate" style={{ color: 'rgba(255,255,255,0.65)' }}>
            {BUSINESS.tagline}
          </div>
          <div className="flex items-center gap-1">
            <span
              className="rounded-full inline-block"
              style={{ width: 5, height: 5, backgroundColor: '#4ADE80' }}
            />
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.65)' }}>Online</span>
          </div>
        </div>
      </div>

      <button
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="More options"
        className="rounded-full p-2 transition hover:bg-white/10 active:scale-90 shrink-0"
        style={{ background: 'transparent', border: 'none' }}
      >
        <MoreVertical size={19} color="rgba(255,255,255,0.85)" />
      </button>

      {menuOpen && (
        <>
          <div
            className="fixed inset-0"
            style={{ zIndex: 20 }}
            onClick={() => setMenuOpen(false)}
          />
          <div
            className="absolute flex items-center gap-2 text-sm font-medium"
            style={{
              top: 46,
              right: 8,
              zIndex: 21,
              backgroundColor: '#FFFFFF',
              borderRadius: 10,
              padding: '9px 14px',
              boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
              cursor: 'pointer',
              color: '#3B2F22',
            }}
            onClick={() => {
              onRestart()
              setMenuOpen(false)
            }}
          >
            <RotateCcw size={15} />
            <span>Restart Demo</span>
          </div>
        </>
      )}
    </div>
  )
}
