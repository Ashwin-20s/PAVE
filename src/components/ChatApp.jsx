import { useEffect, useRef, useState } from 'react'
import ChatHeader from './ChatHeader.jsx'
import MessageBubble from './MessageBubble.jsx'
import QuickReplyButtons from './QuickReplyButtons.jsx'
import TypingIndicator from './TypingIndicator.jsx'
import ChatInput from './ChatInput.jsx'
import BusinessPanel from './BusinessPanel.jsx'
import { NODES, FALLBACK_NODE } from '../data/chatbotFlow.js'

const nowTime = () =>
  new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

export default function ChatApp() {
  const idRef = useRef(2)
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: NODES.welcome.text, time: nowTime(), buttons: NODES.welcome.buttons },
  ])
  const [typing, setTyping] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [isDesktop, setIsDesktop] = useState(false)
  const scrollRef = useRef(null)

  // Mobile-first: full-screen chat under 640px, centered phone simulation above it.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 640px)')
    const update = () => setIsDesktop(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, typing])

  function pushUser(text) {
    setMessages((prev) => [...prev, { id: idRef.current++, sender: 'user', text, time: nowTime() }])
  }

  function pushBot(node) {
    setMessages((prev) => [
      ...prev,
      { id: idRef.current++, sender: 'bot', text: node.text, time: nowTime(), buttons: node.buttons },
    ])
  }

  function goTo(nodeId, label) {
    if (typing) return
    pushUser(label)
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      pushBot(NODES[nodeId])
    }, 600 + Math.random() * 300)
  }

  function handleQuickReply(btn) {
    goTo(btn.next, btn.label)
  }

  // No AI / no NLU: any free-typed message always falls back to the
  // "couldn't understand" reply plus the main menu.
  function handleSend() {
    if (typing) return
    const text = inputValue.trim()
    if (!text) return
    pushUser(text)
    setInputValue('')
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      pushBot(FALLBACK_NODE)
    }, 600)
  }

  function handleRestart() {
    setTyping(false)
    setInputValue('')
    setMessages([
      { id: idRef.current++, sender: 'bot', text: NODES.welcome.text, time: nowTime(), buttons: NODES.welcome.buttons },
    ])
  }

  const cardStyle = isDesktop
    ? {
        width: '100%',
        maxWidth: 420,
        height: '82vh',
        maxHeight: 760,
        borderRadius: 22,
        boxShadow: '0 24px 70px rgba(0,0,0,0.22)',
        overflow: 'hidden',
      }
    : {
        width: '100%',
        height: '100vh',
        // dvh accounts for mobile browser chrome; falls back to vh above
        minHeight: '100dvh',
        borderRadius: 0,
        boxShadow: 'none',
        overflow: 'hidden',
      }

  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{
        minHeight: '100dvh',
        width: '100%',
        background: isDesktop ? 'linear-gradient(135deg, #F6F3EC 0%, #ECE5D5 100%)' : '#FFFFFF',
        padding: isDesktop ? 24 : 0,
        boxSizing: 'border-box',
      }}
    >
      {isDesktop && <BusinessPanel />}
      <div className="flex flex-col" style={{ ...cardStyle, backgroundColor: '#FFFFFF' }}>
        <ChatHeader onRestart={handleRestart} />
        <div
          ref={scrollRef}
          className="flex-1 flex flex-col"
          style={{ backgroundColor: '#F7F4EC', padding: '14px 12px', overflowY: 'auto', gap: 2 }}
        >
          {messages.map((m, i) => {
            const isLast = i === messages.length - 1
            return (
              <div
                key={m.id}
                className="flex flex-col"
                style={{ alignItems: m.sender === 'user' ? 'flex-end' : 'flex-start', marginBottom: 10 }}
              >
                <MessageBubble message={m} />
                {m.sender === 'bot' && m.buttons && (
                  <QuickReplyButtons
                    buttons={m.buttons}
                    disabled={!isLast || typing}
                    onPick={handleQuickReply}
                  />
                )}
              </div>
            )
          })}
          {typing && <TypingIndicator />}
        </div>
        <ChatInput value={inputValue} onChange={setInputValue} onSend={handleSend} disabled={typing} />
      </div>
    </div>
  )
}
