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
      <NDropdown :options="createDropdownOptions(restOptions)" placement="top">
        <NAvatar>+{{ rest }}</NAvatar>
      </NDropdown>
    </template>
  </NAvatarGroup>
</template>

<script setup lang="ts">

const options = ref([
  {
    name: 'Leonardo DiCaprio',
    src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'
  },
  {
    name: 'Jennifer Lawrence',
    src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
  },
  {
    name: 'Audrey Hepburn',
    src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'
  },
  {
    name: 'Anne Hathaway',
    src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
  },
  {
    name: 'Taylor Swift',
    src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'
  }
])

const createDropdownOptions = (options: Array<{ name: string; src: string }>) =>
  options.map(option => ({
    key: option.name,
    label: option.name
  }))

</script>
