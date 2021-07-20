// function init() {
//   d3.csv("static/data/cleaned_GlobalLandTemperaturesByState.csv").then ((stateData) => {
//     stateData.forEach(function(num) {
//       num.avg_temp = +num.avg_temp;
//       }); 
//   var states = stateData.map(st => st.state);
//   var stateAbbr = stateData.map(st => st.abbr);
//   var temp = stateData.map(t => t.avg_temp); 
//   var initYear = "2012";
//   createMap(states, stateAbbr, temp, initYear);
//   dropdown(stateData);
//   });  
// }

// init();
// d3.select("#selDataset").on("change", optionChanged);

// function createMap (states, state_abbr, temp) {
//   var cmap = [{
//     type: 'choropleth',
//     locationmode: 'USA-states',
//     locations: state_abbr,
//     z: temp,
//     text: states,
//     zmin: 15,
//     zmax: 80,
//     colorscale: 'Electric',
//     colorbar: {
//       title: 'Avg Temp',
//       thickness: 10
//     },
//     marker: {
//       line:{
//       color: 'rgb(255,255,255)',
//       width: 0.5
//       }
//     }
//   }];

//   var layout = {
//     title: 'Average Annual Temperatures - 1900 - 2012',
//     geo:{
//       scope: 'usa',
//     }
//   };

//   Plotly.newPlot("usmap", cmap, layout, {showLink: false});
// }

// function dropdown(stateData) {
//   var selectYear = d3.select("#selDataset");
//   var years = stateData.map(yr => yr.year);
//   years.forEach((year) => (
//     selectYear
//     .append("option")
//     .text(year)
//     .property("value", year)
//   ))
//   console.log(selectYear);
// } 


// function optionChanged() {
//   var dropdownMenu = d3.select("#selDataset");
//   var dataset = dropdownMenu.property("value");
//   var yrSelVal = stateData.filter(function (y) {
    //     return y.year === yearSelected;
    //   })
  // init();
}






//======================================================================
// 
//======================================================================

//Pull csv data and call functions for dropdown and map creation
//--------------------------------------------------------------------

function init() {
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

//--------------------------------------------------------------------
//Create drop down for year selection
//--------------------------------------------------------------------



//--------------------------------------------------------------------
//Add event listener and re-route to init function when triggered
//--------------------------------------------------------------------
function optionChanged(selection) {
  console.log(selection);
  init();
}

//--------------------------------------------------------------------
//Create US choropleth of avg annual temps
//--------------------------------------------------------------------

function mapData(stateData) {

  var selHtml = d3.select("#selDataset");
  var yearSelected = selHtml.property("value");

  var yrSelVal = stateData.filter(function (y) {
    return y.year === yearSelected;
  })
  // console.log(yrSelVal);
  var states = yrSelVal.map(st => st.state);
  // console.log(states);
  var state_abbr = yrSelVal.map(st => st.abbr);
  // console.log(state_abbr);
  var temp = yrSelVal.map(t => t.avg_temp);
  // console.log(temp);

  colors = [
  [15, "rgb(242,240,247)"],
  [20, "teal"],
  [30, "green"],
  [40, "yellow"],
  [50, "orange"],
  [60, "red"],
  [70, "purple"]];

  function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }
 
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
    // height: 500,  
    geo:{
      scope: 'usa',
    }
  };

  Plotly.newPlot("usmap", cmap, layout, {showLink: false});
}
