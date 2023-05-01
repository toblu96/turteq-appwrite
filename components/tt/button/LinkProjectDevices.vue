<template>
  <NButton secondary strong size="small" class="bg-slate-800 text-slate-400">
    <template #icon>
      <NIcon :component="IconDeveloperBoard" />
    </template>
    {{ count }}
  </NButton>
</template>

<script setup lang="ts">
import IconDeveloperBoard from '@vicons/fluent/DeveloperBoard24Regular'

defineProps({
  count: { type: Number, required: true }
})
</script>
