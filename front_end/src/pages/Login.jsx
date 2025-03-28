import React, { useState } from "react";
import { ethers } from "ethers";

const Login = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [error, setError] = useState("");

  const connectMetamask = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = provider.getSigner();

        if (accounts.length === 0) {
          throw new Error("No accounts found in MetaMask");
        }

        setWalletAddress(accounts[0]);
      } catch (err) {
        console.error(err);
        setError("Error in connecting to MetaMask");
      }
    } else {
      setError("MetaMask is not installed");
    }
  };
  const login = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = provider.getSigner();

        if (accounts.length === 0) {
          throw new Error("No accounts found in MetaMask");
        }

        setWalletAddress(accounts[0]);
      } catch (err) {
        console.error(err);
        setError("Error in connecting to MetaMask");
      }
    } else {
      setError("MetaMask is not installed");
    }
  };
  return (
    <div>
      <h2>MetaMask Login</h2>
      {walletAddress ? (
        <p>Connected: {walletAddress}</p>
      ) : (
        <>
          <button onClick={connectMetamask}>First Time?</button>
          <button onClick={login}>Login</button>
        </>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
