<template>
    <div class="notification-container">
        <div v-for="(notification, index) in notifications" :key="notification.id"
            :class="['notification', `notification-${notification.type}`]"
            :style="{ bottom: `${index * (notificationHeight + gap)}px` }" @transitionend="removeNotification(index)"
            ref="notificationItem">
            <div class="row justify-content-between">
                <div class="col-auto">
                    <strong>{{ notification.title }}</strong>
                </div>
                <div class="col-auto">
                    <font-awesome-icon icon="fa-solid fa-circle-xmark" class="cursor" @click="removeNotification(index)"/>
                </div>
            </div>
            <div class="row">
                <div class="col-auto">
                    {{ notification.message }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NotificacaoDefault',
    props: {
        notificationDuration: {
            type: Number,
            default: 3000
        },
        gap: {
            type: Number,
            default: 10
        }
    },
    data() {
        return {
            notifications: [],
            notificationHeight: 0 // Height of each notification
        };
    },
    methods: {
        addNotification(notification) {
            this.notifications.push(notification);
            setTimeout(() => {
                this.removeNotification(0);
            }, this.notificationDuration);
        },
        removeNotification(index) {
            this.notifications.splice(index, 1);
        },
        updateNotificationHeight() {
            this.$nextTick(() => {
                const notificationItem = this.$refs.notificationItem;
                if (notificationItem && notificationItem.length > 0) {
                    this.notificationHeight = notificationItem[0].offsetHeight;
                }
            });
        }
    },
    watch: {
        notifications: {
            handler(notifications) {
                if (notifications.length > 1) {
                    setTimeout(() => {
                        this.removeNotification(0);
                    }, this.notificationDuration);
                }
            },
            deep: true
        }
    },
    mounted() {
        this.updateNotificationHeight();
    },
    updated() {
        this.updateNotificationHeight();
    }
};
</script>

<style scoped>
@import "@/assets/notificacao.css";
</style>