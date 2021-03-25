const Project = (prop) => {
    return (
        <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="card">
                <img 
                    src={prop.img} 
                    class="card-img-top" 
                    alt="Screenshot for a project"
                />
                <div class="card-body">
                    <h5 class="card-title">{prop.title}</h5>
                    <p class="card-text">{prop.description}</p>
                    <a href={prop.deployment} class="btn btn-dark">Live Preview</a>
                    <a href={prop.repo} class="btn btn-dark">GitHub Repo</a>
                </div>
            </div>
        </div>
    )
};

export default Project;