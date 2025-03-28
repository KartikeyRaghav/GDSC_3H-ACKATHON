import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MailInbox from "./pages/Inbox";

function App() {
  // In a real app, you'd check for authentication here

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<MailInbox />} />
    </Routes>
  );
}

export default App;
