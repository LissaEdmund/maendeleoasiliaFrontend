import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import type { CartItem } from '../types/cart'
import type { Product } from '../../catalog/types/product'

type CartState = {
  items: CartItem[]
  addItem: (product: Product, quantity?: number) => void
  setQuantity: (slug: string, quantity: number) => void
  removeItem: (slug: string) => void
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (product, quantity = 1) => set((state) => {
        const existing = state.items.find((item) => item.product.slug === product.slug)
        if (existing) {
          return {
            items: state.items.map((item) =>
              item.product.slug === product.slug
                ? { ...item, quantity: Math.min(item.product.stock, item.quantity + quantity) }
                : item,
            ),
          }
        }
        return { items: [...state.items, { product, quantity: Math.min(product.stock, quantity) }] }
      }),
      setQuantity: (slug, quantity) => set((state) => ({
        items: state.items.map((item) =>
          item.product.slug === slug
            ? { ...item, quantity: Math.min(item.product.stock, Math.max(1, quantity)) }
            : item,
        ),
      })),
      removeItem: (slug) => set((state) => ({
        items: state.items.filter((item) => item.product.slug !== slug),
      })),
    }),
    {
      name: 'maendeleo-cart',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)