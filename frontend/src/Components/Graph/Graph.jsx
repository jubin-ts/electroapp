
import React, { useState, useEffect } from 'react';
import * as echarts from 'echarts';
import './Graph.css';
import axios from 'axios'; // Import Axios to send HTTP requests

function LineChart({ messages }) {
  const [showPopup, setShowPopup] = useState(false); // Popup state
  const [buttonType, setButtonType] = useState(null); // Red or Green button clicked
  const [textFieldData, setTextFieldData] = useState(""); // Data from the text field
  let myChart = null;

  useEffect(() => {
    let chartDom = document.getElementById('main');
    myChart = echarts.init(chartDom);
    const option = {
      title: {
        text: 'Your Chart Title',
        left: '1%'
      },
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        left: '5%',
        right: '15%',
        bottom: '10%'
      },
      xAxis: {
        type: 'category',
        data: messages.map((item) => item.time),
        min: 0,        // Min value
        max: 60
      },
      yAxis: {
        type: 'value',
        min: -1,
        max: 1,
        splitLine: {
          show: false
      }
      },
      toolbox: {
        right: 10,
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          restore: {},
          saveAsImage: {}
        }
      },
      visualMap: {
        top: 50,
        right: 10,
        pieces: [
          {
            gt: 0,
            lte: 1,
            color: 'red'
          },
          {
            gt: -1,
            lte: 0,
            color: 'green'
          }
        ],
      },
      series: [
        {
          name: 'Your Series Name',
          type: 'line',
          data: messages.map((item) => item.value),
          itemStyle: {
            width: 1,
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
              offset: 0, color: 'red'
            }, {
              offset: 1, color: 'green'
            }], false),
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(255, 0, 0)'
              },
              {
                offset: 1,
                color: 'rgb(0, 255, 0)'
              }
            ])
          }
        }
      ]
    };

    myChart && myChart.setOption(option);
  }, [messages]);


  // Function to handle button click
  const handleButtonClick = (type) => {
    setButtonType(type); // Set which button was clicked
    setShowPopup(true); // Show the popup
  };

  // Function to send data to API
  const sendDataToAPI = () => {
    axios.post('http://localhost:3000/bid', {
      coinCount: textFieldData,
      buttonType: buttonType
    }).then(response => {
      console.log("Data sent successfully: ", response);
    }).catch(error => {
      console.log("Error sending data: ", error);
    });

    setShowPopup(false); // Close the popup
  };

  return (
    <div className="chart-wrapper">
      <div id="main" style={{ width: 1600, height: 400 }}></div>
      <button onClick={() => handleButtonClick("Red")} className="red-btn chart-button chart-button-top">Bid on red</button>
      <button onClick={() => handleButtonClick("Green")} className="green-btn chart-button chart-button-bottom">Bid on green</button>

      {showPopup && (
        <div className="popup">
          <input type="text" value={textFieldData} onChange={(e) => setTextFieldData(e.target.value)} placeholder="Enter data" />
          <button onClick={sendDataToAPI}>Send</button>
          <button onClick={() => setShowPopup(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default LineChart;

