-- The Airplane Table
-- Create a new database called 'HasBooking'
-- Connect to the 'master' database to run 
this snippet
USE master
GO
-- Create the new database if it does not exist already
IF NOT EXISTS (
    SELECT name
FROM sys.databases
WHERE name = N'HasBooking'
)

CREATE DATABASE HasBooking
GO
-- Create a new table called 'Airplane' in schema 'SchemaName'
-- Drop the table if it already exists
IF OBJECT_ID('SchemaName.Airplane', 'U') IS NOT NULL
DROP TABLE SchemaName.Airplane
GO
-- Create the table in the specified schema
CREATE TABLE SchemaName.Airplane
(
    AirplaneId INT NOT NULL PRIMARY KEY,
    -- primary key column
    RegirstrationNumber INT NOT NULL,
    Capacity INT NOT NULL,
    PRIMARY KEY(AirplaneId)

);
GO
-- Create a new table called 'Flight' in schema 'SchemaName'
-- Drop the table if it already exists
IF OBJECT_ID('SchemaName.Flight', 'U') IS NOT NULL
DROP TABLE SchemaName.Flight
GO
-- Create the table in the specified schema
CREATE TABLE SchemaName.Flight
(
    FlightId INT NOT NULL PRIMARY KEY,
    -- primary key column
    ThePlaceFrom [NVARCHAR](50) NOT NULL,
    ThePlaceTo [NVARCHAR](50) NOT NULL,
    DepartureDaTe [NVARCHAR](50) NOT NULL,
    DepartureTime [NVARCHAR](50) NOT NULL,
    ArivalDate [NVARCHAR](50) NOT NULL,
    ArivalTime [NVARCHAR](50) NOT NULL,
    PRIMARY Key(FlightId)

);
GO

-- Create a new table called 'Passenger' in schema 'SchemaName'
-- Drop the table if it already exists
IF OBJECT_ID('SchemaName.Passenger', 'U') IS NOT NULL
DROP TABLE SchemaName.Passenger
GO
-- Create the table in the specified schema
CREATE TABLE SchemaName.Passenger
(
    PassengerId INT NOT NULL PRIMARY KEY,
    -- primary key column
    GivenName [NVARCHAR](100) NOT NULL,
    Surname [NVARCHAR](50) NOT NULL,
    EmailAddress [NVARCHAR](150),
    PRIMARY Key(PassengerId)

);
GO


-- That is The End -- 

