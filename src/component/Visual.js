import React, { Component } from 'react';
import './Metronome.css';
import ticker from './clef.svg';
import './animate.css';

class Visual extends Component{
    constructor(props){
        super(props);
        this.state = {
            a: {animationDuration: props.swing},
        }
    }

    render(){
        return(
            <div>
                <img    src={ticker} 
                        className={this.props.toggleStart} 
                        alt="ticker" 
                        // style={{animationDuration: '6s'}}//works as string
                        style={{animationDuration: this.props.swing}}
                />
            </div>
        );
    }
}

export default Visual;