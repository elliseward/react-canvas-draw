import React, { Component } from "react";
import { render } from "react-dom";

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
  };
  componentDidMount() {
    this.setState({
      color: "#ff2600"//"rgba(255,255,0,1)",
    });
    // window.setInterval(() => {
    //   this.setState({
    //     color: "#" + Math.floor(Math.random() * 16777215).toString(16)
    //   });
    // }, 2000);
  }


  render() {
    return (
      <div>
        {/* <h1>(Th)ink Canvas</h1> */}
        {/* <iframe
          title="GitHub link"
          src="https://ghbtns.com/github-btn.html?user=embiem&repo=react-canvas-draw&type=star&count=true"
          frameBorder="0"
          scrolling="0"
          width="160px"
          height="30px"
        /> */}
        {/* <h2>default</h2> */}
        {/* <p>
          This is a simple <span>{`<CanvasDraw />`}</span> component with
          default values.
        </p> */}
        {/* <p>Try it out! Draw on this white canvas:</p> */}
        {/* <CanvasDraw onChange={() => console.log("onChange")} /> */}
        <img src="demo/TransparentRounded.png" alt="(Th)ink Logo" 
        width="70%" height="70%"  
        >
          
        </img>
        <h2>
        </h2>
        {/* <p>
          {" "} */}
          {/* <span>{`<CanvasDraw brushColor={this.state.color} />`}</span>. */}
          {/* Color changes every 2 seconds:
        </p> */}
        {/* <div> */}
          {/* Current color:{" "}
          <div
            style={{
              display: "inline-block",
              width: "20px",
              height: "20px",
              backgroundColor: this.state.color,
              border: "1px solid #272727"
            }}
          /> */}
{/* 
          <button
            onClick={() => {
              this.setState({
                brushRadius: "15",
              });
            }}
            style={{
              display: "inline-block",
              width: "90px",
              height: "90px",
              backgroundColor: "#FFF",
              border: "3px solid #272727",
              borderRadius: "55px", 
              fontSize : "24px",
              float: "right"
            }}
            
          >
            Large
          </button>
          <button
            onClick={() => {
              this.setState({
                brushRadius: "10",
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
              float: "right"
            }}
            
          >
          Medium
          </button>
          <button
            onClick={() => {
              this.setState({
                brushRadius: "5",
              });
            }}
            style={{
              display: "inline-block",
              width: "50px",
              height: "50px",
              backgroundColor: "#FFF",
              fontSize : "14px",
              border: "3px solid #272727",
              borderRadius: "25px", 
              float: "right"
            }}
            
          >
            Small
          </button>
        </div> */}
        {/* <CanvasDraw brushColor={this.state.color} brushRadius={this.state.brushRadius} gridColor={this.state.gridColor} hideGrid={this.state.hideGrid} /> */}
        <button
            onClick={() => {
              this.saveableCanvas.undo();
            }}
            style={{
              display: "inline-block",
              width: "30%",//"600px",
              height: "50px",
              backgroundColor: "rgba(255,255,255,100)",
              border: "3px solid #272727",
              float: "right",
              fontSize: "24px",
              margin: "0px 0px",
              borderRadius: "10px",
            }}
          >
            Undo
          </button>
          <div><br></br><br></br><br></br></div>

          {/* <button
            onClick={() => {
              this.setState({
                color: "rgba(255,255,0,.500)"
              });
            }}
            style={{
              display: "block",
              width: "60px",
              height: "60px",
              backgroundColor: "rgba(255,255,0,1)",
              border: "3px solid #272727",
              fontSize: "15px",
              float: "right"
            }}
            
          >
            Yellow
          </button>
          <button
            onClick={() => {
              this.setState({
                color: "rgba(60,235,0,0.5)"
              });
            }}
            style={{
              display: "block",
              width: "60px",
              height: "60px",
              backgroundColor: "rgba(60,235,0,1)",
              border: "3px solid #272727",
              fontSize: "15px",
              float: "right"
            }}
            
          >
            Green
          </button>
          <button
            onClick={() => {
              this.setState({
                color: "rgba(255,67,73,0.5)"
              });
            }}
            style={{
              display: "block",
              width: "60px",
              height: "60px",
              backgroundColor: "rgba(255,67,73,1)",
              border: "3px solid #272727",
              fontSize: "15px",
              float: "right"
            }}
            
          >
            Red
          </button> */}


          {/* <button
            onClick={() => {
              this.setState({
                brushRadius: "15",
              });
            }}
            style={{
              display: "inline-block",
              width: "90px",
              height: "90px",
              backgroundColor: "#FFF",
              border: "3px solid #272727",
              borderRadius: "55px", 
              fontSize : "24px",
              float: "right"
            }}
            
          >
            Large
          </button>
          <button
            onClick={() => {
              this.setState({
                brushRadius: "10",
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
              float: "right",
              clear: "left"
            }}
            
          >
          Medium
          </button>
          <button
            onClick={() => {
              this.setState({
                brushRadius: "5",
              });
            }}
            style={{
              display: "inline-block",
              width: "50px",
              height: "50px",
              backgroundColor: "#FFF",
              fontSize : "14px",
              border: "3px solid #272727",
              borderRadius: "25px", 
              float: "right"
            }}
            
          >
            Small
          </button> */}
        {/* <p>
          <p></p>
        </p>
        <h2>(Th)ink Coloring Book</h2>
        <p></p>
        <p>
        </p>    
        <h4>Use buttons to select colors, save image, undo last stroke and clear page. </h4> */}
        {/* <div>
          Current color:{" "}
          <div
            style={{
              display: "inline-block",
              width: "20px",
              height: "20px",
              backgroundColor: this.state.color, 
              border: "1px solid #272727"
            }}
          />
        </div> */}

        <CanvasDraw
          ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
          brushColor={this.state.color} brushRadius={this.state.brushRadius} gridColor={this.state.gridColor} hideGrid={this.state.hideGrid}//"rgba(255,255,0,.50)"
          //imgSrc="https://upload.wikimedia.org/wikipedia/commons/c/cb/Coloring_kids_games_to_play.png"
          
        />
        <div > 
          {/* className={classNames.tools} */}
          <div>
          {/* Current color:{" "}
          <div
            style={{
              display: "inline-block",
              width: "20px",
              height: "20px",
              backgroundColor: this.state.color,
              border: "1px solid #272727"
            }}
          /> */}

                  <button
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
          <button
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
          <button
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

          <button
            onClick={() => {
              this.setState({
                brushRadius: "10",
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
 
          <button
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

          <button
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
          <button
            onClick={() => {
              this.setState({
                color: "rgba(255,0,0,.800)"
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
          
          <button
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
              padding: "0px",
            }}
            
          >
            Orange
          </button>
          <button
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
          <button
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
          <button
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
          <button
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
              color: "#FFF",
            }}
            
          >
            Indigo
          </button> 
          <button
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
              clear: "left"
            }}
            
          >
            Purple
          </button> 
          <button
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
          <button
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
              margin: "10px 0px",
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

        
                  
{/*     
        <h2>

          
        </h2>
        <p>
          
          To hide the UI elements, set the `hideInterface` prop. You can also hide the grid with the `hideGrid` prop.</p>
        <CanvasDraw hideInterface hideGrid />
        <h2>Save & Load</h2>
        <p>
          This part got me most excited. Very easy to use saving and loading of
          drawings. It even comes with a customizable loading speed to control
          whether your drawing should load instantly (loadTimeOffset = 0) or
          appear after some time (loadTimeOffset > 0){" "}
          <span>{`<CanvasDraw loadTimeOffset={10} />`}</span>
        </p>
        <p>Try it out! Draw something, hit "Save" and then "Load".</p>
        <div className={classNames.tools}>
          <button
            onClick={() => {
              localStorage.setItem(
                "savedDrawing",
                this.saveableCanvas.getSaveData()
              );
            }}
          >
            Save
          </button>
          <button
            onClick={() => {
              this.saveableCanvas.clear();
            }}
          >
            Clear
          </button>
          <button
            onClick={() => {
              this.saveableCanvas.undo();
            }}
          >
            Undo
          </button>
          <div>
            <label>Width:</label>
            <input
              type="number"
              value={this.state.width}
              onChange={e =>
                this.setState({ width: parseInt(e.target.value, 10) })
              }
            />
          </div>
          <div>
            <label>Height:</label>
            <input
              type="number"
              value={this.state.height}
              onChange={e =>
                this.setState({ height: parseInt(e.target.value, 10) })
              }
            />
          </div>
          <div>
            <label>Brush-Radius:</label>
            <input
              type="number"
              value={this.state.brushRadius}
              onChange={e =>
                this.setState({ brushRadius: parseInt(e.target.value, 10) })
              }
            />
          </div>
          <div>
            <label>Lazy-Radius:</label>
            <input
              type="number"
              value={this.state.lazyRadius}
              onChange={e =>
                this.setState({ lazyRadius: parseInt(e.target.value, 10) })
              }
            />
          </div>
        </div>
        <CanvasDraw
          ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
          brushColor={this.state.color}
          brushRadius={this.state.brushRadius}
          lazyRadius={this.state.lazyRadius}
          canvasWidth={this.state.width}
          canvasHeight={this.state.height}
        />
        <p>
          The following is a disabled canvas with a hidden grid that we use to
          load & show your saved drawing.
        </p>
        <button
          onClick={() => {
            this.loadableCanvas.loadSaveData(
              localStorage.getItem("savedDrawing")
            );
          }}
        >
          Load what you saved previously into the following canvas. Either by
          calling `loadSaveData()` on the component's reference or passing it
          the `saveData` prop:
        </button> */}
        {/* <CanvasDraw
          disabled
          hideGrid
          ref={canvasDraw => (this.loadableCanvas = canvasDraw)}
          saveData={localStorage.getItem("savedDrawing")}
        />
        <p>
          The saving & loading also takes different dimensions into account.
          Change the width & height, draw something and save it and then load it
          into the disabled canvas. It will load your previously saved
          masterpiece scaled to the current canvas dimensions.
        </p>
        <p>
          That's it for now! Take a look at the{" "}
          <a href="https://github.com/mBeierl/react-canvas-draw/tree/master/demo/src">
            source code of these examples
          </a>
          .
        </p> */}
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
