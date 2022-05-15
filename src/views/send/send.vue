<template>
  <div class="content-center" style="background-color: white;">
    <div class="s-width">
      <div class="title">
        <el-button
          @click="$router.push('/account')"
          icon="el-icon-arrow-left"
          circle
        ></el-button>
        Send Assets
      </div>
      <div class="app-form">
        <el-form
          @keydown.enter.native.prevent="checkPassword"
          ref="form"
          :model="formObj"
          label-position="top"
        >
          <el-form-item class="tl-title form-item" label="FROM">
            <el-input
              class="w-100"
              :disabled="true"
              placeholder="FROM"
              :value="`My Wallet (${account.address
                .toString()
                .match(/.{1,4}/g)
                .join(' ')})`"
            />
          </el-form-item>
          <el-form-item class="tl-title form-item" label="TO">
            <el-input
              class="w-100"
              show-password
              placeholder="TO"
              v-model="formObj.to"
            />
          </el-form-item>
          <el-form-item class="tl-title form-item" label="ASSET">
            <el-input
              class="w-100"
              placeholder="ASSET"
              v-model="formObj.asset"
            />
          </el-form-item>
          <el-form-item class="tl-title form-item" label="AMOUNT">
            <app-amount-select
              class="w-100"
              placeholder="AMOUNT"
              v-model="formObj.amount"
              :note="assetAvailable"
            />
          </el-form-item>
          <el-form-item class="w-100 form-item" style="margin-top: 50px;">
            <el-button class="btn btn-negative">
              Cancel
            </el-button>
            <el-button class="btn btn-primary">
              Send
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script src="./send.ts" />
<style scoped>
.title {
  font-size: 20px;
  font-weight: 600;
  padding: 10px;
  position: relative;
}
.title > button {
  position: absolute;
  left: 0;
  top: 0;
  padding: 12px;
  font-size: 24px;
}
.title >>> .el-button {
  font-size: 24px;
  border: none;
  box-shadow: none;
  padding: 12px;
}
.app-form {
  margin-top: 40px;
}
.btn {
  width: calc(50% - 5px);
}
</style>
