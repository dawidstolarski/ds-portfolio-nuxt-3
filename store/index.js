import { defineStore } from "pinia";
export const useMainStore = defineStore({
  id: "main-store",
  state: () => ({
    activeElement: null,
  }),
  actions: {
    setActive(activeElement) {
      this.activeElement = activeElement;
    },
  },
});
