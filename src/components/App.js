import React,{Component} from "react"
import Blocks from './Blocks'
import logo from '../assets/logo.png'

class App extends Component {

state={
walletInfo: {},
publicKey:{}
};

componentDidMount() {
   /* fetch('http://localhost:3001/api/wallet-info')
      .then(response => response.json())
      .then(json => this.setState({walletInfo: {balance:json.balance}}) );
    */ 
      fetch('http://localhost:3001/public-key')
      .then(response => response.json())
      .then(json => this.setState({publicKey:{publicKey: json.publicKey}}) );
  }

render() {

//const {balance}= this.state.walletInfo;
const {publicKey}= this.state.publicKey;
return(
<div className="App">
  <img className="logo" src={logo}></img>
  <br/>
<div> DeFi University </div>
<br/>
<div className="WalletInfo"> 

<div> address:<br/>{publicKey} </div>


</div>
<br/>
<br/>

<Blocks/>
</div> 
);
}

}

export default App