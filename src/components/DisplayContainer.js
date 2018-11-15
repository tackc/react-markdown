import React, {Component} from 'react';
import RawInput from './RawInput';
import marked from 'marked';

class DisplayContainer extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      value: ""
    }
  this.handleRawInputChange = this.handleRawInputChange.bind(this)
  }

  handleRawInputChange(e) {
    this.setState({
      value: e.target.value
    })
  }
  
  createMarkup() {
    // var result = marked('I am using __markdown__.');
    var rawInput = this.state.value
    return {__html: rawInput}
  }


  render() {
    var result = marked(this.state.value)
    var obj = {
      __html: result
    }
    return (
      <div id="DisplayContainer">
        <RawInput handleRawInputChange={this.handleRawInputChange}/>
        <div id="preview" dangerouslySetInnerHTML={obj}></div>
      </div>
    );
  }
}

export default DisplayContainer;
