import styles from './Header.module.css';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { menuItems } from '../Data/navData';
import { Search, ChevronDown } from 'lucide-react';
import digiflexLogo from "../assets/digiflexLogo.png"
export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(null);
    const timeoutRef = useRef(null);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

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
                        <Image src={digiflexLogo} height={30}
                            priority alt='Digiflex Logo' />

                    </Link>
                </div>

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

            </div>

            <div className={styles.line}></div>

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
        </div>
    );
}