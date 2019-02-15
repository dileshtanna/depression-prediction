DROP DATABASE IF EXISTS  depression_detection;

CREATE DATABASE depression_detection;

\c depression_detection;

CREATE Table posts (
    id serial,
    username varchar,
    post varchar,
    date varchar,
    intensity varchar
)