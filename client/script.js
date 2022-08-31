import { ethers } from "./ether-5.6.esm.min.js";
const connectButton = document.getElementById("connectBtn");
const retrieve = document.getElementById("retrieve");

const connectWallet = async () => {
  console.log("working");
  if (typeof window.ethereum != "undefined") {
    window.ethereum.request({ method: "eth_requestAccounts" });
  } else {
    alert("Please install Metamask");
  }
};
// 0x40c0a64a827ab8ccad43e28cbe3f4e867a5ed400

connectButton.onclick = connectWallet;

const store = async () => {
  if (typeof window.ethereum != "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
  }
};
