import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


import './App.css'

class App extends Component {
  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log("Data Name" + data.get('assigneename'));
   // return false;
    // fetch('form-submit-url', {
    //   method: 'POST',
    //   body: data,
    // });
  }
  render() {
    return (

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>Add Task</h1>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="assigneename">
                <Form.Label>Assignee name:  </Form.Label>
                <Form.Control as="select" name="assigneename">
                  <option value="0">Select Assignee</option>
                  <option value="1">Veera</option>
                  <option value="2">Ragavan</option>
                </Form.Control>

              </Form.Group>

              <Form.Group controlId="taskname" >
                <Form.Label>Task Name:</Form.Label>
                <Form.Control type="text" name="taskname" />
              </Form.Group>
              <Form.Group controlId="taskdescription">
                <Form.Label>Task Description:</Form.Label>
                <Form.Control as="textarea" rows={3} name="taskdescription" />
              </Form.Group>
              <Form.Group controlId="taskstartdate">
                <Form.Label>Task Start Date:</Form.Label>
                <Form.Control type="text" name="taskstartdate" />
              </Form.Group>
              <Form.Group controlId="taskenddate">
                <Form.Label>Task End Date:</Form.Label>
                <Form.Control type="text" name="taskenddate" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>

    );
  }
}


export default App;
