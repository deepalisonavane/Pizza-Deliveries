import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PizzasController } from './pizzas/pizzas.controller';

@Module({
  imports: [],
  controllers: [AppController, PizzasController],
  providers: [AppService],
})
export class AppModule {}
