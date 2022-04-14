import Overview from "../../components/dashboard/Overview";
import Project from "../../components/dashboard/Project";
import FileManagement from "../../components/dashboard/FileManagement";
import ServerManagement from "../../components/dashboard/ServerManagement";
import Messages from "../../components/dashboard/Messages";
import Payments from "../../components/dashboard/Payments";
import Branch from "../../components/dashboard/Branch";
import SiteUll from "../../components/dashboard/SiteUll";
import ManageUll from "../../components/dashboard/ManageUll";
import Service from "../../components/dashboard/Service";
import Academy from "../../components/dashboard/Academy";
import Market from "../../components/dashboard/Market";
import Referrals from "../../components/dashboard/Referrals";
const dashboardPages = [
    {
        path: '/dashboard/overview',
        component: Overview
    },
    {
        path: '/dashboard/project',
        component: Project
    },
    {
        path: '/dashboard/file-management',
        component: FileManagement
    },
    {
        path: '/dashboard/server-management',
        component: ServerManagement
    },
    {
        path: '/dashboard/messages',
        component: Messages
    },
    {
        path: '/dashboard/payments',
        component: Payments
    },
    {
        path: '/dashboard/branch',
        component: Branch
    },
    {
        path: '/dashboard/siteull',
        component: SiteUll
    },
    {
        path: '/dashboard/manageull',
        component: ManageUll
    },
    {
        path: '/dashboard/service-providers',
        component: Service
    },
    {
        path: '/dashboard/academy',
        component: Academy
    },
    {
        path: '/dashboard/market-place',
        component: Market
    },
    {
        path: '/dashboard/referrals',
        component: Referrals
    }
]
export default dashboardPages;