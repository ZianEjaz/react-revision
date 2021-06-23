import React, { Component } from "react";


class RemoveSpaces extends Component{
    state={
        filteredString : 'Enter data to remove spaces'
    }
    inputChange =  (event) => {
        let string = event.target.value;
      let  filteredString = string.replace(/\s/g, '')
        this.setState(
            {filteredString}
        )

    }
    //copy code to clipboard
    copyCodeToClipboard = () => {
    const el = this.textArea
    el.select()
    document.execCommand("copy")
    this.setState({filteredString : ''})
  }
    render(){
        return(
            <div  style={{width: '80%',margin : ' 10px auto'}}>
                <textarea onChange={this.inputChange}
            ref={(textarea) => this.textArea = textarea}
            value={this.state.filteredString}
          />
                <button onClick={() => this.copyCodeToClipboard()}>
            Copy to Clipboard
          </button>
            </div>
        )
    }
}

export default RemoveSpaces