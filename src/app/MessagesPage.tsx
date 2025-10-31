import React, { useEffect, useRef, useState } from 'react';

type Chat = {
  id: number;
  name: string;
  handle?: string;
  lastMessage?: string;
  avatarColor?: string;
};

type Message = {
  id: string;
  text: string;
  isOwn: boolean;
  createdAt: number;
};

const now = () => Date.now();

function MessagesPage() {
  const [chats] = useState<Chat[]>([
    { id: 1, name: 'Alex Morgan', handle: '@alex', lastMessage: 'See you later!', avatarColor: 'bg-red-300' },
    { id: 2, name: 'Sam Lee', handle: '@sam', lastMessage: 'Thanks!', avatarColor: 'bg-green-300' },
    { id: 3, name: 'Product Team', handle: '@team', lastMessage: 'Sprint retro notes', avatarColor: 'bg-blue-300' },
  ]);

  const [messagesMap, setMessagesMap] = useState<Record<number, Message[]>>({
    1: [
      { id: 'm1', text: 'Hey Alex 👋', isOwn: true, createdAt: now() - 1000 * 60 * 60 },
      { id: 'm2', text: 'Hey! Want to grab coffee later?', isOwn: false, createdAt: now() - 1000 * 60 * 50 },
    ],
    2: [
      { id: 'm3', text: 'Can you review the PR?', isOwn: false, createdAt: now() - 1000 * 60 * 120 },
    ],
    3: [
      { id: 'm4', text: 'Retro at 3pm today', isOwn: false, createdAt: now() - 1000 * 60 * 20 },
    ],
  });

  const [selectedChatId, setSelectedChatId] = useState<number | null>(chats[0]?.id ?? null);
  const [inputValue, setInputValue] = useState('');
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // auto-scroll to bottom when selected chat or messages change
    const el = listRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [selectedChatId, messagesMap, inputValue]);

  const sendMessage = () => {
    if (!selectedChatId || !inputValue.trim()) return;
    const newMsg: Message = {
      id: `m-${Date.now()}`,
      text: inputValue.trim(),
      isOwn: true,
      createdAt: now(),
    };
    setMessagesMap(prev => {
      const prevList = prev[selectedChatId] ?? [];
      return { ...prev, [selectedChatId]: [...prevList, newMsg] };
    });
    setInputValue('');
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (ts: number) => {
    const d = new Date(ts);
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="flex w-full h-screen bg-white text-gray-800">
      {/* Sidebar */}
      <aside className="w-72 border-r border-gray-200 p-4 flex flex-col bg-white">
        <div className="mb-4">
          <h1 className="text-lg font-semibold">Messages</h1>
          <p className="text-sm text-gray-500">All conversations</p>
        </div>

        <div className="flex-1 overflow-auto">
          {chats.map(chat => (
            <button
              key={chat.id}
              onClick={() => setSelectedChatId(chat.id)}
              className={`w-full text-left flex items-center gap-3 p-3 rounded-lg mb-1 hover:bg-gray-50 focus:outline-none 
                ${selectedChatId === chat.id ? 'bg-gray-50' : ''}`}
            >
              <div className={`h-10 w-10 rounded-full flex items-center justify-center text-white font-medium ${chat.avatarColor || 'bg-gray-300'}`}>
                {chat.name.split(' ').map(n => n[0]).slice(0,2).join('')}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center">
                  <span className="font-medium truncate">{chat.name}</span>
                  <span className="text-xs text-gray-400">{/* time placeholder */}</span>
                </div>
                <div className="text-sm text-gray-500 truncate">{chat.lastMessage}</div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-4">
          <button className="w-full py-2 px-3 bg-white border border-gray-200 rounded-md text-sm hover:bg-gray-50">
            New Message
          </button>
        </div>
      </aside>

      {/* Conversation */}
      <main className="flex-1 flex flex-col">
        {selectedChatId ? (
          <>
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-200 p-4 bg-white">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium">
                  {chats.find(c => c.id === selectedChatId)?.name.split(' ').map(n => n[0]).slice(0,2).join('')}
                </div>
                <div>
                  <div className="font-medium">
                    {chats.find(c => c.id === selectedChatId)?.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {chats.find(c => c.id === selectedChatId)?.handle}
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-500">Active</div>
            </div>

            {/* Messages list */}
            <div ref={listRef} className="flex-1 overflow-auto p-4 space-y-3 bg-white">
              {(messagesMap[selectedChatId] ?? []).length === 0 ? (
                <div className="text-center text-gray-400 py-20">No messages yet. Say hello 👋</div>
              ) : (
                (messagesMap[selectedChatId] ?? []).map(msg => (
                  <div
                    key={msg.id}
                    className={`flex items-end ${msg.isOwn ? 'justify-end' : 'justify-start'}`}
                  >
                    {!msg.isOwn && (
                      <div className="mr-2 h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-700">
                        {chats.find(c => c.id === selectedChatId)?.name.split(' ').map(n => n[0]).slice(0,2).join('')}
                      </div>
                    )}

                    <div className={`max-w-[70%] break-words px-4 py-2 rounded-2xl text-sm ${msg.isOwn ? 'bg-blue-50 text-gray-900' : 'bg-gray-100 text-gray-900'}`}>
                      <div>{msg.text}</div>
                      <div className="text-[11px] text-gray-400 mt-1 text-right">{formatTime(msg.createdAt)}</div>
                    </div>

                    {msg.isOwn && (
                      <div className="ml-2 h-8 w-8 rounded-full bg-transparent" />
                    )}
                  </div>
                ))
              )}
            </div>

            {/* Input */}
            <div className="border-t border-gray-200 p-4 bg-white">
              <div className="flex gap-3">
                <input
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Write a message..."
                  className="flex-1 px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-200"
                />
                <button
                  onClick={sendMessage}
                  className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
                >
                  Send
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-gray-500">Select a conversation to start</div>
          </div>
        )}
      </main>
    </div>
  );
}

export default MessagesPage;