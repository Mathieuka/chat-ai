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
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<style scoped>
.users {
  border: 0.2rem solid black;
  border-radius: 2rem;
}
</style>
