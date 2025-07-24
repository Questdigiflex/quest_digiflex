import styles from "./MainLayouts.module.css";



export const HomePageMainWrapper = ({heading,description, children}) => {
    return (
        <div className={styles.parentWrapper}>
            {children}
        </div>
    )
}


export const HomePageWrapper = ({heading,description, children}) => {
    return (
        <div className={styles.parentWrapper}>
            {children}
        </div>
    )
}