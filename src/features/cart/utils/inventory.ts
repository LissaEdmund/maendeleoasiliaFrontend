import type { CartItem } from '../types/cart'
import type { Product } from '../../catalog/types/product'

export function getAvailableStock(product: Product, items: CartItem[]) {
  const inCart = items.find((item) => item.product.slug === product.slug)?.quantity ?? 0
  return Math.max(0, product.stock - inCart)
}
