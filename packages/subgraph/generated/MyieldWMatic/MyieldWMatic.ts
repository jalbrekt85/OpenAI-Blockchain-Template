// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get spender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Deposit extends ethereum.Event {
  get params(): Deposit__Params {
    return new Deposit__Params(this);
  }
}

export class Deposit__Params {
  _event: Deposit;

  constructor(event: Deposit) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get shares(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Harvest extends ethereum.Event {
  get params(): Harvest__Params {
    return new Harvest__Params(this);
  }
}

export class Harvest__Params {
  _event: Harvest;

  constructor(event: Harvest) {
    this._event = event;
  }

  get rewardsAmount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get fees(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Withdraw extends ethereum.Event {
  get params(): Withdraw__Params {
    return new Withdraw__Params(this);
  }
}

export class Withdraw__Params {
  _event: Withdraw;

  constructor(event: Withdraw) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get shares(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class MyieldWMatic extends ethereum.SmartContract {
  static bind(address: Address): MyieldWMatic {
    return new MyieldWMatic("MyieldWMatic", address);
  }

  ADDRES_PROVIDER(): Address {
    let result = super.call(
      "ADDRES_PROVIDER",
      "ADDRES_PROVIDER():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_ADDRES_PROVIDER(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "ADDRES_PROVIDER",
      "ADDRES_PROVIDER():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  LENDING_POOL(): Address {
    let result = super.call("LENDING_POOL", "LENDING_POOL():(address)", []);

    return result[0].toAddress();
  }

  try_LENDING_POOL(): ethereum.CallResult<Address> {
    let result = super.tryCall("LENDING_POOL", "LENDING_POOL():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  MATIC_REWARDS(): Address {
    let result = super.call("MATIC_REWARDS", "MATIC_REWARDS():(address)", []);

    return result[0].toAddress();
  }

  try_MATIC_REWARDS(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "MATIC_REWARDS",
      "MATIC_REWARDS():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  MAX_BPS(): BigInt {
    let result = super.call("MAX_BPS", "MAX_BPS():(uint256)", []);

    return result[0].toBigInt();
  }

  try_MAX_BPS(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("MAX_BPS", "MAX_BPS():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  MIN_HEALTH(): BigInt {
    let result = super.call("MIN_HEALTH", "MIN_HEALTH():(uint256)", []);

    return result[0].toBigInt();
  }

  try_MIN_HEALTH(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("MIN_HEALTH", "MIN_HEALTH():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  PRECISION(): BigInt {
    let result = super.call("PRECISION", "PRECISION():(uint256)", []);

    return result[0].toBigInt();
  }

  try_PRECISION(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("PRECISION", "PRECISION():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  allowance(owner: Address, spender: Address): BigInt {
    let result = super.call(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(spender)]
    );

    return result[0].toBigInt();
  }

  try_allowance(owner: Address, spender: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(spender)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  approve(spender: Address, amount: BigInt): boolean {
    let result = super.call("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(spender),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);

    return result[0].toBoolean();
  }

  try_approve(spender: Address, amount: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(spender),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  balanceOf(account: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOfWant(): BigInt {
    let result = super.call("balanceOfWant", "balanceOfWant():(uint256)", []);

    return result[0].toBigInt();
  }

  try_balanceOfWant(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "balanceOfWant",
      "balanceOfWant():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  canBorrow(): BigInt {
    let result = super.call("canBorrow", "canBorrow():(uint256)", []);

    return result[0].toBigInt();
  }

  try_canBorrow(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("canBorrow", "canBorrow():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  canRepay(): BigInt {
    let result = super.call("canRepay", "canRepay():(uint256)", []);

    return result[0].toBigInt();
  }

  try_canRepay(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("canRepay", "canRepay():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  decimals(): i32 {
    let result = super.call("decimals", "decimals():(uint8)", []);

    return result[0].toI32();
  }

  try_decimals(): ethereum.CallResult<i32> {
    let result = super.tryCall("decimals", "decimals():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  decreaseAllowance(spender: Address, subtractedValue: BigInt): boolean {
    let result = super.call(
      "decreaseAllowance",
      "decreaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(subtractedValue)
      ]
    );

    return result[0].toBoolean();
  }

  try_decreaseAllowance(
    spender: Address,
    subtractedValue: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "decreaseAllowance",
      "decreaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(subtractedValue)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  deposit(amount: BigInt): BigInt {
    let result = super.call("deposit", "deposit(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);

    return result[0].toBigInt();
  }

  try_deposit(amount: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("deposit", "deposit(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  deposited(): BigInt {
    let result = super.call("deposited", "deposited():(uint256)", []);

    return result[0].toBigInt();
  }

  try_deposited(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("deposited", "deposited():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  feeBps(): BigInt {
    let result = super.call("feeBps", "feeBps():(uint256)", []);

    return result[0].toBigInt();
  }

  try_feeBps(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("feeBps", "feeBps():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  feeRecipient(): Address {
    let result = super.call("feeRecipient", "feeRecipient():(address)", []);

    return result[0].toAddress();
  }

  try_feeRecipient(): ethereum.CallResult<Address> {
    let result = super.tryCall("feeRecipient", "feeRecipient():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  fromDepositToShares(amount: BigInt): BigInt {
    let result = super.call(
      "fromDepositToShares",
      "fromDepositToShares(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(amount)]
    );

    return result[0].toBigInt();
  }

  try_fromDepositToShares(amount: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "fromDepositToShares",
      "fromDepositToShares(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(amount)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  fromSharesToWithdrawal(shares: BigInt): BigInt {
    let result = super.call(
      "fromSharesToWithdrawal",
      "fromSharesToWithdrawal(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(shares)]
    );

    return result[0].toBigInt();
  }

  try_fromSharesToWithdrawal(shares: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "fromSharesToWithdrawal",
      "fromSharesToWithdrawal(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(shares)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getRate(): BigInt {
    let result = super.call("getRate", "getRate():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getRate(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getRate", "getRate():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getRewardsBalance(): BigInt {
    let result = super.call(
      "getRewardsBalance",
      "getRewardsBalance():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getRewardsBalance(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getRewardsBalance",
      "getRewardsBalance():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getTotalValue(): BigInt {
    let result = super.call("getTotalValue", "getTotalValue():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getTotalValue(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getTotalValue",
      "getTotalValue():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  increaseAllowance(spender: Address, addedValue: BigInt): boolean {
    let result = super.call(
      "increaseAllowance",
      "increaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(addedValue)
      ]
    );

    return result[0].toBoolean();
  }

  try_increaseAllowance(
    spender: Address,
    addedValue: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "increaseAllowance",
      "increaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(addedValue)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  owed(): BigInt {
    let result = super.call("owed", "owed():(uint256)", []);

    return result[0].toBigInt();
  }

  try_owed(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("owed", "owed():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  rug(asset: Address, destination: Address): BigInt {
    let result = super.call("rug", "rug(address,address):(uint256)", [
      ethereum.Value.fromAddress(asset),
      ethereum.Value.fromAddress(destination)
    ]);

    return result[0].toBigInt();
  }

  try_rug(asset: Address, destination: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("rug", "rug(address,address):(uint256)", [
      ethereum.Value.fromAddress(asset),
      ethereum.Value.fromAddress(destination)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  strategist(): Address {
    let result = super.call("strategist", "strategist():(address)", []);

    return result[0].toAddress();
  }

  try_strategist(): ethereum.CallResult<Address> {
    let result = super.tryCall("strategist", "strategist():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  transfer(recipient: Address, amount: BigInt): boolean {
    let result = super.call("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(recipient),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);

    return result[0].toBoolean();
  }

  try_transfer(
    recipient: Address,
    amount: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(recipient),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  transferFrom(sender: Address, recipient: Address, amount: BigInt): boolean {
    let result = super.call(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(sender),
        ethereum.Value.fromAddress(recipient),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );

    return result[0].toBoolean();
  }

  try_transferFrom(
    sender: Address,
    recipient: Address,
    amount: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(sender),
        ethereum.Value.fromAddress(recipient),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  want(): Address {
    let result = super.call("want", "want():(address)", []);

    return result[0].toAddress();
  }

  try_want(): ethereum.CallResult<Address> {
    let result = super.tryCall("want", "want():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  withdraw(shares: BigInt): BigInt {
    let result = super.call("withdraw", "withdraw(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(shares)
    ]);

    return result[0].toBigInt();
  }

  try_withdraw(shares: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("withdraw", "withdraw(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(shares)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class DecreaseAllowanceCall extends ethereum.Call {
  get inputs(): DecreaseAllowanceCall__Inputs {
    return new DecreaseAllowanceCall__Inputs(this);
  }

  get outputs(): DecreaseAllowanceCall__Outputs {
    return new DecreaseAllowanceCall__Outputs(this);
  }
}

export class DecreaseAllowanceCall__Inputs {
  _call: DecreaseAllowanceCall;

  constructor(call: DecreaseAllowanceCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get subtractedValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DecreaseAllowanceCall__Outputs {
  _call: DecreaseAllowanceCall;

  constructor(call: DecreaseAllowanceCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class DepositCall extends ethereum.Call {
  get inputs(): DepositCall__Inputs {
    return new DepositCall__Inputs(this);
  }

  get outputs(): DepositCall__Outputs {
    return new DepositCall__Outputs(this);
  }
}

export class DepositCall__Inputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class DepositCall__Outputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class DepositAllCall extends ethereum.Call {
  get inputs(): DepositAllCall__Inputs {
    return new DepositAllCall__Inputs(this);
  }

  get outputs(): DepositAllCall__Outputs {
    return new DepositAllCall__Outputs(this);
  }
}

export class DepositAllCall__Inputs {
  _call: DepositAllCall;

  constructor(call: DepositAllCall) {
    this._call = call;
  }
}

export class DepositAllCall__Outputs {
  _call: DepositAllCall;

  constructor(call: DepositAllCall) {
    this._call = call;
  }
}

export class DivestFromAAVECall extends ethereum.Call {
  get inputs(): DivestFromAAVECall__Inputs {
    return new DivestFromAAVECall__Inputs(this);
  }

  get outputs(): DivestFromAAVECall__Outputs {
    return new DivestFromAAVECall__Outputs(this);
  }
}

export class DivestFromAAVECall__Inputs {
  _call: DivestFromAAVECall;

  constructor(call: DivestFromAAVECall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class DivestFromAAVECall__Outputs {
  _call: DivestFromAAVECall;

  constructor(call: DivestFromAAVECall) {
    this._call = call;
  }
}

export class IncreaseAllowanceCall extends ethereum.Call {
  get inputs(): IncreaseAllowanceCall__Inputs {
    return new IncreaseAllowanceCall__Inputs(this);
  }

  get outputs(): IncreaseAllowanceCall__Outputs {
    return new IncreaseAllowanceCall__Outputs(this);
  }
}

export class IncreaseAllowanceCall__Inputs {
  _call: IncreaseAllowanceCall;

  constructor(call: IncreaseAllowanceCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get addedValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class IncreaseAllowanceCall__Outputs {
  _call: IncreaseAllowanceCall;

  constructor(call: IncreaseAllowanceCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class RebalanceCall extends ethereum.Call {
  get inputs(): RebalanceCall__Inputs {
    return new RebalanceCall__Inputs(this);
  }

  get outputs(): RebalanceCall__Outputs {
    return new RebalanceCall__Outputs(this);
  }
}

export class RebalanceCall__Inputs {
  _call: RebalanceCall;

  constructor(call: RebalanceCall) {
    this._call = call;
  }
}

export class RebalanceCall__Outputs {
  _call: RebalanceCall;

  constructor(call: RebalanceCall) {
    this._call = call;
  }
}

export class ReinvestRewardsCall extends ethereum.Call {
  get inputs(): ReinvestRewardsCall__Inputs {
    return new ReinvestRewardsCall__Inputs(this);
  }

  get outputs(): ReinvestRewardsCall__Outputs {
    return new ReinvestRewardsCall__Outputs(this);
  }
}

export class ReinvestRewardsCall__Inputs {
  _call: ReinvestRewardsCall;

  constructor(call: ReinvestRewardsCall) {
    this._call = call;
  }
}

export class ReinvestRewardsCall__Outputs {
  _call: ReinvestRewardsCall;

  constructor(call: ReinvestRewardsCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RepayAAVECall extends ethereum.Call {
  get inputs(): RepayAAVECall__Inputs {
    return new RepayAAVECall__Inputs(this);
  }

  get outputs(): RepayAAVECall__Outputs {
    return new RepayAAVECall__Outputs(this);
  }
}

export class RepayAAVECall__Inputs {
  _call: RepayAAVECall;

  constructor(call: RepayAAVECall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RepayAAVECall__Outputs {
  _call: RepayAAVECall;

  constructor(call: RepayAAVECall) {
    this._call = call;
  }
}

export class RugCall extends ethereum.Call {
  get inputs(): RugCall__Inputs {
    return new RugCall__Inputs(this);
  }

  get outputs(): RugCall__Outputs {
    return new RugCall__Outputs(this);
  }
}

export class RugCall__Inputs {
  _call: RugCall;

  constructor(call: RugCall) {
    this._call = call;
  }

  get asset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get destination(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RugCall__Outputs {
  _call: RugCall;

  constructor(call: RugCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class SetFeeBpsCall extends ethereum.Call {
  get inputs(): SetFeeBpsCall__Inputs {
    return new SetFeeBpsCall__Inputs(this);
  }

  get outputs(): SetFeeBpsCall__Outputs {
    return new SetFeeBpsCall__Outputs(this);
  }
}

export class SetFeeBpsCall__Inputs {
  _call: SetFeeBpsCall;

  constructor(call: SetFeeBpsCall) {
    this._call = call;
  }

  get newFeeBps(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetFeeBpsCall__Outputs {
  _call: SetFeeBpsCall;

  constructor(call: SetFeeBpsCall) {
    this._call = call;
  }
}

export class SetFeeRecipientCall extends ethereum.Call {
  get inputs(): SetFeeRecipientCall__Inputs {
    return new SetFeeRecipientCall__Inputs(this);
  }

  get outputs(): SetFeeRecipientCall__Outputs {
    return new SetFeeRecipientCall__Outputs(this);
  }
}

export class SetFeeRecipientCall__Inputs {
  _call: SetFeeRecipientCall;

  constructor(call: SetFeeRecipientCall) {
    this._call = call;
  }

  get newFeeRecipient(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetFeeRecipientCall__Outputs {
  _call: SetFeeRecipientCall;

  constructor(call: SetFeeRecipientCall) {
    this._call = call;
  }
}

export class SetStrategistCall extends ethereum.Call {
  get inputs(): SetStrategistCall__Inputs {
    return new SetStrategistCall__Inputs(this);
  }

  get outputs(): SetStrategistCall__Outputs {
    return new SetStrategistCall__Outputs(this);
  }
}

export class SetStrategistCall__Inputs {
  _call: SetStrategistCall;

  constructor(call: SetStrategistCall) {
    this._call = call;
  }

  get newStrategist(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetStrategistCall__Outputs {
  _call: SetStrategistCall;

  constructor(call: SetStrategistCall) {
    this._call = call;
  }
}

export class TransferCall extends ethereum.Call {
  get inputs(): TransferCall__Inputs {
    return new TransferCall__Inputs(this);
  }

  get outputs(): TransferCall__Outputs {
    return new TransferCall__Outputs(this);
  }
}

export class TransferCall__Inputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get recipient(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferCall__Outputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get recipient(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get shares(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class WithdrawFromAAVECall extends ethereum.Call {
  get inputs(): WithdrawFromAAVECall__Inputs {
    return new WithdrawFromAAVECall__Inputs(this);
  }

  get outputs(): WithdrawFromAAVECall__Outputs {
    return new WithdrawFromAAVECall__Outputs(this);
  }
}

export class WithdrawFromAAVECall__Inputs {
  _call: WithdrawFromAAVECall;

  constructor(call: WithdrawFromAAVECall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawFromAAVECall__Outputs {
  _call: WithdrawFromAAVECall;

  constructor(call: WithdrawFromAAVECall) {
    this._call = call;
  }
}

export class WithdrawStepFromAAVECall extends ethereum.Call {
  get inputs(): WithdrawStepFromAAVECall__Inputs {
    return new WithdrawStepFromAAVECall__Inputs(this);
  }

  get outputs(): WithdrawStepFromAAVECall__Outputs {
    return new WithdrawStepFromAAVECall__Outputs(this);
  }
}

export class WithdrawStepFromAAVECall__Inputs {
  _call: WithdrawStepFromAAVECall;

  constructor(call: WithdrawStepFromAAVECall) {
    this._call = call;
  }

  get canRepay(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawStepFromAAVECall__Outputs {
  _call: WithdrawStepFromAAVECall;

  constructor(call: WithdrawStepFromAAVECall) {
    this._call = call;
  }
}
