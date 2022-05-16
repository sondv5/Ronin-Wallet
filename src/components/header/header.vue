<template>
  <div class="info">
    <div class="name">
      <div class="circle">&nbsp;</div>
      <span>{{ account.name }}</span>
    </div>
    <el-popover placement="bottom" width="230" trigger="click">
      <el-button @click="lock">Lock and Reset Account Data</el-button>
      <div class="menu hover" slot="reference">
        <i class="el-icon-user-solid"></i>
      </div>
    </el-popover>
  </div>
</template>
<script src="./header.ts" />
<style scoped>
.info {
  display: flex;
  justify-content: space-between;
}
.name,
.menu {
  padding: 15px;
  background-color: #f7f9fc;
  font-weight: 700;
}
.name {
  font-size: 20px;
  border-radius: 8px;
  line-height: 32px;
}
.menu {
  font-size: 30px;
  border-radius: 8px;
  color: #1273ea;
}
.circle {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
  background-color: gray;
  line-height: 12px;
  margin: 0 15px 0 5px;
  background-color: #1273ea;
}
</style>
