const api_jibbit_manager = require('api-jibbit-manager');
const upload_jibbit_use = require('upload-jibbit-use');
const enzyme = require('enzyme');
const ganache_cli = require('ganache-cli');
const validator = require('validator');
const ejs = require('ejs');

process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

// Deploy a smart contract using Truffle
const TruffleContract = require('@truffle/contract');
const contractJson = require('./build/contracts/YourContract.json');
const contract = TruffleContract(contractJson);
contract.setProvider(web3.currentProvider);

contract.deployed().then(instance => {
  console.log('Contract address:', instance.address);
}).catch(err => {
  console.error('Error deploying contract:', err);
});

const { Transform } = require('stream');
const upperCaseTr = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  }
});
process.stdin.pipe(upperCaseTr).pipe(process.stdout);

const assert = require('assert');
assert.strictEqual(1, 1, '1 is strictly equal to 1');

const mergeArrays = (arr1, arr2) => {
  return [...arr1, ...arr2];
};
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

const assert = require('assert');
assert.ok(true, 'This will not fail');

// Sign a message using a private key
const privateKey = '0x1234567890123456789012345678901234567890123456789012345678901234';
const message = 'Hello, Web3!';
const messageHash = web3.utils.sha3(message);
const signature = web3.eth.accounts.sign(messageHash, privateKey);

console.log('Message signature:', signature.signature);

const countOccurrences = (arr, val) => {
  return arr.reduce((acc, curr) => (curr === val ? acc + 1 : acc), 0);
};
console.log(countOccurrences([1, 2, 3, 4, 4, 4, 5], 4));