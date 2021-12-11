import React, {Component} from 'react';
import ComponentCommon from '../components/common';

class Shell extends Component{

   
        constructor(props){
        super(props);
        this.state={
            name:'joshua'
        }
        this.auxText='Prueba'
    }
    handleClick=(params)=>{
        this.state({click:2})
        this.auxText='cambio'
        console.log(this.state)
        console.log(this.auxText)
    }
    
    render(){
        return(
            <div>
            <h1> hola{this.auxText}</h1>
            <ComponentCommon.ButonBlack id='Buy' click={this.handleClick}></ComponentCommon.ButonBlack>
            </div>
        )
    }


}
export default Shell