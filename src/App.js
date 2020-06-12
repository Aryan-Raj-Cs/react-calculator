import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./cal.css";
import {mydesign} from './Mydesign.js'
class App extends React.Component {
  
  constructor (props) {
    super(props);
   
    this.state ={
      val:'',
      res:'hello aryan',
      flag:false
   
   };
  }
   calculate=()=>{
    const {val,res,flag}=this.state;
    try {
      var result=eval(val);
    }
    catch(err) {
     result="wrong expression"
    }
    
    this.setState({res:result,flag:true,val:result});

    console.log(this.state.res);
  
     }
  
  dis=(v)=>{
  this.setState({val:this.state.val+v})
  console.log(this.state.val);
  }
  
  /**check=()=>{
     if(this.state.flag){
        return this.state.res;
     }
     else{
        return this.state.val;
     }
  }*/

  clear=()=>{
   this.setState({val:'',res:'',flag:false}) 
  }
 render() {
    return(
      
    <div className="App">
       
      <center>
     <mydesign/>
     <table border="1"> 
         <tr> 
            <td colspan="3"><input type="text" id="result" value={this.state.val}/></td> 
          
            <td><input type="button" value="c" onClick={this.clear} /> </td> 
         </tr> 
         <tr> 
          
            <td><input type="button" value="1" onClick={() => this.dis('1')}/> </td> 
            <td><input type="button" value="2" onClick={() => this.dis('2')}/> </td> 
            <td><input type="button" value="3" onClick={() => this.dis('3')}/> </td> 
            <td><input type="button" value="/" onClick={() => this.dis('/')}/> </td> 
         </tr> 
         <tr> 
        
          <td><input type="button" value="4" onClick={() => this.dis('4')}/> </td> 
          <td><input type="button" value="5" onClick={() => this.dis('5')}/> </td> 
          <td><input type="button" value="6" onClick={() => this.dis('6')}/> </td> 
          <td><input type="button" value="-" onClick={() => this.dis('-')}/> </td> 
       </tr> 
       <tr> 
          
          <td><input type="button" value="7" onClick={() => this.dis('7')}/> </td> 
          <td><input type="button" value="8" onClick={() => this.dis('8')}/> </td> 
          <td><input type="button" value="9" onClick={() => this.dis('9')}/> </td> 
          <td><input type="button" value="+" onClick={() => this.dis('+')}/> </td> 
         
       </tr> 
       <tr> 
          
          <td><input type="button" value="." onClick={() => this.dis('.')}/> </td> 
          <td><input type="button" value="0" onClick={() => this.dis('0')}/> </td> 
          <td><input type="button" value="*" onClick={() => this.dis('*')}/> </td> 
          <td><input type="button" value="=" onClick={ this.calculate}/> </td> 
         
       </tr> 
        
      </table>
      </center>
    </div>
    )
  }
}

export default App;
