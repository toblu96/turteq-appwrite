<template>
  <!-- Sticky search header -->
  <div class="text-white sticky top-0 z-40 flex h-14 shrink-0 items-center gap-x-6 border-b border-slate-700 bg-gray-950 px-4 shadow-sm sm:px-6 lg:px-8">
    <button type="button" class="flex items-center -m-2.5 p-2.5 xl:hidden text-slate-400 hover:text-white" @click="sidebarOpen = true">
      <span class="sr-only">Open sidebar</span>
      <NIcon :component="PanelLeft24Filled" size="20" />
    </button>

    <div class="flex flex-1 items-center gap-x-4 self-stretch lg:gap-x-6">
      <slot name="header" />
    </div>
  </div>

  <main class="text-white">
    <slot />
  </main>
</template>
<script setup lang="ts">
import PanelLeft24Filled from '@vicons/fluent/PanelLeft24Filled'
const sidebarOpen = useSidebar()
</script>
