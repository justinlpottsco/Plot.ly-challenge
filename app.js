// Fetch the JSON data using D3 and console log it
var file_path = 'samples.json'
d3.json(file_path).then(function(data) {
  console.log(data);
  dropdown (data)
});

// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual
var data = [{
    type: 'bar',
    orientation: 'horizontal'
}];