<template>
  <div class="c-container" role="main">
    <div class="c-container_body">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.c-container {
  position: relative;
  z-index: 100;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.c-container_body {
  max-width: 740px;
  width: 100%;
  padding: 200px 20px;
}
</style>

