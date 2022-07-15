<script setup lang="ts">
  import { useMainStore } from '/@/store/user';
  import { storeToRefs } from 'pinia';
  import { ref } from 'vue';

  defineProps<{ msg: string }>();
  const mainStore = useMainStore();
  const count = ref(0);
  const { name } = storeToRefs(mainStore);
  const { changeName } = mainStore;
  const input = ref('');
</script>

<template>
  <div>组件prop msg: {{ msg }}</div>

  <el-button @click="count++">count is: {{ count }}</el-button>

  <div>pinia state name is: {{ name }}</div>

  <el-input v-model="input" placeholder="Please input" @input="changeName" />
</template>

<style lang="less" scoped>
  div,
  .el-button {
    margin-bottom: 20px;
  }
  .el-input {
    width: 200px;
  }
</style>
