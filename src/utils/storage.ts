const KEY = 'focus-nica-data'

export async function save(data: any) {
  await chrome.storage.local.set({ [KEY]: data })
}

export async function load() {
  const res = await chrome.storage.local.get(KEY)
  return res[KEY]
}