import { Models } from 'node-appwrite'

// workaround because Models.Account does not exist in export of the module?
type Account = {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  name: string;
  registration: string;
  status: boolean;
  passwordUpdate: string;
  email: string;
  phone: string;
  emailVerification: boolean;
  phoneVerification: boolean;
  prefs: Models.Preferences;
}

export const useAuth = () => {
  const { $appwrite } = useNuxtApp()
  const session = ref<Account | undefined | null>(null)

  onBeforeMount(async () => {
    try {
      session.value = await $appwrite.account.get()
    } catch (e) {
      session.value = undefined
    }
  })

  return session
}
