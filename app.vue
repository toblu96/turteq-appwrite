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
    primaryColorHover: lime[600],
    borderColor: slate[700],
    textColor2: slate[300] // button text
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
  },
  DataTable: {
    paginationMargin: '1.5rem',
    tdPaddingMedium: '0.75rem 1.5rem',
    thPaddingMedium: '0.4rem 1.5rem',
    tdColor: slate[950],
    tdColorHover: slate[900],
    thColor: slate[950],
    borderColor: slate[800]
  },
  Tooltip: {
    color: slate[700]
  }
}

const theme = darkTheme
</script>
