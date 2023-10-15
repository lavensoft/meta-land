import axios from "axios";
import Config from "../config/Config";

export default class WalletApi {
   static async connect() {
      await window.phantom.solana.connect();

      let publicKey = window.phantom.solana.publicKey.toBase58();
      console.log(publicKey);

      localStorage.setItem(Config.SK_PUBLIC_KEY, publicKey);
   }

   static isConnected() {
      return window.phantom.solana.isConnected;
   }

   static async getBalance() {
      // const walletAddress = localStorage.getItem(Config.SK_PUBLIC_KEY);
      // let res = await axios.get(
      //    `${Config.SHYFT}/wallet/balance?network=${Config.NETWORK}&wallet=${walletAddress}`,
      //    {
      //       headers: {
      //          "x-api-key": Config.SHYFT_API_TOKEN
      //       }
      //    }
      // );

      // return res.data?.result?.balance || 0;

      //DEV DATA
      return 10;
   }

   static async getTransactionHistory() {
      // const walletAddress = localStorage.getItem(Config.SK_PUBLIC_KEY);
      // let res = await axios.get(
      //    `${Config.SHYFT}/wallet/transaction_history?network=${Config.NETWORK}&wallet=${walletAddress}`, 
      //    {
      //       headers: {
      //          "x-api-key": Config.SHYFT_API_TOKEN
      //       }
      //    }
      // );

      // return res.data?.result || [];

      //DEV DATA
      return [
         {
            "timestamp": "2023-10-15T16:15:27.000Z",
            "fee": 0.0000066,
            "fee_payer": "HPryFDafzYYPHq8GLCMkLpRFUbUpYDba9hqj3YAdLcnt",
            "signers": [
               "HPryFDafzYYPHq8GLCMkLpRFUbUpYDba9hqj3YAdLcnt"
            ],
            "signatures": [
               "Cy5wipN1NDuN4tAtP7Fz7JAWaGwyNPEWq9W9TspW2PYpLasT8eQHRxV7t6rKTE1a3eaPpg3QxJWbousqd4wSbA9"
            ],
            "protocol": {
               "address": "11111111111111111111111111111111",
               "name": "SYSTEM_PROGRAM"
            },
            "type": "SOL_TRANSFER",
            "status": "Success",
            "actions": [
               {
                  "info": {},
                  "source_protocol": {
                     "address": "ComputeBudget111111111111111111111111111111",
                     "name": "COMPUTE_BUDGET"
                  },
                  "type": "UNKNOWN"
               },
               {
                  "info": {},
                  "source_protocol": {
                     "address": "ComputeBudget111111111111111111111111111111",
                     "name": "COMPUTE_BUDGET"
                  },
                  "type": "UNKNOWN"
               },
               {
                  "info": {
                     "sender": "HPryFDafzYYPHq8GLCMkLpRFUbUpYDba9hqj3YAdLcnt",
                     "receiver": "DdfPwgfuojvpufpgPrfuE47veP6CiD5hYRr2c7mAosuU",
                     "amount": 1
                  },
                  "source_protocol": {
                     "address": "11111111111111111111111111111111",
                     "name": "SYSTEM_PROGRAM"
                  },
                  "type": "SOL_TRANSFER"
               }
            ]
         },
         {
            "timestamp": "2023-10-15T16:15:00.000Z",
            "fee": 0.000005,
            "fee_payer": "9B5XszUGdMaxCZ7uSQhPzdks5ZQSmWxrmzCSvtJ6Ns6g",
            "signers": [
               "9B5XszUGdMaxCZ7uSQhPzdks5ZQSmWxrmzCSvtJ6Ns6g"
            ],
            "signatures": [
               "t6cmuNn3QPE9uENYaY1JK19z4UhZrv4bCcGEDQdQunUkQhs6BUb62fhC49LLiBdYNT65CPdGrFXRzokbEYYPZoV"
            ],
            "protocol": {
               "address": "11111111111111111111111111111111",
               "name": "SYSTEM_PROGRAM"
            },
            "type": "SOL_TRANSFER",
            "status": "Success",
            "actions": [
               {
                  "info": {
                     "sender": "9B5XszUGdMaxCZ7uSQhPzdks5ZQSmWxrmzCSvtJ6Ns6g",
                     "receiver": "HPryFDafzYYPHq8GLCMkLpRFUbUpYDba9hqj3YAdLcnt",
                     "amount": 5
                  },
                  "source_protocol": {
                     "address": "11111111111111111111111111111111",
                     "name": "SYSTEM_PROGRAM"
                  },
                  "type": "SOL_TRANSFER"
               }
            ]
         },
         {
            "timestamp": "2023-10-13T04:37:43.000Z",
            "fee": 0.00001,
            "fee_payer": "HPryFDafzYYPHq8GLCMkLpRFUbUpYDba9hqj3YAdLcnt",
            "signers": [
               "HPryFDafzYYPHq8GLCMkLpRFUbUpYDba9hqj3YAdLcnt",
               "2CjhArT7caXCQQZWKMrvVDwiEEAdUDgfeCvyTWV2jmb6"
            ],
            "signatures": [
               "5niuNd6H134JEBnEDNzaPUBFUwETEWPgaCmotDnqJ8S6q9es9AKFniCTAorWiJcYGB28kovZr1jwB62wNmkqYe8B",
               "3L6CDK3otp6FQWZnHYcpYuD9ogemxXc74WxrqJobdrsCspArwLA1TJKThA3gNsBg146Lu8vzSnbjT3uaqwFotEPe"
            ],
            "protocol": {
               "address": "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s",
               "name": "METAPLEX"
            },
            "type": "NFT_MINT",
            "status": "Success",
            "actions": [
               {
                  "info": {
                     "nft_address": "2CjhArT7caXCQQZWKMrvVDwiEEAdUDgfeCvyTWV2jmb6",
                     "amount": 1,
                     "owner": "C77JfUkXrgPwdrkVnq7XWRHdaoD3J2FqrppUZjWGnsjD",
                     "owner_associated_account": "4zpExXcYXU8MYrtn2moGfQFMiK5KN3qf4Hf5jpuWdXyB"
                  },
                  "source_protocol": {
                     "address": "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s",
                     "name": "METAPLEX"
                  },
                  "type": "NFT_MINT"
               },
               {
                  "info": {
                     "sender": "HPryFDafzYYPHq8GLCMkLpRFUbUpYDba9hqj3YAdLcnt",
                     "receiver": "DwUWBXU1Co5QZQoGmPDCpaar9UPKToUEPeaHbMHTLCio",
                     "amount": 0.01561672
                  },
                  "source_protocol": {
                     "address": "11111111111111111111111111111111",
                     "name": "SYSTEM_PROGRAM"
                  },
                  "type": "SOL_TRANSFER",
                  "parent_protocol": "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
               },
               {
                  "info": {
                     "sender": "HPryFDafzYYPHq8GLCMkLpRFUbUpYDba9hqj3YAdLcnt",
                     "receiver": "7jE3Q3K8he2vDaZvKHCrxPjCu67c14EiUrXNyczJrcEy",
                     "amount": 0.0028536
                  },
                  "source_protocol": {
                     "address": "11111111111111111111111111111111",
                     "name": "SYSTEM_PROGRAM"
                  },
                  "type": "SOL_TRANSFER",
                  "parent_protocol": "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
               },
               {
                  "info": {
                     "sender": "HPryFDafzYYPHq8GLCMkLpRFUbUpYDba9hqj3YAdLcnt",
                     "receiver": "7TfMNSZ2UHznQBmKF3QJG7VpiF4kKR6Pc9UaFQVfy5zs",
                     "amount": 0.01
                  },
                  "source_protocol": {
                     "address": "11111111111111111111111111111111",
                     "name": "SYSTEM_PROGRAM"
                  },
                  "type": "SOL_TRANSFER"
               }
            ]
         },
         {
            "timestamp": "2023-10-13T04:24:47.000Z",
            "fee": 0.0000066,
            "fee_payer": "HPryFDafzYYPHq8GLCMkLpRFUbUpYDba9hqj3YAdLcnt",
            "signers": [
               "HPryFDafzYYPHq8GLCMkLpRFUbUpYDba9hqj3YAdLcnt"
            ],
            "signatures": [
               "5hwP4vbgqKJq4ASzRYuAMoYwfkKx3ZFv5cmmDJtNKUP86JjCSZQ8BMkp8fMAmbKVFG4a81zVsSBC3JNvbuS3Kqy9"
            ],
            "protocol": {
               "address": "11111111111111111111111111111111",
               "name": "SYSTEM_PROGRAM"
            },
            "type": "SOL_TRANSFER",
            "status": "Success",
            "actions": [
               {
                  "info": {},
                  "source_protocol": {
                     "address": "ComputeBudget111111111111111111111111111111",
                     "name": "COMPUTE_BUDGET"
                  },
                  "type": "UNKNOWN"
               },
               {
                  "info": {},
                  "source_protocol": {
                     "address": "ComputeBudget111111111111111111111111111111",
                     "name": "COMPUTE_BUDGET"
                  },
                  "type": "UNKNOWN"
               },
               {
                  "info": {
                     "sender": "HPryFDafzYYPHq8GLCMkLpRFUbUpYDba9hqj3YAdLcnt",
                     "receiver": "DdfPwgfuojvpufpgPrfuE47veP6CiD5hYRr2c7mAosuU",
                     "amount": 6
                  },
                  "source_protocol": {
                     "address": "11111111111111111111111111111111",
                     "name": "SYSTEM_PROGRAM"
                  },
                  "type": "SOL_TRANSFER"
               }
            ]
         },
         {
            "timestamp": "2023-10-13T04:07:11.000Z",
            "fee": 0.00001,
            "fee_payer": "HPryFDafzYYPHq8GLCMkLpRFUbUpYDba9hqj3YAdLcnt",
            "signers": [
               "HPryFDafzYYPHq8GLCMkLpRFUbUpYDba9hqj3YAdLcnt",
               "FK7iNJEv9ME8QWXUGAEpKzZkM5eNxy8pDQch6V7eX9CW"
            ],
            "signatures": [
               "29wHsFYnPRCMSsUzpQvUDUvTDiceuJ6EzwCHvonrMfypzKA7KX2iYC1n1EgpjWqdEXpowP8esC4XzhKdk59Rt6ZZ",
               "2fVCX9ZsyPXgA5zgzCthT43PyabZ7WF3Luyagsdd6AxuJJTGonZu5VF9CvGVVpGrW27uEYpKSfjtRMJhyVhUsk7c"
            ],
            "protocol": {
               "address": "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s",
               "name": "METAPLEX"
            },
            "type": "NFT_MINT",
            "status": "Success",
            "actions": [
               {
                  "info": {
                     "nft_address": "FK7iNJEv9ME8QWXUGAEpKzZkM5eNxy8pDQch6V7eX9CW",
                     "amount": 1,
                     "owner": "HPryFDafzYYPHq8GLCMkLpRFUbUpYDba9hqj3YAdLcnt",
                     "owner_associated_account": "8jrwV8QxLs1Z4FGD2hrMTDnNiFY59tsMjysjt53km69b"
                  },
                  "source_protocol": {
                     "address": "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s",
                     "name": "METAPLEX"
                  },
                  "type": "NFT_MINT"
               },
               {
                  "info": {
                     "sender": "HPryFDafzYYPHq8GLCMkLpRFUbUpYDba9hqj3YAdLcnt",
                     "receiver": "DJxcjKn47u9pJECSqqKz4AvQbj9EZuKqorexCNEshhSY",
                     "amount": 0.01561672
                  },
                  "source_protocol": {
                     "address": "11111111111111111111111111111111",
                     "name": "SYSTEM_PROGRAM"
                  },
                  "type": "SOL_TRANSFER",
                  "parent_protocol": "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
               },
               {
                  "info": {
                     "sender": "HPryFDafzYYPHq8GLCMkLpRFUbUpYDba9hqj3YAdLcnt",
                     "receiver": "DeZN7VKq5KndRwdWbYBqnDoZNR26BqBsUEEyLFZVqJKo",
                     "amount": 0.0028536
                  },
                  "source_protocol": {
                     "address": "11111111111111111111111111111111",
                     "name": "SYSTEM_PROGRAM"
                  },
                  "type": "SOL_TRANSFER",
                  "parent_protocol": "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
               },
               {
                  "info": {
                     "sender": "HPryFDafzYYPHq8GLCMkLpRFUbUpYDba9hqj3YAdLcnt",
                     "receiver": "7TfMNSZ2UHznQBmKF3QJG7VpiF4kKR6Pc9UaFQVfy5zs",
                     "amount": 0.01
                  },
                  "source_protocol": {
                     "address": "11111111111111111111111111111111",
                     "name": "SYSTEM_PROGRAM"
                  },
                  "type": "SOL_TRANSFER"
               }
            ]
         },
         {
            "timestamp": "2023-10-13T04:06:52.000Z",
            "fee": 0.00001,
            "fee_payer": "HPryFDafzYYPHq8GLCMkLpRFUbUpYDba9hqj3YAdLcnt",
            "signers": [
               "HPryFDafzYYPHq8GLCMkLpRFUbUpYDba9hqj3YAdLcnt",
               "F74KQQsYxhr9NFXR54kCzvK14GRmjHihfNGFiJqsDxJU"
            ],
            "signatures": [
               "McVxq8FCtbN1sXasrNjEtVUanAYoCaV9SrFrhmNL6WFRYJTe1KaP9EsBTXUNWpPNnm6eJQvFkysf7du7ivzhQoq",
               "62c9jRYdAUQgtFDKvRfHk9LhCX5RYXBJzAPswDr9vzh1sZE7x1eAzeFe2pCNdLS91xToQda21ZUs4Pj2MPdhgncq"
            ],
            "protocol": {
               "address": "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s",
               "name": "METAPLEX"
            },
            "type": "NFT_MINT",
            "status": "Success",
            "actions": [
               {
                  "info": {
                     "nft_address": "F74KQQsYxhr9NFXR54kCzvK14GRmjHihfNGFiJqsDxJU",
                     "amount": 1,
                     "owner": "HPryFDafzYYPHq8GLCMkLpRFUbUpYDba9hqj3YAdLcnt",
                     "owner_associated_account": "EP6yiFNvCd1qmhhereT2CfGmHvGck5PsmW4kEYZskNj2"
                  },
                  "source_protocol": {
                     "address": "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s",
                     "name": "METAPLEX"
                  },
                  "type": "NFT_MINT"
               },
               {
                  "info": {
                     "sender": "HPryFDafzYYPHq8GLCMkLpRFUbUpYDba9hqj3YAdLcnt",
                     "receiver": "Eu8RJ8fpoVNcfszDucmePMsAckYCf9VC56tpn8nNVZCh",
                     "amount": 0.01561672
                  },
                  "source_protocol": {
                     "address": "11111111111111111111111111111111",
                     "name": "SYSTEM_PROGRAM"
                  },
                  "type": "SOL_TRANSFER",
                  "parent_protocol": "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
               },
               {
                  "info": {
                     "sender": "HPryFDafzYYPHq8GLCMkLpRFUbUpYDba9hqj3YAdLcnt",
                     "receiver": "2mVrgSaVNL1dtBhNrXdCSFTxLVRoGVZ2RuTELosHJpq9",
                     "amount": 0.0028536
                  },
                  "source_protocol": {
                     "address": "11111111111111111111111111111111",
                     "name": "SYSTEM_PROGRAM"
                  },
                  "type": "SOL_TRANSFER",
                  "parent_protocol": "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
               },
               {
                  "info": {
                     "sender": "HPryFDafzYYPHq8GLCMkLpRFUbUpYDba9hqj3YAdLcnt",
                     "receiver": "7TfMNSZ2UHznQBmKF3QJG7VpiF4kKR6Pc9UaFQVfy5zs",
                     "amount": 0.01
                  },
                  "source_protocol": {
                     "address": "11111111111111111111111111111111",
                     "name": "SYSTEM_PROGRAM"
                  },
                  "type": "SOL_TRANSFER"
               }
            ]
         },
         {
            "timestamp": "2023-10-13T04:01:04.000Z",
            "fee": 0.000005,
            "fee_payer": "9B5XszUGdMaxCZ7uSQhPzdks5ZQSmWxrmzCSvtJ6Ns6g",
            "signers": [
               "9B5XszUGdMaxCZ7uSQhPzdks5ZQSmWxrmzCSvtJ6Ns6g"
            ],
            "signatures": [
               "2F7x3PEmSV269BTaExXE3iMGfj7t4VDkbYS3jFf1uDrx9CU2RqsVmvHGLhAdRZvJEBipbofCzgCHmRW9kxwvgLqE"
            ],
            "protocol": {
               "address": "11111111111111111111111111111111",
               "name": "SYSTEM_PROGRAM"
            },
            "type": "SOL_TRANSFER",
            "status": "Success",
            "actions": [
               {
                  "info": {
                     "sender": "9B5XszUGdMaxCZ7uSQhPzdks5ZQSmWxrmzCSvtJ6Ns6g",
                     "receiver": "HPryFDafzYYPHq8GLCMkLpRFUbUpYDba9hqj3YAdLcnt",
                     "amount": 3
                  },
                  "source_protocol": {
                     "address": "11111111111111111111111111111111",
                     "name": "SYSTEM_PROGRAM"
                  },
                  "type": "SOL_TRANSFER"
               }
            ]
         },
         {
            "timestamp": "2023-10-13T03:59:15.000Z",
            "fee": 0.00001,
            "fee_payer": "HPryFDafzYYPHq8GLCMkLpRFUbUpYDba9hqj3YAdLcnt",
            "signers": [
               "HPryFDafzYYPHq8GLCMkLpRFUbUpYDba9hqj3YAdLcnt",
               "3UxAHo3Mc5TjmvAGT7CYNCm3uC2dkq9dp7S4eph1cnjU"
            ],
            "signatures": [
               "3ELFwwjbdHaJFuRRCNTaJ2BBKZD42kHLA3KFfUgeJNadZqnRqqRUMGvzU8xeauxbZxmk6BWeei1NpLfxJ8eQndcy",
               "4XLnBZwb1uoyDhJbJfqSu5hP21c8cvcJsuV3SQHQcCCgVCLY8jbwaphb8G3QXwyLRRcnJmvpSS6TzkY6RDgdE6S2"
            ],
            "protocol": {
               "address": "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s",
               "name": "METAPLEX"
            },
            "type": "NFT_MINT",
            "status": "Success",
            "actions": [
               {
                  "info": {
                     "nft_address": "3UxAHo3Mc5TjmvAGT7CYNCm3uC2dkq9dp7S4eph1cnjU",
                     "amount": 1,
                     "owner": "HPryFDafzYYPHq8GLCMkLpRFUbUpYDba9hqj3YAdLcnt",
                     "owner_associated_account": "37ADmMBtWKXafNdzVRrQBJb7GTTgbeHza9U7bNenQpuT"
                  },
                  "source_protocol": {
                     "address": "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s",
                     "name": "METAPLEX"
                  },
                  "type": "NFT_MINT"
               },
               {
                  "info": {
                     "sender": "HPryFDafzYYPHq8GLCMkLpRFUbUpYDba9hqj3YAdLcnt",
                     "receiver": "1Z1Ra8hv9QokHQGboXHsq8G96cKqs7gLn9daYm1uspf",
                     "amount": 0.01561672
                  },
                  "source_protocol": {
                     "address": "11111111111111111111111111111111",
                     "name": "SYSTEM_PROGRAM"
                  },
                  "type": "SOL_TRANSFER",
                  "parent_protocol": "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
               },
               {
                  "info": {
                     "sender": "HPryFDafzYYPHq8GLCMkLpRFUbUpYDba9hqj3YAdLcnt",
                     "receiver": "3xfmZ4iA9NC3MZPhputswUWawhyh3Vdymt6J4p7NanQg",
                     "amount": 0.0028536
                  },
                  "source_protocol": {
                     "address": "11111111111111111111111111111111",
                     "name": "SYSTEM_PROGRAM"
                  },
                  "type": "SOL_TRANSFER",
                  "parent_protocol": "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
               },
               {
                  "info": {
                     "sender": "HPryFDafzYYPHq8GLCMkLpRFUbUpYDba9hqj3YAdLcnt",
                     "receiver": "7TfMNSZ2UHznQBmKF3QJG7VpiF4kKR6Pc9UaFQVfy5zs",
                     "amount": 0.01
                  },
                  "source_protocol": {
                     "address": "11111111111111111111111111111111",
                     "name": "SYSTEM_PROGRAM"
                  },
                  "type": "SOL_TRANSFER"
               }
            ]
         },
         {
            "timestamp": "2023-10-13T03:58:29.000Z",
            "fee": 0.00001,
            "fee_payer": "HPryFDafzYYPHq8GLCMkLpRFUbUpYDba9hqj3YAdLcnt",
            "signers": [
               "HPryFDafzYYPHq8GLCMkLpRFUbUpYDba9hqj3YAdLcnt",
               "KvLFo27u3FRDpdB9TrRYcbiWWojiwYmd32n95cqVyKC"
            ],
            "signatures": [
               "2WjRNiLmykwgUQ3uV5PzRxGDaHnC8PxQ5J2B3U85SZPff6L1fqrZFeHxHNKH2t4z8qeDFpmw4jAH3afvWbuV8hzX",
               "4xDqRn2Jfw68bXDEHWkLt9WgiT3HjZ3eyDbrQnVxnsUoRLNAbCzzo7QvfiW9gLACDVg1atn4AF14bP9DdEubvRLq"
            ],
            "protocol": {
               "address": "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s",
               "name": "METAPLEX"
            },
            "type": "NFT_MINT",
            "status": "Success",
            "actions": [
               {
                  "info": {
                     "nft_address": "KvLFo27u3FRDpdB9TrRYcbiWWojiwYmd32n95cqVyKC",
                     "amount": 1,
                     "owner": "HPryFDafzYYPHq8GLCMkLpRFUbUpYDba9hqj3YAdLcnt",
                     "owner_associated_account": "Ghi1C3NdacNBxMijbJ6y1K3J39fgeTqCEC2eQZzZKBQc"
                  },
                  "source_protocol": {
                     "address": "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s",
                     "name": "METAPLEX"
                  },
                  "type": "NFT_MINT"
               },
               {
                  "info": {
                     "sender": "HPryFDafzYYPHq8GLCMkLpRFUbUpYDba9hqj3YAdLcnt",
                     "receiver": "G2UonvQGuJpmQTvYuF8gqgvyv9fT6zp3hSFBS95z4EQn",
                     "amount": 0.01561672
                  },
                  "source_protocol": {
                     "address": "11111111111111111111111111111111",
                     "name": "SYSTEM_PROGRAM"
                  },
                  "type": "SOL_TRANSFER",
                  "parent_protocol": "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
               },
               {
                  "info": {
                     "sender": "HPryFDafzYYPHq8GLCMkLpRFUbUpYDba9hqj3YAdLcnt",
                     "receiver": "H2vQbkzUkZ4WzwuiaV3B2mynejPy1G6sNeVt3PzQbgEC",
                     "amount": 0.0028536
                  },
                  "source_protocol": {
                     "address": "11111111111111111111111111111111",
                     "name": "SYSTEM_PROGRAM"
                  },
                  "type": "SOL_TRANSFER",
                  "parent_protocol": "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
               },
               {
                  "info": {
                     "sender": "HPryFDafzYYPHq8GLCMkLpRFUbUpYDba9hqj3YAdLcnt",
                     "receiver": "7TfMNSZ2UHznQBmKF3QJG7VpiF4kKR6Pc9UaFQVfy5zs",
                     "amount": 0.01
                  },
                  "source_protocol": {
                     "address": "11111111111111111111111111111111",
                     "name": "SYSTEM_PROGRAM"
                  },
                  "type": "SOL_TRANSFER"
               }
            ]
         },
         {
            "timestamp": "2023-10-04T03:35:13.000Z",
            "fee": 0.000005,
            "fee_payer": "devwuNsNYACyiEYxRNqMNseBpNnGfnd4ZwNHL7sphqv",
            "signers": [
               "devwuNsNYACyiEYxRNqMNseBpNnGfnd4ZwNHL7sphqv"
            ],
            "signatures": [
               "4sm3p3y5Fc2wTK4y8kVJRa69pW4sEZW3nasyVdF3VWhM4YJZhs8WcoqrAaHUYqfaNyw7sP8zxDoEkxGHuhviyGx5"
            ],
            "protocol": {
               "address": "11111111111111111111111111111111",
               "name": "SYSTEM_PROGRAM"
            },
            "type": "SOL_TRANSFER",
            "status": "Success",
            "actions": [
               {
                  "info": {
                     "sender": "devwuNsNYACyiEYxRNqMNseBpNnGfnd4ZwNHL7sphqv",
                     "receiver": "HPryFDafzYYPHq8GLCMkLpRFUbUpYDba9hqj3YAdLcnt",
                     "amount": 5
                  },
                  "source_protocol": {
                     "address": "11111111111111111111111111111111",
                     "name": "SYSTEM_PROGRAM"
                  },
                  "type": "SOL_TRANSFER"
               }
            ]
         }
      ]

   }

   static async getWallet() {
      let balance = await this.getBalance();
      let transactionHistory = await this.getTransactionHistory();

      return {
         balance,
         transactionHistory
      }
   }

   static async signTransaction(encodedTransaction) {
      const toTransaction = (encodedTransaction) => window.solanaWeb3.Transaction.from(Uint8Array.from(atob(encodedTransaction), c => c.charCodeAt(0)))
      const transaction = toTransaction(encodedTransaction);

      console.log(transaction);

      const signedTransaction = await window.phantom.solana.signTransaction(transaction);
      console.log("SIGN");
      const connection = new window.solanaWeb3.Connection(Config.CONNECTION);
      console.log("SEND RAW");
      await connection.sendRawTransaction(signedTransaction.serialize());

      console.log("TRANSACTION CONFIRMED!!!");
   }
}