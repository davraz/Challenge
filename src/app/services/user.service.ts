import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from 'mongoose';
import { IUser } from '../interfaces/user.interface';


@Injectable()
export class UserService {
	contructor(
		@InjectModel('tokenUserSchema')
		private readonly model: Model<IUser>
	) {}

}