import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { WhatsAppFloatingButton } from '../components/WhatsAppFloatingButton';
import { PhoneFloatingButton } from '../components/PhoneFloatingButton';

export function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans text-white overflow-x-hidden selection:bg-primary-900 selection:text-white">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <PhoneFloatingButton />
      <WhatsAppFloatingButton />
      <ScrollRestoration />
    </div>
  );
}
