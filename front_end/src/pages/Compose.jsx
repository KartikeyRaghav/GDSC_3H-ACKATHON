import { useState } from "react";
import { toast } from "react-toastify";
import {
  Inbox,
  Star,
  Trash2,
  Archive,
  Settings,
  Send,
  Menu,
  Search,
  Paperclip,
  Plus,
  X,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Compose = () => {
  const navigate = useNavigate();
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [attachments, setAttachments] = useState([]);

  const handleAttachments = (e) => {
    const files = Array.from(e.target.files || []);
    const newAttachments = files.map((file) => ({
      file,
      preview: file.type.startsWith("image/")
        ? URL.createObjectURL(file)
        : undefined,
    }));
    setAttachments((prev) => [...prev, ...newAttachments]);
  };

  const removeAttachment = (index) => {
    setAttachments((prev) => {
      const newAttachments = [...prev];
      if (newAttachments[index].preview) {
        URL.revokeObjectURL(newAttachments[index].preview);
      }
      newAttachments.splice(index, 1);
      return newAttachments;
    });
  };

  const handleSend = () => {
    if (!to || !subject || !message) {
      toast.error("Please fill in all fields");
      return;
    }

    attachments.forEach((attachment) => {
      if (attachment.preview) {
        URL.revokeObjectURL(attachment.preview);
      }
    });

    toast.success("Email sent successfully!");
    navigate("/inbox");
  };
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="w-screen h-screen bg-gray-900 flex overflow-auto">
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
        <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                To:
              </label>
              <input
                type="email"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="recipient@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Subject:
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter subject"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Message:
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 h-64 resize-none"
                placeholder="Write your message here..."
              />
            </div>

            {/* Attachments Section */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Attachments
              </label>
              <div className="space-y-4">
                {/* File Input Button */}
                <div>
                  <label className="cursor-pointer inline-flex items-center space-x-2 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors">
                    <Paperclip size={20} />
                    <span>Add Attachment</span>
                    <input
                      type="file"
                      multiple
                      onChange={handleAttachments}
                      className="hidden"
                      accept="image/*,.pdf,.doc,.docx,.txt"
                    />
                  </label>
                </div>

                {/* Attachments Preview */}
                {attachments.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {attachments.map((attachment, index) => (
                      <div
                        key={index}
                        className="relative bg-gray-700 p-3 rounded-lg group"
                      >
                        <button
                          onClick={() => removeAttachment(index)}
                          className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                        >
                          <X size={16} />
                        </button>

                        {attachment.preview ? (
                          <img
                            src={attachment.preview}
                            alt="Preview"
                            className="w-full h-24 object-cover rounded"
                          />
                        ) : (
                          <div className="w-full h-24 flex items-center justify-center bg-gray-600 rounded">
                            <span className="text-sm text-gray-300">
                              {attachment.file.name}
                            </span>
                          </div>
                        )}

                        <div className="mt-2">
                          <p className="text-sm text-gray-300 truncate">
                            {attachment.file.name}
                          </p>
                          <p className="text-xs text-gray-400">
                            {(attachment.file.size / 1024).toFixed(1)} KB
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                onClick={() => navigate(-1)}
                className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSend}
                className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <Send size={20} />
                <span>Send</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compose;
