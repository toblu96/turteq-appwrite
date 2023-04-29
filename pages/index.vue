<template>
  <div>
    <button @click="loginWithEmail('admin@admin.com', 'admin1234')">
      login
    </button>
    <button @click="logout">
      logout
    </button>
    <pre>{{ auth }}</pre>
  </div>
</template>

<script setup lang="ts">
const auth = useAuth()
const { loginWithEmail, logout } = useAuthClient()
</script>
