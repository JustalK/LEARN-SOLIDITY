const ethers = require("ethers");
const fs = require("fs");

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(
    "http://127.0.0.1:7545"
  );
  const wallet = new ethers.Wallet(
    "0x4760ba7cd665cbae197b8fab3386aeee15c4b70dfc9e1f7179a776044ed43c37",
    provider
  );
  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
  const binary = fs.readFileSync(
    "./SimpleStorage_sol_SimpleStorage.bin",
    "utf8"
  );
  // const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  // console.log("Deploying...");
  // const contract = await contractFactory.deploy({ gasPrice: 100000000000 });
  // console.log(contract.deploymentReceipt);
  // const transactionReceipt = await contract.deployTransaction.wait(1);
  // console.log(transactionReceipt);
  const nonce = await wallet.getTransactionCount();
  const tx = {
    nonce,
    gasPrice: 20000000000,
    gasLimit: 1000000,
    to: null,
    value: 0,
    data: "0x60806040526040518060400160405280600281526020016040518060400160405280600781526020017f6a757374616c6b00000000000000000000000000000000000000000000000000815250815250600360008201518160000155602082015181600101908051906020019061007792919061008c565b50505034801561008657600080fd5b50610190565b8280546100989061012f565b90600052602060002090601f0160209004810192826100ba5760008555610101565b82601f106100d357805160ff1916838001178555610101565b82800160010185558215610101579182015b828111156101005782518255916020019190600101906100e5565b5b50905061010e9190610112565b5090565b5b8082111561012b576000816000905550600101610113565b5090565b6000600282049050600182168061014757607f821691505b6020821081141561015b5761015a610161565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6109358061019f6000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80636f760f411161005b5780636f760f411461010157806377ec2b551461011d5780638bab8dd51461013c5780639e7a13ad1461016c57610088565b8063076ce4c61461008d5780632e64cec1146100a9578063471f7cdf146100c75780636057361d146100e5575b600080fd5b6100a760048036038101906100a291906105a8565b61019d565b005b6100b16101ae565b6040516100be9190610665565b60405180910390f35b6100cf6101b7565b6040516100dc9190610665565b60405180910390f35b6100ff60048036038101906100fa91906105a8565b6101bd565b005b61011b6004803603810190610116919061054c565b6101c7565b005b610125610257565b604051610133929190610680565b60405180910390f35b61015660048036038101906101519190610503565b6102f1565b6040516101639190610665565b60405180910390f35b610186600480360381019061018191906105a8565b61031f565b604051610194929190610680565b60405180910390f35b6002816101aa919061072d565b5050565b60008054905090565b60005481565b8060008190555050565b6001604051806040016040528083815260200184815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101908051906020019061022d9291906103db565b50505080600283604051610241919061064e565b9081526020016040518091039020819055505050565b600380600001549080600101805461026e906107d3565b80601f016020809104026020016040519081016040528092919081815260200182805461029a906107d3565b80156102e75780601f106102bc576101008083540402835291602001916102e7565b820191906000526020600020905b8154815290600101906020018083116102ca57829003601f168201915b5050505050905082565b6002818051602081018201805184825260208301602085012081835280955050505050506000915090505481565b6001818154811061032f57600080fd5b9060005260206000209060020201600091509050806000015490806001018054610358906107d3565b80601f0160208091040260200160405190810160405280929190818152602001828054610384906107d3565b80156103d15780601f106103a6576101008083540402835291602001916103d1565b820191906000526020600020905b8154815290600101906020018083116103b457829003601f168201915b5050505050905082565b8280546103e7906107d3565b90600052602060002090601f0160209004810192826104095760008555610450565b82601f1061042257805160ff1916838001178555610450565b82800160010185558215610450579182015b8281111561044f578251825591602001919060010190610434565b5b50905061045d9190610461565b5090565b5b8082111561047a576000816000905550600101610462565b5090565b600061049161048c846106d5565b6106b0565b9050828152602081018484840111156104ad576104ac6108c8565b5b6104b8848285610791565b509392505050565b600082601f8301126104d5576104d46108c3565b5b81356104e584826020860161047e565b91505092915050565b6000813590506104fd816108e8565b92915050565b600060208284031215610519576105186108d2565b5b600082013567ffffffffffffffff811115610537576105366108cd565b5b610543848285016104c0565b91505092915050565b60008060408385031215610563576105626108d2565b5b600083013567ffffffffffffffff811115610581576105806108cd565b5b61058d858286016104c0565b925050602061059e858286016104ee565b9150509250929050565b6000602082840312156105be576105bd6108d2565b5b60006105cc848285016104ee565b91505092915050565b60006105e082610706565b6105ea8185610711565b93506105fa8185602086016107a0565b610603816108d7565b840191505092915050565b600061061982610706565b6106238185610722565b93506106338185602086016107a0565b80840191505092915050565b61064881610787565b82525050565b600061065a828461060e565b915081905092915050565b600060208201905061067a600083018461063f565b92915050565b6000604082019050610695600083018561063f565b81810360208301526106a781846105d5565b90509392505050565b60006106ba6106cb565b90506106c68282610805565b919050565b6000604051905090565b600067ffffffffffffffff8211156106f0576106ef610894565b5b6106f9826108d7565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b600061073882610787565b915061074383610787565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561077c5761077b610836565b5b828202905092915050565b6000819050919050565b82818337600083830152505050565b60005b838110156107be5780820151818401526020810190506107a3565b838111156107cd576000848401525b50505050565b600060028204905060018216806107eb57607f821691505b602082108114156107ff576107fe610865565b5b50919050565b61080e826108d7565b810181811067ffffffffffffffff8211171561082d5761082c610894565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b6108f181610787565b81146108fc57600080fd5b5056fea264697066735822122090c5116f205fdb8d154d44b9890f752bc5743f33d6f27f59db068ad74242546b64736f6c63430008070033",
    chainId: 1337,
  };
  const sentTxResponse = await wallet.sendTransaction(tx);
  await sentTxResponse.wait(1);
  console.log(sentTxResponse);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
