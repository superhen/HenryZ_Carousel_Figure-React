import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './App.css';
import image_1 from "./imgs/1.jpg"
import image_2 from "./imgs/2.jpg"
import image_3 from "./imgs/3.jpg"
import image_4 from "./imgs/4.jpg"
var images = [image_1,image_2,image_3,image_4]
class App extends Component {
    static childContextTypes = {
    index: PropTypes.number,
    handleClick: PropTypes.func
  }
  getChildContext(){
    return {
      index: this.state.index,
      handleClick: (index)=>this.state.handleClick(index)
    }
  }
  constructor(props){
    super(props)
    this.state = {
      index: 0,
      handleClick: (index)=>this.handleClick(index)
    }
  }
  handleClick(index){
    this.setState({
      index: index
    })
  }
  componentDidMount(){
    setInterval(()=>{
      console.log('timeout')
      this.setState({
        index : this.state.index === images.length - 1? 0 : this.state.index + 1 
      })
    },5000)
  }
  render() {
    return (
      <div>
        <p>HenryZ来练习下轮播图吧，基于React</p>
        <Carousel />
      </div>
    );
  }
}

class Carousel extends Component{
  static contextTypes = {
    index: PropTypes.number,
    handleClick: PropTypes.func
  }
  constructor(props){
    super(props)
  }
  _goNext(){
    console.log('goNext')
    if(this.context.index === images.length - 1){
      this.context.handleClick(0)
    }else{
      this.context.handleClick(this.context.index + 1)
    }
  }
  _goPrev(){
    console.log('goPrev')
    if(this.context.index === 0){
      this.context.handleClick(images.length - 1)
    }else{
      this.context.handleClick(this.context.index - 1)
    }
  }
  render(){
    console.log(this.context)
    return (
      <div className="carousel">
        <ul className="list">
        {
          images.map((item,i)=>(<li className = {i === this.context.index? "item active":"item"} key = {i} ><img src={item} alt="" width="700px" height="350px"/></li>))
        }
        </ul>
        <span className="btn left" onClick={()=>this._goPrev()}>{'<'}</span>
        <span className="btn right" onClick={()=>this._goNext()}>{'>'}</span>
      </div>
    )
  }
}

export default App;
