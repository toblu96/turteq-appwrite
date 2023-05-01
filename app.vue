<template>
  <NConfigProvider
    :theme="theme"
    :theme-overrides="theme === null ? lightThemeOverrides : darkThemeOverrides"
  >
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </NConfigProvider>
</template>
<script setup lang="ts">
import { GlobalThemeOverrides, darkTheme } from 'naive-ui'
import { slate, lime } from 'tailwindcss/colors'

// TODO: Add lightTheme support
const lightThemeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#000000'
  }
  // ...
}

const darkThemeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: lime[500],
    primaryColorHover: lime[600]
  },
  Select: {
    peers: {
      InternalSelectMenu: {
        color: slate[700]
      }
    }
  },
  Dropdown: {
    color: slate[700]
  }
}

const theme = darkTheme
</script>
