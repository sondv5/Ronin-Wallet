<template>
  <div
    v-show="isLoading"
    class="loading"
    v-loading.fullscreen.lock="isLoading"
  ></div>
</template>
<script src="./loading.ts" />
<style scoped>
.loading {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  left: 0;
  top: 0;
}
</style>
