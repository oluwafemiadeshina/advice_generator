import React from 'react';
// import { useState } from 'react';

import './App.css'

class App extends React.Component {
    constructor() {
        super();

    //    const [advice, setAdvice] = React.useState({advice:''});
       this.state = {
        advice: ''
      };
    }
    

    componentDidMount(){
        this.FetchQoute()
    }

    FetchQoute = () => {
         fetch('https://api.adviceslip.com/advice')
        .then(res => res.json())
        .then(data => {
            const {id, advice} = data.slip
            this.setState({advice: advice})
        })
        .catch(err => console.error(err))
    }

    render(){
        return(
            <div className='app'>
                <div className='card'>
                    <h1 className='heading'>{this.state.advice}</h1> 
                    <button className="button"  onClick={this.FetchQoute}>
                        <span>GIVE ME ADVICE!</span>
                    </button>
                </div>
            </div>
        )
    }
}


export default App;