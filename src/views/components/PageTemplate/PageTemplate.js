import SideBar from "./SideBar/SideBar";
import Header from "./Header/Header";
import styles from './PageTemplate.module.css';

function PageTemplate(canvasInfo, permissions) {
    return (
        <>
            <div className="App">
                <Header />
                <div className={styles.container}>
                    <SideBar userPermissions={permissions}/>
                    <div className={styles.canvas}>
                        {canvasInfo}
                    </div>
                </div>
            </div>
        </>
    );
}
export default PageTemplate;