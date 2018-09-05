import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';

@Controller('note')
export class NoteController {
	@Post()
	create(@Body() createUserDto) {
		return 'This action adds a new note';
	}

	@Get(':id')
	findOne(@Param('id') id){
		return 'This action returns a #${id} note';
	}
	
	@Put(':id')
	update(@Param('id') id, @Body() updateUserDto){
		return 'This action updates a #${íd} note';
	}

	@Delete(':id')
	remove(@Param('id') id) {
		return 'This action removes a #${id} note';
	}
}