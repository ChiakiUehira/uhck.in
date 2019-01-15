<template>
  <container>
    <div class="p-profile">
      <div class="p-profile_header">
        <div class="p-profile_header_name">Chiaki Uehira</div>
        <div class="p-profile_header_roles">Designer / Programmer</div>
      </div>
      <div class="p-profile_body">
        フォントサイズは14pxです。フォントサイズは14pxです。フォントサイズは14pxです。フォントサイズは14pxです。フォントサイズは14pxです。フォントサイズは14pxです。フォントサイズは14pxです。フォントサイズは14pxです。フォントサイズは14pxです。フォントサイズは14pxです。フォントサイズは14pxです。フォントサイズは14pxです。フォントサイズは14pxです。フォントサイズは14pxです。フォントサイズは14pxです。フォントサイズは14pxです。フォントサイズは14pxです。フォントサイズは14pxです。
      </div>
      <div class="p-profile_footer">
        <div class="c-list">
          <div class="c-list_item">
            <a class="c-list_item_link" target="_blank" href="https://twitter.com/_uhck">Twitter</a>
          </div>
          <div class="c-list_item">
            <a class="c-list_item_link" target="_blank" href="https://www.facebook.com/hacocooo">Facebook</a>
          </div>
          <div class="c-list_item">
            <a class="c-list_item_link" target="_blank" href="https://github.com/in-the-box">GitHub</a>
          </div>
          <div class="c-list_item">
            <a class="c-list_item_link" href="mailto:me@uhck.in">Email</a>
          </div>
        </div>
      </div>
    </div>
  </container>
</template>

<script>
import container from '~/components/container'
export default {
  components: {
    container
  }
}
</script>

<style scoped>
.p-profile_header_name {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 4px;
  color: var(--text-primary);
}
.p-profile_header_roles {
  font-size: 18px;
  margin-bottom: 24px;
  color: var(--text-secondary);
}
.p-profile_header:after {
  content: '';
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--border-primary);
}
.p-profile_body {
  font-size: 14px;
  padding-top: 30px;
  color: var(--text-secondary);
}
.p-profile_body:after {
  content: '';
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--border-primary);
  margin-top: 30px;
}
.p-profile_footer {
  padding-top: 24px;
  display: flex;
  justify-content: flex-end;
}
.c-list_item {
  display: inline-block;
}
.c-list_item_link {
  color: var(--text-primary);
}
.c-list_item + .c-list_item:before {
  content: ' / ';
  color: var(--text-primary);
}
</style>
