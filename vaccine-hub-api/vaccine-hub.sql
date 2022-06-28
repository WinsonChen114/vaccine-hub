--Asks user if they want to delete and recreate db
\echo "Delete and recreate vaccine_hub db?"
\prompt "Enter for yes, Control+C to cancel > " answer

--If user does not cancel script, drop, recreate, and connect
DROP DATABASE vaccine_hub;
CREATE DATABASE vaccine_hub;
\connect vaccine_hub;

--Execute schema script
\i vaccine-hub-schema.sql
