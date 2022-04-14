import { Header } from "../Header/Header";
import { Promo } from "../Promo/Promo";
import { AboutProject } from "../AboutProject/AboutProject";
import { Techs } from "../Techs/Techs";
import { AboutMe } from "../AboutMe/AboutMe";
import { Portfolio } from "../Portfolio/Portfolio";
import { Footer } from "../Footer/Footer";


export const Main = () => {
    return (
        <main>
            <Header />
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
        </main>
    )
}