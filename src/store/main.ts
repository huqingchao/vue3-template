import { defineStore } from 'pinia';

export const useMainStore = defineStore({
  id: 'main',
  state: () => ({
    name: '超级管理员',
  }),
  getters: {
    nameLength: (state) => state.name.length,
  },
  actions: {
    changeName(name: string) {
      // 可以做异步
      // await doAjaxRequest(data);
      this.name = name;
    },
  },
});

export function fun(a: string): string {
  return a + '222';
}
