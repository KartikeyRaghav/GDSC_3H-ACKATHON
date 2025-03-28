import { emails } from '../data/emails';
import EmailList from '../components/EmailList';

const Starred = () => {
  const starredEmails = emails.filter(email => email.starred);
  
  return (
    <div className="flex-1 overflow-auto">
      <EmailList emails={starredEmails} />
    </div>
  );
};

export default Starred;