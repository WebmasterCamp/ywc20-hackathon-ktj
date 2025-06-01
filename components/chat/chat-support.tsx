"use client"

import { useState } from 'react'
import { MessageSquare, X, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'

type Message = {
  id: number
  text: string
  sender: 'user' | 'system'
  timestamp: Date
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Hi there! How can I help you with tool rentals today?",
    sender: "system",
    timestamp: new Date()
  }
]

export default function ChatSupport() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Add user message
      const userMessage: Message = {
        id: messages.length + 1,
        text: newMessage,
        sender: 'user',
        timestamp: new Date()
      }
      
      setMessages([...messages, userMessage])
      setNewMessage("")
      
      // Simulate response after a short delay
      setTimeout(() => {
        const systemResponse: Message = {
          id: messages.length + 2,
          text: "Thanks for your message! Our team will get back to you shortly. In the meantime, is there anything else I can help you with?",
          sender: 'system',
          timestamp: new Date()
        }
        setMessages(prev => [...prev, systemResponse])
      }, 1000)
    }
  }

  return (
    <>
      {/* Chat toggle button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 rounded-full h-14 w-14 shadow-lg"
        size="icon"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </Button>
      
      {/* Chat window */}
      <div 
        className={cn(
          "fixed bottom-20 right-4 w-80 sm:w-96 bg-background border rounded-lg shadow-xl z-50 transition-all duration-300 ease-in-out transform",
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
        )}
      >
        {/* Chat header */}
        <div className="px-4 py-3 border-b flex items-center justify-between">
          <h3 className="font-semibold">Chat Support</h3>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
            <X size={18} />
          </Button>
        </div>
        
        {/* Messages */}
        <ScrollArea className="h-80 p-4">
          <div className="flex flex-col gap-3">
            {messages.map((msg) => (
              <div 
                key={msg.id}
                className={cn(
                  "max-w-[80%] rounded-lg p-3 break-words",
                  msg.sender === 'user' 
                    ? "bg-primary text-primary-foreground ml-auto" 
                    : "bg-muted"
                )}
              >
                <p className="text-sm">{msg.text}</p>
                <p className="text-xs opacity-70 mt-1">
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            ))}
          </div>
        </ScrollArea>
        
        {/* Message input */}
        <div className="p-3 border-t flex gap-2">
          <Textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="resize-none min-h-[40px]"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                handleSendMessage()
              }
            }}
          />
          <Button size="icon" onClick={handleSendMessage} disabled={!newMessage.trim()}>
            <Send size={18} />
          </Button>
        </div>
      </div>
    </>
  )
}