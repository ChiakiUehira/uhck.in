<template>
  <div class="c-container">
    <div class="c-container_body">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.c-container {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.c-container_body {
  max-width: 740px;
  width: 100%;
  padding: 0 20px;
}
</style>

