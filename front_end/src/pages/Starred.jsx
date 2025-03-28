import { emails } from "../data/emails";
import EmailList from "../components/EmailList";
import Layout from "../components/Layout";

const Starred = () => {
  const starredEmails = emails.filter((email) => email.starred);

  return (
    <div className="flex-1 overflow-auto">
      <Layout component={<EmailList emails={starredEmails} />} />
    </div>
  );
};

export default Starred;
