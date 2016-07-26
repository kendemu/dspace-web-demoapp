import 'aframe';
import 'babel-polyfill';
import {Animation, Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

import Camera from './components/Camera';
import Cursor from './components/Cursor';
import Sky from './components/Sky';

class BoilerplateScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red'
    }
  }

  changeColor = () => {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)],
    });
  };

  render () {
    return (
      <Scene>
	<a-assets>
	    <video id="tiger" src="montnight.mp4"></video>
	    <img id="sky" src="sky.jpg"></img>
	    <a-asset-item id="cockpit" src="meshes/P51_Mustang.dae"></a-asset-item>
	</a-assets>
        <Camera>
	    <Entity cursor geometry="premitive: plane; width: 100" material={{src: '#hud'}} position="0 0 -1">
	    <Animation attribute="scale" begin="click" dur="150" fill="backwards" to="0 0 0"/>
	    </Entity>
	</Camera>

        <Entity geometry={{primitive:'sphere', radius: 5000}}
	material={{src: '#sky'}}
	scale={"1 1 -1"}/>

        <Entity light={{type: 'ambient', color: '#888'}}/>
        <Entity light={{type: 'directional', intensity: 0.5}} position={[-1, 1, 0]}/>
        <Entity light={{type: 'directional', intensity: 1}} position={[1, 1, 0]}/>
	<Entity collada-model="#cockpit" position={[0, -2, 0]} rotation={[0, 180, 0]}></Entity>
        <Entity geometry="primitive: box" material={{src: '#tiger'}}
                position="0 0 -20" scale="70 35 0.1"/>
      </Scene>
    );
  }
}

ReactDOM.render(<BoilerplateScene/>, document.querySelector('.scene-container'));
