<template>
  <div>
    <h1>Login page</h1>
    <button @click="loginWithEmail('admin@admin.com', 'admin1234')">
      login
    </button>
  </div>
</template>

<script setup lang="ts">
const { loginWithEmail } = useAuthClient()
</script>
