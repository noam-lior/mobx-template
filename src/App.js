import React, {Component} from 'react';
import logo from './logo.svg';
import { observer } from 'mobx-react'

import './App.css';

@observer
class App extends Component{
  render(){
    return <div>hello world</div>
  }
}

export default App;
