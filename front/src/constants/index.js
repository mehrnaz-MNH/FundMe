// Navigation links and images for navbar

import { createCampaign, dashboard, logout, payment, profile, withdraw } from '../assets';

export const navlinks = [
    {
        name: 'dashboard',
        imgUrl: dashboard,
        link: '/',
        disabled: false,
    },
    {
        name: 'fundRise',
        imgUrl: createCampaign,
        link: '/create-fundrise',
        disabled: false,
    },
    {
        name: 'payment',
        imgUrl: payment,
        link: '/',
        disabled: true,
    },
    {
        name: 'withdraw',
        imgUrl: withdraw,
        link: '/',
        disabled: true,
    },
    {
        name: 'profile',
        imgUrl: profile,
        link: '/profile',
        disabled: false,
    },
    {
        name: 'logout',
        imgUrl: logout,
        link: '/',
        disabled: true,
    },
];
