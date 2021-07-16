// Establish directory paths for csv files
csvTempPath = "static/data/cleaned_GlobalLandTemperaturesByState.csv";
csvStatePath

d3.csv(csvPath).then(function(stateTemp) {
    var stateData = stateTemp;
    console.log(stateData);
});

var url = 'https://gist.github.com/jpriebe/d62a45e29f24e843c974';

// Connect to API through D3 and send to createMarkers function
d3.json(url).then(function(cap) {
    // function capitals(abbr) {
    var state = cap;
    console.log(state)
            // var lng = coord[0];
            // var latlng = L.latLng(lat, lng);
            // var depth = coord[2];
            // console.log (latlng);
            // return latlng, depth;
    });    
    // .forEach(data => {
    //     data.poverty = +data.poverty;
    //     data.healthcare = +data.healthcare;    
    // });

    // function init() {
    //     d3.json("data/samples.json").then ((sampleData) => {
    //         var bbData = sampleData;
    //         console.log(bbData);
    //         dropdown(bbData);
    //         chartData(bbData);
    //     });
    // }
    // init();   