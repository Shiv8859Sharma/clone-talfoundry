import {
    createBrowserRouter
} from 'react-router-dom';
import Layout from "@/layouts";
import PageNotFound from '@/constants/PageNotFound';
import ConnectionLost from '@/constants/connectionLost';
import { ErrorBoundary } from '@/constants/ErrorBoundary'
import { AdminRoutes, CloudExpertRoutes, ProjectManagerRoutes, PublicRoutes } from './routes';

function getRoutes(type) {
    switch (type) {
        case 'Project Manager':
            return { ...ProjectManagerRoutes };
        case 'Freelancer':
            return { ...CloudExpertRoutes };
        case 'Admin':
            return { ...AdminRoutes };
        default:
            return { ...PublicRoutes };
    }
}

const router = (user) => {
    return createBrowserRouter([
        {
            element: <Layout />,
            errorElement: <ErrorBoundary />,
            children: [{ ...getRoutes(user) }]
        },
        {
            path: '/network-error',
            element: <ConnectionLost />
        },
        {
            path: '*',
            element: <PageNotFound />
        }
    ]);
}

export default router
