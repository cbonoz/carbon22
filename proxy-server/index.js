import express from 'express';
import cors from 'cors';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();
app.use(cors())
// https://github.com/chimurai/http-proxy-middleware

const target = 'https://carbon-aware-api.azurewebsites.net'

app.use(
    '/',
    createProxyMiddleware({
      target,
      changeOrigin: true,
      logger: console,
    })
  );

app.listen(3001);