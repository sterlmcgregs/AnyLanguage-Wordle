import { CONFIG } from './config'

export const VALIDGUESSES = [
  'miptoo',
  'ngama',
  'bmose',
  'giiwse',
  'bezhik',
  'niibin',
  'wiiyaas',
  'miinan',
  'mzise',
  'mukwa',
  'esban',
  'nimosh',
  'bzhiki',
  'aandek',
  'mgizi',
  'magkii'
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
