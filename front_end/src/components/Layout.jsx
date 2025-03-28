import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
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
  X,
} from "lucide-react";

const Layout = ({component}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex">
      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:static w-64 bg-gray-800 p-4 flex flex-col h-screen z-30 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-200 ease-in-out`}
      >
        <div className="flex justify-between items-center lg:hidden mb-4">
          <h2 className="text-xl font-bold">Mail</h2>
          <button
            onClick={toggleSidebar}
            className="text-gray-400 hover:text-white"
          >
            <X size={24} />
          </button>
        </div>

        <button
          onClick={() => navigate("/compose")}
          className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg mb-6 hover:bg-indigo-700 transition-colors"
        >
          <Plus size={20} />
          <span>Compose</span>
        </button>

        <nav className="space-y-2">
          <button
            onClick={() => navigate("/")}
            className={`flex items-center space-x-3 px-3 py-2 rounded-lg w-full ${
              isActivePath("/")
                ? "bg-gray-700"
                : "text-gray-400 hover:bg-gray-700"
            }`}
          >
            <Inbox size={20} />
            <span>Inbox</span>
          </button>
          <button
            onClick={() => navigate("/starred")}
            className={`flex items-center space-x-3 px-3 py-2 rounded-lg w-full ${
              isActivePath("/starred")
                ? "bg-gray-700"
                : "text-gray-400 hover:bg-gray-700"
            }`}
          >
            <Star size={20} />
            <span>Starred</span>
          </button>
          <button
            onClick={() => navigate("/sent")}
            className={`flex items-center space-x-3 px-3 py-2 rounded-lg w-full ${
              isActivePath("/sent")
                ? "bg-gray-700"
                : "text-gray-400 hover:bg-gray-700"
            }`}
          >
            <Send size={20} />
            <span>Sent</span>
          </button>
          <button
            onClick={() => navigate("/archive")}
            className={`flex items-center space-x-3 px-3 py-2 rounded-lg w-full ${
              isActivePath("/archive")
                ? "bg-gray-700"
                : "text-gray-400 hover:bg-gray-700"
            }`}
          >
            <Archive size={20} />
            <span>Archive</span>
          </button>
          <button
            onClick={() => navigate("/trash")}
            className={`flex items-center space-x-3 px-3 py-2 rounded-lg w-full ${
              isActivePath("/trash")
                ? "bg-gray-700"
                : "text-gray-400 hover:bg-gray-700"
            }`}
          >
            <Trash2 size={20} />
            <span>Trash</span>
          </button>
        </nav>

        <div className="mt-auto">
          <button
            onClick={() => navigate("/settings")}
            className={`flex items-center space-x-3 px-3 py-2 rounded-lg w-full ${
              isActivePath("/settings")
                ? "bg-gray-700"
                : "text-gray-400 hover:bg-gray-700"
            }`}
          >
            <Settings size={20} />
            <span>Settings</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-gray-800 p-4 flex items-center justify-between border-b border-gray-700">
          <div className="flex items-center space-x-4">
            <button
              className="text-gray-400 hover:text-white lg:hidden"
              onClick={toggleSidebar}
            >
              <Menu size={24} />
            </button>
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search mail..."
                className="bg-gray-700 text-gray-100 px-4 py-2 pl-10 rounded-lg w-full max-w-[24rem] focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Search
                className="absolute left-3 top-2.5 text-gray-400"
                size={20}
              />
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

        {/* Page Content */}
        {component}
      </div>
    </div>
  );
};

export default Layout;
