import React, { useState, useRef, useEffect } from 'react';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from '@chatscope/chat-ui-kit-react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import OpenAI from 'openai';

interface Message {
  message: string;
  sentTime: string;
  sender: string;
  direction: 'incoming' | 'outgoing';
}

const API_KEY_PLACEHOLDER = 'your_actual_api_key_here';

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      message: 'नमस्ते! मैं तत्सम सोसाइटी का AI सहायक हूं। मैं आपकी कैसे मदद कर सकता हूं?',
      sentTime: 'just now',
      sender: 'ChatGPT',
      direction: 'incoming',
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isApiConfigured, setIsApiConfigured] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if API key is properly configured
    const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
    if (!apiKey || apiKey === API_KEY_PLACEHOLDER) {
      setIsApiConfigured(false);
      setMessages([
        {
          message: 'चैटबॉट वर्तमान में कॉन्फ़िगर नहीं है। कृपया व्यवस्थापक से संपर्क करें।',
          sentTime: 'just now',
          sender: 'ChatGPT',
          direction: 'incoming',
        },
      ]);
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (message: string) => {
    if (!isApiConfigured) {
      return;
    }

    const newMessage: Message = {
      message,
      sentTime: 'just now',
      sender: 'user',
      direction: 'outgoing',
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setIsTyping(true);

    try {
      const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
      
      if (!apiKey || apiKey === API_KEY_PLACEHOLDER) {
        throw new Error('API key not configured');
      }

      const openai = new OpenAI({
        apiKey,
        dangerouslyAllowBrowser: true,
      });

      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful assistant for Tatsam Society, the Hindi Society of NSUT. You can answer questions about the society, its events, and help with general inquiries. You can respond in both Hindi and English.',
          },
          {
            role: 'user',
            content: message,
          },
        ],
      });

      const botResponse = response.choices[0].message.content;

      const botMessage: Message = {
        message: botResponse || 'I apologize, but I am unable to process your request at the moment.',
        sentTime: 'just now',
        sender: 'ChatGPT',
        direction: 'incoming',
      };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        message: 'I apologize, but the chatbot is currently unavailable. Please try again later or contact the society directly.',
        sentTime: 'just now',
        sender: 'ChatGPT',
        direction: 'incoming',
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }

    setIsTyping(false);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50 dark:bg-blue-500 dark:hover:bg-blue-600"
        title="Open Chat"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 w-80 h-[500px] z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
        <div className="bg-blue-600 dark:bg-blue-500 text-white p-4 flex justify-between items-center">
          <h3 className="font-semibold">तत्सम सहायक</h3>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-gray-200"
            title="Close Chat"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <MainContainer>
          <ChatContainer>
            <MessageList
              scrollBehavior="smooth"
              typingIndicator={isTyping ? <TypingIndicator content="ChatGPT is typing" /> : null}
            >
              {messages.map((message, i) => (
                <Message
                  key={i}
                  model={{
                    message: message.message,
                    sentTime: message.sentTime,
                    sender: message.sender,
                    direction: message.direction,
                    position: 'single',
                  }}
                />
              ))}
              <div ref={messagesEndRef} />
            </MessageList>
            <MessageInput
              placeholder={isApiConfigured ? "Type your message here..." : "Chat is currently unavailable"}
              onSend={handleSend}
              attachButton={false}
              disabled={!isApiConfigured}
            />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
};

export default ChatBot; 