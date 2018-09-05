import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';

@Controller('user')
export class UserController {
	@Post()
	create(@Body() createUserDto) {
		return 'This action adds a new user';
	}

	@Get(':id')
	findOne(@Param('id') id){
		return 'This action returns a #${id} user';
	}
	
	@Put(':id')
	update(@Param('id') id, @Body() updateUserDto){
		return 'This action updates a #${íd} user';
	}

	@Delete(':id')
	remove(@Param('id') id) {
		return 'This action removes a #${id} user';
	}
}