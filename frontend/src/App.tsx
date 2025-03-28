import React from 'react';
import {
  Mail,
  Inbox,
  Send,
  Star,
  Trash2,
  Archive,
  Settings,
  Search,
  Menu,
  Plus,
  ChevronDown,
  Star as StarFilled
} from 'lucide-react';

const emails = [
  {
    id: 1,
    from: "Alice Johnson",
    subject: "Weekly Team Update",
    preview: "Here's a summary of what we accomplished this week...",
    time: "10:30 AM",
    starred: true,
    unread: true
  },
  {
    id: 2,
    from: "GitHub",
    subject: "Security Alert: Dependencies",
    preview: "We found a potential security vulnerability in one of your dependencies...",
    time: "9:15 AM",
    starred: false,
    unread: true
  },
  {
    id: 3,
    from: "Netflix",
    subject: "New Shows Added to Your List",
    preview: "Check out what's new on Netflix this week...",
    time: "Yesterday",
    starred: false,
    unread: false
  },
  {
    id: 4,
    from: "David Miller",
    subject: "Project Deadline Update",
    preview: "Regarding the upcoming deadline, I wanted to discuss...",
    time: "Yesterday",
    starred: true,
    unread: false
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 p-4 flex flex-col">
        <button className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg mb-6 hover:bg-indigo-700 transition-colors">
          <Plus size={20} />
          <span>Compose</span>
        </button>

        <nav className="space-y-2">
          <a href="#" className="flex items-center space-x-3 px-3 py-2 bg-gray-700 rounded-lg">
            <Inbox size={20} />
            <span>Inbox</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-400 hover:bg-gray-700 rounded-lg">
            <Star size={20} />
            <span>Starred</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-400 hover:bg-gray-700 rounded-lg">
            <Send size={20} />
            <span>Sent</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-400 hover:bg-gray-700 rounded-lg">
            <Archive size={20} />
            <span>Archive</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-400 hover:bg-gray-700 rounded-lg">
            <Trash2 size={20} />
            <span>Trash</span>
          </a>
        </nav>

        <div className="mt-auto">
          <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-400 hover:bg-gray-700 rounded-lg">
            <Settings size={20} />
            <span>Settings</span>
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-gray-800 p-4 flex items-center justify-between border-b border-gray-700">
          <div className="flex items-center space-x-4">
            <button className="text-gray-400 hover:text-white">
              <Menu size={24} />
            </button>
            <div className="relative">
              <input
                type="text"
                placeholder="Search mail..."
                className="bg-gray-700 text-gray-100 px-4 py-2 pl-10 rounded-lg w-96 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <ChevronDown size={20} className="text-gray-400" />
          </div>
        </header>

        {/* Email List */}
        <div className="flex-1 overflow-auto">
          {emails.map((email) => (
            <div
              key={email.id}
              className={`flex items-center px-6 py-4 border-b border-gray-700 hover:bg-gray-800 cursor-pointer ${
                email.unread ? 'bg-gray-800/50' : ''
              }`}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2">
                  <button className="text-gray-400 hover:text-yellow-500">
                    {email.starred ? (
                      <StarFilled size={20} className="fill-yellow-500 text-yellow-500" />
                    ) : (
                      <Star size={20} />
                    )}
                  </button>
                  <span className={`font-medium ${email.unread ? 'text-white' : 'text-gray-400'}`}>
                    {email.from}
                  </span>
                </div>
                <div className="mt-1">
                  <span className={`${email.unread ? 'text-white font-medium' : 'text-gray-400'}`}>
                    {email.subject}
                  </span>
                  <span className="text-gray-500 ml-2">- {email.preview}</span>
                </div>
              </div>
              <div className="ml-6 text-sm text-gray-400">{email.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;