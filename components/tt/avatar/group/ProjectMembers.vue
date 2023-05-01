<template>
  <NAvatarGroup :options="options" :size="40" :max="3">
    <template #avatar="{ option: { name, src } }">
      <NTooltip>
        <template #trigger>
          <NAvatar :src="src" />
        </template>
        {{ name }}
      </NTooltip>
    </template>
    <template #rest="{ options: restOptions, rest }">
      <NDropdown :options="createDropdownOptions(restOptions)" placement="top" :show-arrow="true">
        <NAvatar>+{{ rest }}</NAvatar>
      </NDropdown>
    </template>
  </NAvatarGroup>
</template>

<script setup lang="ts">

const options = ref([
  {
    name: 'Leslie Alexander',
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Michael Foster',
    src: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Dries Vincent',
    src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Lindsay Walton',
    src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Courtney Henry',
    src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
])

const createDropdownOptions = (options: Array<{ name: string; src: string }>) =>
  options.map(option => ({
    key: option.name,
    label: option.name
  }))

</script>
