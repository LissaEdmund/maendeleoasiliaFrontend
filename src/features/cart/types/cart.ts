import type { Product } from '../../catalog/types/product'

export type CartItem = {
  product: Product
  quantity: number
}