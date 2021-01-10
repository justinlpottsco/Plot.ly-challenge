//Fetch the JSON data using D3 and console log it
var file_path = 'samples.json'
d3.json(file_path).then(function(data) {
  console.log(data);
  dropdown (data)
});

//Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual
  //Use sample_values as the values for the bar chart.
  //Use otu_ids as the labels for the bar chart.
  //Use otu_labels as the hovertext for the chart.

function dropdown(naveldata) {
var data = [{
    type: 'bar',
    orientation: 'horizontal'
}];
};

//Create a bubble chart that displays each sample.
  //Use otu_ids for the x values.
  //Use sample_values for the y values.
  //Use sample_values for the marker size.
  //Use otu_ids for the marker colors.
  //Use otu_labels for the text values.