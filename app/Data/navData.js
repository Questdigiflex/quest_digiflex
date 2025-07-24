import {
    Plane,
    Coffee,
    Activity,
    Hospital,
    UserCheck,
    Heart,
    Zap,
    Briefcase,
    Box,
    DollarSign,
    Users,
    Cpu,
    Home,
    Truck,
    ShoppingCart,
    Smartphone,
} from 'lucide-react';

export const menuItems = [
    {
        label: 'Travel',
        href: '/travel',
        icon: Plane,
        dropdown: [
            { label: 'Air Industry', href: '/travel/air', icon: Plane },
            { label: 'Hospitality Industry', href: '/travel/hospitality', icon: Coffee },
            { label: 'Cruise Industry', href: '/travel/cruise', icon: Activity },
        ],
    },
    {
        label: 'Hospital',
        href: '/hospital',
        icon: Hospital,
        dropdown: [
            { label: 'General Hospitals', href: '/hospital/general-hospitals', icon: UserCheck },
            { label: 'Specialty Hospitals', href: '/hospital/specialty-hospitals', icon: Heart },
            { label: 'Surgical Hospitals & Centers', href: '/hospital/surgical-centers', icon: Zap },
            { label: 'Teaching & Research Hospitals', href: '/hospital/teaching-research', icon: Briefcase },
            { label: 'Diagnostic & Pathology Centers', href: '/hospital/diagnostic-pathology', icon: Box },
        ],
    },
    {
        label: 'Financial',
        href: '/financial',
        icon: DollarSign,
        dropdown: [
            { label: 'Retail Banking', href: '/financial/retail-banking', icon: DollarSign },
            { label: 'Corporate Banking', href: '/financial/corporate-banking', icon: Users },
            { label: 'Insurance Services', href: '/financial/insurance', icon: Briefcase },
        ],
    },
    {
        label: 'HRMS',
        href: '/hrms',
        icon: Users,
        dropdown: [
            { label: 'Payroll Management', href: '/hrms/payroll', icon: DollarSign },
            { label: 'Attendance & Leave Management', href: '/hrms/attendance-leave', icon: UserCheck },
            { label: 'Learning & Development', href: '/hrms/learning-development', icon: Activity },
            { label: 'Workforce Planning & Analytics', href: '/hrms/workforce-planning', icon: Cpu },
            { label: 'Employee Self-Service (ESS)', href: '/hrms/ess', icon: UserCheck },
        ],
    },
    {
        label: 'Consulting',
        href: '/consulting',
        icon: Briefcase,
        dropdown: [
            { label: 'Management Consulting', href: '/consulting/management', icon: Briefcase },
            { label: 'IT Consulting', href: '/consulting/it', icon: Cpu },
            { label: 'Financial Consulting', href: '/consulting/financial', icon: DollarSign },
        ],
    },
    {
        label: 'Information Technology',
        href: '/information-technology',
        icon: Cpu,
        dropdown: [
            {
                label: 'Enterprise Software Providers',
                href: '/information-technology/enterprise-software',
                icon: Cpu,
            },
            { label: 'Web & Mobile App Development', href: '/information-technology/web-mobile', icon: Smartphone },
        ],
    },
    {
        label: 'Real Estate',
        href: '/real-estate',
        icon: Home,
        dropdown: [
            { label: 'Commercial Real Estate', href: '/real-estate/commercial', icon: Home },
            { label: 'Real Estate Brokerage / Agent', href: '/real-estate/brokerage', icon: ShoppingCart },
            { label: 'Real Estate Technology', href: '/real-estate/technology', icon: Cpu },
        ],
    },
    {
        label: 'Manufacturing',
        href: '/manufacturing',
        icon: Box,
        dropdown: [
            { label: 'Automotive Manufacturing', href: '/manufacturing/automotive', icon: Truck },
            { label: 'Food & Beverage Manufacturing', href: '/manufacturing/food-beverage', icon: Coffee },
        ],
    },
    {
        label: 'Shopify',
        href: '/shopify',
        icon: ShoppingCart,
        dropdown: [
            { label: 'Fashion & Apparel Stores', href: '/shopify/fashion', icon: Activity },
            { label: 'Health & Beauty Stores', href: '/shopify/health-beauty', icon: Heart },
            { label: 'Electronics & Gadgets', href: '/shopify/electronics', icon: Smartphone },
            { label: 'Fitness & Wellness Products', href: '/shopify/fitness', icon: Activity },
        ],
    },
    {
        label: 'Logistics',
        href: '/logistics',
        icon: Truck,
        dropdown: [
            { label: 'Third-Party Logistics', href: '/logistics/3pl', icon: Truck },
            { label: 'Warehousing & Storage', href: '/logistics/warehousing', icon: Box },
            { label: 'E-commerce Fulfillment', href: '/logistics/ecommerce-fulfillment', icon: ShoppingCart },
        ],
    },
];
