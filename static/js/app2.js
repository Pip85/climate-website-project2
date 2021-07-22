d3.csv("static/data/cleaned_GlobalLandTemperaturesByState.csv").then((data) => {
    console.log(data);

    // Filtering data for the 3 years im interested in.
    var data1900 = data.filter(data => data.year == '1900');
    console.log(data1900);

    var data1956 = data.filter(data => data.year == '1956');
    console.log(data1956);

    var data2012 = data.filter(data => data.year == '2012');
    console.log(data2012);

    // Create an empty list of my filtered data to plot.  ForEach statments appends to these lists.
    var states = [];
    var temp1900 = [];
    var temp1956 = [];
    var temp2012 = [];

    data1900.forEach(element => {

        states.push(element.state);

        temp1900.push(element.avg_temp);
        // console.log(temp1900);
    });

    data1956.forEach(element => {

        states.push(element.state);

        temp1956.push(element.avg_temp);
        // console.log(temp1956);
    });

    data2012.forEach(element => {

        states.push(element.state);

        temp2012.push(element.avg_temp);
        // console.log(temp2012);
    });

    var trace1 = {
        x: states,
        y: temp1900,
        name: '1900',
        type: 'bar'
    };

    var trace2 = {
        x: states,
        y: temp1956,
        name: '1956',
        type: 'bar'
    };

    var trace3 = {
        x: states,
        y: temp2012,
        name: '2012',
        type: 'bar'
    };

    // Saving all traces as one variable.
    var data = [trace3, trace2, trace1];

    var layout_stacked = {
        title: "Avg Temp for 3 Years of Interest",
        margin: {
            t: 80,
            r: 10,
            b: 120,
            l: 70,
        },
        showlegend: true,
        legend: {
            x: 1,
            xanchor: 'right',
            y: 1.2,
            orientation: 'h'
        },
        yaxis: {
            title: 'Avg. Temp. Fahrenheit'
        },
        barmode: 'overlay'
    };

    Plotly.newPlot('stacked-bar', data, layout_stacked);

    // Changing layout to display a triple bar graph using the same information

    var layoutTriple = {
        title: "Avg Temp for 3 Years of Interest",
        margin: {
            t: 80,
            r: 10,
            b: 120,
            l: 70,
        },
        showlegend: true,
        legend: {
            x: 1,
            xanchor: 'right',
            y: 1.2,
            orientation: 'h'
        },
        yaxis: {
            title: 'Avg. Temp. Fahrenheit'
        },
        barmode: 'group'
    };

    Plotly.newPlot('triple-bar', data, layoutTriple);
});