import React, {Component} from 'react';


class RawInput extends Component {

  render() {
    return (
      <div id="rawInput">
        <textarea type="text"
                  name="rawinput"
                  value={this.props.result}
                  onChange={this.props.handleRawInputChange}
        /> 
      </div>
    );
  }
}

export default RawInput;
