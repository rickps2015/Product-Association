import { defineStore } from 'pinia'

export const useNotificationsStore = defineStore('notifications', {
  state: () => ({
    notification: null,
  }),

  actions: {
    showNotification(notification) {
      this.notification = notification;
    },

    clearNotification() {
      this.notification = null;
    },
  },
});
