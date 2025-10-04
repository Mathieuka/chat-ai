<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  contacts: {
    id: number
    name: string
    isOnline: boolean
  }[]
}>()
</script>

<template>
  <div class="users">
    <p>Online Users</p>
    <ul class="users-list">
      <li class="user" v-for="contact in contacts" :key="contact.id">
        <div class="dot" :class="{ online: contact.isOnline, offline: !contact.isOnline }"></div>
        <div>{{ contact.name }}</div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.users {
  display: flex;
  flex-direction: column;
  text-align: center;
  border: 0.2rem solid black;
  border-radius: 2rem;
  background: gainsboro;
}

.users-list {
  padding: 0;
  width: 100%;
  text-align: center;
}

.user {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  padding-left: 1rem;
  margin-bottom: 0.4rem;
  list-style: none;
  background: white;
  border-radius: 0.3rem;
  margin-left: 1rem;
  margin-right: 1rem;
}

.dot {
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 50%;
}

.dot.online {
  background-color: #4caf50;
}

.dot.offline {
  background-color: #f44336;
}
</style>
