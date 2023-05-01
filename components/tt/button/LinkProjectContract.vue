<template>
  <NButton secondary strong size="small" class="bg-slate-800 text-slate-400">
    <template #icon>
      <NIcon :component="IconReceiptRegular" />
    </template>
  </NButton>
</template>

<script setup lang="ts">
import IconReceiptRegular from '@vicons/fluent/Receipt24Regular'
</script>
