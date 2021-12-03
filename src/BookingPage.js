import React, { Component } from 'react';
import queryHandler from './components/queryHandler';

class BookingPage extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      phoneNumber: "",
      cardNumber: "",
      numBags: "",
      bagWeight: ""
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmitForm() {
    
  }

  render() { 
    return (
      <div
        style={{
          padding:"1rem 1rem 1rem",
          border: "double #f7f7f9",
          backgroundColor: "rgb(220, 220, 220, 0.5)",
          boxSizing: "content-box",
          }}
        >
        <div>
          <h2 className="m-2">You're One Page Away From Your Next Flight!</h2>
          <input 
            name= "name" 
            type="text" 
            class="m-2" 
            placeholder="Name"
            value={this.state.name}
            onChange={this.onInputChange}
          />
          <input
            name="phoneNumber" 
            type="text" 
            class="m-2" 
            placeholder="Phone Number"
            value={this.state.phoneNumber}
            onChange={this.onInputChange}
          />
          <input
            name="cardNumber" 
            type="text" 
            class="m-2" 
            placeholder="Card Number"
            value={this.state.cardNumber}
            onChange={this.onInputChange}
          />
        </div>
        <div>
          <input
            name="numBags" 
            type="text" 
            class="m-2" 
            placeholder="Number of Bags"
            value={this.state.numBags}
            onChange={this.onInputChange}
          />
          <input
            name="bagWeight" 
            type="text" 
            class="m-2" 
            placeholder="Total Bag Weight"
            value={this.state.bagWeight}
            onChange={this.onInputChange}
          />
          <button 
            type="button" 
            class="btn-primary m-1"
            onClick={this.onSubmitForm}
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}
 
export default BookingPage;