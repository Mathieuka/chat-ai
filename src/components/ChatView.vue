<script setup lang="ts">
defineProps<{
  messages: {
    content: string
    from: string
    timestamp: Date
    id: number
  }[]
}>()
</script>

<template>
  <div class="chat-container">
    <ul class="messages">
      <li class="message" v-for="message in messages" :key="message.id">
        <p>{{ message.content }}</p>
        <p>{{ message.timestamp.getTime() }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.messages {
  display: flex;
  flex-direction: column;
}

.message {
  display: flex;
  justify-content: space-between;
}
</style>
