import React from 'react';
import "./cat.scss";

class Cat extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            catUrl: "",
        }
    }

    componentDidMount() {
        fetch("/getCat")
            .then(res => res.text())
            .then(catUrl =>
                this.setState({
                    catUrl
                })
            );
    };

    render(){
        return(
            <div className="cat">
                <img src={this.state.catUrl} alt="" />
            </div>
        )
    }
}

export default Cat;