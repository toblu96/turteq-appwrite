import { Models } from 'appwrite'

export const useAuth = () => {
  const { $appwrite } = useNuxtApp()
  const session = ref<Models.Account<Models.Preferences> | undefined | null>(null)

  onBeforeMount(async () => {
    try {
      session.value = await $appwrite.account.get()
    } catch (e) {
      session.value = undefined
    }
  })

  return session
}
