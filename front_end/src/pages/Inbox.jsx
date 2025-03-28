import {
  Inbox,
  Send,
  Star,
  Trash2,
  Archive,
  Settings,
  Search,
  Menu,
  Plus,
  ChevronDown,
  Star as StarFilled,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout.jsx";
import EmailList from "../components/EmailList.jsx";
import { ethers } from "ethers";

import { usercontractabi, mailcoreabi, mailcoreaddress } from "../constants.js";

const MailInbox = () => {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [emails, setEmails] = useState([]);
  const [userContract, setUserContract] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [connectedAddress, setWalletAddress] = useState(null);
  const inboxEmails = emails.filter((email) => email.folder === "inbox");

  // useEffect(() => {
  //   const connectBlockchain = async () => {
  //     try {
  //       // Check if Ethereum provider is available (MetaMask or similar)
  //       if (window.ethereum) {
  //         // Request account access
  //         const accounts = await window.ethereum.request({
  //                   method: "eth_requestAccounts",
  //                 });
  //                 const provider = new ethers.providers.JsonRpcProvider();
  //                 const signer = provider.getSigner()
  //                 setProvider(provider)
  //                 setSigner(signer)

  //                 if (accounts.length === 0) {
  //                   throw new Error("No accounts found in MetaMask");
  //                 }

  //                 setWalletAddress(accounts[0]);
  //                 console.log("Account : ",accounts[0])
  //         // Create MailCore contract instance
  //         const mailCoreContract = new ethers.Contract(
  //           mailcoreaddress,
  //           mailcoreabi,
  //           signer
  //         );

  //         if(connectedAddress){
  //           alert("!No connected wallet!!")
  //         }

  //         // Fetch user info to get user contract address
  //         const userInfo = await mailCoreContract.users(connectedAddress);

  //         if (!userInfo.exists) {
  //           throw new Error('User not registered');
  //         }

  //         // Create user contract instance
  //         const userContractInstance = new ethers.Contract(
  //           userInfo.userContract,
  //           usercontractabi,
  //           signer
  //         );
  //         setUserContract(userContractInstance);

  //         // Fetch received emails
  //         const receivedMailCount = await userContractInstance.getReceivedMailsCount();
  //         const receivedEmails = [];

  //         for (let i = 0; i < receivedMailCount; i++) {
  //           const mail = await userContractInstance.getReceivedMail(i);
  //           receivedEmails.push({
  //             id: i,
  //             from: mail.sender,
  //             subject: mail.subject,
  //             preview: mail.body.substring(0, 50) + '...',
  //             time: new Date(mail.timestamp * 1000).toLocaleTimeString(),
  //             starred: false,
  //             unread: true
  //           });
  //         }

  //         setEmails(receivedEmails);
  //         setLoading(false);
  //       } else {
  //         throw new Error('Ethereum provider not found. Please install MetaMask.');
  //       }
  //     } catch (err) {
  //       console.error('Blockchain connection error:', err);
  //       setError(err.message);
  //       setLoading(false);
  //     }
  //   };

  //   connectBlockchain();
  // }, []);

  // const sendEmail = async (receiver, body, subject, attachment = '') => {
  //   try {
  //     if (!userContract) {
  //       throw new Error('Contract not initialized');
  //     }

  //     // Send mail via user contract
  //     const tx = await userContract.sendMail(
  //       receiver,
  //       body,
  //       subject,
  //       attachment
  //     );

  //     // Wait for transaction to be mined
  //     await tx.wait();

  //     // Optionally refresh emails or show success message
  //     console.log('Email sent successfully');
  //   } catch (err) {
  //     console.error('Error sending email:', err);
  //     setError(err.message);
  //   }
  // };

  // // Render loading state
  // if (loading) {
  //   return <div>Loading emails...</div>;
  // }

  // // Render error state
  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  return (
    // <div className="min-h-screen bg-gray-900 text-gray-100 flex">
    //   {/* Sidebar */}
    //   <div className="w-64 bg-gray-800 p-4 flex flex-col">
    //     <button className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg mb-6 hover:bg-indigo-700 transition-colors">
    //       <Plus size={20} />
    //       <span>Compose</span>
    //     </button>

    //     <nav className="space-y-2">
    //       <Link
    //         to="/inbox"
    //         className="flex items-center space-x-3 px-3 py-2 bg-gray-700 rounded-lg"
    //       >
    //         <Inbox size={20} />
    //         <span>Inbox</span>
    //       </Link>
    //       <Link
    //         to="/starred"
    //         className="flex items-center space-x-3 px-3 py-2 text-gray-400 hover:bg-gray-700 rounded-lg"
    //       >
    //         <Star size={20} />
    //         <span>Starred</span>
    //       </Link>
    //       <Link
    //         to="/sent"
    //         className="flex items-center space-x-3 px-3 py-2 text-gray-400 hover:bg-gray-700 rounded-lg"
    //       >
    //         <Send size={20} />
    //         <span>Sent</span>
    //       </Link>
    //       <Link
    //         to="/archive"
    //         className="flex items-center space-x-3 px-3 py-2 text-gray-400 hover:bg-gray-700 rounded-lg"
    //       >
    //         <Archive size={20} />
    //         <span>Archive</span>
    //       </Link>
    //       <Link
    //         to="/trash"
    //         className="flex items-center space-x-3 px-3 py-2 text-gray-400 hover:bg-gray-700 rounded-lg"
    //       >
    //         <Trash2 size={20} />
    //         <span>Trash</span>
    //       </Link>
    //     </nav>

    //     <div className="mt-auto">
    //       <Link
    //         to="/settings"
    //         className="flex items-center space-x-3 px-3 py-2 text-gray-400 hover:bg-gray-700 rounded-lg"
    //       >
    //         <Settings size={20} />
    //         <span>Settings</span>
    //       </Link>
    //     </div>
    //   </div>

    //   {/* Main Content */}
    //   <div className="flex-1 flex flex-col">
    //     {/* Header */}
    //     <header className="bg-gray-800 p-4 flex items-center justify-between border-b border-gray-700">
    //       <div className="flex items-center space-x-4">
    //         <button className="text-gray-400 hover:text-white">
    //           <Menu size={24} />
    //         </button>
    //         <div className="relative">
    //           <input
    //             type="text"
    //             placeholder="Search mail..."
    //             className="bg-gray-700 text-gray-100 px-4 py-2 pl-10 rounded-lg w-96 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    //           />
    //           <Search
    //             className="absolute left-3 top-2.5 text-gray-400"
    //             size={20}
    //           />
    //         </div>
    //       </div>
    //       <div className="flex items-center space-x-2">
    //         <img
    //           src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    //           alt="Profile"
    //           className="w-8 h-8 rounded-full"
    //         />
    //         <ChevronDown size={20} className="text-gray-400" />
    //       </div>
    //     </header>

    //     {/* Email List */}
    //     <div className="flex-1 overflow-auto">
    //       {inboxEmails.map((email) => (
    //         <div
    //           key={email.id}
    //           className={`flex items-center px-6 py-4 border-b border-gray-700 hover:bg-gray-800 cursor-pointer ${
    //             email.unread ? "bg-gray-800/50" : ""
    //           }`}
    //         >
    //           <div className="flex-1 min-w-0">
    //             <div className="flex items-center space-x-2">
    //               <button className="text-gray-400 hover:text-yellow-500">
    //                 {email.starred ? (
    //                   <StarFilled
    //                     size={20}
    //                     className="fill-yellow-500 text-yellow-500"
    //                   />
    //                 ) : (
    //                   <Star size={20} />
    //                 )}
    //               </button>
    //               <span
    //                 className={`font-medium ${
    //                   email.unread ? "text-white" : "text-gray-400"
    //                 }`}
    //               >
    //                 {email.from}
    //               </span>
    //             </div>
    //             <div className="mt-1">
    //               <span
    //                 className={`${
    //                   email.unread ? "text-white font-medium" : "text-gray-400"
    //                 }`}
    //               >
    //                 {email.subject}
    //               </span>
    //               <span className="text-gray-500 ml-2">- {email.preview}</span>
    //             </div>
    //           </div>
    //           <div className="ml-6 text-sm text-gray-400">{email.time}</div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <Layout component={<EmailList emails={inboxEmails} />} />
  );
};

export default MailInbox;
