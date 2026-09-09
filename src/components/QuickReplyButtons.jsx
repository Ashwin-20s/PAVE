export default function QuickReplyButtons({ buttons, disabled, onPick }) {
  return (
    <div
      className="msg-in flex flex-col gap-1.5"
      style={{ maxWidth: '84%', width: '100%', marginTop: 6, alignSelf: 'flex-start' }}
    >
      {buttons.map((btn) => {
        const Icon = btn.icon
        return (
          <button
            key={btn.label}
            disabled={disabled}
            onClick={() => onPick(btn)}
            className="flex items-center gap-2 text-sm font-medium transition text-left"
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E7E1D5',
              borderRadius: 12,
              padding: '10px 12px',
              color: disabled ? '#B3AA9C' : '#3B2F22',
              opacity: disabled ? 0.55 : 1,
              cursor: disabled ? 'default' : 'pointer',
              boxShadow: '0 1px 1px rgba(0,0,0,0.03)',
              width: '100%',
            }}
          >
            <Icon size={15} color={disabled ? '#B3AA9C' : '#B8923F'} style={{ flexShrink: 0 }} />
            <span>{btn.label}</span>
          </button>
        )
      })}
    </div>
  )
}
