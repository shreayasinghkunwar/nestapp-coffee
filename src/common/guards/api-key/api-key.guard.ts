import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request>();// switchtohhtp gives access to hhttp request
    const authHeader = request.header('Authorization');//request"s auth header
    return authHeader === process.env.API_KEY;// return true id auth header matched
  }
}
