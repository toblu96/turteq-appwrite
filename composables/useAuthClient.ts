export const useAuthClient = () => {
  const { $appwrite } = useNuxtApp()
  const route = useRoute()

  const loginWithEmail = async (email: string, password: string) => {
    // TODO: Error handling
    const session = await $appwrite.account.createEmailSession(email, password)
    if (session.$id) {
      // check if there was an active route before login
      route.query.redirect ? navigateTo(route.query.redirect as string) : navigateTo('/')
    }
  }

  const logout = async () => {
    // TODO: Error handling
    await $appwrite.account.deleteSession('current')
    navigateTo('/login')
  }

  return { loginWithEmail, logout }
}
