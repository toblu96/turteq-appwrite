export default defineNuxtRouteMiddleware(async (to, from) => {
  // TODO: make middleware work on serverside too (hydration mismatch on login)
  // skip middleware on server
  if (process.server) { return }

  // break infinite loop on login page
  if (to.path === '/login') { return }

  try {
    await useAppwrite().account.get()
  } catch {
    return navigateTo(`/login?redirect=${from.path}`)
  }
})
