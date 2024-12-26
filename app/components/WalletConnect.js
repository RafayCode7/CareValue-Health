"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ethers } from "ethers"; // Install ethers.js
import { checkUserRole } from "../utils/api";

const WalletConnect = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const connectWallet = async () => {
    if (!window.ethereum) {
      setError("MetaMask not installed. Please install MetaMask to proceed.");
      return;
    }

    try {
      setLoading(true);
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const address = accounts[0];
      setWalletAddress(address);
      handleRoleCheck(address);
    } catch (err) {
      setError("Failed to connect wallet. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleRoleCheck = async (address) => {
    try {
      const response = await checkUserRole(address); // Fetch user role from DB
      switch (response.role) {
        case "admin":
          router.push("/admin");
          break;
        case "doctor":
          router.push("/doctor");
          break;
        case "hospital":
          router.push("/hospital");
          break;
        case "patient":
          router.push("/patient");
          break;
        default:
          router.push("/verification"); // For new users
      }
    } catch (err) {
      setError("Unable to check user role. Try again later.");
    }
  };

  return (
    <div className="wallet-connect-container">
      <h1>Welcome</h1>
      {walletAddress ? (
        <p>Connected Wallet: {walletAddress}</p>
      ) : (
        <button onClick={connectWallet} disabled={loading}>
          {loading ? "Connecting..." : "Connect Wallet"}
        </button>
      )}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default WalletConnect;
