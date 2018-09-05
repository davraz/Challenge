import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { MongooseModule } from 'mongoose';
import { UserService } from './services/user.service';
import { userSchema } from './schemas/user.schema';
import { UserController } from './controllers/user.controller';
import { NoteController } from './controllers/note.controller';
import { NoteService } from './services/note.service';
import { noteSchema } from './schemas/note.schema';

@Module({
	controllers: [
		AppController,
		UserController
		NoteController
	],
	imports: [
		MongooseModule.forRoot('mongodb://<alcaraz>:<admin1>@ds255308.mlab.com:55308/challenge_back', { useNewUrlParser: true }),
		MongooseModule.forFeature([
			{ name: 'tokenUserSchema', schema: userSchema },
			{ name: 'tokenNoteSchema', schema: noteSchema }
		]),
	],
	providers: [
		UserService,
		NoteService
	]
})
export class AppModule {}