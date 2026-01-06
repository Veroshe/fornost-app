import { createHashRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/Layout';
import { GalleryPage } from './pages/GalleryPage.page';
import { GGPage } from './pages/GG.page';
import { HomePage } from './pages/Home.page';
import { OrganizationPage } from './pages/Organization.page';
import { PlacePage } from './pages/Place.page';

const router = createHashRouter([
  {
    path: '/',
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },
  {
    path: 'gallery',
    element: (
      <Layout>
        <GalleryPage />
      </Layout>
    ),
  },
  {
    path: 'place',
    element: (
      <Layout>
        <PlacePage />
      </Layout>
    ),
  },
  {
    path: 'organization',
    element: (
      <Layout>
        <OrganizationPage />
      </Layout>
    ),
  },
  {
    path: 'larp',
    element: (
      <Layout>
        <GGPage />
      </Layout>
    ),
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
