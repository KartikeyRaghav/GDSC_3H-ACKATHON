import { toast } from "react-toastify";
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
  Save,
  ChevronDown,
  X,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SettingsPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const handleSave = () => {
    toast.success("Settings saved successfully!");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="flex overflow-auto w-screen h-screen bg-gray-900">
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
            onClick={() => navigate("/inbox")}
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
      <div className="w-full p-6">
        <div className="flex items-center space-x-4 mb-10">
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
        <div className="max-w-2xl mx-auto p-6">
          <h1 className="text-2xl font-bold mb-6">Settings</h1>

          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Display Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    defaultValue="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    defaultValue="john@example.com"
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-lg font-semibold mb-4">Preferences</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="notifications"
                    className="rounded bg-gray-700 border-gray-600 text-indigo-600 focus:ring-indigo-500"
                    defaultChecked
                  />
                  <label
                    htmlFor="notifications"
                    className="ml-2 text-sm text-gray-300"
                  >
                    Enable Email Notifications
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="sounds"
                    className="rounded bg-gray-700 border-gray-600 text-indigo-600 focus:ring-indigo-500"
                    defaultChecked
                  />
                  <label
                    htmlFor="sounds"
                    className="ml-2 text-sm text-gray-300"
                  >
                    Enable Sound Effects
                  </label>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Language
                  </label>
                  <select className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleSave}
                className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <Save size={20} />
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
