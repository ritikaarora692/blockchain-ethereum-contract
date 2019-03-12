//Module for connecting to deployed contract.
//Please replace value of contractAddress to deployed contract address


var Web3 = require('web3');
var fs = require('fs');
var contractAddress = "0x4ed508bc98a5df54e0dfdf6f13bd4bd5ee80d6f4";

web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
var abi = JSON.parse(fs.readFileSync('./abi/buyerSupplier.json', 'utf8'));
module.exports = new web3.eth.Contract(abi, contractAddress);
