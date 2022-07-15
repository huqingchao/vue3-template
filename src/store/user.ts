import { defineStore } from 'pinia';

export const useMainStore = defineStore({
  id: 'user',
  state: () => ({
    name: '超级管理员',
  }),
  getters: {
    nameLength: (state) => state.name.length,
  },
  actions: {
    changeName(name: string) {
      this.name = name;
    },
  },
});
