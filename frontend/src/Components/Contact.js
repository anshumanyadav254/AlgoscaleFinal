import React from 'react';
import axios from 'axios';

class Contact extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname:'',
      email: '',
      message: ''
    }
  }

  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST", 
      url:"http://localhost:3002/send", 
      data:  this.state
    }).then((response)=>{

      if (response.data.status === 'success') {
        alert("Message Sent."); 

        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
        console.log(response.data);
      }
    })
    this.props.history.push("/analytics")
  }

  resetForm(){
    this.setState({firstname:'',lastname:'', email: '', message: ''})
  }
  
  render() {
    return(
      
      <div className="contact">
           <div className="litics" ><button className="analytics" onClick={()=> this.props.history.push("/analytics")} >Analytics</button></div>
         <h1>Contact Us</h1> 
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" className="form-control" id="name" value={this.state.firstname} onChange={this.onfirstNameChange.bind(this)} />
          </div>
          <div className="form-group">
              <label htmlFor="name">Last Name</label>
              <input type="text" className="form-control" id="name" value={this.state.lastname} onChange={this.onlastNameChange.bind(this)} />
          </div>
          <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
          </div>
          <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
          </div>
          <button type="submit" className="btn btn-primary" >Submit</button><br/>
        </form>
      </div>
    );
  }

  onfirstNameChange(event) {
	  this.setState({firstname: event.target.value})
  }
  onlastNameChange(event) {
	  this.setState({lastname: event.target.value})
  }

  onEmailChange(event) {
	  this.setState({email: event.target.value})
  }

  onMessageChange(event) {
	  this.setState({message: event.target.value})
  }
}

export default Contact;