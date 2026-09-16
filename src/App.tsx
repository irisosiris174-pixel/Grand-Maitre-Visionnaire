import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RootLayout } from './layouts/RootLayout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Products } from './pages/Products';
import { WhyUs } from './pages/WhyUs';
import { Testimonials } from './pages/Testimonials';
import { Contact } from './pages/Contact';
import { FAQ } from './pages/FAQ';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { LegalNotice } from './pages/LegalNotice';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'a-propos', element: <About /> },
      { path: 'services', element: <Services /> },
      { path: 'produits', element: <Products /> },
      { path: 'pourquoi-nous', element: <WhyUs /> },
      { path: 'temoignages', element: <Testimonials /> },
      { path: 'contact', element: <Contact /> },
      { path: 'faq', element: <FAQ /> },
      { path: 'politique-de-confidentialite', element: <PrivacyPolicy /> },
      { path: 'mentions-legales', element: <LegalNotice /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
