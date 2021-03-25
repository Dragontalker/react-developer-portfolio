import profileImage from "../Assets/Image/profile_picture.jpg";

const About = () => {
    return (
        <div>
            <div id="aboutTitle" class="post-heading text-center">
                <br />
                <br />
                <br />
                <h3 class="display-4 font-weight-bold">About Me</h3>
            </div>
            <div id="about" class="container mt-5 pb-5">
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <img 
                            src={profileImage} 
                            alt="A rounded profile picture for myself." 
                            class="avatar img-fluid" 
                        />
                    </div>
                    <div class="col-lg-9 col-md-6 col-sm-12">
                        <h2>Hacking into Web Development</h2>
                        <p>I am full stack web developer/data scientist from Canada, current living in the Great Toronto Area. I have experience in R, Python, MongoDB, Express.js, React.js, React Native, Node.js, and knowledge in relational database such as SQL.</p>
                        <p>My E-mail: richard.yang.tong@gmail.com</p>
                        <p>My Phone Number: +1(647)533-7683</p>
                        <button class="btn">
                            <a href="https://www.linkedin.com/in/richard-yang-tong/">VISIT MY LINKEDIN</a>
                        </button>
                        <button class="btn">
                            <a href="https://docs.google.com/document/d/1bivUNMiKC5n6QTECtL79NJP1dwJnwrKONIhal_Go0Bo/edit">SEE MY RESUME</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;
