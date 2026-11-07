export type CustomerType = 'b2c' | 'b2b'
export interface B2CCustomerDetails { fullName: string; phone: string; deliveryLocation: string }
export interface B2BCustomerDetails { businessId: string }
export type CheckoutCustomer = { type: 'b2c'; details: B2CCustomerDetails } | { type: 'b2b'; details: B2BCustomerDetails }
