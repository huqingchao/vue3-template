<script setup lang="ts">
  import { useMainStore } from '/@/store/main';
  import { storeToRefs } from 'pinia';
  import { ref } from 'vue';

  const mainStore = useMainStore();

  defineProps<{ msg: string }>();

  const count = ref(0);
  const { name } = storeToRefs(mainStore);
  name.value = 'aa';
</script>

<template>
  <h1>{{ msg }}</h1>
  <button type="button" @click="count++">count is: {{ count }}</button>
  <div>pinia:{{ name }}</div>
</template>

<style scoped>
  a {
    color: #42b983;
  }

  label {
    margin: 0 0.5em;
    font-weight: bold;
  }

  code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
  }
</style>
