const Project = (prop) => {
    return (
        <div class="col-lg-4 col-md-6 col-sm-12 mt-5">
            <div class="card">
                <img 
                    src={prop.img} 
                    class="card-img-top" 
                    alt="Screenshot for a project"
                />
                <div class="card-body">
                    <h5 class="card-title">{prop.title}</h5>
                    <p class="card-text">{prop.description}</p>
                    <a href={prop.deployment} class="btn btn-dark m-1">Live Preview</a>
                    <a href={prop.repo} class="btn btn-dark m-1">GitHub Repo</a>
                </div>
            </div>
        </div>
    )
};

export default Project;