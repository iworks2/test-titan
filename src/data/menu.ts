// src/data/menu.ts

export const headerMenu = [
    { name: 'Home', link: '/home' },
    { name: 'Our Team', link: '/team' },
    { name: 'Blog', link: '/blog' },
    { name: 'Products', link: '/products', showArrow: false,
        children: [
            { name: 'Typography', link: '/style-guide#typography' },
            { name: 'Colors', link: '/style-guide#colors' },
            { name: 'Links', link: '/style-guide#links' },
            { name: 'Buttons', link: '/style-guide#buttons' },
            { name: 'Forms', link: '/style-guide#forms' },
            { name: 'Lists', link: '/style-guide#lists' },
        ]
    }
];

export const footerMenu = [
    { name: 'Our Team', link: '/team' },
];

export const legalMenu = [
    { name: 'Privacy Policy', link: '/legal/privacy-policy' },
    { name: 'Terms of Service', link: '/legal/terms-of-service' }
];

