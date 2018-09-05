import { Schema } from 'mongoose';

export const userSchema = new Schema(
	{
		createdAt: {
			required: false,
			type: Date
		},
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
	},
	{ collection: 'user', timestamps: { createdAt: true, updatedAt: false } }
);