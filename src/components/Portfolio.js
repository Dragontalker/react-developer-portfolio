import Project from './Project';
import p1Image from '../Assets/Image/burger_screenshot.png';
import p2Image from '../Assets/Image/flux_im.png';

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
                    
                </div>
            </div>
        </div>
    )
};

export default Portfolio;