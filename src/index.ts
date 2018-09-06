import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import { AppModule } from './app/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
	const server = express();
	const app = await NestFactory.create(AppModule, server);
	const options = new DocumentBuilder()
		.setTitle('Challenge')
		.setDescription('The challenge back-end')
		.setVersion('1.0')
		.addTag('challenge')
		.build();
	const document = SwaggerModule.createDocument(app, options);
	SwaggerModule.setup('api', app, document);
	await app.listen(3000);
}
bootstrap();