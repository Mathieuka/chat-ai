<script setup lang="ts">
import OnlineUserList from '@/components/OnlineUsersList.vue'
import ChatView from '@/components/ChatView.vue'
import NotificationView from '@/components/NotificationView.vue'
import { ref, watchEffect } from 'vue'

const newMessage = ref('')

watchEffect(() => {
  console.log(newMessage.value)
})

const contacts = [
  {
    id: '2',
    name: 'John Doe',
    isOnline: false,
  },
  {
    id: '3',
    name: 'Jane Smith',
    isOnline: false,
  },
  {
    id: '4',
    name: 'Alice Johnson',
    isOnline: false,
  },
]

const messages = [
  {
    content: 'Hello, how can I help you?',
    from: '2',
    to: '1',
    timestamp: new Date(),
    id: 1,
  },
  {
    content: 'I have a question about my order.',
    from: '1',
    to: '2',
    timestamp: new Date(),
    id: 2,
  },
  {
    content: 'Sure, what is your order number?',
    from: '2',
    to: '1',
    timestamp: new Date(),
    id: 3,
  },
  {
    content: "It's 12345.",
    from: '1',
    to: '2',
    timestamp: new Date(),
    id: 4,
  },
]
</script>

<template>
  <div class="main-container">
    <OnlineUserList :contacts="contacts" />
    <ChatView :messages="messages" v-model="newMessage" />
    <NotificationView />
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
</style>
