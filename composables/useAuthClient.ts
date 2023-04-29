export const useAuthClient = () => {
  const { $appwrite } = useNuxtApp()

  const loginWithEmail = async (email: string, password: string) => {
    // TODO: Error handling
    return await $appwrite.account.createEmailSession(email, password)
  }

  const logout = async () => {
    // TODO: Error handling
    return await $appwrite.account.deleteSession('current')
  }

  return { loginWithEmail, logout }
}
