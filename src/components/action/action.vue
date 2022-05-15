<template>
  <div class="action">
    <div class="act-wrap">
      <el-button
        class="hover"
        :disabled="true"
        icon="el-icon-bank-card"
      ></el-button>
    </div>
    <div class="act-wrap">
      <el-button
        class="hover"
        @click="$emit('send')"
        icon="el-icon-s-promotion"
      ></el-button>
    </div>
    <div class="act-wrap">
      <el-button
        class="hover"
        :disabled="true"
        icon="el-icon-refresh"
      ></el-button>
    </div>
  </div>
</template>
<script src="./action.ts" />
<style scoped>
.action {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
.action >>> .el-button {
  color: #1c94f4;
  font-size: 40px;
  border: none;
  box-shadow: none;
  background-color: #f7f9fc;
  padding: 15px;
}
.action >>> .el-button.is-disabled {
  color: #8bc1f7;
  background-color: #f7f9fcd3;
}
.action .act-wrap + .act-wrap {
  margin-left: 20px;
}
</style>
