<template>
  <div class="assets">
    <div class="title">Assets</div>
    <div class="asset" v-for="asset in account.assets" :key="asset.unit">
      <img :src="`images/${asset.unit.toLowerCase()}.svg`" alt="" />
      <div>
        <div class="quantity">{{ asset.quantity }} {{ asset.unit }}</div>
        <div class="value">{{ asset.quantity }} VNĐ</div>
      </div>
    </div>
  </div>
</template>
<script src="./assets.ts" />
<style scoped>
.assets {
  margin-top: 25px;
  text-align: left;
}
.assets > .title {
  font-size: 20px;
  font-weight: 600;
}
.asset {
  margin-top: 15px;
  background-color: #f7f9fc;
  border-radius: 8px;
  display: flex;
}
.asset > img {
  width: 50px;
  height: 50px;
  margin: 20px;
}
.asset > div {
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
}
.quantity {
  font-size: 18px;
  font-weight: 600;
}
.value {
  font-size: 14px;
  color: #8f9bb3;
  margin-top: 4px;
}
</style>
