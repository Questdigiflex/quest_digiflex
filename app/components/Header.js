'use client'

import styles from './Header.module.css';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { menuItems } from '../Data/navData';
import { Search, ChevronDown } from 'lucide-react';
import digiflexLogo from "../assets/digiflexLogo.png"
import useBreakpoint from '../hooks/useBreakPoints';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {

    const [open, setOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(null);
    const [openIndex, setOpenIndex] = useState(null);
    const timeoutRef = useRef(null);
    const pathname = usePathname();
    const { isMobile, isTablet, isLaptop, isDesktop } = useBreakpoint();

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

        
    useEffect(() => {
        setOpen(false);
        setMenuOpen(null);
        setOpenIndex(null);
    }, [pathname]);


    const handleMouseEnter = (idx) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setMenuOpen(idx);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setMenuOpen(null);
        }, 200); // Delay of 200ms
    };


    return (
        <div className={styles.navWrapper}>

            <div className={styles.topBar}>

                <div className={styles.logo}>
                    <Link href="/">
                        <Image src={digiflexLogo}
                            height={isMobile ? 24 : 28}
                            priority alt='Digiflex Logo' />

                    </Link>
                </div>

                {

                    (isLaptop || isDesktop) && (
                        <div className={styles.leftside}>

                            <div className={styles.searchContainer}>
                                <input
                                    name="search"
                                    type="text"
                                    placeholder="Search"
                                    className={styles.searchInput}
                                />
                                <span className={styles.searchIcon}><Search size={20} /></span>
                            </div>

                            <Link href="/contact" className={styles.contactBtn}>
                                Contact US
                            </Link>

                        </div>
                    )
                }

                {
                    (isMobile || isTablet) && (
                        <div className={styles.menuIcon} onClick={() => setOpen(!open)}>
                            {
                                open ? (
                                    <X size={isMobile ? 28 : 32} />
                                ) : (
                                    <Menu size={isMobile ? 28 : 32} />
                                )
                            }
                        </div>
                    )
                }

            </div>

            <div className={styles.line}></div>
            <>
                {
                    (isLaptop || isDesktop) && (
                        <div className={styles.menuBar}>

                            {

                                menuItems.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className={styles.menuItem}
                                        onMouseEnter={() => handleMouseEnter(idx)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <Link href={item.href} className={styles.menuLink}>
                                            {item.label}
                                        </Link>

                                        {
                                            item.dropdown && item.dropdown.length > 0 && (
                                                <>
                                                    <span
                                                        className={`${styles.caret} ${menuOpen === idx ? styles.caretIsOpen : ''}`}
                                                    >
                                                        <ChevronDown size={12} />
                                                    </span>

                                                    {
                                                        menuOpen === idx && (
                                                            <div className={styles.dropdown}>
                                                                {
                                                                    item.dropdown.map((sub, i) => (
                                                                        <Link key={i} href={sub.href}>
                                                                            {sub.label}
                                                                        </Link>
                                                                    ))
                                                                }
                                                            </div>
                                                        )
                                                    }
                                                </>
                                            )
                                        }
                                    </div>
                                ))

                            }

                        </div>
                    )
                }
                {
                    (isMobile || isTablet) && open && (
                        <div className={styles.mobileMenu}>

                            <div className={styles.mobileSearchContainer}>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className={styles.mobileSearchInput}
                                />
                                <span className={styles.mobileSearchIcon}><Search size={20} /></span>
                            </div>

                            {
                                menuItems.map((item, idx) => (

                                    <div key={idx} className={styles.mobileMenuItem}>

                                        <div className={styles.menuRow}>

                                            <Link
                                                className={styles.mobileMenuLink}
                                                href={item.href}
                                            >
                                                {item.icon && <item.icon size={16} className={styles.icon} />}
                                                {item.label}

                                            </Link>

                                            {
                                                item.dropdown && item.dropdown.length > 0 && (
                                                    <button
                                                        onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                                        className={styles.chevronBtn}
                                                    >
                                                        <ChevronDown
                                                            size={16}
                                                            className={`${styles.chevron} ${openIndex === idx ? styles.rotate : ''}`}
                                                        />
                                                    </button>
                                                )
                                            }

                                        </div>

                                        {
                                            item.dropdown && item.dropdown.length > 0 && openIndex === idx && (
                                                <div className={styles.mobileDropdown}>
                                                    {
                                                        item.dropdown.map((sub, i) => (
                                                            <Link key={i} href={sub.href} className={styles.mobileSubLink}>
                                                                {sub.icon && <sub.icon size={16} className={styles.icon} />}
                                                                {sub.label}
                                                            </Link>
                                                        ))
                                                    }
                                                </div>
                                            )
                                        }
                                    </div>
                                ))
                            }

                            <Link href="/contact" className={styles.mobileContactBtn}>
                                Contact Us
                            </Link>
                        </div>
                    )
                }
            </>

        </div>
    );
}