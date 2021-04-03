
// Populate Dropdown Menu
d3.json("samples.json").then((data) => {
    // access the data["names"] and save as an array
        var id_list=data["names"] // data.names also works

        var dropdownMenu=d3.select('#selDataset')
        // console.log(dropdownMenu);
        id_list.forEach(id=> dropdownMenu.append('option').attr("value", id).text(id)); 
     optionChanged(id_list[0])
});


function optionChanged(selected_id) {

    var panelBody = d3.select("#sample-metadata");

    d3.json("samples.json").then((data) => {
        // use id_number to sort through the data
        // go through each element in samples and check if id value matches dropdowm menu value
        var metadata = data['metadata']
        panelBody.html("");
        // console.log(metadata);
        metadata.forEach(function(test_subject) {
            if (test_subject['id']==selected_id) { //better to use if test_subject['id]==selected_id --> think "if x==5"
                for (const [key, value] of Object.entries(test_subject)) {
                    panelBody.append('h5').text(`${key}: ${value}`);
                }
            };
        });

        var sample_list = data['samples']
        console.log(`sample list is: ${sample_list}`)

        var results = sample_list.filter(sampleObj => sampleObj.id == selected_id);
        var result = results[0];
        var otu_ids=result['otu_ids']
        var bact_values=result['sample_values']
        var otu_labels=result['otu_labels']


        var trace1 = {
            'type': 'bar',
            'y': otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse(),
            'x': bact_values.slice(0,10).reverse(),
            'orientation': 'h',
            text: otu_labels
        };
        
        var data = [trace1]
        var layout= {
            'title': `Top OTUS of ${selected_id}`,
            yaxis: {
                type: 'category'
            },
            xaxis: {
                title: 'Sample Value'
            }           
        }

        Plotly.newPlot("bar", data, layout)




        var trace2={
            'y': bact_values,
            'x':otu_ids, 
            text: otu_labels,
            mode: 'markers',
            marker: {
                color: otu_ids,
                size: bact_values,
                opacity: 0.4,
                colorscale: "Earth"
            }
        };
        var data2=[trace2];

        var layout2 = {
            title: 'OTU Values', 
            hovermode: "closest",
            xaxis: {
                title: "OTU ID Number",
                autorange: true
            },
            yaxis: {
                title: "Sample Value",
                autorange: true
            }
        };
        Plotly.newPlot("bubble", data2, layout2)
    });
};




