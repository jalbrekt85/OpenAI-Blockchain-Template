from typing_extensions import ParamSpecArgs
from brownie import accounts, config, network, Consumer, interface

# Set key in brownie config
account = accounts.add(config['wallets']['from_key'])
print(network.show_active())

def main():
    deployed = Consumer.deploy({'from': account})
    print('Deployed By: ', account.address)
    print('Deployed Contract at:', deployed.address)
    link_token_address = config['networks'][network.show_active()]['link']
    amount = 1 * 10**18 # 1 Link token
    # Transfer Link to fund Consumer Contract for API calls
    transfer_token(link_token_address, deployed.address, amount)

def transfer_token(token_address, to_address, amount):
    token = interface.IERC20(token_address)
    token.transfer(to_address, amount, {'from': account})
    print(f'Transfered {amount} to {to_address}')