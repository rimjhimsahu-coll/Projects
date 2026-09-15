# Deployment

## Server: Render

Create a **Web Service** from this repository. Render can read `render.yaml` automatically; alternatively set the service root directory to `server`, build command to `npm ci`, and start command to `npm start`.

Set these environment variables in Render:

- `MONGO_URI`: the production MongoDB connection string
- `CLIENT_URL`: the exact Vercel URL, for example `https://attendance.vercel.app`. For preview URLs, add each allowed URL separated by commas.

After deployment, verify `https://<render-service>.onrender.com/health` returns `{ "status": "ok" }`.

## Client: Vercel

Import the same repository into Vercel and leave its root directory as the repository root. The root `vercel.json` builds the React app in `client` and serves `client/build` with SPA routing.

In Vercel, add this environment variable for **Production** (and Preview if needed):

`REACT_APP_API_URL=https://<render-service>.onrender.com/api`

Redeploy Vercel after adding the variable, then set the resulting Vercel production URL as Render's `CLIENT_URL` and redeploy Render. The value must use `https://` and must not have a trailing slash.
