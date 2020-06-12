import React, { Component } from "react";
import { render } from "react-dom";
// import WebSocket from "ws";
import CanvasDraw from "../../src";
import classNames from "./index.css";

class Demo extends Component {
  state = {
    color: "#ff2600",
    width: 400,
    height: 400,
    brushRadius: 1,
    lazyRadius: 0,
    gridColor: "rgba(150,150,150,1)",
    hideGrid: false,
    currX: 0,
    currY: 0,
  };
// Listener Socket: Using websockets with TCP protocol, recieve EMG signals 
// from port 5001 after being processed with our Python script.
  flexSocket = new WebSocket('ws://127.0.0.1:5001/');
  componentDidMount() {
      document.onmousemove = (event) => {
        this.currX = event.clientX; // cursor X position
        this.currY = event.clientY; // cursor Y position
      }
      this.setState({
        color: "#ff2600", // set initial color of pen
      });
      this.flexSocket.onopen = () => {
        console.log('OPEN'); // checking to see if socket is open
      }
  
      this.flexSocket.onmessage = e => {
        const msg = JSON.parse(e.data);
        if (msg.click == 1) {
          document.elementFromPoint(this.currX, this.currY).click(); // Click at current cursor position
        }
        console.log(msg);
      }
  
      this.flexSocket.onclose = () => {
        console.log('bye'); // Closing web socket
       }
  }


  render() {
    return (
      <div>
       
        <img src="demo/TransparentRounded.png" alt="(Th)ink Logo"  //Imported (Th)ink logo, adjusts size as screen size changes
        width="60%" height="60%"   // % of screen size
        >
          
        </img>
        
        <button // Creating the UNDO button on the canvas. The button definitions 
                // below define the design and display of the buttons.
            onClick={() => {
              this.saveableCanvas.undo();
            }}
            style={{
              display: "inline-block", //stacking in relation to other buttons
              width: "30%", // width of button will be auto adjust to be 30% of screen width
              height: "50px", //h eight of button
              backgroundColor: "rgba(255,255,255,100)", // White background color of button
              border: "3px solid #272727", // black border
              float: "right", // side of page for button to align with (left or right)
              fontSize: "24px", // size of text for button label
              margin: "160px 0px 10px 0px", //spacing between button and other elements on the screen
              borderRadius: "10px", // slightly rounded edges on the button border
            }}
            // insert below the button label
          >
            Undo 
          </button>

        <CanvasDraw
          ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
          brushColor={this.state.color} brushRadius={this.state.brushRadius} gridColor={this.state.gridColor} hideGrid={this.state.hideGrid}//"rgba(255,255,0,.50)"
          imgSrc="demo/BWSticker.png"
          //"https://upload.wikimedia.org/wikipedia/commons/c/cb/Coloring_kids_games_to_play.png" // another option for coloring template
          
        />
        <div > 
    
          <div>

        <button // Creating the SAVE button. Control options for the UNDO button repeated here.
            onClick={() => {
              localStorage.setItem(
                "savedDrawing",
                this.saveableCanvas.getSaveData()
              );
            }}
            style={{
              display: "inline-block",
              width: "10.75%",//"110px"
              height: "40px",
              backgroundColor: "rgba(255,255,255,100)",
              border: "3px solid #272727",
              float: "left",
              fontSize: "16px",
              margin: "0px 0px",
              borderRadius: "10px",
              clear: "left",
            }}
          >
            Save
          </button>
          <button // Creating the CLEAR button. Control options for the UNDO button repeated here.
            onClick={() => {
              this.saveableCanvas.clear();
            }}
            style={{
              display: "inlinelock",
              width: "10.75%",
              height: "40px",
              backgroundColor: "rgba(255,255,255,100)",
              border: "3px solid #272727",
              float: "left",
              fontSize: "16px",
              margin: "0px 12px",
              borderRadius: "10px",
            }}
          >
            Clear
          </button>
          <button // Creating the HIDE GRID button. Each time this button is clicked, it will toggle the grid to be on or off.
                  // Control options for the UNDO button repeated here.
            onClick={() => {
              this.setState({
                hideGrid: !hideGrid,
              });
            }}
            style={{
              display: "inline-block",
              width: "22.5%",
              height: "40px",
              backgroundColor: "#FFF",
              border: "3px solid #272727",
              float: "left",
              fontSize: "16px",
              borderRadius: "10px",
              margin: "10px 0px"
            }}
          >
            Hide Grid
          
          </button>
          <p></p>

          <button // Creating the button that changes the pen size to LARGE. Control options for the UNDO button repeated here.
            onClick={() => {
              this.setState({
                brushRadius: "10", // set pen size
              });
            }}
            style={{
              display: "inline-block",
              width: "90px",
              height: "90px",
              backgroundColor: "#fff",
              border: "3px solid #272727",
              borderRadius: "55px", 
              fontSize : "24px",
              float: "left",
              margin: "10px 0px",
              color: "#272727",
              clear: "left"
            }}
            
          >
            Large
          </button>
 
          <button // Creating the button that changes the pen size to MEDIUM. Control options for the UNDO button repeated here
            onClick={() => {
              this.setState({
                brushRadius: "5",
              });
            }}
            style={{
              display: "inline-block",
              width: "70px",
              height: "70px",
              fontSize: "15px",
              backgroundColor: "#FFF",
              border: "3px solid #272727",
              borderRadius: "35px", 
              float: "left",
              textAlign: "center",
              margin: "20px 10px",
            }}
            
          >
          Medium
          </button>

          <button // Creating the button that changes the pen size to MEDIUM. Control options for the UNDO button repeated here
            onClick={() => {
              this.setState({
                brushRadius: "1",
              });
            }}
            style={{
              display: "inline-block",
              width: "50px",
              height: "50px",
              backgroundColor: "#FFF",
              fontSize : "13px",
              border: "3px solid #272727",
              borderRadius: "25px", 
              float: "left",
              margin: "30px 0px",
            }}
            
          >
            Small
          </button>
          
          </div>
          <div>
          <button // Creating the button that changes the pen color to RED. Control options for the UNDO button repeated here
            onClick={() => {
              this.setState({
                color: "rgba(255,0,0,.800)" // (r,g,b,transparency 0-->1)
              });
            }}
            style={{
              display: "block",
              width: "6%",
              height: "60px",
              backgroundColor: "rgba(255,0,0,1)",
              border: "3px solid #272727",
              fontSize: "15px",
              float: "left",
              margin: "10px 0px",
              borderRadius: "10px",
              color: "#FFF",
              clear: "left"
            }}
            
          >
            Red
          </button>
          
          <button // Creating the button that changes the pen color to ORANGE. Control options for the UNDO button repeated here
            onClick={() => {
              this.setState({
                color: "rgba(255, 116, 0, 0.8)"
              });
            }}
            style={{
              display: "block",
              width: "6%",
              height: "60px",
              backgroundColor: "rgba(255, 116, 0, 1)",
              border: "3px solid #272727",
              fontSize: "14px",
              float: "left",
              margin: "10px 26px",
              borderRadius: "10px",
              padding: "0px", // spacing between the button border and the text label
            }}
            
          >
            Orange
          </button>
          <button // Creating the button that changes the pen color to YELLOW. Control options for the UNDO button repeated here
            onClick={() => {
              this.setState({
                color: "rgba(255, 240, 0, 0.8)"
              });
            }}
            style={{
              display: "block",
              width: "6%",
              height: "60px",
              backgroundColor: "rgba(255, 240, 0,1)",
              border: "3px solid #272727",
              fontSize: "15px",
              float: "left",
              margin: "10px 0px",
              borderRadius: "10px",
            }}
            
          >
            Yellow
          </button>  
          <button // Creating the button that changes the pen color to GREEN. Control options for the UNDO button repeated here
            onClick={() => {
              this.setState({
                color: "rgba(62, 255, 0, 0.8)"
              });
            }}
            style={{
              display: "block",
              width: "6%",
              height: "60px",
              backgroundColor: "rgba(62, 255, 0, 1)",
              border: "3px solid #272727",
              fontSize: "15px",
              float: "left",
              margin: "10px 0px",
              borderRadius: "10px",
              clear: "left"
            }}
            
          >
            Green
          </button>  
          <button // Creating the button that changes the pen color to BLUE. Control options for the UNDO button repeated here
            onClick={() => {
              this.setState({
                color: "rgba(0, 197, 255, 0.8)"
              });
            }}
            style={{
              display: "block",
              width: "6%",
              height: "60px",
              backgroundColor: "rgba(0, 197, 255, 1)",
              border: "3px solid #272727",
              fontSize: "15px",
              float: "left",
              margin: "10px 26px",
              borderRadius: "10px",
            }}
            
          >
            Blue
          </button> 
          <button // Creating the button that changes the pen color to INDIGO. Control options for the UNDO button repeated here
            onClick={() => {
              this.setState({
                color: "rgba(0, 39, 255, 0.8)"
              });
            }}
            style={{
              display: "block",
              width: "6%",
              height: "60px",
              backgroundColor: "rgba(0, 39, 255, 1)",
              border: "3px solid #272727",
              fontSize: "15px",
              float: "left",
              margin: "10px 0px",
              borderRadius: "10px",
              color: "#FFF", //color of button text label (white)
            }}
            
          >
            Indigo
          </button> 
          <button // Creating the button that changes the pen color to PURPLE. Control options for the UNDO button repeated here
            onClick={() => {
              this.setState({
                color: "rgba(174, 0, 255 , 0.8)"
              });
            }}
            style={{
              display: "block",
              width: "6%",
              height: "60px",
              backgroundColor: "rgba(174, 0, 255 , 1)",
              border: "3px solid #272727",
              fontSize: "15px",
              float: "left",
              margin: "10px 0px",
              borderRadius: "10px",
              color: "#FFF",
              clear: "left" // switching to a new line on the screen to stack buttons vertically
            }}
            
          >
            Purple
          </button> 
          <button // Creating the button that changes the pen color to BLACK. Control options for the UNDO button repeated here
            onClick={() => {
              this.setState({
                color: "rgba(0, 0, 0 , 0.8)"
              });
            }}
            style={{
              display: "block",
              width: "6%",
              height: "60px",
              backgroundColor: "rgba(0, 0, 0 , 1)",
              border: "3px solid #272727",
              fontSize: "15px",
              float: "left",
              margin: "10px 26px",
              borderRadius: "10px",
              color: "#FFF",
            }}
            
          >
            Black
          </button> 
          <button // Creating the button that changes the pen color to WHITE. Control options for the UNDO button repeated here
            onClick={() => {
              this.setState({
                color: "rgba(250, 250, 250 , 0.8)"
              });
            }}
            style={{
              display: "block",
              width: "6%",
              height: "60px",
              backgroundColor: "rgba(250, 250, 250 , 1)",
              border: "3px solid #272727",
              fontSize: "15px",
              float: "left",
              margin: "10px 0px 110px 0px",
              borderRadius: "10px",
            }}
            
          >
            White
          </button> 

          </div>
          <p><br></br></p>
          <br>
          </br>
          
        </div>


      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
