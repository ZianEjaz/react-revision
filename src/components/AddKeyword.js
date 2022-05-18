import React, { Component } from 'react'

export class AddKeyword extends Component {
  state = {
    keywordCounter : 0,
    value : ""
  }

  addKeyword = (event)=>{
    
    if(event.charCode === 13){
this.setState({
      value : " "
    })
    console.log(event.target.value)
    }
    
  }


  render() {
    
    return (
      <div className='text-center p-5'>
        <input type="text" className="border shadow p-3 " placeholder='Add a keyword to add' onKeyPress={this.addKeyword} value={this.state.value}/>
        <p>{0} / 24</p>
{this.state.value}
      </div>
    )
  }
}

export default AddKeyword