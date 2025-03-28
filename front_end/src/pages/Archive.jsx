import { emails } from "../data/emails";
import EmailList from "../components/EmailList";
import Layout from "../components/Layout";

const Archive = () => {
  const archivedEmails = emails.filter((email) => email.folder === "archive");

  return (
    <div className="flex-1 overflow-auto">
      <Layout component={<EmailList emails={archivedEmails} />} />
    </div>
  );
};

export default Archive;
