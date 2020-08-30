import React, { Component } from 'react';

class ToyCard extends Component {

  state = {
    likes: this.props.toy.likes
  }

  increaseLikes = () => {
    
    const newLikes = this.state.likes + 1
    console.log(newLikes)
    this.setState({
      likes: newLikes
    })
    //i need to make a patch request in here to update the number of likes to the backend
    //then in toyContainer do another Component Did Update
  }
  



  render() {
  
    return (
      <div id={this.props.toy.id} className="card">
        <h2>{this.props.toy.name}</h2>
        <img src={this.props.toy.image} alt={this.props.toy.name} className="toy-avatar" />
        <p>{this.props.toy.likes} Likes </p>
        <button  className="like-btn"onClick={this.increaseLikes}>Like {'<3'}</button>
        <button  className="del-btn" onClick={this.deleteHandler}>Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
