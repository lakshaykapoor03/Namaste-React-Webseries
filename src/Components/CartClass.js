import React from 'react'
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
        <h1>Hey I am class cart</h1>
      </div>
    );
  }
}

export default Cart;
