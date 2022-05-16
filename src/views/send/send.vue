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
          :rules="formRules"
          @keydown.enter.native.prevent="checkPassword"
          ref="form"
          :model="formObj"
          label-position="top"
        >
          <el-form-item class="tl-title form-item" prop="from" label="FROM">
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
          <el-form-item class="tl-title form-item" prop="to" label="TO">
            <el-input class="w-100" v-model="formObj.to" />
          </el-form-item>
          <el-form-item class="tl-title form-item" prop="asset" label="ASSET">
            <app-asset-select class="w-100" v-model="formObj.asset" />
          </el-form-item>
          <el-form-item prop="amount" class="tl-title form-item" label="AMOUNT">
            <app-amount-select
              class="w-100"
              v-model="formObj.amount"
              :note="assetAvailable"
              :allow-empty="true"
              :max="assetAvailableOrigin"
              @setMax="formObj.amount = assetAvailableOrigin"
            />
          </el-form-item>
          <el-form-item class="w-100 form-item" style="margin-top: 50px;">
            <el-button
              @click="$router.push('/account')"
              class="btn btn-negative"
            >
              Cancel
            </el-button>
            <el-button @click="submit" class="btn btn-primary">
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
