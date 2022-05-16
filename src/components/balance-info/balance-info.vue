<template>
  <div class="wallet">
    <div class="info" style="padding: 30px;">
      <div class="address">
        My Wallet
        <span style="color: #8dc9f9;"
          >({{
            account.address
              .toString()
              .match(/.{1,4}/g)
              .join(' ')
          }})
        </span>
      </div>
      <div class="copy">
        <i class="el-icon-document-copy"></i>
      </div>
    </div>
    <div class="divider"></div>
    <div class="info" style="padding: 30px;">
      <div class="balance">
        <div>{{ account.assets | sumToUSD | easyLook }} USD</div>
        <div>{{ account.assets | sumToVND | easyLook }} VNd</div>
      </div>
      <div class="logo" style="margin-top: 14px;">
        <app-ronin-logo stroke="#1B8FF3" fill="white" width="40" />
      </div>
    </div>
  </div>
</template>
<script src="./balance-info.ts" />
<style scoped>
.info {
  display: flex;
  justify-content: space-between;
}
.wallet {
  background: linear-gradient(256.28deg, #1c94f4 0%, #1273ea 100%);
  box-shadow: 0px 12px 20px -4px #c5cee0;
  border-radius: 20px;
  margin-top: 20px;
}
.address,
.copy {
  font-size: 22px;
  font-weight: 500;
  color: white;
  text-align: left;
}
.address {
  font-size: 18px;
}
.divider {
  border: 1px solid #68b8f8;
  margin: 0 30px;
}
.balance {
  text-align: left;
}
.balance > :nth-child(1) {
  color: white;
  font-weight: 700;
  font-size: 30px;
}
.balance > :nth-child(2) {
  font-weight: 400;
  font-size: 18px;
  color: #8dc9f9;
  margin-top: 10px;
}
</style>
