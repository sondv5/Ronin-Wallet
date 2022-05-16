<template>
  <div id="app">
    <app-background />
    <transition name="bounce">
      <router-view />
    </transition>
    <app-loading />
  </div>
</template>

<style>
#app {
  font-family: Open Sans, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
  transform-origin: 50% 0;
}
.bounce-leave-active {
  opacity: 0;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  70% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
