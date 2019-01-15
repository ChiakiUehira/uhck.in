<template>
  <div class="c-container">
    <div class="c-container_body">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.c-container {
  min-height: 100vh;
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

