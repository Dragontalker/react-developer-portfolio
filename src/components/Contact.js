

const Contact = () => {
    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div id="contactTitle" class="posting-heading text-center">
                <h3 class="display-4 font-weight-bold">Contact</h3>
            </div>
            <div id="contact" class="container mt-5 mb-5 w-50 max-auto">
                <form action="">
                <div class="form-group">
                        <label for="name">Full Name:</label>
                        <input type="text" class="form-control" id="name"/>
                    </div>
                    <div class="form-group">
                        <label for="email">Email address:</label>
                        <input type="email" class="form-control" id="email"/>
                    </div>
                    <div class="form-group">
                        <label for="name">Your Message:</label>
                        <textarea class="form-control"></textarea>
                    </div>
                    <button type="submit" class="btn btn-dark">Submit</button>
                </form>
            </div>
        </div>
    )
};

export default Contact;