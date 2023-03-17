import React from "react";

import { Icon } from "@chakra-ui/react";
import {
    MdBarChart,
    MdPerson,
    MdHome,
    MdLock,
    MdOutlineShoppingCart,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/dataTables";
import RTL from "views/admin/rtl";

// Auth Imports
import SignInCentered from "views/auth/signIn";
import BlogControls from "views/admin/blogControls";
import PricingControls from "views/admin/pricingControls";
import TransactionTable from "views/admin/transactionTables";
import PhrasesControls from "views/admin/phrasesControls";
import TransactionControls from "views/admin/transactionControls";
import SignIn from "views/auth/signIn";

const routes = [
    {
        name: "Main Dashboard",
        layout: "/admin",
        path: "/default",
        icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
        component: MainDashboard,
    },
    // {
    //     name: "NFT Marketplace",
    //     layout: "/admin",
    //     path: "/nft-marketplace",
    //     icon: (
    //         <Icon
    //             as={MdOutlineShoppingCart}
    //             width='20px'
    //             height='20px'
    //             color='inherit'
    //         />
    //     ),
    //     component: NFTMarketplace,
    //     secondary: true,
    // },
    {
        name: "Customers Data",
        layout: "/admin",
        icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
        path: "/data-tables",
        component: DataTables,
    },
    {
        name: "Customer Transactions",
        layout: "/admin",
        icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
        path: "/transactions",
        component: TransactionControls,
    },

    {
        name: "Pricing Controls",
        layout: "/admin",
        icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
        path: "/pricing-configuration",
        component: PricingControls,
    },


    // {
    //     name: "Template Controls",
    //     layout: "/admin",
    //     icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    //     path: "/templates",
    //     component: PricingControls,
    // },
    {
        name: "Blog Controls",
        layout: "/admin",
        icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
        path: "/blog-configuration",
        component: BlogControls,
    },
    {
        name: "Phrases Controls",
        layout: "/admin",
        icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
        path: "/pharases-configuration",
        component: PhrasesControls,
    },
    // {
    //     name: "Profile",
    //     layout: "/admin",
    //     path: "/profile",
    //     icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    //     component: Profile,
    // },
    {
        name: "Sign In",
        layout: "/auth",
        path: "/sign-in",
        icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
        component: SignInCentered,
    },
    // {
    //     name: "RTL Admin",
    //     layout: "/rtl",
    //     path: "/rtl-default",
    //     icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    //     component: RTL,
    // },
];

export default routes;
