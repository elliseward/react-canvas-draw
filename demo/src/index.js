import React, { Component } from "react";
import { render } from "react-dom";

import CanvasDraw from "../../src";
import classNames from "./index.css";

class Demo extends Component {
  state = {
    color: "#ffc600",
    width: 400,
    height: 400,
    brushRadius: 1,
    lazyRadius: 0
  };
  componentDidMount() {
    this.setState({
      color: "rgba(255,255,0,1)",
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
        <h2>(Th)ink Canvas</h2>
        <p>
          {" "}
          {/* <span>{`<CanvasDraw brushColor={this.state.color} />`}</span>. */}
          Color changes every 2 seconds:
        </p>
        <div>
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
        </div>
        <CanvasDraw brushColor={this.state.color} />
        <p>
          <p></p>
        </p>
        <h2>(Th)ink Coloring Book</h2>
        <p></p>
        <p>
        </p>    
        <h4>Use buttons to select colors, save image, undo last stroke and clear page. </h4>
        <div>
          Current color:{" "}
          <div
            style={{
              display: "inline-block",
              width: "20px",
              height: "20px",
              backgroundColor: this.state.color, //"rgba(255,255,0,100)",
              border: "1px solid #272727"
            }}
          />
        </div>
        <p></p>
        <div className={classNames.tools}>
          <button
            onClick={() => {
              localStorage.setItem(
                "savedDrawing",
                this.saveableCanvas.getSaveData()
              );
            }}
            style={{
              display: "inline-block",
              width: "50px",
              height: "20px",
              backgroundColor: "rgba(255,255,255,100)",
              border: "1px solid #272727"
            }}
          >
            Save
          </button>
          <button
            onClick={() => {
              this.saveableCanvas.clear();
            }}
            style={{
              display: "inline-block",
              width: "50px",
              height: "20px",
              backgroundColor: "rgba(255,255,255,100)",
              border: "1px solid #272727"
            }}

          >
            Clear
          </button>
          <button
            onClick={() => {
              this.saveableCanvas.undo();
            }}
            style={{
              display: "inline-block",
              width: "50px",
              height: "20px",
              backgroundColor: "rgba(255,255,255,100)",
              border: "1px solid #272727"
            }}
          >
            Undo
          </button>
          <div>
          <button
            onClick={() => {
              this.setState({
                color: "rgba(255,255,0,.500)"
              });
            }}
            style={{
              display: "inline-block",
              width: "50px",
              height: "20px",
              backgroundColor: "rgba(255,255,0,1)",
              border: "1px solid #272727"
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
              display: "inline-block",
              width: "50px",
              height: "20px",
              backgroundColor: "rgba(60,235,0,1)",
              border: "1px solid #272727"
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
              display: "inline-block",
              width: "50px",
              height: "20px",
              backgroundColor: "rgba(255,67,73,1)",
              border: "1px solid #272727"
            }}
            
          >
            Red
          </button>
          </div>
          <p></p>
          
        </div>
        <CanvasDraw
          ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
          brushColor={this.state.color}//"rgba(255,255,0,.50)"
          imgSrc="https://upload.wikimedia.org/wikipedia/commons/c/cb/Coloring_kids_games_to_play.png"
          
        />
        
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
