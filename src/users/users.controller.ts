import { Controller, Post, Get, Body, Delete, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    await this.usersService.create(createUserDto);
  }

  @Get()
  async findAll() {
    const users = await this.usersService.findAll();
    return { users };
  }

  @Get(':id')
  async findOne(@Param() params) {
    this.usersService.findOne(params.id);
  }

  @Delete(':id')
  async delete(@Param() params) {
    await this.usersService.delete(params.id);
  }
}
