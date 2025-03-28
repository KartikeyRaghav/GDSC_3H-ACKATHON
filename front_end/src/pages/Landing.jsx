import { useState } from "react";
import { ethers } from "ethers";
import { ArrowRight, Github, Twitter, Linkedin, Mail, Lock } from "lucide-react";
import { mailcoreaddress, mailcoreabi } from "../constants.js";

const Landing = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [error, setError] = useState("");
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);

  const login = async () => {
    try {
      if (!window.ethereum) throw new Error("MetaMask is not installed");
      
      const providerInstance = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(providerInstance);
      
      const accounts = await providerInstance.send("eth_requestAccounts", []);
      if (!accounts.length) throw new Error("No accounts found in MetaMask");
      
      const signerInstance = providerInstance.getSigner();
      setSigner(signerInstance);
      setWalletAddress(accounts[0]);
      
      console.log("Account:", accounts[0]);
    } catch (err) {
      console.error("Login Error:", err);
      setError(err.message);
    }
  };

  const getstarted = async () => {
    try {
      if (!window.ethereum) throw new Error("MetaMask is not installed");
      
      const providerInstance = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(providerInstance);
      
      const accounts = await providerInstance.send("eth_requestAccounts", []);
      if (!accounts.length) throw new Error("No accounts found in MetaMask");
      
      const signerInstance = providerInstance.getSigner();
      setSigner(signerInstance);
      setWalletAddress(accounts[0]);
      
      const mailCoreContract = new ethers.Contract(mailcoreaddress, mailcoreabi, providerInstance);
      console.log("Contract instance:", mailCoreContract);
      
      const tx = await mailCoreContract.login();
      console.log("Transaction:", tx);
    } catch (err) {
      console.error("Get Started Error:", err);
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="relative">
        <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Modern Email for <span className="text-indigo-500">Modern Teams</span>
                </h1>
                <p className="mt-6 text-xl text-gray-300">
                  Experience email reimagined. Streamlined communication, powerful organization, and seamless collaboration all in one beautiful interface.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button onClick={getstarted} className="flex items-center justify-center space-x-2 px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                    <span>Get Started</span>
                    <ArrowRight size={20} />
                  </button>
                  <button onClick={login} className="flex items-center justify-center space-x-2 px-8 py-3 border border-gray-600 rounded-lg hover:bg-gray-800 transition-colors">
                    <span>Sign In</span>
                  </button>
                  {error && (
                    <div className="w-full sm:w-auto px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                      <p className="text-red-500 text-sm font-medium flex items-center justify-center">
                        {error}
                      </p>
                    </div>
                  )}
                </div>
                <div className="mt-8 flex items-center gap-4 justify-center lg:justify-start text-gray-400">
                  <a href="#" className="hover:text-white transition-colors">
                    <Github size={24} />
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
                    <Twitter size={24} />
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
