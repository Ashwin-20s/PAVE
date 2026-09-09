import { Send, Smile } from 'lucide-react'

export default function ChatInput({ value, onChange, onSend, disabled }) {
  return (
    <div
      className="flex items-center gap-2 px-3 shrink-0"
      style={{
        backgroundColor: '#F1ECE2',
        borderTop: '1px solid #E3DCCC',
        paddingTop: 10,
        paddingBottom: 'max(10px, env(safe-area-inset-bottom))',
      }}
    >
      <Smile size={20} color="#A8925F" style={{ flexShrink: 0 }} />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault()
            onSend()
          }
        }}
        placeholder="Type a message..."
        className="flex-1 text-sm rounded-full min-w-0"
        style={{ padding: '9px 16px', border: '1px solid transparent', outline: 'none', backgroundColor: '#FFFFFF' }}
      />
      <button
        onClick={onSend}
        disabled={disabled}
        className="rounded-full transition active:scale-90 shrink-0"
        style={{
          padding: 10,
          backgroundColor: '#241A12',
          border: 'none',
          cursor: disabled ? 'default' : 'pointer',
          opacity: disabled ? 0.6 : 1,
          display: 'flex',
        }}
      >
        <Send size={17} color="#C9A24B" />
      </button>
    </div>
  )
}
