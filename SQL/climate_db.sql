CREATE TABLE "climate" (
    "dt" varchar,   
    "avg_temp" decimal,
	"avg_temp_uncertain" decimal,
	"state" varchar,
	"country" varchar
 );

SELECT * FROM climate

SELECT *
FROM climate
WHERE country = "United States";