import { create } from 'zustand'
import type { CheckoutCustomer, CustomerType } from '../types/checkout'
interface CheckoutState { customerType: CustomerType; customer?: CheckoutCustomer; setCustomerType: (type: CustomerType) => void; setCustomer: (customer: CheckoutCustomer) => void }
export const useCheckoutStore = create<CheckoutState>((set) => ({ customerType: 'b2c', customer: undefined, setCustomerType: (customerType) => set({ customerType }), setCustomer: (customer) => set({ customerType: customer.type, customer }) }))
