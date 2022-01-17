import React from 'react';
import ReactDOM from 'react-dom';



class Reviews extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value: 'MANADU'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('YOUR FAVOURITE MOVIE IS: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
        CHOOSE YOUR FAVOURITE MOVIE:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="KABALI">KABALI</option>
            <option value="MASTER">MASTER</option>
            <option value="BACHELOR">BACHELOR</option>
            <option value="VALAIMAI">VALAIMAI</option>
            <option value="SOORAI POTRU">SOORAI POTRU</option>
            <option value="KALA">KALA</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default Reviews;