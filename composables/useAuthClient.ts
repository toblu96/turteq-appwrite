import { AppwriteException } from 'appwrite'

export const useAuthClient = () => {
  const { $appwrite } = useNuxtApp()
  const route = useRoute()

  const loginWithEmail = async (email: string, password: string) => {
    try {
      const session = await $appwrite.account.createEmailSession(email, password)
      if (session.$id) {
        // check if there was an active route before login
        route.query.redirect ? await navigateTo(route.query.redirect as string) : await navigateTo('/projects')
      }
    } catch (error) {
      const err = error as AppwriteException
      return err
    }
  }

  const logout = async () => {
    try {
      await $appwrite.account.deleteSession('current')
      navigateTo('/login')
    } catch (error) {
      const err = error as AppwriteException
      return err
    }
  }

  return { loginWithEmail, logout }
}
