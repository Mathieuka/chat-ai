import { ref } from 'vue'

export const useAuth = () => {
  const user = ref({
    id: '1',
    name: 'Matt',
  })

  return {
    user,
  }
}
