import React from "react";
import { logDOM } from "@testing-library/react";
import axios from "axios";
// import Styles
import "./App.css";
var year=new Date().getFullYear();
class App extends React.Component{
    state={advice:''};

    componentDidMount(){
        // console.log("component did mount");
        this.fetchAdvice();
    }
    fetchAdvice=()=>{   //we don't need const because it is a method inside a class
        axios.get("	https://api.adviceslip.com/advice")
        .then((response)=>{
            const {advice}=response.data.slip;
            this.setState({advice:advice})//we can also do just advice cause both value nd var are same
        })
        .catch((error)=>{
            console.log(error);
        });
    }
    render(){
        const { advice }=this.state;
        return (
            <div className="app">
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    <button className="button" onClick={this.fetchAdvice()}>
                        <span>GIVE ME ADVICE!</span>
                    </button>
                </div>
            </div>
            
        );
    }
}

export default App; 

