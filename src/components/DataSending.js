import React, { Component } from 'react'
import axios from "axios"
class DataSending extends Component {
  constructor(props) {
    super(props)
    this.state = {
      RegnNo:"",
      ApplicantName:"",
      State:""
    }
  }
  changeHandler = (e) =>{
    this.setState({[e.target.name]:e.target.value.toUpperCase()})
  }
  submitHandler = (e) =>{
    // e.preventDefault() //to prevent page refresh.
    console.log(this.state)
    axios
    .post("http://localhost:8000", this.state)
    .then(response => {
      console.log(response.data) 
    })
    .catch(error => {
      console.log(error)
    })
  }
  
  render() {
    const { RegnNo, ApplicantName, State} = this.state
    return (
          <div>
            <div className="head">
              <h1>New Chart Grid</h1>
              <h2>New</h2>
              <h2>Charts</h2>
              <h2>Grid</h2>
            </div>
            <div className="form">
              <form onSubmit={this.submitHandler}>
                <div className="row">
                  <div className="col-label">
                    <label for="RegnNo">Regn No</label>
                  </div>
                  <div className="col-input">
                  <input type="number" name="RegnNo" value={RegnNo} onChange={this.changeHandler}></input>
                  </div>
                </div>
                <div className="row">
                  <div className="col-label">
                    <label for="ApplicantName">Applicant Name</label>
                  </div>
                  <div className="col-input">
                  <input type="text" name="ApplicantName" value={ApplicantName} onChange={this.changeHandler}></input>
                  </div>
                </div>
                <div className="row">
                  <div className="col-label">
                    <label for="State">State</label>
                  </div>
                  <div className="col-input">
                    <select name="State" value={State} onChange={this.changeHandler}>
                    <option value="">Select your state</option>
                      <option value="KA">KA</option>
                      <option value="TN">TN</option>
                      <option value="JK">JK</option>
                      <option value="AP">AP</option>
                      <option value="TS">TS</option>
                      <option value="AN">AN</option>
                      <option value="NL">NL</option>
                    </select>
                  </div>
                </div>
                <br />
                <div className="row">
                  <input type="submit" value="Save"></input>
                </div>
              </form>
            </div>
          </div>


      
    )
  }
}

export default DataSending



