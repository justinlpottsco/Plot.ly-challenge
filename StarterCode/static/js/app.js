//Fetch the JSON data using D3 and console log it
//var file_path = 'samples.json'
d3.json('samples.json').then(function(data) {
    console.log(data);
  });
  
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

console.log(dropdownMenuID);
console.log(selectedOption);
}
init();


function dropdown(naveldata) {
    naveldata['species'].forEach(name=>{
        var newOption = d3.select('#sel')
})
};

function buildchart() {
    var barDiv = d3.select('#bar')
    var bubbleDiv = d3.select('#bubble')
    var gaugeDiv = d3.select('#gauge')
    var bardata = [{
    x: 'names',
    y: 'bbtype',
    type: 'bar',
    orientation: 'h'
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
};
buildchart();