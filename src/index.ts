import type { Plugin } from 'vite'
import type { StarterOptions } from './typing'

export const starterPlugin = (_opt: StarterOptions): Plugin => {
  return {
    name: 'vite-plugin-starter',
  }
}
