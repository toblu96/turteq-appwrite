<template>
  <div>
    <button @click="loginWithEmail('admin@admin.com', 'admin1234')">
      login
    </button>
    <button @click="logout">
      logout
    </button>
    <div>
      <NDynamicTags v-model:value="tags" :max="3" />
      {{ tags }}
    </div>
    <button @click="addTag">
      add
    </button>

    <br>
    <br>

    <pre>{{ auth }}</pre>
  </div>
</template>

<script setup lang="ts">

const auth = useAuth()
const { loginWithEmail, logout } = useAuthClient()

const tags = ref(['teacher', 'programmer'])

const addTag = () => {
  tags.value.push('nope')
}
</script>
