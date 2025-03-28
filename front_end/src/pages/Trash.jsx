import { emails } from "../data/emails";
import EmailList from "../components/EmailList";
import Layout from "../components/Layout";

const Trash = () => {
  const trashedEmails = emails.filter((email) => email.folder === "trash");

  return (
    <div className="flex-1 overflow-auto">
      <Layout component={<EmailList emails={trashedEmails} />} />
    </div>
  );
};

export default Trash;
