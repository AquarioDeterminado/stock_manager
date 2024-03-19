import styles from './Header.module.css';
import {useNavigate, useNavigation} from "react-router-dom";

const Header = () => {
    return(
        <div className={styles.header} >
            <button className={styles.headerButton}>
            </button>
            <button className={styles.headerButton}>
            </button>
        </div>
    );
}

export default Header;