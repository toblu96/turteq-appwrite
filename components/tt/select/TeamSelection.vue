<template>
  <NSpace vertical>
    <NSelect
      v-model:value="data"
      :options="options"
      :render-label="renderLabel"
      :render-tag="renderSingleSelectTag"
      filterable
      :loading="false"
      placeholder="Select team"
      size="large"
    />
  </NSpace>
</template>

<script setup lang="ts">
import {
  NAvatar,
  NText,
  SelectRenderTag,
  SelectRenderLabel
} from 'naive-ui'

const options = ref([
  {
    label: 'RDIA Team',
    value: 'rdia-team'
  },
  {
    label: 'MDSE Team',
    value: 'mdse-team'
  },
  {
    label: 'Labor',
    value: 'labor'
  }
])
const data = ref(options.value[0].value)

const renderSingleSelectTag: SelectRenderTag = ({ option }) => {
  return h(
    'div',
    {
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    },
    [
      h(NAvatar, {
        src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
        round: true,
        size: 'small',
        style: {
          marginRight: '12px'
        }
      }),
            option.label as string
    ]
  )
}
const renderLabel: SelectRenderLabel = (option) => {
  return h(
    'div',
    {
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    },
    [
      h(NAvatar, {
        src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
        round: true,
        size: 'medium'
      }),
      h(
        'div',
        {
          style: {
            marginLeft: '12px',
            padding: '4px 0'
          }
        },
        [
          h('div', null, [option.label as string]),
          h(
            NText,
            { depth: 3, tag: 'div' },
            {
              default: () => 'description'
            }
          )
        ]
      )
    ]
  )
}

</script>
