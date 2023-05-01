<template>
  <NDataTable
    :columns="columns"
    :data="data"
    :pagination="paginationReactive"
  />
</template>

<script setup lang="ts">
const TTButtonLinkProjectDevices = resolveComponent('TTButtonLinkProjectDevices')
const TTButtonLinkProjectContract = resolveComponent('TTButtonLinkProjectContract')
const TTAvatarGroupProjectMembers = resolveComponent('TTAvatarGroupProjectMembers')
const NuxtLink = resolveComponent('NuxtLink')

const columns = [
  {
    title: 'Name',
    key: 'name',
    render (row: any) {
      return h(NuxtLink, {
        to: `/projects/${row.name}`,
        class: 'underline'
      }, () => `${row.name}`)
    }
  },
  {
    title: 'Description',
    key: 'desc'
  },
  {
    title: 'Status',
    key: 'status'
  },
  {
    title: 'Devices',
    key: 'devices',
    render (row: any) {
      return h(TTButtonLinkProjectDevices, {
        count: row.devices
      })
    }
  },
  {
    title: 'Contract',
    key: 'contract',
    render (_row: any) {
      return h(TTButtonLinkProjectContract)
    }
  },
  {
    title: 'Members',
    key: 'members',
    render (_row: any) {
      return h(TTAvatarGroupProjectMembers)
    }
  },
  {
    title: 'Guests',
    key: 'guests'
  }
]

const data = Array.from({ length: 46 }).map((_, index) => ({
  key: index,
  name: `Project ${index + 1}`,
  desc: 'Project desc.',
  status: 'Production',
  devices: 7
}))

const paginationReactive = ref({
  page: 1,
  pageSize: 10,
  showSizePicker: true,
  pageSizes: [10, 20, 50],
  onChange: (page: number) => {
    paginationReactive.value.page = page
  },
  onUpdatePageSize: (pageSize: number) => {
    paginationReactive.value.pageSize = pageSize
    paginationReactive.value.page = 1
  }
})

</script>
