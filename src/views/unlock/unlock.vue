<template>
  <div class="content-center">
    <div class="s-width">
      <app-ronin-logo class="logo" />
      <div class="app-name">Ronin Wallet</div>
      <div class="app-slogan">Your Digital Passport</div>
      <div class="app-form">
        <el-form ref="form" :model="formObj" label-position="top">
          <el-form-item class="tl-title" label="ENTER PASSWORD">
            <el-input
              class="w-100"
              show-password
              placeholder="Please input password"
              type="password"
              style="width: 300px;"
              v-model="formObj.password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="btn-primary">Unlock</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script src="./unlock.ts" />
<style scoped>
.logo {
  width: 40%;
}
.app-name {
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  color: #151a30;
  margin-top: 25px;
}
.app-slogan {
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
  color: #151a30;
  margin-top: 10px;
}
.app-form {
  margin: 30px 10px 0;
}
</style>
