<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  users: {
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
      <li class="user" v-for="user in users" :key="user.id">
        <div class="dot"></div>
        <div>{{ user.name }}</div>
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
  background-color: #4caf50;
  border-radius: 50%;
}
</style>
