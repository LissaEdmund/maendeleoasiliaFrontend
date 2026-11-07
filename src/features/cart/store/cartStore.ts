import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import type { CartItem } from '../types/cart'
import type { Product } from '../../catalog/types/product'

type CartState = {
  items: CartItem[]
  addItem: (product: Product, quantity?: number) => number
  setQuantity: (slug: string, quantity: number) => void
  removeItem: (slug: string) => void
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, quantity = 1) => {
        const state = get()
        const existing = state.items.find((item) => item.product.slug === product.slug)
        const currentQuantity = existing?.quantity ?? 0
        const amountToAdd = Math.min(
          product.stock - currentQuantity,
          Math.max(0, Math.floor(quantity)),
        )

        if (amountToAdd === 0) return 0

        set({
          items: existing
            ? state.items.map((item) =>
                item.product.slug === product.slug
                  ? { ...item, quantity: currentQuantity + amountToAdd }
                  : item,
              )
            : [...state.items, { product, quantity: amountToAdd }],
        })

        return amountToAdd
      },
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