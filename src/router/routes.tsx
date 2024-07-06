import { Route, createRoutesFromElements } from 'react-router-dom';

import Layout from '../components/layout/Layout';
import LandingPage from '../pages/landing/LandingPage';
import ContactsPage from '../pages/contacts/ContactsPage';
// import AboutUsPage from '../pages/aboutUs/AboutUsPage';
import ItemPage from '../pages/item/ItemPage';
import NotFoundPage from '../pages/notFound/NotFoundPage';
import Redirect from '../components/redirect/Redirect';
import CartPage from '../pages/cart/CartPage';

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />} >
    <Route index element={<Redirect />} />
    <Route path=':lang'>
      <Route index element={<LandingPage />} />
      <Route path="contacts" element={<ContactsPage />} />
      {/* <Route path="about-us" element={<AboutUsPage />} /> */}
      <Route path=":id" element={<ItemPage />} />
      <Route path='cart' element={<CartPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Route>
);

export default routes;