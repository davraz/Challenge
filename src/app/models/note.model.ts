import { Connection } from 'mongoose';
import { NoteSchema } from './schemas/note.schema';

export const notesProviders = [
	{
		provide: 'tokenNoteSchema',
		useFactory: (connection: Connection) => connection.model('Note', UserSchema),
		inject: ['DbConnectionToken'],
	},

];