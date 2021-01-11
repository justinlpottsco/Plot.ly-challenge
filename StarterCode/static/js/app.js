//Fetch the JSON data using D3 and console log it
//var file_path = 'samples.json'
d3.json('samples.json').then(function(data) {
    console.log(data);
  });
  
  //Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual
    //Use sample_values as the values for the bar chart.
    //Use otu_ids as the labels for the bar chart.
    //Use otu_labels as the hovertext for the chart.
  
  
  //   function init() {
  //     // Use D3 to select the dropdown menu
  //     var dropdownMenu = d3.selectAll("#selectOption").node();
  //     // Assign the dropdown menu item ID to a variable
  //     var dropdownMenuID = dropdownMenu.id;
  //     // Assign the dropdown menu option to a variable
  //     var selectedOption = dropdownMenu.value;
    
  //     console.log(dropdownMenuID);
  //     console.log(selectedOption);
  //   }
    
  // function dropdown(naveldata) {
  //     naveldata['species'].forEach(name=>{
  //         var newOption = d3.select('#sel')
  //     })
  // var data = [{
  //     type: 'bar',
  //     orientation: 'horizontal'
  // }];
  // };
  
  //Create a bubble chart that displays each sample.
    //Use otu_ids for the x values.
    //Use sample_values for the y values.
    //Use sample_values for the marker size.
    //Use otu_ids for the marker colors.
    //Use otu_labels for the text values.