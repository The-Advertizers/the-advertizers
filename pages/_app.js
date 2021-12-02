import 'tailwindcss/tailwind.css'
import '../style.css';

import { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import Router from 'next/router';
import Preloader from '../components/preloader';
import BaseLayout from '../layout/base_layout';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const minimumLoaderDuration = 500;

  Router.onRouteChangeStart = () => {
    setLoading(true);
  };

  Router.onRouteChangeComplete = () => {
    setTimeout(() => setLoading(false), minimumLoaderDuration);
  };

  Router.onRouteChangeError = () => {
    setTimeout(() => setLoading(false), minimumLoaderDuration);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <>
      <BaseLayout>
        <Transition
          show={loading}
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Preloader />
        </Transition>
        {!loading && <Component {...pageProps} />}
      </BaseLayout>
    </>
  );
}

export default MyApp;
