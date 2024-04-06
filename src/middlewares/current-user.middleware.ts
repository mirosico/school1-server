import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
import { UsersService } from '../users/users.service';
import { User } from '../users/users.entity';

declare global {
  interface Request {
    currentUser?: User;
    session: any;
  }
}
@Injectable()
export class CurrentUserMiddleware implements NestMiddleware {
  constructor(private usersService: UsersService) {}

  async use(req: Request, res: Response, next: NextFunction): Promise<any> {
    const { userId } = req.session || {};
    if (userId) {
      const user = await this.usersService.findOne(userId);
      req.currentUser = user;
      console.log('currentUser', req.currentUser);
    }

    next();
  }
}
