"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ethers } from "ethers";
import { checkUserRole } from "../../utils/api";

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
      const response = await checkUserRole(address);
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
          router.push("/verification");
      }
    } catch (err) {
      setError("Unable to check user role. Try again later.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="p-8 bg-white shadow-lg rounded-md w-96">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">Welcome</h1>
        <p className="text-gray-600 mb-6">
          {walletAddress
            ? `Connected Wallet: ${walletAddress}`
            : "Connect your wallet to proceed."}
        </p>
        {walletAddress ? (
          <button
            disabled
            className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md cursor-not-allowed"
          >
            Wallet Connected
          </button>
        ) : (
          <button
            onClick={connectWallet}
            disabled={loading}
            className={`w-full py-2 px-4 text-white font-medium rounded-md ${
              loading
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Connecting..." : "Connect Wallet"}
          </button>
        )}
        {error && (
          <p className="mt-4 text-sm text-red-500 font-medium">{error}</p>
        )}
      </div>
    </div>
  );
};

export default WalletConnect;
