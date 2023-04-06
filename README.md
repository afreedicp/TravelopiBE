# APIs for Tavelopia BE

# 1. Install PROJECT dependencies:

`npm install`

# 2. Setup a DB:

Create database for backend.
Follow below instructions to setup local database.

## Setting Up a local database

To run the application locally, you need to setup a postgres database on your system.

## Install postgres

`sudo apt install postgresql libpq-dev`

Login as the 'postgres' user and start postgres shell

`sudo su - postgres`

`psql`

Create a user for use with the application.
Remember to wrap your password in single quotes.

`create user 'username' with password 'password';`

Create a database and give permissions for the above user

`create database travellersdb;`

`grant ALL privileges on database travellersdb to username;`

Give permissions to the user to create database so that test databses can be created

`ALTER USER username CREATEDB;`

press `\q` to exit

Copy everything in env.example to a newly created .env file

change the database value on it

# 3. Run the Server (port:3030)

`npm run dev`

# 4. To Run the Tests

`npx jest`
