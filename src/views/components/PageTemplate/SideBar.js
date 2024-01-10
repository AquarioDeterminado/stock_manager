import styles from './SideBar.module.css';

const SideBar = () => {
    return (
        <div className={styles.sidebar}>
            <il className={styles}>
                <NavMenu />
            </il>
        </div>
    );
}

export default SideBar;