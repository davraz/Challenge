import { Connection } from 'mongoose';
import { UserSchema } from './schemas/user.schema';

export const usersProviders = [
	{
		provide: 'tokenUserSchema',
		useFactory: (connection: Connection) => connection.model('User', UserSchema),
		inject: ['DbConnectionToken'],
	},

];