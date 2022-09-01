import { ethers } from "./ether-5.6.esm.min.js";
import { abi } from "./abi.js";

const connectButton = document.getElementById("connectBtn");
const retrieveButton = document.getElementById("retrieve");
const showFavoriteNumber = document.getElementById("showFavoriteNumber");
const storeInput = document.getElementById("store");
const storeButton = document.getElementById("storeBtn");
const address = "0x40c0a64a827ab8ccad43e28cbe3f4e867a5ed400";

const connectWallet = async () => {
  if (typeof window.ethereum != "undefined") {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    connectButton.innerHTML = "Connected!";
  } else {
    alert("Please install Metamask");
  }
};

connectButton.onclick = connectWallet;

const retrieve = async () => {
  if (typeof window.ethereum != "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(address, abi, signer);

    try {
      const getRetrieve = await contract.retrieve();
      showFavoriteNumber.innerHTML = getRetrieve.toString();
    } catch (error) {
      console.log(error);
    }
  }
};

retrieveButton.onclick = retrieve;

const store = async () => {
  if (typeof window.ethereum != "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(address, abi, signer);

    try {
      await contract.store(storeInput.value);
    } catch (error) {
      console.log(error);
    }
  }
};

storeButton.onclick = store;
