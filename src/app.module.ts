import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TbUser } from './entities/tb-user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'svc.sel3.cloudtype.app',
      port: 30348,
      username: 'root',
      password: 'work1234!',
      database: 'workdb',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([TbUser]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
