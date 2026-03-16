import { useEffect } from 'react';
import { createHashRouter, RouterProvider, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { GalleryPage } from './pages/GalleryPage.page';
import { GGPage } from './pages/GG.page';
import { HomePage } from './pages/Home.page';
import { OrganizationPage } from './pages/Organization.page';
import { PlacePage } from './pages/Place.page';
import { ProgramPage } from './pages/Program.page';
import { pageview } from './utils/analytics';

function AnalyticsWrapper({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    pageview(location.pathname + location.search + location.hash);
  }, [location]);

  return <>{children}</>;
}

const router = createHashRouter([
  {
    path: '/',
    element: (
      <AnalyticsWrapper>
        <Layout>
          <HomePage />
        </Layout>
      </AnalyticsWrapper>
    ),
  },
  {
    path: 'gallery',
    element: (
      <AnalyticsWrapper>
        <Layout>
          <GalleryPage />
        </Layout>
      </AnalyticsWrapper>
    ),
  },
  {
    path: 'place',
    element: (
      <AnalyticsWrapper>
        <Layout>
          <PlacePage />
        </Layout>
      </AnalyticsWrapper>
    ),
  },
  {
    path: 'organization',
    element: (
      <AnalyticsWrapper>
        <Layout>
          <OrganizationPage />
        </Layout>
      </AnalyticsWrapper>
    ),
  },
  {
    path: 'larp',
    element: (
      <AnalyticsWrapper>
        <Layout>
          <GGPage />
        </Layout>
      </AnalyticsWrapper>
    ),
  },
  {
    path: 'program',
    element: (
      <AnalyticsWrapper>
        <Layout>
          <ProgramPage />
        </Layout>
      </AnalyticsWrapper>
    ),
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
