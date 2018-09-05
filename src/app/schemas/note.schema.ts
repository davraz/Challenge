import { Schema } from 'mongoose';

export const noteSchema = new Schema(
	{
		text: {
			required: true,
			type: String
		},

		createdDate: {
			required: true,
			type: Date
		},
		
		updatedDate: {
			required: true,
			type: Date
		}	
	}
);