import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MailInbox from "./pages/Inbox";
import Landing from "./pages/Landing";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Landing />} />
      <Route path="/inbox" element={<MailInbox />} />
    </Routes>
  );
}

export default App;
