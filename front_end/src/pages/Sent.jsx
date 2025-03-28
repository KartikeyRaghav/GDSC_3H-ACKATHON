import { emails } from "../data/emails";
import EmailList from "../components/EmailList";
import Layout from "../components/Layout";

const Sent = () => {
  const sentEmails = emails.filter((email) => email.folder === "sent");

  return (
    <div className="flex-1 overflow-auto">
      <Layout component={<EmailList emails={sentEmails} />} />
    </div>
  );
};

export default Sent;
