import { Body, Post, HttpCode, HttpStatus, Controller, UseGuards, Get, Request} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('register')
  signUp(@Body() signUpDto: Record<string, any>) {
    return this.authService.signUp(signUpDto.username, signUpDto.password);
  }
  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
