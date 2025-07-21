import styles from './Header.module.css';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { menuItems } from '../Data/navData';
import { Search } from 'lucide-react';
export default function Navbar() {

    return (
        <div className={styles.navWrapper}>

            <div className={styles.topBar}>

                <div className={styles.logo}>
                    <Link href="/">
                        <span>DIGIFLEX.<strong>ai</strong></span>
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
                        <div key={idx} className={styles.menuItem}>
                            {item} <span className={styles.caret}>▾</span>
                        </div>
                    ))
                }
            </div>

        </div>
    );
}
