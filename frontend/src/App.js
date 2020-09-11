import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import ReactDOM from 'react-dom';

class App extends Component{
  onChangeHandler=event=>{
    this.setState({ //Passes the selected file to the STATE
    selectedFile: event.target.files[0],
    loaded:0,
    })
  }
  onClickHandler=()=>{
    const data = new FormData()
    data.append('file',this.state.selectedFile)//our selected file data
    axios.post("http://localhost:3000/upload", data,{})//Send Post with endpoint URL and our form data with our file in it
    .then(res => {//then we print the response status
      console.log(res.statusText)
    })
  }
  render() {
    return (
      //Code modified from https://bootsnipp.com/snippets/DOXy4
      <div className = "container">
        <div className="row">
          <div className="col-md-12">
              <form method="post" action="#" id="#">
                    <div className="form-group files">
                      <label>Upload Your File</label>
                      <input type="file" name="file" className="form-control" multiple="" onChange = {this.onChangeHandler}/>
                    </div>
               </form>
          </div>
        </div>
        <div className ="row">
          <div className = "col-md-12">
            <button type = "button" className="btn btn-primary btn-upload" onClick = {this.onClickHandler}>Upload</button>
          </div>
        </div>
      </div>
  );
  }
}

export default App;
