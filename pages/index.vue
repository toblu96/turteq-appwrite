<template>
  <PageWithHeader>
    <template #header>
      <div class="flex items-center justify-between w-full">
        <div class="flex space-x-2">
          <h1 class="font-semibold">
            Projects
          </h1>
          <span class="text-slate-400 font-semibold">3</span>
        </div>
        <NButton size="small">
          <template #icon>
            <NIcon :component="IconAdd" size="16" class="text-slate-400" />
          </template>
          New project
        </NButton>
      </div>
    </template>
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
  </PageWithHeader>
</template>

<script setup lang="ts">
import IconAdd from '@vicons/fluent/Add16Regular'

const auth = useAuth()
const { loginWithEmail, logout } = useAuthClient()

const tags = ref(['teacher', 'programmer'])

const addTag = () => {
  tags.value.push('nope')
}
</script>
