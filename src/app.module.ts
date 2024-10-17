import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './menu/menu.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Menu } from './menu/entities/menu.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mongodb",
      host: "127.0.0.1",
      port: 27017,
      database: "nest-restaurant",
      synchronize: true,
      entities: [Menu],
    }),
    MenuModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
