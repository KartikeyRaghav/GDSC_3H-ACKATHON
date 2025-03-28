import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Star, Trash2, Archive } from "lucide-react";
import { emails } from "../data/emails";
import { toast } from "react-toastify";

const EmailView = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const email = emails.find((e) => e.id === Number(id));

  if (!email) {
    return (
      <div className="flex-1 p-6">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-300">
            Email not found
          </h2>
          <button
            onClick={() => navigate("/")}
            className="mt-4 text-indigo-400 hover:text-indigo-300"
          >
            Go back to inbox
          </button>
        </div>
      </div>
    );
  }

  const handleAction = (action) => {
    toast.success(`Email ${action} successfully!`);
    navigate(-1);
  };

  return (
    <div className="flex-1 overflow-auto">
      {/* Email Header */}
      <div className="bg-gray-800 p-4 border-b border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-400 hover:text-white"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back
          </button>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => handleAction("starred")}
              className="text-gray-400 hover:text-yellow-500"
            >
              <Star size={20} />
            </button>
            <button
              onClick={() => handleAction("archived")}
              className="text-gray-400 hover:text-white"
            >
              <Archive size={20} />
            </button>
            <button
              onClick={() => handleAction("deleted")}
              className="text-gray-400 hover:text-red-500"
            >
              <Trash2 size={20} />
            </button>
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-2">{email.subject}</h1>
        <div className="flex items-center justify-between text-gray-400">
          <div>
            <span className="font-medium text-white">{email.from}</span>
            <span className="ml-2">&lt;sender@example.com&gt;</span>
          </div>
          <span>{email.time}</span>
        </div>
      </div>

      {/* Email Body */}
      <div className="p-6">
        <div className="prose prose-invert max-w-none">
          <pre className="whitespace-pre-wrap font-sans">{email.body}</pre>
        </div>
      </div>
    </div>
  );
};

export default EmailView;
