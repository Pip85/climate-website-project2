# climate-website-project2
![Climate Change](Ihttps://github.com/Pip85/climate-website-project2/blob/main/static/img/slide/slide-1.jpg)
This website examines both the impact of climate change
and actions we can all take to reduce that impact.

Project team:
Erin Zheng - https://github.com/erinlzheng
Damiso Hutchinson - https://github.com/damiso24    
Albe Eteme - https://github.com/Albeteme
Asim Syed - https://github.com/AsimSyed7
Valerie Pippenger - https://github.com/Pip85

Data Resources:
Resource 1: Global average monthly temperatures from 1700's to 2013 - 
https://www.kaggle.com/berkeleyearth/climate-change-earth-surface-temperature-data?select=GlobalTemperatures.csv
Resource 2: U.S. states with latitude and longitude
https://www.kaggle.com/washimahmed/usa-latlong-for-state-abbreviations

The website includes:
*Home Page:
    Images related to global warming
    Sources and links of additional global
    warming resources.
*About Us:    
    Information on the project
    Information about our team
* Change Page:
    Information & links about climate change
* Insights Page:   
   Details regarding our development process including
   issues we ran into
* Visualizations    
    Visualization 1:
        Choropleth map of United States showinig average
        annual temperature by state for years 1900 through 2012
    Visualization 2:
        Heat map with auto play of years 1900 through 2012
        Table of annual average temperatures by state
    Visualization 3:
        Line chart
    Visualization 4:
        Bubble chart showing average annual temperature variance
        between 1900 and 2012 by state
   

Data Cleaning:
    Data was imported and cleaned using Postgres SQL.  Cleaning included:
        Source 1:
            Keeping U.S. data only
            Removing data from 1700's and 1800's due to incomplete data
            Removing additional characters included with Georgia
            Using monthly data to calculate average annual temperature by state
            Converting Celsius data into Fahrenheit

        Source 2:
            Data from this source was already clean.
            Once removing the additional characters included with
            Georgia from Source 1, this data source was joined
            with Source 1 by state.
  
  Link to cleaned data file on this repository:
  https://github.com/Pip85/climate-website-project2/blob/main/static/data/cleaned_GlobalLandTemperaturesByState.csv

Website Development:
    The website was developed using HTML, CSS.  
        HTML files can be found here:  https://github.com/Pip85/climate-website-project2/tree/main/templates
        CSS file can be found here:  https://github.com/Pip85/climate-website-project2/blob/main/static/css/style.css
        

Website Rendering: Done through Flask (app.py) and virtual server
    app.py can be found here: https://github.com/Pip85/climate-website-project2/blob/main/app.py

Visualizations:
    
    Visualization 1:
        Choropleth map of the United States includes a dropdown to choose a year between 1900 and 2012.
        The map colors are based on the average annual temperatures from the cleaned dataset.
        Coding for the map was done in Javascript using Plotly.js.
        Link:
![US Choropleth](https://github.com/Pip85/climate-website-project2/blob/main/static/img/clients/client-1.jpg)
    Visualization 2:
        Heat map of the United States with autoplay of average annual temperatures
        between 1900 and 2012.  Map was done in Tableau.
        Link:
        Table of average annual temperatures by state from the cleaned dataset.
    ![US Heat map](https://github.com/Pip85/climate-website-project2/blob/main/static/img/clients/client-2.jpg)
    Visualization 3:
        Link:
    Visualization 4:
        Bubble chart showing the variance of average annual temperature of 1900 vs. 2012
        for each state.  The chart was build in Javascript using Plotly.js.
        Link:
        ![Bubble Chart](https://github.com/Pip85/climate-website-project2/blob/main/static/img/clients/client-4.jpg)
    
