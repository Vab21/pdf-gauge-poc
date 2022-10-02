var opts = {
    angle: 0, // The span of the gauge arc
    lineWidth: 0.24, // The line thickness
    radiusScale: 1, // Relative radius
    pointer: {
      length: 0.6, // // Relative to gauge radius
      strokeWidth: 0.035, // The thickness
      color: '#000000' // Fill color
    },
    limitMax: false,     // If false, max value increases automatically if value > maxValue
    limitMin: false,     // If true, the min value of the gauge will be fixed
    colorStart: '#6FADCF',   // Colors
    colorStop: '#8FC0DA',    // just experiment with them
    strokeColor: '#E0E0E0',  // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true,     // High resolution support
    staticZones: [
      {strokeStyle: "#F03E3E", min: 0, max: 130}, // Red from 100 to 130
      {strokeStyle: "#FFDD00", min: 130, max: 150}, // Yellow
      {strokeStyle: "#30B32D", min: 150, max: 220}, // Green
      {strokeStyle: "#FFDD00", min: 220, max: 260}, // Yellow
      {strokeStyle: "#F03E3E", min: 260, max: 300}  // Red
   ],
   staticLabels: {
    font: "10px sans-serif",  // Specifies font
    labels: [130, 150, 220.1, 260, 300],  // Print labels at these values
    color: "#000000",  // Optional: Label text color
    fractionDigits: 0  // Optional: Numerical precision. 0=round off.
  },
  };
  var target1 = document.getElementById('myCanvas');
  var target2 = document.getElementById('canvas2'); // your canvas element
  var target3 = document.getElementById('canvas3'); // your canvas element
  //target.strokeText("Hello World", 10, 50);
  var gauge = new Gauge(target1).setOptions(opts); // 
  gauge.maxValue = 300; // set max gauge value
  gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
  gauge.animationSpeed = 32; // set animation speed (32 is default value)
  gauge.set(153); // set actual value
  var gauge2 = new Gauge(target2).setOptions(opts); // 
  gauge2.maxValue = 300; // set max gauge value
  gauge2.setMinValue(0);  // Prefer setter over gauge.minValue = 0
  gauge2.animationSpeed = 1; // set animation speed (32 is default value)
  gauge2.set(153);
  var gauge3 = new Gauge(target3).setOptions(opts); // 
  gauge3.maxValue = 300; // set max gauge value
  gauge3.setMinValue(0);  // Prefer setter over gauge.minValue = 0
  gauge3.animationSpeed = 1; // set animation speed (32 is default value)
  gauge3.set(153);
  

  const myTimeout = setTimeout(print, 2000);

  function print(){
    var element = document.getElementById('pdf');
    html2pdf(element);
  }
  
  
  