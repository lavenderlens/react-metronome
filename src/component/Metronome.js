import React, { Component } from 'react';
import './Metronome.css';
import click1 from '../click1.wav';
import click2 from '../click2.wav';
import './animate.css';
import Visual from './Visual';

//Screen flash - light mode - dark mode - off
//visual off - audio off - both on

class Metronome extends Component{

    constructor(props){
        super(props);

        this.state = {
            playing: false,
            count: 0,
            bpm: 120,
            beatsPerMeasure: 4,
            toggleClass : 'button',
            toggleStart : 'wobble',
            swing: '1s'
        }
        this.click1 = new Audio(click1);
        this.click2 = new Audio(click2);
    }

    handleBpmChange = event => {
        const bpm = +event.target.value;//funny this was working fine without type coercion
        this.setState({ bpm, swing: (120/event.target.value) + 's' });
    }

    handleBeatsPerMeasureChange = event =>{
        const beatsPerMeasure = +event.target.value;
        console.log(beatsPerMeasure);
        this.setState({beatsPerMeasure})
    }

    startStop = () =>{
        if(this.state.playing){
            clearInterval(this.timer);
            console.log('playing from parent');

            this.setState({
                playing: false,
                toggleClass: 'button',
                toggleStart : 'wobble'
            });
        } else {
            this.timer = setInterval(
                this.playClick, 
                (60 / this.state.bpm) * 1000
            );
            this.setState({
                count:0,
                playing: true,
                toggleClass: 'button, button-pressed',
                toggleStart : 'swing'
            },
            this.playClick
            );
        }
    }

    playClick = () =>{
        const { count, beatsPerMeasure } = this.state;

        if(count % beatsPerMeasure === 0){
            this.click2.play();

        } else {
            this.click1.play();
        }
        this.setState(state => ({
            count: (state.count + 1) % state.beatsPerMeasure,
        }))
    }

    render() {
        const { playing, bpm, toggleClass, toggleStart, swing } = this.state;

        return <div className="metronome">
        <div >
            <Visual bpm={bpm} 
                    playing={playing} 
                    toggleClass={toggleClass} 
                    toggleStart={toggleStart} 
                    swing={swing}/>
            <p>set tempo</p>
            <div className="bpm-slider">
                <div>{bpm} BPM</div>
                    <input 
                    type="range" 
                    min="60" 
                    max="180" 
                    value={bpm}
                    onChange={this.handleBpmChange} 
                    swing={swing}/>
                </div>
                <button className={toggleClass} onClick={this.startStop}>{playing ? 'Stop' : 'Start'}</button>
                <div id="signature" onChange={this.handleBeatsPerMeasureChange}>
                    <p>set time signature</p>
                    <label><input type="radio" value="4" name="signature" defaultChecked/>4/4</label>
                    <label><input type="radio" value="2" name="signature"/>2/4</label>
                    <label><input type="radio" value="3" name="signature"/>3/4</label><br />
                    <label><input type="radio" value="6" name="signature"/>Ed Sheeran Mode (6/8)</label>
                </div>
            </div>
        </div>;
    }
}

export default Metronome;