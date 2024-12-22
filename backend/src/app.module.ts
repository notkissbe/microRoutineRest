import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TermekekModule } from './termekek/termekek.module';

@Module({
  imports: [AuthModule, UsersModule, TermekekModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
