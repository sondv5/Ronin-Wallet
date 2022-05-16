<template>
  <div class="w-100 wrapper">
    <el-input-number
      ref="elInput"
      :min="min"
      :value="value"
      v-bind="$attrs"
      @blur="onBlur"
      @input="$emit('input', $event)"
      v-on="$listeners"
      :controls="false"
      class="ip w-100"
    />
    <div v-if="$attrs.note" class="note">
      {{ $attrs.note || '' }}
    </div>
    <div @click="$emit('setMax')" class="max pointer">MAX</div>
  </div>
</template>

<script src="./amount-select.ts" />
<style scoped>
.ip >>> input {
  text-align: left;
  padding-right: 60px !important;
}
.wrapper {
  position: relative;
}
.max {
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
.note {
  position: absolute;
  top: -28px;
  right: -6px;
  font-size: 12px;
  padding: 4px 10px;
  font-weight: 700;
  line-height: 18px;
}
</style>
