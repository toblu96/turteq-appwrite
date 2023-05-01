<template>
  <NSelect
    v-model:value="selectedTeam"
    :options="teamMemberships.teams.map(({$id, name, prefs}) => {
      return {
        value: $id,
        name,
        prefs
      }
    })"
    :render-label="renderLabel"
    :render-tag="renderSingleSelectTag"
    filterable
    :loading="false"
    placeholder="Select team"
    size="large"
    @update-value="teamSelectionChanged"
  />
  {{ selectedTeam }}
</template>

<script setup lang="ts">
import {
  NAvatar,
  NText,
  SelectRenderTag,
  SelectRenderLabel
} from 'naive-ui'

const selectedTeam = ref('')

const { teams, account } = useAppwrite()
const teamMemberships = await teams.list()
const userPrefs = await account.getPrefs()

// check if the last selected team was stored
if (userPrefs.activeTeam) {
  selectedTeam.value = userPrefs.activeTeam
} else {
  selectedTeam.value = teamMemberships.teams[0].$id
  // store current team to users prefs
  await account.updatePrefs({
    activeTeam: teamMemberships.teams[0].$id
  })
}

const teamSelectionChanged = async (teamId: string) => {
  try {
    await account.updatePrefs({
      activeTeam: teamId
    })
  } catch (error) {
    console.error(error)
  }
}

const renderSingleSelectTag: SelectRenderTag = ({ option: team }) => {
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
            team.name as string
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
          h('div', null, [option.name as string]),
          h(
            NText,
            { depth: 3, tag: 'div' },
            {
              default: () => option.prefs.desc || '-'
            }
          )
        ]
      )
    ]
  )
}

</script>
