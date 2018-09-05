import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import { AppModule } from './app/app.module';

(async () => {
const server = express();
const app = await NestFactory.create(AppModule, server);
await app.listen(3000);
})();