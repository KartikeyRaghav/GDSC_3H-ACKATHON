import { useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';

const EmailList = ({ emails }) => {
  const navigate = useNavigate();

  return (
    <>
      {emails.map((email) => (
        <div
          key={email.id}
          onClick={() => navigate(`/email/${email.id}`)}
          className={`flex items-center px-4 sm:px-6 py-4 border-b border-gray-700 hover:bg-gray-800 cursor-pointer ${
            email.unread ? "bg-gray-800/50" : ""
          }`}
        >
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  // Handle star toggle
                }}
                className="text-gray-400 hover:text-yellow-500"
              >
                <Star
                  size={20}
                  className={email.starred ? "fill-yellow-500 text-yellow-500" : ""}
                />
              </button>
              <span
                className={`font-medium truncate ${
                  email.unread ? "text-white" : "text-gray-400"
                }`}
              >
                {email.from}
              </span>
            </div>
            <div className="mt-1">
              <span
                className={`${
                  email.unread ? "text-white font-medium" : "text-gray-400"
                } block sm:inline`}
              >
                {email.subject}
              </span>
              <span className="hidden sm:inline text-gray-500 ml-2">
                - {email.preview}
              </span>
            </div>
          </div>
          <div className="ml-4 sm:ml-6 text-sm text-gray-400 whitespace-nowrap">
            {email.time}
          </div>
        </div>
      ))}
    </>
  );
};

export default EmailList;