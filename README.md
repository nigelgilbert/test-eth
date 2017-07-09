You will need to install node.js

With node we can install ethereumjs-testrpc, web3, and solc

Make sure you initialize project first
`npm init`

`npm install solc ethereum-testrpc web3`

Compile your solidity contracts:
`./node_modules/.bin/solcjs "Greeter.sol" --abi --bin`

This will create abi and binary files for your contracts.

Start testrpc in another window to start up a test blockchain
`./node_modules/.bin/testrpc`

Then you can run the script `node index.js`

You can also run `./build.sh` (*nix) or `./build.bat` (windows) which recompiles the solidity contract and then executes it on the blockchain. This is useful for when you are making changes to your solidity contracts.
