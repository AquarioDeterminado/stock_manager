import SideBar from "./SideBar/SideBar";
import Header from "./Header/Header";
import styles from './PageTemplate.module.css';

function PageTemplate(props) {

    var canvasInfo = props.canvas;

    return (
        <>
            <div className="App">
                <Header />
                <div className={styles.container}>
                    <SideBar />
                    <div className={styles.canvas} id={"canvas"}>
                        {canvasInfo}
                    </div>
                </div>
            </div>
        </>
    );
}
export default PageTemplate;