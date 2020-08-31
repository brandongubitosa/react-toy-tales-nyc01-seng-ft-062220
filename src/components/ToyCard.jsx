import React, { Component } from 'react';

class ToyCard extends Component {

  state = {
    likes: this.props.toy.likes
   
  }

  increaseLikes = () => {
    const newLikes = this.state.likes + 1
    //console.log(newLikes)
    this.setState({likes: newLikes})

    fetch(`http://localhost:3000/toys/${this.props.toy.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        "accepts": "application/json"
      },
      body: JSON.stringify(this.state)
    })
    
  }
  


  render() {
  
    let id = this.props.toy.id
    return (
    
      <div className="card">
        <h2>{this.props.toy.name}</h2>
        <img src={this.props.toy.image} alt={this.props.toy.name} className="toy-avatar" />
        <p>{this.props.toy.likes} Likes </p>
        <button  className="like-btn"onClick={this.increaseLikes}>Like {'<3'}</button>
        <button className="del-btn" onClick={()=> {id !== undefined ? this.props.deleteHandler(id) : console.log("CANT")} }>Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
