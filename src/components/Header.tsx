import { Link } from '@tanstack/react-router'

import TanChatAIAssistant from './AIAssistant.tsx'

import { useState } from 'react'
import {
  Menu,
  MessagesSquare,
  X,
  Guitar
} from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="p-4 flex items-center bg-stone-800 text-white shadow-lg">
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 hover:bg-stone-700 rounded-lg transition-colors"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
        <h1 className="ml-4 text-xl font-semibold">
          <Link to="/demo/guitarchat" className="flex items-center gap-1">
            <Guitar className="text-green-500" size={20} /> Guitar Chat 
          </Link>
        </h1>
      </header>

      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-stone-900 text-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold">Navigation</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-stone-800 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto">
          <Link
            to="/demo/guitarchat"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-stone-800 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-green-600 hover:bg-green-700 transition-colors mb-2',
            }}
          >
            <MessagesSquare size={20} />
            <span className="font-medium">Chat</span>
          </Link>
          <Link
            to="/example/guitars"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-stone-800 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-green-600 hover:bg-green-700 transition-colors mb-2',
            }}
          >
            <Guitar size={20} />
            <span className="font-medium">Guitars</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-gray-700 bg-stone-800 flex flex-col gap-2">
          <TanChatAIAssistant />
        </div>
      </aside>
    </>
  )
}
