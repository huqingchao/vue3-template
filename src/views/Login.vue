<template>
  <div style="margin-bottom: 20px">login</div>
  <div class="btn" @click="go">登录</div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const go = () => {
    router.push({ name: 'Home' });
  };
</script>

<style lang="less" scoped>
  .btn {
    background: #42b983;
    width: 200px;
    border-radius: 10px;
    margin: 0 auto;
    padding: 5px 0;
    cursor: pointer;
  }
</style>
