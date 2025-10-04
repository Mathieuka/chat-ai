<script setup lang="ts">
import { useAuth } from '@/composable/auth.ts'

const newMessage = defineModel()
const { user } = useAuth()

defineProps<{
  messages: {
    content: string
    from: string
    to: string
    timestamp: Date
    id: string
  }[]
}>()
</script>

<template>
  <div class="chat-container">
    <ul class="messages">
      <li class="message" v-for="message in messages" :key="message.id">
        <p
          :class="{
            'message-from-current-user': message.to === user.id,
            'message-from-current-contact': message.to != user.id,
          }"
        >
          {{ message.content }}
        </p>
        <p class="">{{ message.timestamp.getTime() }}</p>
      </li>
    </ul>
    <div class="input-container">
      <input class="input" type="text" v-model="newMessage" />
      <button class="button">Send</button>
    </div>
  </div>
</template>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}

.messages {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: calc(100vh - 3rem); /* Adjust based on input area height */
  padding: 0;
  margin: 0;
  list-style: none;
}

.message {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  padding: 0.5rem;
}

.input-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}

.input {
  width: 80%;
  height: 2rem;
  border-top: 1px solid black;
  background: white;
}

.button {
  height: 2.3rem;
  width: 20%;
}

.message-from-current-user {
  color: blue;
}

.message-from-current-contact {
  color: black;
}
</style>
