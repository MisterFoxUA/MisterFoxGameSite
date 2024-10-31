import { useEffect } from "react";
import { SearchIcon, UnFilledFlagIcon } from "../../assets";
import { Footer } from "../../components/Common/Footer"
import { Header } from "../../components/Common/Header"
import styles from "./styles.module.css";
import useGamesStore from "./store";
import { GameCardItem } from "./components/GameCard";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export const MainPage: React.FC = () => {

    const { games, setGames } = useGamesStore();

    useEffect(() => {

        setGames();
    }, [])

    return (
        <>
            <Header />
            <div className="main">
                <div className="container">
                    <div className="d-flex">
                        <p className="text-title text-color-white">Explore</p>
                    </div>
                </div>
                <div className="container">
                    <div className={`${styles.search}`}>
                        <div className={`${styles.ctn_search} ctn_search d-flex`}>
                            <div className={`${styles.icn_search} d-flex`}>
                                <SearchIcon />
                            </div>
                            <input className={`${styles.inp_search} text-med text-color-white`} type="text" placeholder="Search..." />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className={`${styles.cardGallery} d-flex`}>
                        {games.map((item) => {
                            return (
                                <GameCardItem _GameItem={item} />
                            )
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}