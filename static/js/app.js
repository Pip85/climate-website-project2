// Pull csv data and call functions for dropdown and map creation
// --------------------------------------------------------------------

d3.csv("static/data/cleaned_GlobalLandTemperaturesByState.csv").then ((data) => {
  var stateData = data;
  stateData.forEach(function(num) {
  num.avg_temp = +num.avg_temp;
  });    


// Pull csv data and call functions for dropdown and map creation
// --------------------------------------------------------------------

function init() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  console.log(`Begin init ${t}`);
  d3.csv("static/data/cleaned_GlobalLandTemperaturesByState.csv").then ((data) => {
    var stateData = data;
    stateData.forEach(function(num) {
    num.avg_temp = +num.avg_temp;
    });    
  dropdown(stateData);
  mapData(stateData);
  });
}
init();

// //--------------------------------------------------------------------
// // Create drop down for year selection
// //--------------------------------------------------------------------
function dropdown(stateData) {
  var d = new Date();
  var t = d.toLocaleTimeString();
  console.log(`Begin dropdown ${t}`);
  var selectYear = d3.select("#selDataset");
  var years = stateData.map(yr => yr.year);
  years.forEach((year) => (
    selectYear
    .append("option")
    .text(year)
    .property("value", year)
  ))
  var d = new Date();
  var t = d.toLocaleTimeString();
  console.log(`end dropdown ${t}`);
} 

// // --------------------------------------------------------------------
// // Add event listener and re-route to init function when triggered
// // --------------------------------------------------------------------
function optionChanged(selection) {
  var d = new Date();
  var t = d.toLocaleTimeString();
  console.log(`Begin change ${t}`);
  console.log(selection);
  init();
  var d = new Date();
  var t = d.toLocaleTimeString();
  console.log("End Change");
}

// //--------------------------------------------------------------------
// // Create US choropleth of avg annual temps
// //--------------------------------------------------------------------

function mapData(stateData) {
  var d = new Date();
  var t = d.toLocaleTimeString();
  console.log(`Begin mapdata ${t}`);
  var selHtml = d3.select("#selDataset");
  var yearSelected = selHtml.property("value");

  var yrSelVal = stateData.filter(function (y) {
    return y.year === yearSelected;
  })
  // console.log(yrSelVal);
  var states = yrSelVal.map(st => st.state);
  var state_abbr = yrSelVal.map(st => st.abbr);
  var temp = yrSelVal.map(t => t.avg_temp);
  var years = stateData.map(yr => yr.year);
 
  var cmap = [{
    type: 'choropleth',
    locationmode: 'USA-states',
    locations: state_abbr,
    z: temp,
    text: states,
    zmin: 15,
    zmax: 80,
    colorscale: 'Electric',
    colorbar: {
      title: 'Avg Temp',
      thickness: 10
    },
    marker: {
      line:{
      color: 'rgb(255,255,255)',
      width: 0.5
      }
    }
  }];

  var layout = {
    title: 'Average Annual Temperatures - 1900 - 2012',
    geo:{
      scope: 'usa',
    }   
  }
 
  Plotly.newPlot("usmap", cmap, layout);
  var d = new Date();
  var t = d.toLocaleTimeString();
  console.log(`End mapdata ${t}`);
}


























var globalStateData;

function readCsv() {
  d3.csv("static/data/cleaned_GlobalLandTemperaturesByState.csv").then(function(stateData) {
    // var stateData = data;
    stateData.forEach(function(num) {
    num.avg_temp = +num.avg_temp;
    });
  })
  globalStateData = stateData;
}

function init() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  console.log(`Begin init ${t}`);
  // d3.csv("static/data/cleaned_GlobalLandTemperaturesByState.csv").then ((data) => {
  //   var stateData = data;
  //   stateData.forEach(function(num) {
  //   num.avg_temp = +num.avg_temp;
  //   });    
  readCsv();
  dropdown();
  mapData(stateData);
  // });
}
init();

// //--------------------------------------------------------------------
// // Create drop down for year selection
// //--------------------------------------------------------------------
function dropdown() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  console.log(`Begin dropdown ${t}`);
  var selectYear = d3.select("#selDataset");
  var years = globalStateData.map(yr => yr.year);
  years.forEach((year) => (
    selectYear
    .append("option")
    .text(year)
    .property("value", year)
  ))
  var d = new Date();
  var t = d.toLocaleTimeString();
  console.log(`end dropdown ${t}`);
} 

// // --------------------------------------------------------------------
// // Add event listener and re-route to init function when triggered
// // --------------------------------------------------------------------
function optionChanged(selection) {
  var d = new Date();
  var t = d.toLocaleTimeString();
  console.log(`Begin change ${t}`);
  console.log(selection);
  init();
  var d = new Date();
  var t = d.toLocaleTimeString();
  console.log("End Change");
}

// //--------------------------------------------------------------------
// // Create US choropleth of avg annual temps
// //--------------------------------------------------------------------

function mapData(stateData) {
  var d = new Date();
  var t = d.toLocaleTimeString();
  console.log(`Begin mapdata ${t}`);
  var selHtml = d3.select("#selDataset");
  var yearSelected = selHtml.property("value");

  var yrSelVal = stateData.filter(function (y) {
    return y.year === yearSelected;
  })
  // console.log(yrSelVal);
  var states = yrSelVal.map(st => st.state);
  var state_abbr = yrSelVal.map(st => st.abbr);
  var temp = yrSelVal.map(t => t.avg_temp);
  var years = stateData.map(yr => yr.year);
 
  var cmap = [{
    type: 'choropleth',
    locationmode: 'USA-states',
    locations: state_abbr,
    z: temp,
    text: states,
    zmin: 15,
    zmax: 80,
    colorscale: 'Electric',
    colorbar: {
      title: 'Avg Temp',
      thickness: 10
    },
    marker: {
      line:{
      color: 'rgb(255,255,255)',
      width: 0.5
      }
    }
  }];

  var layout = {
    title: 'Average Annual Temperatures - 1900 - 2012',
    geo:{
      scope: 'usa',
    }   
  }
 
  Plotly.newPlot("usmap", cmap, layout);
  var d = new Date();
  var t = d.toLocaleTimeString();
  console.log(`End mapdata ${t}`);
}