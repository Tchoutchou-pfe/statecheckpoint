import './App.css';
import React from 'react';
import { Button } from 'react-bootstrap';
import Profile from './profile';
class App extends React.Component {


    constructor(props) {
      super(props);
      this.state = {
          show: true,
      }
    }
    
    showHandler = () =>{
      this.setstate ({
        show: !this.state.show,
      })
    }
  render() {
    return (
      <div>

   <Button variant="primary" onClick= {this.showHandler}>show</Button>
   {this.state.show && (
     <>
   <Profile/>
   </>
   )}

      </div>
    );
  }
}
export default App;
