import { Schema } from 'mongoose';

export const userSchema = new Schema(
	{
		
		username: {
			required: true,
			type: String
		},
		name: {
			required: true,
			type: String
		},		
		notes: {
			required: true,
			type: Number
		}		
	}
	
);