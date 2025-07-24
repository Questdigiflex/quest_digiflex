'use client';
import Image from 'next/image';
import styles from './page.module.css';
import yellowImage from './assets/yellowLine.png';
import { ArrowRight } from 'lucide-react';
import dashboard from './assets/dashboard.png'
import wing from './assets/Wing.png'
import { HomePageMainWrapper } from '@/MainLayouts';
import useBreakpoint from './hooks/useBreakPoints';
export default function Home() {
    
    const { isMobile, isTablet, isLaptop, isDesktop } = useBreakpoint();


    return (

        <HomePageMainWrapper>
            <div className={styles.wrapper}>

                <div className={styles.container}>
                    <div className={styles.container2}>
                        
                        <h1 className={styles.heading}>
                            
                            Tailored {" "}
                                <span className={styles.highlightBlue}>CRM</span>  {" "}
                            Solutions {" "}
                              
                            { 
                                !isMobile ?  <br /> : " "
                            }

                            for Forward-Thinking
                            
                            <br />
                            
                            <span className={`${styles.highlightBlue} ${styles.businesses}`}>
                                <span className={styles.businessText}>Businesses</span>
                                <Image src={yellowImage} className={styles.yellowImage} alt="yellow underline" />
                            </span>

                        </h1>

                        <div className={styles.subtext}>
                            From lead management to customer support,
                            { !isMobile && !isTablet &&  <br />}
                            our on-demand CRM adapts to the unique needs of your operation
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.button}>Contact US</button>
                            <button className={styles.button}>
                                Demo <ArrowRight className={styles.arrow} size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className={styles.container3}>
                    {/* Background Wing Image */}
                    <div className={styles.imageContainer2}>
                        <Image src={wing} alt="wing" className={styles.wing} />
                    </div>

                    {/* Foreground Dashboard Image */}
                    <div className={styles.imageContainer}>
                        <Image src={dashboard} alt="dashboard" className={styles.img} />
                    </div>
                </div>

                



            </div>
        </HomePageMainWrapper>
    );
}
