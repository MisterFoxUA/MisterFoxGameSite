import { CategoryIcon, HomeIcon, SavedGamesIcon } from "../../../assets";
import styles from "./styles.module.css"

export const Header: React.FC = () => {

    return (
        <>
                <div className="container-header">
                    <div className={`${styles.header} d-flex-space-between`}>
                        <div>
                            <p className="text-st text-color-st">MisterFox.inc</p>
                        </div>
                        <div className={`${styles.headerOptions} d-flex`}>
                            <div className={`${styles.wrp_headerOption} d-flex-center`}>
                                <div><HomeIcon /></div>
                                <p className="text-st text-color-st">New Games</p>
                            </div>
                            <div className={`${styles.wrp_headerOption} d-flex-center`}>
                                <div><CategoryIcon/></div>
                                <p className="text-st text-color-st">Categories</p>
                            </div>
                            <div className={`${styles.wrp_headerOption} d-flex-center`}>
                                <div><SavedGamesIcon/></div>
                                <p className="text-st text-color-st">Saved Games</p>
                            </div>
                        </div>
                        <div className={`${styles.ctn_avatar} d-flex-center`}>
                            <div className={`${styles.avater}`}>
                            </div>
                            <p className="text-st text-color-st">Mister Fox</p>
                        </div>
                    </div>
                </div>
        </>
    )
}