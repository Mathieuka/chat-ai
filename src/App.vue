<script setup lang="ts"></script>

<template>
  z
  <div class="main-container">
    <div class="users">Users</div>
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

.users {
  border: 0.2rem solid black;
  border-radius: 2rem;
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
