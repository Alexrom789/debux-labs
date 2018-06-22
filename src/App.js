import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const query = `window.__REACT_DEVTOOLS_GLOBAL_HOOK__`;
    const buttonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1', '#FFFFFF'];
    const buttons = [];
    for (let color of buttonColors) {
      buttons.push(<button onClick={() => {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.executeScript(
            tabs[0].id,
            // {code: 'document.body.style.backgroundColor = "' + color + '";' , },
            // {code: `console.log('root: ', document.getElementById('root'))`},
            {
              code: 
                `document.body.style.backgroundColor = '${color}'; 
                console.log('root: ', document.getElementById('root'));
                console.log('window: ', window);`
              },
          );
        });
        // chrome.devtools.inspectedWindow.eval(
        //   query,
        //   function(result, isException) {
        //     if (isException)
        //       console.log("err");
        //     else
        //       console.log("sucess:" + result);
        //   }
        // );
      }} key={'button'+color} style={{backgroundColor:color}}></button>);
      let button = document.createElement('button');
    }
    return (
      <div>
        {buttons}
      </div>
    );
  }
}

export default App;