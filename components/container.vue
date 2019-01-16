<template>
  <div class="c-container" :style="{ height: `${wh}px`}">
    <div class="c-container_body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      wh: 0,
      ww: 0,
      isResize: false
    }
  },
  methods: {
    onLoad () {
      this.wh = window.innerHeight
      this.ww = window.innerWidth
    },
    onResize () {
      if (!this.isResize && this.ww !== window.innerWidth) {
        this.isResize = true
        setTimeout(() => {
          this.wh = window.innerHeight
          this.ww = window.innerWidth
          this.isResize = false
        }, 100);
      }
    }
  },
  created() {
    window.addEventListener('load', this.onLoad)
    window.addEventListener('resize', this.onResize)
  },
}
</script>

<style scoped>
.c-container {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
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

