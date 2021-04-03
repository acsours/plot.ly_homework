# plotly_challenge:
# Belly Button Biodiversity Dashboard

This is a script created to read data from a JSON file and load into a responsive dashboard using javascript. 

* HTML page to display data on bellybutton biodiversity 
* Uses app.js to display the data from samples.json on the interactive html page 
* Filters data by subject ID number using a dropdown menu
* uses d3 selectors and event handlers to filter data and create subsequent visualizations 

#### CDN specifications:

Bootstrap:
```
https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css
```
Plot.ly:
```
https://cdn.plot.ly/plotly-latest.min.js
```

D3:
```
  <script src="https://d3js.org/d3.v6.min.js"></script>

```

#### Dashboard Preview

Use dropdown menu to select sample id and corresponding display data
![dashboard_dropdown.png](static/images/dashboard_dropdown.png?raw=true "Title")

Subject demographic info displayed in panel
![dashboard_barchart.png](static/images/dashboard_barchart.png?raw=true "Title")
Hovertext displays sample value and bacteria name

![dashboard_bubblechart.png](static/images/dashboard_bubblechart.png?raw=true "Title")
Hovertext displays bacteria name, sample value, and otu id number

