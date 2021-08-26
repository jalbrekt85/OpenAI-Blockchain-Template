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

### Configure Your Backend
```bash
cd backend
```
```bash
pip install -r requirements.txt
```
* Add your PRIVATE_KEY in `.env`
* Configure your network & token addresses in `brownie-config`


### Deploy Your Contract

Deploy the Consumer contract with brownie console:

```bash
brownie console
```
```bash
run('deploy')
```