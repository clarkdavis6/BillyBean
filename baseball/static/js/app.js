function buildPlot() {
    /* data route */
  var url = "/api/baseball";
  d3.json(url).then(function(response) {

    console.log(response);

    Plotly.plot("plot", response);
  });
}

buildPlot();
