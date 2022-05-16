<template>
  <div class="w-100 wrapper">
    <el-input
      ref="elInput"
      :value="' '"
      v-bind="$attrs"
      v-on="$listeners"
      class="ip w-100"
      @focus="dialogVisible = true"
      suffix-icon="el-icon-money"
    />
    <div v-if="value" class="info">
      <img :src="`images/${value.toLowerCase()}.svg`" alt="" />
      <div>{{ value }}</div>
    </div>
    <el-dialog title="Asset" :visible.sync="dialogVisible">
      <div>
        <div
          @click="handleSelect(asset.unit)"
          class="asset pointer"
          v-for="asset in account.assets"
          :key="asset.unit"
        >
          <img :src="`images/${asset.unit.toLowerCase()}.svg`" alt="" />
          <div>
            <div class="quantity">
              {{ asset.quantity | easyLook }} {{ asset.unit }}
            </div>
            <div class="value">
              {{ asset.quantity | toVND(asset.unit) | easyLook }} VND
            </div>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script src="./asset-select.ts" />
<style scoped>
.ip >>> input {
  text-align: left;
  padding-right: 60px !important;
}
.wrapper {
  position: relative;
}
.suffix {
  position: absolute;
  top: 10px;
  right: 9px;
  font-size: 12px;
  padding: 4px 10px;
  color: #57627b;
  font-weight: 800;
  background-color: #eef3fb;
  line-height: 18px;
  border-radius: 8px;
}
.wrapper >>> .el-dialog {
  border-radius: 16px;
  max-width: 600px;
  min-width: 300px;
}
.wrapper >>> .el-dialog__header {
  border-bottom: solid 1px #c5cee0;
}
.assets {
  margin-top: 25px;
  text-align: left;
}
.asset {
  border-radius: 8px;
  display: flex;
}
.asset:hover {
  background-color: #f7f9fc;
}
.asset > img {
  width: 50px;
  height: 50px;
  margin: 14px;
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
  line-height: 20px;
}
.value {
  font-size: 14px;
  color: #8f9bb3;
  line-height: 20px;
}
.info {
  position: absolute;
  top: 1px;
  left: 2px;
  font-size: 14px;
  padding: 4px 10px;
  font-weight: 500;
  line-height: 18px;
  border-radius: 8px;
  display: flex;
  align-items: center;
}
.info > div {
  margin-left: 10px;
}
</style>
