import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'

'use strict';

chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
  const [activeTab] = tabs
  ReactDOM.render(
    <App />,
    document.getElementById('popup-root')
  )
})

// 'use strict';

// let changeColor = document.getElementById('changeColor');

// chrome.storage.sync.get('color', function(data) {
//   // changeColor.style.backgroundColor = data.color;
//   // changeColor.setAttribute('value', data.color);
//   changeColor.style.backgroundColor = '#FFFFFF';
//   changeColor.setAttribute('value', '#FFFFFF');
// });

// changeColor.onclick = function(element) {
//   let color = element.target.value;
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     chrome.tabs.executeScript(
//         tabs[0].id,
//         {code: 'document.body.style.backgroundColor = "' + '#FFFFFF' + '";'});
//   });
// };


// let page = document.getElementById('popup-root');
// const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];
// function constructOptions(kButtonColors) {
//   for (let item of kButtonColors) {
//     let button = document.createElement('button');
//     button.style.backgroundColor = item;
//     button.addEventListener('click', function() {
//       // chrome.storage.sync.set({color: item}, function() {
//       //   console.log('color is ' + item);
//       // })

//       chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         chrome.tabs.executeScript(
//             tabs[0].id,
//             {code: 'document.body.style.backgroundColor = "' + item + '";'});
//       });
//     });
    
//     page.appendChild(button);
//   }
// }
// constructOptions(kButtonColors);
