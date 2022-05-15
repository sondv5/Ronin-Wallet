<template>
  <svg
    class="bg"
    viewBox="0 0 1000 1000"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      v-for="(star, i) in stars"
      :key="i"
      :style="`transform: translate(${star.position[0]}px, ${star.position[1]}px);`"
    >
      <rect
        :width="star.size"
        :height="star.size"
        :style="`fill: ${star.color}; transform: rotate(45deg);`"
      />
    </g>
  </svg>
</template>
<script src="./background.ts" />
<style scoped>
.bg {
  position: fixed;
  width: 100vw;
  height: 50vh;
  z-index: 0;
  left: 0;
  top: 0;
}
</style>
