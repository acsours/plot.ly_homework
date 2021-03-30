// Use the D3 library to read in samples.json.
d3.json("../samples.json").then((data) => {
    // console.log(data['names']);
    // I want to get from data to a list of dictionaries
    var samples = data["samples"]
    console.log(samples)
    // // sort data by top 10 otus 
    // var sorted = data.sort((a,b)=> b["samples"]["sample_values"])
    // // slice first 10 objects for plotting


    // // pull id of subject to match dropdown
    // var id_sample=data['samples']['id']
    // console.log(id_sample);
    // // use map() to build array of otu IDs (lables)
    // var otu_ids = data['samples']['otu_ids'];
    // console.log(otu_ids)
        // use map() to build array of sample values









});

// var data = samples
// console.log(samples['names'])
// // Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

// // Use sample_values as the values for the bar chart.

// // Use otu_ids as the labels for the bar chart.

// // Use otu_labels as the hovertext for the chart.

// // horizontal bar chart (from 15-2-6 example)
// var trace1 = {
//     'type': 'bar',
//     'y': //otu_ids,
//     'x': //sample_values,
//     'orientation': 'h',
//     'text'://an array of string values[],
//     // 'marker': {color: }
// }

// var data = [trace1]

// var layout = {
//     'title': 'Top 10 OTUS by individual'
// }

// Plotly.newPlot('bar', data, layout)