import type { CheckOptions, Update } from '@tauri-apps/plugin-updater'

export const checkUpdateSafe = async (
  _options?: CheckOptions,
): Promise<Update | null> => {
  return null
}

export type { CheckOptions }
