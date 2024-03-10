import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import ContactsPage from "./pages/contacts/ContactsPage";
import AboutUsPage from "./pages/aboutUs/AboutUsPage";
import ItemPage from "./pages/item/ItemPage";
import LandingPage from "./pages/landing/LandingPage";
import NotFoundPage from "./pages/notFound/NotFoundPage";
import Layout from "./components/layout/Layout";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />} >
    <Route index element={<LandingPage />} />
    <Route path="contacts" element={<ContactsPage />} />
    <Route path="about-us" element={<AboutUsPage />} />
    <Route path=":id" element={<ItemPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Route>
));

export default router;