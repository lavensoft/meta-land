export default class WalletApi {
   static async connect() {
      await window.phantom.solana.connect();

      let publicKey = window.phantom.solana.publicKey.toBase58();
      console.log(publicKey);

      localStorage.setItem("@publicKey", publicKey);
   }

   static isConnected() {
      return window.phantom.solana.isConnected;
   }

   static getBalance() {

   }
}