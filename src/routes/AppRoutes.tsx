import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout'
import { CheckoutLayout } from '../layouts/CheckoutLayout'
import { HomePage } from '../pages/home/HomePage'
import { PlaceholderPage } from '../pages/PlaceholderPage'
import { CustomerDetailsPage } from '../features/checkout/pages/CustomerDetailsPage'
import { PaymentPage } from '../features/checkout/pages/PaymentPage'
import { OrderConfirmationPage } from '../features/checkout/pages/OrderConfirmationPage'

export function AppRoutes() {
  return <BrowserRouter><Routes>
    <Route element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="products" element={<PlaceholderPage title="Products" />} />
      <Route path="products/:slug" element={<PlaceholderPage title="Product details" />} />
      <Route path="cart" element={<PlaceholderPage title="Shopping cart" />} />
      <Route path="hubs" element={<PlaceholderPage title="Hubs" />} />
      <Route path="hubs/:slug" element={<PlaceholderPage title="Hub details" />} />
      <Route path="jobs" element={<PlaceholderPage title="Jobs" />} />
      <Route path="jobs/:id" element={<PlaceholderPage title="Job details" />} />
      <Route path="jobs/:id/apply" element={<PlaceholderPage title="Apply for a job" />} />
      <Route path="contacts" element={<PlaceholderPage title="Contacts" />} />
    </Route>
    <Route path="checkout" element={<CheckoutLayout />}>
      <Route index element={<Navigate to="customer-details" replace />} />
      <Route path="customer-details" element={<CustomerDetailsPage />} />
      <Route path="payment" element={<PaymentPage />} />
      <Route path="confirmation" element={<OrderConfirmationPage />} />
    </Route>
    <Route path="*" element={<PlaceholderPage title="Page not found" />} />
  </Routes></BrowserRouter>
}
