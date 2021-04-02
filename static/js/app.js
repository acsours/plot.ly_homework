/* ***************************************** */
// Pulling the names and populating the dropdown menu with these values
function populateDropdown() {

    d3.json("../samples.json").then((data) => {
        // access the data["names"] and save as an array
            var id_list=data["names"]
            console.log(`id_list ${id_list}`);
            // select the html object
            var dropdownMenu=d3.select('#selDataset')
            // console.log(dropdownMenu);
            id_list.forEach(id=> dropdownMenu.append('option').attr("value", id).text(id));
        // for each item in the id_list array, add an item to the dropdown list
        // that matches in value and text
        
    });
};

populateDropdown();

// Initializes the page with a default plot
function init() {
    d3.json("../samples.json").then((data) => {
        // populate panel object with initial data (test subject 940)
        var panelBody = d3.select("#sample-metadata");
        var test_subject=data["metadata"][0]
        console.log(Object.entries(test_subject));
        for (const [key, value] of Object.entries(test_subject)) {
            console.log(`${key}: ${value}`)
            var new_row=panelBody.append('tr');
            new_row.append('td').text(`${key}: ${value}`);
        };
    
        // var graphDiv = document.getElementById('bar')
        var otu_ids=data["samples"][0]['otu_ids'] //.slice(0,10).toString()
        // var otu_string_list=otu_ids.toString()
        
        var bact_values=data["samples"][0]['sample_values'] //.slice(0,10);
        var otu_labels=data["samples"][0]['otu_labels']
        // console.log(`OTU id numbers ${otu_ids}`);
        // console.log(`Bacteria values ${bact_values}`);
        // console.log(`OTU string list ${otu_string_list}`);
        var data1 = [{
        'type': 'bar',
        'y': otu_ids.slice(0,10).reverse(),
        'x': bact_values.slice(0,10).reverse(),
        'orientation': 'h',
        text: otu_labels
        }]

        // var data = [trace1]

        var layout1 = {
            'title': 'Top OTUS of subject 940',
            yaxis: {
                type: 'category',
                title: 'OTU ID'
            },
            xaxis: {
                title: 'Sample Values'
            }
        }

        Plotly.newPlot('bar', data1, layout1)
        var trace2={
            'y': bact_values,//.slice(0,5),//.reverse(),
            'x':otu_ids, //.slice(0,5),
            text: otu_labels,//['A<br>size: 40', 'B<br>size: 60', 'C<br>size: 80', 'D<br>size: 100'],
            mode: 'markers',
            marker: {
                color: otu_ids,
                size: bact_values,
                // sizeref: 2.0 * Math.max(size) / (desired_maximum_marker_size**2),
                // sizemode: 'area',
                opacity: 0.4,
                // sizemin: 5
            }
        };
        var data2=[trace2];

        var layout2 = {
            title: 'OTU Values', 
            showlegend: false,
            // height: 800,
            // width: 800,
            xaxis: {
                title: "OTU ID Number",
                autorange: true,
            },
            yaxis: {
                title: "Sample Value",
                autorange: true
            }
        };
        Plotly.newPlot("bubble", data2, layout2)
//************* Bubble Graph Testing ************/
        // var trace2={
        //     'y': bact_values,//.reverse(),
        //     'x':otu_ids,
        //     mode: 'markers',
        //     marker: {
        //         size: 40,
        //         sizemode: 'area',
        //         opacity: 0.4
        //     }
        // };
        // var data2=[trace2];
        // var layout2 = {
        //     title: 'OTU Values', 
        //     showlegend: false,
        //     height: 800,
        //     width: 800
        // };
        // Plotly.newPlot('bubble', data2, layout2)
/************************************** */

    });

  };

init();

d3.selectAll("#selDataset").on("change", optionChanged);
// when the dropdown menu switches, pull the value from the element and use that to filter through the data, then build the plot
function optionChanged() {
    var dropdownMenu = d3.select("#selDataset");
    var id_number=dropdownMenu.property("value");
    console.log('waiting for changed data')
    console.log(dropdownMenu);
    console.log(`chosen_dataset is: ${id_number}`);
    var panelBody = d3.select("#sample-metadata");
    console.log
    d3.json("../samples.json").then((data) => {
        // use id_number to sort through the data
        // go through each element in samples and check if id value matches dropdowm menu value
        var metadata = data['metadata']
        panelBody.html("");
        // console.log(metadata);
        metadata.forEach(function(test_subject) {// console.log(test_subject));
            if (id_number==test_subject['id']) {
                console.log('match found')
                console.log(test_subject); //returns {id: 944, ethnicity: "european", etc.}
                // I want to go through each key value pair in test subject and put in a new row in the table
                // test_subject.forEach(item=>console.log(item));
                for (const [key, value] of Object.entries(test_subject)) {
                    console.log(`${key}: ${value}`)
                    var new_row=panelBody.append('tr');
                    new_row.append('td').text(`${key}: ${value}`);
                }
                // 
            };
        });
        var sample_list = data['samples']
        // console.log(`sample list is: ${sample_list[0]["id"]}`)
        for (i=0; i<sample_list.length; i++) {
            if (id_number == sample_list[i]["id"]){
                console.log(`match found at ${id_number}`);
                var otu_ids=sample_list[i]['otu_ids']//.slice(0,10).reverse().toString();
                var bact_values=sample_list[i]['sample_values']//.slice(0,10).reverse()
                var otu_labels=sample_list[i]['otu_labels']//.slice(0,10).reverse().toString();
                console.log(otu_ids);
                var trace1 = {
                    'type': 'bar',
                //     'y': //otu_ids,
                    'y': otu_ids.slice(0,10).reverse(),
                //     'x': //sample_values,
                    'x': bact_values.slice(0,10).reverse(),
                    'orientation': 'h',
                    text: otu_labels

                //     'text'://an array of string values[],
                //     // 'marker': {color: }
                };
                
                var data = [trace1]
                // adding test comment
                var layout= {
                    'title': `Top OTUS of ${id_number}`,
                    yaxis: {
                        type: 'category',
                        title: 'OTU ID'
                    },
                    xaxis: {
                        title: 'Sample Value'
                    }
                    // xaxis: {
                    //     autotick: false,
                    // }                
                }
                // Plotly.restyle('bar', 'y', [otu_ids.slice(0,10).reverse()])
                // Plotly.restyle('bar', 'x', [bact_values.slice(0,10).reverse()])
                // Plotly.relayout('bar', layout_update)
                Plotly.newPlot("bar", data, layout)

                // var bubbleDiv = document.getElementById('bubble')
                // var desired_maximum_marker_size = 60;
                // var size = [200, 400, 600, 800, 1000]
                // var size=bact_values
                var trace2={
                    'y': bact_values,//.slice(0,5),//.reverse(),
                    'x':otu_ids, //.slice(0,5),
                    text: otu_labels,//['A<br>size: 40', 'B<br>size: 60', 'C<br>size: 80', 'D<br>size: 100'],
                    mode: 'markers',
                    marker: {
                        color: otu_ids,
                        size: bact_values,
                        // sizeref: 2.0 * Math.max(size) / (desired_maximum_marker_size**2),
                        // sizemode: 'area',
                        opacity: 0.4,
                        // sizemin: 5
                    }
                };
                var data2=[trace2];
        
                var layout2 = {
                    title: 'OTU Values', 
                    showlegend: false,
                    // height: 800,
                    // width: 800,
                    xaxis: {
                        title: "OTU ID Number",
                        autorange: true,
                    },
                    yaxis: {
                        title: "Sample Value",
                        autorange: true
                    }
                };
                Plotly.newPlot("bubble", data2, layout2)

                // console.log(`otu_ids ${otu_ids}`);
                // console.log(`bact_values ${bact_values}`);
                // console.log(`otu_labels ${otu_labels}`);

            }
            // console.log(`sample is: ${sample_list[i]["id"]}`)
        }
        // sample_list.forEach(sample=> function(sample){
        // // if it matches, pull the otus and populate graph
        //     console.log(`sample is: ${sample["id"]}`);

        //     // switch(id_number){
        //     //     case (sample["id"]):
        //     //         console.log('sample found');
        //     //         break;
        //     //     default:
        //     //         console.log('NO SAMPLE FOUND');
        //     // };
        // //     if (value == sample["id"]) {
        // //         var otu_ids=sample['otu_ids'].slice(0,10);
        // //         var bact_values=sample['sample_values'].slice(0,10);
        // //         console.log(`otu_ids ${otu_ids}`)
                // var trace1 = {
                //     'type': 'bar',
                // //     'y': //otu_ids,
                //     'y': otu_ids,
                // //     'x': //sample_values,
                //     'x': bact_values,
                //     'orientation': 'h'
                // //     'text'://an array of string values[],
                // //     // 'marker': {color: }
                // };
                
                // var data = [trace1]
                
                // var layout = {
                //     'title': 'Top 10 OTUS by individual'
                // }
                
                // Plotly.newPlot('bar', data, layout)
        // //     }
        // });

    

    // };
    });
};



