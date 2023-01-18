# Spin, ReactJS, and TypeScript

This is a full-stack application written in ReactJS and TypeScript, running as
a Spin application.

## Building and running locally

First, run `npm install` in the `api` and `frontend` directories, then run
`spin build` and `spin up`:

```bash
$ spin build && spin up --follow-all
Executing the build command for component frontend: npm run build
Executing the build command for component api: npm run build

Successfully ran the build command for the Spin components.
Serving http://127.0.0.1:3000
Available Routes:
  frontend: http://127.0.0.1:3000 (wildcard)
  api: http://127.0.0.1:3000/api (wildcard)
```

## Deploying to Fermyon Cloud

Now that the application is built, we can deploy it to Fermyon Cloud:

```bash
$ spin deploy                       
Uploading spin-fullstack-react version 0.1.0+r15d9879d...
Deploying...

Available Routes:
  frontend: https://spin-fullstack-react-ejbqu8o9.fermyon.app (wildcard)
  api: https://spin-fullstack-react-ejbqu8o9.fermyon.app/api (wildcard)
```

You can see a deployed instance of this application at <https://spin-fullstack-react-ejbqu8o9.fermyon.app/>.
