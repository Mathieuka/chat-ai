<script setup lang="ts">
import OnlineUserList from '@/components/OnlineUsersList.vue'
import { ref } from 'vue'

const users = ref([
  {
    id: 1,
    name: 'John Doe',
    isOnline: true,
  },
  {
    id: 2,
    name: 'Jane Smith',
    isOnline: true,
  },
  {
    id: 3,
    name: 'Alice Johnson',
    isOnline: false,
  },
])
</script>

<template>
  <div class="main-container">
    <OnlineUserList :users="users" />
    <div class="chat">Chat</div>
    <div class="notification">Notification</div>
  </div>
</template>

<style scoped>
.main-container {
  display: grid;
  grid-template-columns: 0.5fr 1fr 0.5fr;
  gap: 1rem;
  border: 1px solid black;
  height: 100vh;
  max-width: 80rem;
  max-height: 50rem;
  padding: 1rem;
  margin: auto;
  border-radius: 0.7rem;
}

.chat {
  border: 0.1rem solid black;
  border-radius: 2rem;
}

.notification {
  border: 0.2rem solid black;
  border-radius: 2rem;
}
</style>
