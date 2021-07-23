
# Climate Change Website
![Climate Change](https://github.com/Pip85/climate-website-project2/blob/main/static/img/slide/slide-1.jpg)
****
## **Project Goal:**
### ***Create a website to educate others through data visualizations and provide interactive means to explore climate change data.***<br>


### **Project team:**<br>
Erin Zheng - https://github.com/erinlzheng<br>
Damiso Hutchinson - https://github.com/damiso24  
Albe Eteme - https://github.com/Albeteme<br>
Asim Syed - https://github.com/AsimSyed7<br>
Valerie Pippenger - https://github.com/Pip85<br>

### **Data Resources:**
**Resource 1:** Global average monthly temperatures from 1700's to 2013,br> 
https://www.kaggle.com/berkeleyearth/climate-change-earth-surface-temperature-data?select=GlobalTemperatures.csv

**Resource 2:** U.S. states with latitude and longitude<br>
https://www.kaggle.com/washimahmed/usa-latlong-for-state-abbreviations

### **HTML Resources:**
**Flattern in BootstrapMade:**<br>
https://bootstrapmade.com/flattern-multipurpose-bootstrap-template/

- Home
  - Global Warming Image Carousel
  - Do Your Part: Learn more link
  - Links to Climate Change Websites
  - Links to Infographics with Climate Change Information
  - Visualization Screenshot Carousel w/Link to HTML
- About Us
  - Goal and Resources
  - Requirements
  - Team Images and Information
- The Change
  - The Same Infographics from Home Page 
  - Image Description with Source Link
- Insights
  - Development Process and Issues Outline
  - Resources: All External and Image Links Referenced
- Visualizations
   - Choropleth Map
   - Heat Map & Table of Temperatures
   - Line Chart
   - Bubble Chart
   - (Extra) Bar Graph



### **Data Cleaning:**<br>

Data was imported and cleaned using Postgres SQL.  Cleaning included:
> **Source 1:**
- Keeping U.S. data only
- Removing data from 1700's and 1800's due to incomplete data
- Removing additional characters included with Georgia
- Using monthly data to calculate average annual temperature by state
- Converting Celsius data into Fahrenheit

> **Source 2:**
- Data from this source was already clean.
- Once removing the additional characters included with
- Georgia from Source 1, this data source was joined
    with Source 1 by state.
  
**Link to cleaned data file on this repository:**<br>
> https://github.com/Pip85/climate-website-project2/blob/main/static/data/cleaned_GlobalLandTemperaturesByState.csv

### **Website Development:**
The website was developed using HTML, CSS.  
> HTML files can be found here:<br>
> https://github.com/Pip85/climate-website-project2/tree/main/templates

> CSS files can be found here:<br>
> https://github.com/Pip85/climate-website-project2/blob/main/static/css
        
>Vendors by BootstrapMade can be found here:<br>
>https://github.com/Pip85/climate-website-project2/tree/main/static/vendor

### **Website Rendering:**
> Done through Flask (app.py) and virtual server<br>
> app.py can be found here: https://github.com/Pip85/climate-website-project2/blob/main/app.py

### **Visualizations:**
 <strong> *All Visualizations are in Fahrenheit* </stong>
> **Visualization 1:**
- Choropleth map of the United States includes a dropdown to choose a year between 1900 and 2012.
- The map colors are based on the average annual temperatures from the cleaned dataset.
- Coding for the map was done in Javascript using Plotly.js.
> US Choropleth Map<br>
![US Choropleth](https://github.com/Pip85/climate-website-project2/blob/main/static/img/visualizations/viz-1.jpg)


> **Visualization 2:**
- Heat map of the United States with autoplay of average annual temperatures
between 1900 and 2012 (A colored data chart is also included). 
- Map was done in Tableau.
> US Heat Map:<br>
![US Heat Map](https://github.com/Pip85/climate-website-project2/blob/main/static/img/visualizations/viz-2.jpg)
> US Colored Data Chart:<br>
![US Color Chart](https://github.com/Pip85/climate-website-project2/blob/main/static/img/visualizations/viz-2-5.jpg)
- Colored table of average annual temperatures by state from the cleaned dataset.

> **Visualization 3:**
- Line plot of the average temperature for each year and state in the US. 
- Map was done in Tableau.
> US Line Plot:<br>
![US Line Plot](https://github.com/Pip85/climate-website-project2/blob/main/static/img/visualizations/viz-3.jpg)

> **Visualization 4:**
- Bubble chart showing the variance of average annual temperature of 1900 vs. 2012
for each state.  
- The chart built in Javascript using D3/Plotly.
> Bubble Chart:<br>
![Bubble Chart](https://github.com/Pip85/climate-website-project2/blob/main/static/img/visualizations/viz-4.jpg)
    
> **Visualization 5:**
- A stacked and double bar graph comparing average temperature between 1900 and 2012. 
- Graph built in Javascript using D3/Plotly
> Bar Graph:<br>
![Bar Graph](https://github.com/Pip85/climate-website-project2/blob/main/static/img/visualizations/viz-5-full.jpg)

> **Insights:**
![Insights](https://github.com/Pip85/climate-website-project2/blob/main/static/img/insights.png)
