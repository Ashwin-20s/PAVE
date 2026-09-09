import { BUSINESS } from '../data/businessData'

export default function TypingIndicator() {
  return (
    <div className="flex flex-col" style={{ alignItems: 'flex-start' }}>
      <div className="text-xs mb-1" style={{ color: '#9C9080', marginLeft: 2 }}>
        {BUSINESS.businessName} is typing…
      </div>
      <div
        className="msg-in flex items-center gap-1"
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 14,
          borderTopLeftRadius: 4,
          padding: '11px 16px',
          width: 'fit-content',
          boxShadow: '0 1px 2px rgba(0,0,0,0.06)',
        }}
      >
        <span className="typing-dot" style={{ animationDelay: '0ms' }} />
        <span className="typing-dot" style={{ animationDelay: '150ms' }} />
        <span className="typing-dot" style={{ animationDelay: '300ms' }} />
      </div>
    </div>
  )
}
