// Read csv and convert strings to numbers

d3.csv("static/data/cleaned_GlobalLandTemperaturesByState.csv").then((data) => {
  data.forEach(function (num) {
    num.avg_temp = +num.avg_temp;
    num.latitude = +num.latitude;
  });
  // Create variables for data
  var firstTemp = data.filter(function (f) {
    return f.year === "1900";
  });

  var lastTemp = data.filter(function (l) {
    return l.year === "2012";
  });

  var firstData = firstTemp.map(a => {
    return a.abbr
  });

  var beginTemp = firstTemp.map(f => {
    return f.avg_temp
  });

  var endTemp = lastTemp.map(t => {
    return t.avg_temp
  });

  var firstLat = firstTemp.map(l => {
    return l.latitude
  });

  var bothTemp = { "firstTemp": beginTemp, "lastTemp": endTemp };

  var diff = (endTemp, beginTemp) => {
    var variance = [];
    for (var i = 0; i < endTemp.length; i++) {
      var diff2 = Math.abs((endTemp[i] || 0) - (beginTemp[i] || 0));
      variance[i] = diff2;
    };
    return variance;
  };
  var tempVar = diff(endTemp, beginTemp);
 
  var tempObj = { "abbr": firstData, "tempVar": tempVar, "lat": firstLat };
  console.log(tempObj);


  // Establish bubble size based on temp variance
  var sizeArr = [];
  tempVar.forEach(i => {
    if (i < .5) {
      sizeArr.push(5);
    }
    else if (i < 1 && i >= .5) {
      sizeArr.push(10)
    }
    else if (i < 1.5 && i >= 1) {
      sizeArr.push(15)
    }
    else if (i < 2 && i >= 1.5) {
      sizeArr.push(20)
    }
    else if (i < 2.5 && i >= 2) {
      sizeArr.push(25)
    }
    else if (i < 3 && i >= 2.5) {
      sizeArr.push(30)
    }
    else if (i < 3.5 && i >= 3) {
      sizeArr.push(35)
    }
    else if (i < 4 && i >= 3.5) {
      sizeArr.push(40)
    }
    else if (i < 4.5 && i >= 4) {
      sizeArr.push(45)
    }
    else {
      sizeArr.push(50);
    }
  })
 
  // Build chart
  var trace1 = {
    x: tempVar,
    y: firstLat,
    text: firstData,

    mode: "markers",
    marker: {
      size: sizeArr,
      color: tempVar,
      colorscale: "Portland"
    },
    height: 600
  };
  var climateData = [trace1];
  // console.log(x);
  var climateLayout = {
    title: "<b>Change in Average Annual Temperature Between 1900 and 2012<b>",
  }

  Plotly.newPlot("climate", climateData, climateLayout);

})





