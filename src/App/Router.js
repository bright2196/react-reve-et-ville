import React, {useContext} from 'react'
import Home from '../pages/Home/Home';
import Page1Carte from "../pages/Page1Carte/Page1Carte";
import Page2Musee from "../pages/Page2Musee/Page2Musee";
import Page3NatureMorte from "../pages/Page3NatureMorte/Page3NatureMorte"
import Page4Loupe from "../pages/Page4Loupe/Page4Loupe"
import Page5Salon from "../pages/Page5Salon/Page5Salon"
import Page6Pendu from "../pages/Page6Pendu/Page6Pendu"
import Page7Suie from "../pages/Page7Suie/Page7Suie";
import Page8Transition from "../pages/Page8Transition/Page8Transition";
import Page9GravurePoussiere from "../pages/Page9GravurePoussiere/Page9GravurePoussiere";
import Page10GravureSansPoussiere from "../pages/Page10GravureSansPoussiere/Page10GravureSansPoussiere";
import Page11GrandMere from "../pages/Page11GrandMere/Page11GrandMere";
import Page12Final from "../pages/Page12Final/Page12Final";
import Prologue from "../pages/Prologue/Prologue";
import Tutoriel from "../pages/Tutoriel/Tutoriel";
import { AppContext } from "./AppProvider"

const pages = {
    home: Home,
    pageCarte: Page1Carte,
    pageMusee: Page2Musee,
    pageNatureMorte: Page3NatureMorte,
    pageLoupe: Page4Loupe,
    pageSalon: Page5Salon,
    pagePendu: Page6Pendu,
    pageSuie: Page7Suie,
    pageTransition: Page8Transition,
    pageGravurePoussiere: Page9GravurePoussiere,
    pageGravureSansPoussiere: Page10GravureSansPoussiere,
    pageGrandMere: Page11GrandMere,
    pageFinal: Page12Final,
    prologue: Prologue,
    tutoriel: Tutoriel

}

// {/* <BrowserRouter>
     
//     <Switch>
//         <Route path="/" exact component={Home} />
//         <Route path="/page-carte" component={Page1Carte} />
//         <Route path="/page-musee" component={Page2Musee} />
//         <Route path="/page-nature-morte" component={Page3NatureMorte} />
//         <Route path="/page-loupe" component={Page4Loupe} />
//         <Route path="/page-salon" component={Page5Salon} />
//         <Route path="/page-pendu" component={Page6Pendu} />
//         <Route path="/page-suie" component={Page7Suie} />
//         <Route path="/page-transition" component={Page8Transition} />
//         <Route path="/page-gravure-poussiere" component={Page9GravurePoussiere} />
//         <Route path="/page-gravure-sans-poussiere" component={Page10GravureSansPoussiere} />
//         <Route path="/page-grand-mere" component={Page11GrandMere} />
//         <Route path="/page-final" component={Page12Final} />
//         <Route path="/prologue" component={Prologue} />
//         <Route path="/tutoriel" component={Tutoriel} />
//     </Switch>
       
//  </BrowserRouter> */}

const Router = () => {
    const value = useContext(AppContext)
    // const pageContext =
    console.log(value)
    const Component = pages[value.currentPage]
    return (
        <Component/>
    );
};

export default Router;
