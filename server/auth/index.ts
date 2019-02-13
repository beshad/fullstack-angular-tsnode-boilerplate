import * as jwt from 'express-jwt';
import * as dotenv from 'dotenv';

dotenv.load({ path: '.env' });

const auth = jwt({
  secret: process.env.SECRET_TOKEN
});

export default auth;

