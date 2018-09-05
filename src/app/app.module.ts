import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { MongooseModule } from 'mongoose';
import { UserService } from './services/user.service';
import { userSchema } from './schemas/user.schema';

@Module({
	controllers: [
		AppController
	],
	imports: [
		MongooseModule.forRoot('mongodb://<alcaraz>:<admin1>@ds255308.mlab.com:55308/challenge_back', { useNewUrlParser: true }),
		MongooseModule.forFeature([
			{ name: 'tokenUserSchema', schema: userSchema }
		]),
	],
	providers: [
		UserService
	]
})
export class AppModule {}