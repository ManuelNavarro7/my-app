import React, {Component} from 'react';

class Shell extends Component{
    render(){
        return(
            <h1>Hola {this.props.nombre} {this.props.app}</h1>
        )
    }


}
export default Shell