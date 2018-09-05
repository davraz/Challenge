import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from 'mongoose';
import { INote } from '../interfaces/note.interface';


@Injectable()
export class NoteService {
	contructor(
		@InjectModel('tokenNoteSchema')
		private readonly model: Model<INote>
	) {}

}