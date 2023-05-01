<template>
  <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-slate-950 px-6 ring-1 ring-slate-700">
    <div class="flex h-16 shrink-0 items-center">
      <img class="h-8 w-auto" src="/img/logo.svg" alt="Company Logo">
    </div>
    <TTSelectTeamSelection />

    <NInput placeholder="Search...">
      <template #prefix>
        <NIcon :component="Search24Regular" />
      </template>
      <template #suffix>
        <div class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
          <kbd class="inline-flex items-center rounded border border-slate-400 px-1 font-sans text-sm text-slate-400">⌘K</kbd>
        </div>
      </template>
    </NInput>

    <nav class="flex flex-1 flex-col">
      <ul role="list" class="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list">
            <li v-for="item in navigation" :key="item.name">
              <NuxtLink :to="item.href" :class="[item.current ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800', 'group flex items-center gap-x-3 rounded-md px-2 py-1 text-sm leading-6 font-semibold']">
                <NIcon :component="item.icon" size="20" class="shrink-0" />
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </li>
        <li>
          <div class="text-xs font-semibold leading-6 text-slate-400">
            Your projects
          </div>
          <ul role="list" class="mt-2">
            <li v-for="team in teams" :key="team.name">
              <a :href="team.href" :class="[team.current ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800', 'group flex items-center gap-x-3 rounded-md px-2 py-1 text-sm leading-6 font-semibold']">
                <span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-slate-700 bg-slate-800 text-[0.625rem] font-medium text-slate-400 group-hover:text-white">{{ team.initial }}</span>
                <span class="truncate">{{ team.name }}</span>
              </a>
            </li>
          </ul>
        </li>
        <li class="-mx-6 mt-auto">
          <div class="p-2 pr-6 flex items-center justify-between">
            <TTDropdownUserProfile />
            <NBadge dot :show="true" :offset="[0, 3]">
              <NuxtLink class="flex items-center justify-center w-8 h-8 bg-slate-800 text-white rounded border border-transparent hover:border-lime-600">
                <NIcon size="20">
                  <Alert24Regular />
                </NIcon>
              </NuxtLink>
            </NBadge>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script setup lang="ts">
import Alert24Regular from '@vicons/fluent/Alert24Regular'
import Search24Regular from '@vicons/fluent/Search24Regular'
import Folder24Regular from '@vicons/fluent/Folder24Regular'
import Communication24Regular from '@vicons/fluent/Communication24Regular'
import Receipt24Regular from '@vicons/fluent/Receipt24Regular'
import Diversity24Regular from '@vicons/fluent/Diversity24Regular'
import Settings24Regular from '@vicons/fluent/Settings24Regular'

const navigation = [
  { name: 'Projects', href: '#', icon: Folder24Regular, current: true },
  { name: 'Activity', href: '#', icon: Communication24Regular, current: false },
  { name: 'Billing', href: '#', icon: Receipt24Regular, current: false },
  { name: 'Templates', href: '#', icon: Diversity24Regular, current: false },
  { name: 'Settings', href: '#', icon: Settings24Regular, current: false }
]
const teams = [
  { id: 1, name: 'Planetaria', href: '#', initial: 'P', current: false },
  { id: 2, name: 'Protocol', href: '#', initial: 'P', current: false },
  { id: 3, name: 'Tailwind Labs', href: '#', initial: 'T', current: false }
]

</script>
