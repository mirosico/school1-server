import { Body, Controller, Post, Session, UseGuards } from '@nestjs/common';
import { User } from './users.entity';
import { AuthService } from './auth.service';
import { AuthGurad } from '../gurads/auth.gurad';

@Controller('users')
export class UsersController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  async createUser(@Body() { login, password }: User, @Session() session: any) {
    console.log('login', typeof password);
    const user = await this.authService.signup(login, password);
    return user;
  }

  @Post('/signin')
  async signin(@Body() { login, password }: User, @Session() session: any) {
    const user = await this.authService.signin(login, password);
    session.userId = user.id;
    return user;
  }

  @Post('/signout')
  async signout(@Session() session: any) {
    session.userId = null;
  }
}
