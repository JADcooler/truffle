const Web3 = require("web3");

//reading abi
const fs = require("fs");


url = new Web3.providers.HttpProvider( `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`)
const web3 = new Web3(url)


// Creating a signing account from a private key
const signer = web3.eth.accounts.privateKeyToAccount(
    process.env.SIGNER_PRIVATE_KEY
  );
  web3.eth.accounts.wallet.add(signer);

const abi = JSON.parse(fs.readFileSync("build/contracts/HelloWorld.json"))["abi"];

const contract = new web3.eth.Contract(abi,address)

// Issuing a transaction that calls the `echo` method
const tx = contract.methods.echo("Hello, world!");
const receipt = await tx
    .send({
      from: signer.address,
      gas: await tx.estimateGas(),
    })
    .once("transactionHash", (txhash) => {
      console.log(`Mining transaction ...`);
      console.log(`https://goerli.etherscan.io/tx/${txhash}`);
    });
// The transaction is now on chain!
console.log(`Mined in block ${receipt.blockNumber}`);

//end

const rece = await tx.send({from: signer.address,gas: await tx.estimateGas()}).once("transactionHash", (txhash) => {console.log(`Mining transaction ...`);console.log(`https://goerli.etherscan.io/tx/${txhash}`);  });

web3.utils.hexToAscii(bytes)

contract.methods.func().call() returns value

web3.eth.sendTransaction({ from: account, data: bytecode }, function(err,res){console.log(res)});
