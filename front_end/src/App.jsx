import { Routes, Route, BrowserRouter } from "react-router-dom";
import Signup from "./pages/Signup";
import MailInbox from "./pages/Inbox";
import Landing from "./pages/Landing";
import Starred from "./pages/Starred";
import Sent from "./pages/Sent";
import Archive from "./pages/Archive";
import Trash from "./pages/Trash";
import Settings from "./pages/Settings";
import Compose from "./pages/Compose";
import EmailView from "./pages/EmailView";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Landing />} />
        <Route path="/inbox" element={<MailInbox />} />
        <Route path="/starred" element={<Starred />} />
        <Route path="/sent" element={<Sent />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/compose" element={<Compose />} />
        <Route path="/email/:id" element={<EmailView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
