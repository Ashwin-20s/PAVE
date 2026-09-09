import { CheckCheck } from 'lucide-react'

export default function MessageBubble({ message }) {
  const isUser = message.sender === 'user'
  return (
    <div
      className="msg-in text-sm"
      style={{
        maxWidth: '84%',
        alignSelf: isUser ? 'flex-end' : 'flex-start',
        backgroundColor: isUser ? '#F3E9D2' : '#FFFFFF',
        borderRadius: 14,
        borderTopLeftRadius: isUser ? 14 : 4,
        borderTopRightRadius: isUser ? 4 : 14,
        padding: '9px 12px',
        boxShadow: '0 1px 2px rgba(0,0,0,0.06)',
        color: '#2A2420',
        whiteSpace: 'pre-line',
        lineHeight: 1.5,
        wordBreak: 'break-word',
      }}
    >
      {message.text}
      <div
        className="text-xs"
        style={{
          color: isUser ? '#A8925F' : '#9CA3AF',
          textAlign: 'right',
          marginTop: 4,
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: 3,
        }}
      >
        {message.time}
        {isUser && <CheckCheck size={13} color="#53BDEB" />}
      </div>
    </div>
  )
}
