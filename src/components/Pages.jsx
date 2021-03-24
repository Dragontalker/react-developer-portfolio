import React, { Component } from 'react';

export class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home Component</h1>
                <button type="submit" className="btn btn-dark">Submit</button>
            </div>
        )
    }
};

export class Project extends Component {
    render() {
        return (
            <h1>Project Component</h1>
        )
    }
};

export class Contact extends Component {
    render() {
        return (
            <h1>Contact Component</h1>
        )
    }
};