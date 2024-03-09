# Personal Dashboard Application

The project is for the hiring managers of the Entropy Technologies, where I have created the Personal Dashboard Application using React + TypeScript as Frontend and Django + Postgresql as backend. Note: These are dockerized containers, thus to run the application locally, it docker and docker desktop is required. I have hosted the website on Digital-Ocean.

The project contains a Dashboard, that has a Weather Widget panel, New Feed panel nad a Task Manager.

There are main 2 parts of the project, Backend and Frontend.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file. (Only if the login and register functionalities are working.)

`DB_NAME` =
`DB_USER` =
`DB_PASSWORD` =
`DB_HOST` = db
`DB_NAME` = 5432
`DJANGO_SUPERUSER_NAME` =
`DJANGO_SUPERUSER_PASSWORD` =
`WEATHER_API_KEY` = (get the key from here: https://openweathermap.org/api)
`NEWS_API_KEY` = (get the key from here: https://newsapi.org/)
`TODOIST_API_TOKEN` = (get the token from here: https://todoist.com/)
`EMAIL_HOST_USER` = (Not working at the moment, so not required)
`EMAIL_HOST_PASSWORD`= (Not working at the moment, so not required)

This is required as docker will need to create a container of the database in the postgres and a superuser in the django app. Make sure Host and Port are kept same as those values will be used in the docker as well.

## Run Locally

Clone the project

```bash
  git clone https://github.com/KDhanak/Personal-Dashboard-Application.git
```

Go to the project directory

```bash
  cd my-project
```

Build the Containers

1. Once you have installed docker and docker-desktop, in your terminal, run the following commands:

```bash
cd <the directory where you have stored the application.>

docker-compose build
```

This should build 3 different containers and 1 network in the docker, where backend,
frontend and db will have their seperate containers. The network that is created
will work as a communication channel among these 3 containers.

2. Start the server

```bash
docker-compose up
```

This will start the application in http://localhost:3000

3.  Remember, there is no need to install any node_modules or npm dependencies or even django-admin. All of these will be taken care by docker in a beautiful way. Make sure to run the above commands where docker-compose.yml file is stored. The stored files should look like below:

        - Personal Dashboard Application(or the name of the folder where it is stored.)
            - backend
            - frontend
            - docker-compose.yml

4.  If working in deployment mode, do not forget to change the environment variables in .env of the frontend and settings of the backend.
