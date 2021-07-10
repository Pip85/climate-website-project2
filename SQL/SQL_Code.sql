--Create table to hold climate dataset
CREATE TABLE "climate" (
    "dt" varchar,   
    "avg_temp" decimal,
	"avg_temp_uncertain" decimal,
	"state" varchar ,
	"country" varchar
 );

-- Pull in and display data from climate csv
SELECT * FROM climate;

-- Create new table to hold just data for the US and years
--	with complete temperature data
CREATE TEMP TABLE climate_us 
AS 
SELECT *
FROM climate
WHERE country = 'United States'
AND
date_part('year', dt::date) >=1900
AND date_part('year', dt::date) < 2013;

-- Create new table to add year as new column and remove country

CREATE TEMP TABLE climate_us_year
AS
SELECT dt, avg_temp, state,
date_part('year', dt) AS year
from climate_us;

select * FROM climate_us_year;

-- Create table to calculate and add column for avg temp
-- by state by year

CREATE TEMP TABLE climate_us_avg_temp
AS
SELECT state, year, ROUND(AVG(avg_temp),2) AS Annual_Avg_Temp
FROM climate_us_year
GROUP BY state, year
ORDER BY state, year;

SELECT * FROM climate_us_avg_temp;

-- Create final table to add column with avg temps converted
-- to Fahrenheit
CREATE TEMP TABLE climate_us_avg_tempF
AS
SELECT state, year, ROUND(AVG(avg_temp),2) AS Annual_Avg_Temp_C,
ROUND(AVG((avg_temp * 9/5)+32),2) AS Annual_Avg_Temp_F
FROM climate_us_year
GROUP BY state, year
ORDER BY state, year;

SELECT * FROM climate_us_avg_tempF;