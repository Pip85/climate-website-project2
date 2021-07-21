//======================================================================
// 
//======================================================================

// Pull csv data and call functions for dropdown and map creation
//--------------------------------------------------------------------

function init() {
  d3.csv("data/cleaned_GlobalLandTemperaturesByState.csv").then ((data) => {
    var stateData = data;
    // stateData.forEach(function(num) {
    // num.avg_temp = +num.avg_temp;
    // });    
  dropdown(stateData);
  mapData(stateData);
  });
}
init();

//--------------------------------------------------------------------
// Create drop down for year selection
//--------------------------------------------------------------------

function dropdown(stateData) {
  var selectYear = d3.select("#selDataset");
  var years = stateData.map(yr => yr.year);
  years.forEach((year) => (
    selectYear
    .append("option")
    .text(year)
    .property("value", year)
  ))
  console.log(selectYear);
} 

// --------------------------------------------------------------------
// Add event listener and re-route to init function when triggered
// --------------------------------------------------------------------
function optionChanged(selection) {
  console.log(selection);
  init();
}

//--------------------------------------------------------------------
// Create US choropleth of avg annual temps
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


//_________________________________________________________________________________
//_________________________________________________________________________________
//_________________________________________________________________________________
// OLD CODE



// ``
// ````var cmap = [{
//       type: 'choropleth',
//       locationmode: 'USA-states',
//       locations: yrSelVal.forEach(s
// }]
    
    
    
    
    
    
  //   var cmap = [{
  //     type: 'choropleth',
  //     locationmode: 'USA-states',
  //     locations: unpack(rows, 'state'),
  //     z: unpack(rows, 'avg_temp'),
  //     text: unpack(rows, 'state'),
  //     zmin: 0,
  //     zmax: 17000,
  //     colorscale: [
  //         [0, 'rgb(242,240,247)'], [0.2, 'rgb(218,218,235)'],
  //         [0.4, 'rgb(188,189,220)'], [0.6, 'rgb(158,154,200)'],
  //         [0.8, 'rgb(117,107,177)'], [1, 'rgb(84,39,143)']
  //     ],
  //     colorbar: {
  //         title: 'Millions USD',
  //         thickness: 0.2
  //     },
  //     marker: {
  //         line:{
  //             color: 'rgb(255,255,255)',
  //             width: 2
  //         }
  //     }
  //   }];
    
  
  // var layout = {
  //   title: '2011 US Agriculture Exports by State',
  //   geo:{
  //       scope: 'usa',
  //       showlakes: true,
  //       lakecolor: 'rgb(255,255,255)'
  //   }
  // };
  
  // Plotly.newPlot("bar", cmap, layout, {showLink: false});
  // }

  // });
  // console.log(yrSelVal);
  // }

  // var cmap = [{
  //   type: 'choropleth',
  //   locationmode: 'USA-states',
  //   locations: unpack(rows, 'state'),
  //   z: unpack(rows, 'avg_temp'),
  //   text: unpack(rows, 'state'),
  //   zmin: 0,
  //   zmax: 17000,
  //   colorscale: [
  //       [0, 'rgb(242,240,247)'], [0.2, 'rgb(218,218,235)'],
  //       [0.4, 'rgb(188,189,220)'], [0.6, 'rgb(158,154,200)'],
  //       [0.8, 'rgb(117,107,177)'], [1, 'rgb(84,39,143)']
  //   ],
  //   colorbar: {
  //       title: 'Millions USD',
  //       thickness: 0.2
  //   },
  //   marker: {
  //       line:{
  //           color: 'rgb(255,255,255)',
  //           width: 2
  //       }
  //   }
  // }];
  

// var layout = {
//   title: '2011 US Agriculture Exports by State',
//   geo:{
//       scope: 'usa',
//       showlakes: true,
//       lakecolor: 'rgb(255,255,255)'
//   }
// };

// Plotly.newPlot("bar", cmap, layout, {showLink: false});
// }
//--------------------------------------------------------------------
// Build function to manipulate sammples.json for use in charts
// Gather value from sample dropdown and use to gather chart data
//--------------------------------------------------------------------
// function chartData(bbData) {
//   // Get objects from samples.json
//   var sampleObj = bbData.samples;
//   var metaObj = bbData.metadata;
  
//   // Linking to dropdown choice in HTML
//   var selHtml = d3.select("#selDataset");
//   var samplePick = selHtml.property("value");
  
//   // Get samples.json data for dropdown sample choice
//   samplePickValue = sampleObj.filter(sample => sample.id === samplePick);
//   metaPickValue = metaObj.filter(meta => String(meta.id) === samplePick);

//   // Call functions to build charts/demo panel
//   barChart(samplePickValue);
//   bubbleChart(samplePickValue);
//   metaPanel(metaPickValue);
// }

//--------------------------------------------------------------------
// Build bar chart
//--------------------------------------------------------------------
// function barChart(samplePickValue) {
//   var sampleValues = samplePickValue[0].sample_values;
//   var otuIds = samplePickValue[0].otu_ids;
//   var otuLabels = samplePickValue[0].otu_labels;
//   var yticks = otuIds.slice(0, 10).map(otu => `OTU ${otu}`).reverse();

//   var trace1 = {
//       x: sampleValues.slice(0,10).reverse(),        
//       y: yticks,
//       type: "bar",
//       orientation: "h",
//       text: otuLabels.slice(0,10).reverse()                 
//   };
 
//   var data = [trace1];
  
//   var layout = {
//       title:  "<b>Top Ten Bacteria Cultures Found<b>",
//       margin: {
//           t: 90        
//       }  
//   };

//   Plotly.newPlot("bar", data, layout);
// }

//--------------------------------------------------------------------
// Build bubble chart
//--------------------------------------------------------------------
// function bubbleChart(samplePickValue) {
//   var sampleValuesBubble = samplePickValue[0].sample_values;
//   var otuIdsBubble = samplePickValue[0].otu_ids;
//   var otuLabelsBubble = samplePickValue[0].otu_labels;
 
//   var trace1 = {
//       x: otuIdsBubble,
//       y: sampleValuesBubble,
//       text: otuLabelsBubble,
//       mode: "markers",
//       marker: {
//           size: sampleValuesBubble,
//           color: otuIdsBubble,
//           colorscale: "Earth"
//       },
//       height: 600
//   };
//   var bubbleData = [trace1];

//   var bubbleLayout = {
//       title:  "<b>Bacteria Cultures Per Sample<b>",
//       xaxis: {
//           title: "OTU ID"
//       }
//   }

//   Plotly.newPlot("bubble", bubbleData, bubbleLayout);  
// }

//--------------------------------------------------------------------
// Populate Demographic Info panel
//--------------------------------------------------------------------
// function metaPanel(metaPickValue) {    
//   var metaArray = metaPickValue[0];     
  
//   var demoData = d3.select("#sample-metadata");
//   demoData.html("");
  
//   Object.entries(metaArray).forEach(([key, value]) => {
//       keyUpper = key.toUpperCase();
//       demoData.append("h6").text(`${keyUpper}: ${value}`);
//   });  
// }

