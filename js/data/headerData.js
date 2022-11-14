const headerData = {
    topText: {
        isVisible: true,
        content: [
            {
                type: 'link',
                href: '#',
                text: 'Now Hiring:'
            },
            {
                type: 'text',
                text: 'Are you a driven and motivated 1st Line IT Support Engineer?'
            },
        ]
    },
    logo: {
        imgPath: './img/',
        mobile: 'logo-mobile.png',
        defaultLogo: 'logo.png',
        alt: 'Logo',
    },
    nav: [
        {
            type: 'text',
            href: '#',
            text: 'Home',
            submenu: [
                { type: 'link', href: '#', text: 'Pavadinimas 1' },
                { type: 'link', href: '#', text: 'Pavadinimas 2' },
                { type: 'link', href: '#', text: 'Pavadinimas 3' },
                {
                    type: 'link', href: '#', text: 'Pavadinimas 4',
                    submenu: [
                        { type: 'link', href: '#', text: 'Pavadinimo pavadinimas 1' },
                        { type: 'link', href: '#', text: 'Pavadinimo pavadinimas 2' },
                        { type: 'link', href: '#', text: 'Pavadinimo pavadinimas 3' },
                    ],
                    submenuDirection: 'right',
                },
                { type: 'link', href: '#', text: 'Pavadinimas 5' },
                { type: 'link', href: '#', text: 'Pavadinimas 6' },
            ],
            submenuDirection: 'bottom',
        },
        {
            type: 'link',
            href: '#',
            text: 'Company',
            submenu: [
                { type: 'link', href: '#', text: 'Kitas pavadinimas 1' },
                { type: 'link', href: '#', text: 'Kitas pavadinimas 2' },
                { type: 'link', href: '#', text: 'Kitas pavadinimas 3' },
                { type: 'link', href: '#', text: 'Kitas pavadinimas 4' },
            ],
            submenuDirection: 'bottom',
        },
        {
            type: 'link',
            href: '#',
            text: 'IT Solutions',
        },
        {
            type: 'link',
            href: '#',
            text: 'Elements',
        },
        {
            type: 'link',
            href: '#',
            text: 'Case Studies',
        },
        {
            type: 'link',
            href: '#',
            text: 'Blog',
        },
    ],
    languages: {
        imgPath: './img/languages/',
        defaultLang: 'en',
        list: {
            en: {
                full: 'English',
                img: 'en.png',
            },
            fr: {
                full: 'Français',
                img: 'fr.png',
            },
            de: {
                full: 'Deutsch',
                img: 'de.png',
            },
        }
    }
}

export { headerData }