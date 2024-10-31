import { useNavigate } from "react-router-dom";
import { FacebookIcon, GoogleIcon, TwitterIcon } from "../../../assets"
import styles from "./styles.module.css"
import { Pages } from "../../../const";

export const Footer: React.FC = () => {

    const navigate = useNavigate();

    const goToPage = (pageName: string) => {
        navigate(pageName); // Передаємо параметр через state
    };

    return (
        <>
            <div className={`container-header`}>
                <div className={`${styles.footer} d-flex-column`}>
                    <div className="d-flex-space-between">
                        <p className="text-title text-color-white">Mister Fox</p>
                        <div className={`${styles.socials} d-flex-center`}>
                            <TwitterIcon />
                            <FacebookIcon />
                            <GoogleIcon />
                        </div>
                    </div>
                    <div className={`${styles.divider}`}></div>
                    <div className="d-flex-space-between">
                        <div className={`${styles.footerPages} d-flex`}>
                            <p className="text-st text-color-st">New Games</p>
                            <p className="text-st text-color-st">Categories</p>
                            <p className="text-st text-color-st">Saved Games</p>
                            <p className="text-st text-color-st" onClick={()=>{
                                goToPage(Pages.AboutUs)
                            }}>About Us</p>
                        </div>
                        <p className="text-st text-color-white">© 2024{new Date().getFullYear() != 2024?" - " + new Date().getFullYear():""}. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </>
    )
}