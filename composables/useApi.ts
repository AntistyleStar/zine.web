export function useApi(
  path: string,
  options: object = {}
) {
  // TODO: provide baseURL by .env
  let defaultOptions: any = {
    baseURL: 'http://api.host.local/api',
    credentials: "include",
    watch: false,
    headers: {
      Accept: 'application/json'
    }
  }

  const token = useCookie('XSRF-TOKEN')
  if (token.value) {
    defaultOptions.headers['X-XSRF-TOKEN'] = token.value as string
  }

  // useAsyncData ?
  return useFetch(path, {
    ...defaultOptions,
    ...options
  })
}
