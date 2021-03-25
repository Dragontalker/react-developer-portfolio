import Project from './Project';
import p1Image from '../Assets/Image/burger_screenshot.png';
import p2Image from '../Assets/Image/flux_im.png';
import p3Image from '../Assets/Image/note_taker.png';

const Portfolio = () => {
    return (
        <div>
            <br />
            <br />
            <br />
            <div id="portfolioTitle" class="post-heading text-center">
                <h3 class="display-4 font-weight-bold">Portfolio</h3>
            </div>
            <div id="portfolio" class="container mt-5 pb-5">
                <div class="row">
                    <Project 
                        img={p1Image}
                        title={"Express Burger Handler"}
                        description={"A full stack project that ultilizes the concept of MVC design pattern and rendering power of express handlebars."}
                        deployment={"https://dragontalker-eat-da-burger.herokuapp.com/"}
                        repo={"https://github.com/Dragontalker/FullStack_BurgerHandler"}
                    />
                    <Project 
                        img={p2Image}
                        title={"Flux-IM ChatRoom"}
                        description={"A full-stack web application that allows user start conversion with anybody they are interested."}
                        deployment={"https://flux-im.herokuapp.com/"}
                        repo={"https://github.com/Dragontalker/Project2_fluxIM"}
                    />
                    <Project 
                        img={p3Image}
                        title={"Note Taker"}
                        description={"A light weight web application that allows user to write down quick notes and track them with ease."}
                        deployment={"https://dragontalker-note-taker.herokuapp.com/"}
                        repo={"https://github.com/Dragontalker/BackEnd_NoteTaker"}
                    />
                </div>
            </div>
        </div>
    )
};

export default Portfolio;