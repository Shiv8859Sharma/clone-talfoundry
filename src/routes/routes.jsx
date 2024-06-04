import { lazy } from "react";
import Home from "@/pages/Home";
const SearchFreelancer = lazy(() => import('@/pages/public/searchFreelancer'))
const FindWork = lazy(() => import('@/pages/public/findWork'))
const AwsAdvisory = lazy(() => import('@/pages/public/services/awsAdvisory'))
const SalesforceAdvisory = lazy(() => import('@/pages/public/services/salesforceAdvisory'))
const HowItWorks = lazy(() => import('@/pages/public/howItWorks'))
const HelpCenter = lazy(() => import('@/pages/public/helpCenter'))

export const PublicRoutes = {
    children: [
        {
            index: true,
            element: <Home />
        },
        {
            path: '/search-freelancer',
            element: <SearchFreelancer />
        },
        {
            path: '/search-job',
            element: <FindWork />
        },
        {
            path: '/advisory-services/aws-advisory-services',
            element: <AwsAdvisory />
        },
        {
            path: '/advisory-services/salesforce-advisory-services',
            element: <SalesforceAdvisory />
        },
        {
            path: '/how-it-works',
            element: <HowItWorks />
        },
        {
            path: '/help-center',
            element: <HelpCenter />
        }
    ]
}

export const CloudExpertRoutes = {
    children: [
        { path: "", element: <p>CE Dashboard</p> },
        { path: "/find-work", element: <p>Find Work</p> },
        { path: "/my-jobs", element: <p>My jobs</p> },
        { path: "/all-contracts", element: <p>All contracts</p> },
        { path: "/transactions", element: <p>Transactions</p> },
        { path: "/analytics", element: <p>Analytics</p> },
        { path: "/settings", element: <p>Settings</p> },
        { path: "/messages", element: <p>CE Messages</p> },
        { path: "/notifications", element: <p>CE notifications</p> },
        { path: "/find-work", element: <p>CE Dashboard</p> },

    ],
};

export const ProjectManagerRoutes = {
    children: [
        { path: "/", element: <p>Pm Dashboard</p> },
        { path: "/find-freelancers/:tab", element: <p>Find Freelancer</p> },
        { path: "/analytics", element: <p>Analytics</p> },
        { path: "/post-a-job", element: <p>Post a job</p> },
        { path: "/my-jobs", element: <p>My jobs</p> },
        { path: "/my-proposals", element: <p>My proposals</p> },
        { path: "/all-contracts", element: <p>All contracts</p> },
        { path: "/transactions", element: <p>Transactions</p> },
        { path: "/notifications", element: <p>Notifications</p> },
        { path: "/settings", element: <p>Pm settings</p> },
    ],
};

export const AdminRoutes = {
    children: [
        { path: "/", element: <p>Admin Dashboard</p> },
    ],
};