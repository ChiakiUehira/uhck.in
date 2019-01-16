<template>
  <div :style="{height: `${wh}px`}" :class="['p-root', isNightMode ? 'is-black' : '']">
    <div class="c-header">
      <div class="c-header_logo">
        <nuxt-link class="c-header_logo_link" to="/">uhck.in</nuxt-link>
        /
      </div>
    </div>
    <button class="p-nightmode" @click="setIsNightMode(!isNightMode)">
      <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <polygon id="Stroke-1" stroke-opacity="0.0117647061" stroke="#000000" stroke-width="1.33333336e-11" points="0 0 23.999999 0 23.999999 23.999999 0 23.999999"></polygon>
          <path class="p-nightmode_body" d="M9.9999997,2 C8.18000011,2 6.47000021,2.49999997 5,3.34999982 C7.98999962,5.07999972 9.9999997,8.29999982 9.9999997,11.9999994 C9.9999997,15.699999 7.98999962,18.919999 5,20.6499989 C6.47000021,21.4999988 8.18000011,21.9999988 9.9999997,21.9999988 C15.5199999,21.9999988 19.9999991,17.5199991 19.9999991,11.9999994 C19.9999991,6.47999923 15.5199999,2 9.9999997,2 Z" fill="#000000"></path>
        </g>
      </svg>
    </button>
    <nuxt/>
    <div class="p-copyright">© uhck.in</div>
    <div class="p-bg"></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      wh: 0,
      ww: 0,
      isResize: false
    }
  },
  computed: {
    ...mapGetters([
      'isNightMode'
    ])
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
    },
    ...mapActions([
      'setIsNightMode'
    ])
  },
  created() {
    window.addEventListener('load', this.onLoad)
    window.addEventListener('resize', this.onResize)
  },
}
</script>


<style>
html {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 14px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

@media screen and (max-width: 425px){
html {
  font-size: 12px;
}
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

::selection {
  color: #333;
  background-color: #eee;
}

:root {
  --text-primary: #000;
  --text-secondary: #333;
  --background-primary: #fff;
  --border-primary: #eee;
}

.p-root {
  height: 100vh;
  width: 100%;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}

.p-root.is-black {
  --text-primary: #fff;
  --text-secondary: #ccc;
  --background-primary: #000;
  --border-primary: #222;
}

.p-bg {
  background-color: var(--background-primary);
  width: 100%;
  height: 100%;
}

.c-header_logo {
  position: fixed;
  top: 18px;
  left: 14px;
  z-index: 2;
}
.c-header_logo,
.c-header_logo_link {
  color: var(--text-primary);
  font-weight: bold;
  text-decoration: none;
}
.c-header_logo_link:hover {
  text-decoration: underline;
}
.p-nightmode {
  appearance: none;
  border: none;
  outline: none;
  background: none;
  position: fixed;
  top: 14px;
  right: 14px;
  z-index: 2;
  cursor: pointer;
}
.p-nightmode_body {
  fill: var(--text-primary);
}
.p-copyright {
  position: fixed;
  bottom: 18px;
  right: 14px;
  color: var(--text-secondary);
}
</style>
