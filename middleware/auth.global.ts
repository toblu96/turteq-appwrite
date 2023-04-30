export default defineNuxtRouteMiddleware(async (to, from) => {
  // TODO: make middleware work on serverside too (hydration mismatch on login) - Problems on login page with h-full?
  // skip middleware on server
  if (process.server) { return }

  // redirect from login page if already logged in
  if (from.path === '/login' && to.path === '/login') {
    try {
      await useAppwrite().account.get()
      return navigateTo('/')
    } catch (error) {
      return
    }
  }
  // break infinite loop on login page
  if (to.path === '/login') { return }

  try {
    await useAppwrite().account.get()
  } catch {
    return navigateTo(`/login?redirect=${from.path}`)
  }
})
