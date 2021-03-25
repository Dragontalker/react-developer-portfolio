

const Contact = () => {
    return (
        <div>
            <br />
            <br />
            <br />
            <div id="contactTitle" className="posting-heading text-center">
                <h3 className="display-4 font-weight-bold">Contact</h3>
            </div>
            <div id="contact" className="container mt-5 mb-5 w-50 max-auto">
                <form action="">
                <div className="form-group">
                        <label for="name">Full Name:</label>
                        <input type="text" className="form-control" id="name"/>
                    </div>
                    <div className="form-group">
                        <label for="email">Email address:</label>
                        <input type="email" className="form-control" id="email"/>
                    </div>
                    <div className="form-group">
                        <label for="name">Your Message:</label>
                        <textarea className="form-control"></textarea>
                    </div>
                    <button type="submit" className="btn btn-dark">Submit</button>
                </form>
            </div>
        </div>
    )
};

export default Contact;