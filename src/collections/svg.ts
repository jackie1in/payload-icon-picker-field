import type { CollectionConfig } from 'payload'

import path from 'path'
import { fileURLToPath } from 'url'

export type Imagesize = 'homeHero' | 'small' | 'medium' | 'large' | 'xlarge'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export const SVG: CollectionConfig = {
  slug: 'svg',
  access: {
    read: (): boolean => true,
  },
  fields: [
    {
      name: 'svg',
      type: 'text',
      label: 'svg',
      required: true,
    },
  ],
  upload: {
    staticDir: path.resolve(dirname, '../../public/media'),
    mimeTypes: ['image/svg+xml'],
  },
}
