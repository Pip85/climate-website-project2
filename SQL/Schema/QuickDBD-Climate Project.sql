-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/OhxMQF
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "countries" (
    "country" varchar   NOT NULL,
    "state" varchar   NOT NULL,
    CONSTRAINT "pk_countries" PRIMARY KEY (
        "state"
     )
);

CREATE TABLE "dates" (
    "state" varchar   NOT NULL,
    "date" varchar   NOT NULL,
    CONSTRAINT "pk_dates" PRIMARY KEY (
        "date"
     )
);

CREATE TABLE "temperatures" (
    "date" varchar   NOT NULL,
    "avg_temp" int   NOT NULL,
    CONSTRAINT "pk_temperatures" PRIMARY KEY (
        "date"
     )
);

ALTER TABLE "dates" ADD CONSTRAINT "fk_dates_state" FOREIGN KEY("state")
REFERENCES "countries" ("state");

ALTER TABLE "temperatures" ADD CONSTRAINT "fk_temperatures_date" FOREIGN KEY("date")
REFERENCES "dates" ("date");

