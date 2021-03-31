// Use the D3 library to read in samples.json.
d3.json("../samples.json").then((data) => {
    // console.log(data['names']);
    // I want to get from data to a list of dictionaries
    var sample_list = data["samples"]
    var otu_ids_test=sample_list[0]['otu_ids']
    // console.log(otu_ids_test)
    var top_10_otus=otu_ids_test.slice(0,10)
    console.log(top_10_otus);
    // 
    // // slice first 10 objects for plotting


    // // pull id of subject to match dropdown
    var id_test=data['samples'][0]['id']
    console.log(id_test.slice(0,10));
    // // use map() to build array of otu IDs (lables)
    // var otu_ids = samples['otu_ids'];
    // console.log(otu_ids[0]);
        // [pull  array of sample values
    var sample_values_test=sample_list[0]['sample_values']
    console.log(sample_values_test.slice(0,10));










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