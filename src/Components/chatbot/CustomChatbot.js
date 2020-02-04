import React, { Component } from 'react';
import ChatBot from "react-simple-chatbot";
import PropTypes from 'prop-types';

function GetData(props){  
  var xhr = new XMLHttpRequest()
  // open the request with the verb and the url
  xhr.open('POST', 'http://3.94.123.157:8000/chatbot')
  // send the request
  xhr.send(JSON.stringify({"query":props.payload}))

  
  // console.log(json_data);

  xhr.onreadystatechange = function() {
    if (this.status == 200) {
      var myArr = JSON.parse(this.responseText);
      console.log(myArr);
      // console.log("This is the data log")
      // console.log (myArr.data)
      console.log(myArr.length);
      var response_div = document.getElementsByClassName("jKLQUD")[0];
      // response_div.innerHTML += "<table>"
      // console.log(myArr['data'][0]['text']);
      for(var i=0;i<myArr['data'][1]['listM'][0].length;i++){

        // console.log(myArr['data'][1]['listM'][0][i])
        response_div.innerHTML += "<td>"
        response_div.innerHTML += myArr['data'][1]['listM'][0][i]['text'];
        response_div.innerHTML += "</td><br>"

      }
      // response_div.innerHTML += "</table>"    
      
    };
  }
  // return(
  //     <div> {json_data['data'['text']]} </div>
  //   );
    
     

  return null;
  }
  
  

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      comboPack: ''           
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, comboPack } = steps;

    this.setState({ name, comboPack });
    
  }

  

  render() {
    const { name, comboPack } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Name </td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Package </td>
              <td>{comboPack.value}</td>
              <td></td>
            </tr>
            
          </tbody>
        </table>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

class CustomChatbot extends Component {
  render() {
    return (
      <ChatBot
        steps={[
          {
            id: '1',
            message: 'What is your name?',
            trigger: 'name',
          },
          {
            id: 'name',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Hi {previousValue}! What combo package would you like to know about?',
            trigger: 'comboPack',
          },
          {
            id: 'comboPack',            
            user: true,
            trigger: 'review'
          },          
          
          {
            id: 'review',
            component: <GetData payload = "package for delhi for 5 hours"/>,
            trigger: 'update',
          },
          {
            id: 'update',
            message: 'It was a pleasure assisting you. Have a nice day! ',
            end: true          
          }
          
        ]}
      />
    );
  }
}

export default CustomChatbot;