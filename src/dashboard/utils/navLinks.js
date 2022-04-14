import nOverview from './../../assets/category.png'
import nProject from './../../assets/code.png'
import nFile from './../../assets/folder-cloud.png'
import nServer from './../../assets/global.png'
import nMessage from './../../assets/sms.png'
import nPayments from './../../assets/wallet-money.png'
import nBranch from './../../assets/hierarchy-square-3.png'
import nSiteull from './../../assets/keyboard-open.png'
import nManageull from './../../assets/clipboard-text.png'
import nService from './../../assets/profile-2user.png'
import nAcademy from './../../assets/teacher.png'
import nMarket from './../../assets/shopping-cart.png'
import nReferral from './../../assets/people.png'

const navLinks = [
    {
        name: 'Overview',
        to: '/dashboard/overview',
        normalIcon: nOverview,
        activeIcon: nOverview
    },
    {
        name: 'Project',
        to: '/dashboard/project',
        normalIcon: nProject,
        activeIcon: nProject
    },
    {
        name: 'File Management',
        to: '/dashboard/file-management',
        normalIcon: nFile,
        activeIcon: nFile
    },
    {
        name: 'Server Management',
        to: '/dashboard/server-management',
        normalIcon: nServer,
        activeIcon: nServer
    },
    {
        name: 'Messages',
        to: '/dashboard/messages',
        normalIcon: nMessage,
        activeIcon: nMessage
    },
    {
        name: 'Payments',
        to: '/dashboard/payments',
        normalIcon: nPayments,
        activeIcon: nPayments
    },
    {
        name: 'Branch',
        to: '/dashboard/branch',
        normalIcon: nBranch,
        activeIcon: nBranch
    },
    {
        name: 'SiteULL',
        to: '/dashboard/siteull',
        normalIcon: nSiteull,
        activeIcon: nSiteull
    },
    {
        name: 'ManageULL',
        to: '/dashboard/manageull',
        normalIcon: nManageull,
        activeIcon: nManageull
    },
    {
        name: 'Service Providers',
        to: '/dashboard/service-providers',
        normalIcon: nService,
        activeIcon: nService
    },
    {
        name: 'Academy',
        to: '/dashboard/academy',
        normalIcon: nAcademy,
        activeIcon: nAcademy
    },
    {
        name: 'Market Place',
        to: '/dashboard/market-place',
        normalIcon: nMarket,
        activeIcon: nMarket
    },
    {
        name: 'Referrals',
        to: '/dashboard/referrals',
        normalIcon: nReferral,
        activeIcon: nReferral
    },
]
export default navLinks