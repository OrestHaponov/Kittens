import React from 'react';
import "./cat.scss";

class Cat extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            catInfo: [],
        }
    }

    componentDidMount() {
        fetch("/getCat")
            .then(res => res.json())
            .then(data =>
                this.setState({
                    catInfo: data.parsedBody
                })
            );
    };

    render(){
        return(
            <React.Fragment>
                {this.state.catInfo.map((value,index)=>{
                    return( 
                        <div className="cat" key={index}>
                            <img src={value.url} alt=""/>
                        </div>
                    )
                })}
            </React.Fragment>
        )
    }
}

export default Cat;