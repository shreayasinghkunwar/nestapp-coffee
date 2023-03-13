import { Controller,
    Get ,
    Param,
    Post,
    Body,
    HttpCode,
    HttpStatus,
    Res,
    Patch,
    Delete,
    Query,
    UsePipes,
    ValidationPipe
} from '@nestjs/common';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto/update-coffee.dto';

@UsePipes(ValidationPipe)
@Controller('coffees') //route
export class CoffeesController {
 // inject dependencies/providers using constructor
  constructor (private readonly coffeesService: CoffeesService){}

    @Get('flavours') //From common package and used for nested routing coffess/flavours
    findAll(@Query() paginationParameter:PaginationQueryDto){
       // const {limit,offset}= paginationParameter
return this.coffeesService.findAll(paginationParameter);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.coffeesService.findOne(id);
    }

    @Post()
    create(@Body() createCoffeeDto:CreateCoffeeDto) {
      return this.coffeesService.create(createCoffeeDto);
    }
  
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCoffeeDto:UpdateCoffeeDto) {
      return this.coffeesService.update(id, updateCoffeeDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.coffeesService.remove(id);
    }
/* 
    @Get(':id')
    //@Praram decorator for specfic portion of param
    findOne(@Param('id') id:string){
return `the id is ${id}`

    }

   @Post()
    @HttpCode(HttpStatus.GONE)
    create(@Body() body ){
        return body
    }

    */
   

}
