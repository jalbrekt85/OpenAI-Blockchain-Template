//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";

/**
 * @notice DO NOT USE THIS CODE IN PRODUCTION. This is an example contract. 
 */
contract Consumer is ChainlinkClient {
  using Chainlink for Chainlink.Request;

  // variable bytes returned in a signle oracle response
  bytes public data;
  string public response;
  uint public fee = 100000000000;

  /**
   * @notice Initialize the link token and target oracle
   * @dev The oracle address must be an Operator contract for multiword response
   *
   *
   * Kovan Testnet details: 
   * Link Token: 0xa36085F69e2889c224210F603D836748e7dC0088
   * Oracle: 
   */
  constructor(
  ) {
    setChainlinkToken(0xa36085F69e2889c224210F603D836748e7dC0088);
    setChainlinkOracle();
  }

  /**
   * @notice Request variable bytes from the oracle
   */
  function requestBytes(string memory _prompt
  )
    public payable
  {
    require(msg.value >= fee);
    bytes32 specId = "Your Job Spec ID";
    uint256 payment = 10000000000000000000;
    Chainlink.Request memory req = buildChainlinkRequest(specId, address(this), this.fulfillBytes.selector);
    req.add("prompt", _prompt);
    requestOracleData(req, payment);
    
  }

  event RequestFulfilled(
    bytes32 indexed requestId,
    bytes indexed data
  );

  /**
   * @notice Fulfillment function for variable bytes
   * @dev This is called by the oracle. recordChainlinkFulfillment must be used.
   */
  function fulfillBytes(
    bytes32 requestId,
    bytes memory bytesData
  )
    public
    recordChainlinkFulfillment(requestId)
  {
    emit RequestFulfilled(requestId, bytesData);
    data = bytesData;
    response = string(data);
  }
  receive() external payable {}

}
