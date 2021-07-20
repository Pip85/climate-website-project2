// Read csv data and change avg_temp column to number
// Call functions for dropdown & map creation
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

// Create drop down for year selection
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


//Add event listener and re-route to init function when triggered
function optionChanged(selection) {
  console.log(selection);
  init();
}


//Create US choropleth of avg annual temps
function mapData(stateData) {

  var selHtml = d3.select("#selDataset");
  var yearSelected = selHtml.property("value");

  var yrSelVal = stateData.filter(function (y) {
    return y.year === yearSelected;
  })
  var states = yrSelVal.map(st => st.state);
  var state_abbr = yrSelVal.map(abb => abb.abbr);  
  var temp = yrSelVal.map(t => t.avg_temp);
  
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
  };

  Plotly.newPlot("usmap", cmap, layout, {showLink: false});
}
