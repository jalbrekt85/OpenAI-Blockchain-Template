# OpenAI API Blockchain Template

# Template using:
**Backend**
- Brownie 
- Solidity
- Chainlink

**Frontend**
- NextJS with Typescript and EsLint
- ChakraUI

# Getting Started

### Setup your Chainlink Node
[Setup a chainlink node](https://docs.chain.link/docs/running-a-chainlink-node/)

[Quickstart Template](https://github.com/itsdevcoffee/chainlink-fun)

[Video Tutorial](https://youtu.be/jJOjyDpg1aA)

### Add Your External Adapter
[OpenAI EA](https://github.com/jalbrekt85/CL-EA-OpenAI)

[Add your EA to your node](https://docs.chain.link/docs/node-operators/)

[EA Docs](https://docs.chain.link/docs/external-adapters/)


### Configure Your Backend
```bash
cd backend
```
```bash
pip install -r requirements.txt
```
* Add your PRIVATE_KEY in `.env`
* Configure your network & token addresses in `brownie-config`


### Modify & Deploy Your Contract

-Add your `oracle address` and `specID` to the `Consumer.sol` contract

-Fund your deploying address with link

-Deploy the Consumer contract with brownie console:

```bash
brownie console
```
```bash
run('deploy')
```
Save the Deployed Contract address

### Configure Your Frontend
```bash
cd frontend
```
```bash
yarn install
```
Add your network(s) `chainID` to `utils/connectors.ts`

Add your deployed Consumer Contract Address to ` const contractAddress` in `components/RequestForm.tsx`

Start the server:
```bash
yarn dev
```