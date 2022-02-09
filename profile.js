import React, { Component } from 'react';


class Profile extends React.Component  {

    constructor(){
        super ();
        this.state = {
            name: 'narjess',
            profession:'student',
            
       
        }
    }
    render () {
        return (
            <div>
           <h1>{this.state.name}</h1>
           <h2>{this.state.profession}</h2>
          
            </div>
        )
    }
}
export default Profile;
