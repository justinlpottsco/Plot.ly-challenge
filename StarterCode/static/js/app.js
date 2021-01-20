//Fetch the JSON data using D3 and console log it
//var file_path = 'samples.json'

  
//Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual
    //Use sample_values as the values for the bar chart.
    //Use otu_ids as the labels for the bar chart.
    //Use otu_labels as the hovertext for the chart.
  
  
function init() {
    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.selectAll("#selDataset");
    // Assign the dropdown menu item ID to a variable
    var dropdownMenuID = dropdownMenu.id;
    // Assign the dropdown menu option to a variable
    var selectedOption = dropdownMenu.value;

    //console.log(dropdownMenuID);
    //console.log(selectedOption);
    //var firstSample = sampleNames[0];
    buildchart(selectedOption);
    //buildMetadata(selectedOption);

}
init();


function dropdown(naveldata) {
    naveldata['species'].forEach(name=>{
        var newOption = d3.select('#select')
})
};

function buildchart(TestSubjectIDNo) {

    d3.json('samples.json').then(function(data) {
        console.log(data);
        var samples = data.samples;


        // Create a variable that filters the samples for the object with the desired sample number.
        var resultArray = samples.filter(sampleObj => sampleObj.id == TestSubjectIDNo);
        // 1. Create a variable that filters the metadata array for the object with the desired sample number.
        var metadataArray = data.metadata.filter(sampleObj => sampleObj.id == TestSubjectIDNo);
        // Create a variable that holds the first sample in the array.
        var result = resultArray[0];
        // 2. Create a variable that holds the first sample in the metadata array.
        var metadata = metadataArray[0];
        // Create variables that hold the otu_ids, otu_labels, and sample_values.
        var otu_ids = result.otu_ids;
        var otu_labels = result.otu_labels;
        var sample_values = result.sample_values;


        var barDiv = d3.select('#bar')
        var bubbleDiv = d3.select('#bubble')
        var gaugeDiv = d3.select('#gauge')
        var bardata = [{
        // using sample data...can't get to connect to samples.json data
        x: [20, 30, 40, 50],
        y: 'bbtype',
        type: 'bar',
        orientation: 'h'
        }]; 
        var bubbledata = [{
        x: otu_ids,
        y: sample_values,
        text: otu_labels,
        type: 'bubble',
        }];
        var gaugedata = [{
        x: [20, 30, 40, 50],
        y: 'bbtype',
        type: 'gauge',
        }];
        var bubbledata = [];
        var gaugedata = [];
        var barlayout = {
            xaxis: {
                title: 'Units of Bacteria Type(OTU)',
                showgrid: false,
                zeroline: false
            },
            yaxis: {
                title: 'Bacteria Type(OTU)',
                showline: false
            }
        };
        
        var bubblelayout = {};
        var gaugelayout = {};
        


        Plotly.newPlot("bar", bardata, barlayout);
        Plotly.newPlot("gauge", gaugedata, gaugelayout);
        Plotly.newPlot("bubble", bubbledata, bubblelayout);


        });


};
buildchart();