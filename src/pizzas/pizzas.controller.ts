import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { response } from 'express';
@Controller('pizzas')
export class PizzasController {
    @Get()  //creates route  of findall then /flavours
    findAll(@Res() response) {
        response.status(200).send('this returns all pizzas') 
    }
    @Get(':id')
    findOne(@Param('id') id: string) {
        return `this returns all pizzas #${id} pizza`
    }
    @Post()
    create(@Body() body) {
        return body;
    } 
}
