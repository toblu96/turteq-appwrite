<template>
  <NDropdown
    :options="options"
    placement="top-start"
    trigger="click"
    :on-select="onSelect"
  >
    <NSkeleton v-if="!auth" class="h-14" />
    <NButton v-else :theme-overrides="buttonThemeOverrides" class="h-14 rounded px-4 py-2 text-sm font-semibold leading-6 text-white border border-red-300 cursor-default">
      <div class="flex items-center text-left gap-x-4">
        <NAvatar class="h-8 w-8 bg-slate-800" fallback-src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg">
          {{ auth?.name.substring(0, 2).toUpperCase() }}
        </NAvatar>
        <span class="sr-only">Your profile</span>
        <span class="flex min-w-0 flex-1 flex-col">
          <span class="truncate text-sm font-medium ">{{ auth?.name || 'Darth Vader' }}</span>
          <span class="truncate text-sm text-slate-500">{{ auth?.email || 'death@star.universe' }}</span>
        </span>
      </div>
    </NButton>
  </NDropdown>
</template>

<script setup lang="ts">
import { DropdownOption, ButtonProps } from 'naive-ui'

type ButtonThemeOverrides = NonNullable<ButtonProps['themeOverrides']>
const buttonThemeOverrides: ButtonThemeOverrides = {
  border: '' // hides the default border
}

const { logout } = useAuthClient()
const auth = useAuth()

const options = ref([
  {
    label: 'Profile',
    key: 'profile'
    // icon: renderIcon(Person24Regular)
  },
  {
    label: 'Edit Profile',
    key: 'editProfile'
    // icon: renderIcon(Person24Regular)
  },
  {
    label: 'Logout',
    key: 'logout'
    // icon: renderIcon(Person24Regular)
  }
])

const onSelect = async (key: string, _option: DropdownOption) => {
  switch (key) {
    case 'logout':
      await logout()
      break

    default:
      break
  }
}
</script>
