import React from 'react';
import ToyCard from './ToyCard'
//import { render } from '@testing-library/react';

class ToyContainer extends React.Component{


  state = {
    data: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/toys')
    .then(response => response.json())
    .then(data => this.setState({data :data}))

    
  }

  deleteHandler= (id) => {
    fetch(`http://localhost:3000/toys/${id}`, {
      method: "DELETE"
    })
    .then(this.componentDidUpdate())
  }

  componentDidUpdate(){
    fetch('http://localhost:3000/toys')
    .then(response => response.json())
    .then(data => this.setState({data :data}))
  }



  render(){
    let toy = this.state.data.map(toyObj => <ToyCard toy={toyObj} deleteHandler={this.deleteHandler}/>)
    return( 
      <div id="toy-collection">
       {toy}
      </div>
    );
  }


  }


export default ToyContainer;
