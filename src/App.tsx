import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import { prefetchAllRoutes } from './utils/routePrefetch';

const MenuPage = lazy(() => import('./pages/MenuPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ReservationPage = lazy(() => import('./pages/ReservationPage'));
const SignInPage = lazy(() => import('./pages/SignInPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
}

export default function App() {
  const location = useLocation();
  const isAuthPage = ['/signin', '/signup'].includes(location.pathname);

  useEffect(() => {
    if ('requestIdleCallback' in window) {
      const id = (window as unknown as { requestIdleCallback: (cb: () => void) => number }).requestIdleCallback(
        () => prefetchAllRoutes()
      );
      return () =>
        (window as unknown as { cancelIdleCallback: (id: number) => void }).cancelIdleCallback(id);
    } else {
      const timer = setTimeout(() => prefetchAllRoutes(), 150);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-noir-950 overflow-x-clip">
      <ScrollToTop />
      {!isAuthPage && <Header />}
      <main id="main-content" className="flex-grow">
        <Suspense fallback={<div className="min-h-screen bg-noir-950" aria-busy="true" />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/reservations" element={<ReservationPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </Suspense>
      </main>
      {!isAuthPage && <Footer />}
    </div>
  );
}
