import React from 'react'
import UserContext from '../utils.js/UserContext';

class Cart extends React.Component {
constructor(props) {
    super(props);

    this.state={
        count:0,
        count1:1
    }
}

  componentDidMount() {
      console.log("component did mount");
    
  }

  componentDidUpdate(){
   
    console.log("component did update")  }
  render() {
  console.log("render")

    return (
      <div>
       < UserContext.Consumer>
       {({user})=> <h4>{user.name}</h4>}
       </UserContext.Consumer>
        <h1>Hey I am class cart</h1>
      </div>
    );
  }
}

export default Cart;
