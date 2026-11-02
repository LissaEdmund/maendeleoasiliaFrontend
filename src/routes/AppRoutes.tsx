import { Navigate, Route, Routes } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout'
import { CheckoutLayout } from '../layouts/CheckoutLayout'
import { HomePage } from '../pages/home/HomePage'
import { AboutUsPage } from '../pages/about/AboutUsPage'
import { HubsPage } from '../pages/hubs/HubsPage'
import { HubDetailsPage } from '../pages/hubs/HubDetailsPage'
import { JobsPage } from '../pages/jobs/JobsPage'
import { JobDetailsPage } from '../pages/jobs/JobDetailsPage'
import { JobApplicationPage } from '../pages/jobs/JobApplicationPage'
import { ContactsPage } from '../pages/contacts/ContactsPage'
import { ProductsPage } from '../features/catalog/pages/ProductsPage'
import { ProductDetailsPage } from '../features/catalog/pages/ProductDetailsPage'
import { CartPage } from '../features/cart/pages/CartPage'
import { CustomerDetailsPage } from '../features/checkout/pages/CustomerDetailsPage'
import { PaymentPage } from '../features/checkout/pages/PaymentPage'
import { OrderConfirmationPage } from '../features/checkout/pages/OrderConfirmationPage'
import { routePaths } from './routePaths'
import { PlaceholderPage } from '../pages/PlaceholderPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={routePaths.home} element={<HomePage />} />
        <Route path={routePaths.aboutUs} element={<AboutUsPage />} />
        <Route path={routePaths.products} element={<ProductsPage />} />
        <Route path={routePaths.product} element={<ProductDetailsPage />} />
        <Route path={routePaths.cart} element={<CartPage />} />
        <Route path={routePaths.hubs} element={<HubsPage />} />
        <Route path={routePaths.hub} element={<HubDetailsPage />} />
        <Route path={routePaths.jobs} element={<JobsPage />} />
        <Route path={routePaths.job} element={<JobDetailsPage />} />
        <Route path={routePaths.apply} element={<JobApplicationPage />} />
        <Route path={routePaths.contacts} element={<ContactsPage />} />
        <Route path={routePaths.privacyPolicy} element={<PlaceholderPage title="Privacy Policy" />} />
        <Route path={routePaths.termsAndConditions} element={<PlaceholderPage title="Terms & Conditions" />} />
        <Route path={routePaths.adminLogin} element={<PlaceholderPage title="Admin Login" />} />
        <Route path="*" element={<PlaceholderPage title="Page not found" />} />
      </Route>

      <Route path={routePaths.checkout} element={<CheckoutLayout />}>
        <Route index element={<Navigate to="customer-details" replace />} />
        <Route path="customer-details" element={<CustomerDetailsPage />} />
        <Route path="payment" element={<PaymentPage />} />
        <Route path="confirmation" element={<OrderConfirmationPage />} />
      </Route>
    </Routes>
  )
}
