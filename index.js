fs = require('fs')
Web3 = require('web3')

web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

//Print out what accounts are available
//console.log(web3.eth.accounts)

//Read in the compiled smart contract
voting_sol = fs.readFileSync('voting.json').toString()

voting_contract = JSON.parse(voting_sol).contracts["Voting.sol:Voting"]

//This creates an object we’ll use to interact with the testrpc blockchain.
var VotingContract = web3.eth.contract(JSON.parse(voting_contract.abi))

var account = web3.eth.accounts[0];

// //Create an instance of the tutorial smart contract to be used
var deployedContract = VotingContract.new(
	['Rama','Nick','Jose'], 
	{data: voting_contract.bin, from: account, gas: 4700000}
	function(e, contract) {
		if(!e) {
  			if(!contract.address) {//Contract has not been mined
    			console.log("Contract transaction send: TransactionHash: " + contract.transactionHash + " waiting to be mined...");
  			} else {
    			console.log("Contract mined! Address: " + contract.address);
    			//console.log(contract);
    			console.log(contract.address);

    			contractInstance = VotingContract.at(contract.address);

    			console.log(contractInstance.totalVotesFor.call('Rama'))
    			contractInstance.voteForCandidate('Rama', {from: web3.eth.accounts[0]})
    			contractInstance.voteForCandidate('Rama', {from: web3.eth.accounts[0]})
    			contractInstance.voteForCandidate('Rama', {from: web3.eth.accounts[0]})
    			console.log(contractInstance.totalVotesFor.call('Rama').toLocaleString())
  			}
		}else { console.log(e); }
});