import React, { Component } from "react";

class DisplayForm extends Component{
    constructor(props){
        super(props);
        console.log(this.props.value);

    }
    render(){
        return(
           
            <>
            <h1>EMPLOYEE FEEDBACK DATA</h1>
            <div className="container">
            {this.props.value.map((item,index)=>{
                return(
                    <div className="box">
                    <p key={index}>Name:{item.name}|| Department:{item.Department}||Rating:{item.rate}</p>
                    </div>
                )
            })

            }
            </div>
            <div className="con">
            <button onClick={this.props.toggleFunc}>Go Back</button>
            </div>
            </>
        )
    }
}
export default DisplayForm;