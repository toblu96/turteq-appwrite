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
  </PageWithHeader>
</template>

<script setup lang="ts">
import IconAdd from '@vicons/fluent/Add16Regular'
</script>
