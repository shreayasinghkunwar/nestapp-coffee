import { Injectable, Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import {Connection } from 'typeorm'
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { Event } from 'src/events/entities/event.entity/event.entity';
import { COFFEE_BRANDS } from './coffees.constants';
import { ConfigModule } from '@nestjs/config';
import coffeesConfig from './config/coffees.config';


//Nest Modules(is object with) contain 4 main things:

//1.controllers -> array of controller or our API Routes
//2.exports -> array of providers that should be made available anywhere this module is imported
//3. imports -> array of OTHER modules and its exported provider that THIS module requires.
//4.providers -> Here we’re going to list our services .  Any providers here will be available only within “THIS” module itself, 
class ConfigService{}
class DevelopmentConfigService{

}
class ProductionConfigService{}
//registering provider
@Injectable()
export class CoffeeBrandFactory{
create(){
  return ['buddy brew', 'nescafe']
}
}
@Module({
  imports: [TypeOrmModule.forFeature([Coffee , Flavor, Event]),
  ConfigModule.forFeature(coffeesConfig)] ,//registering entity/table
    controllers: [CoffeesController],
  providers: [CoffeesService,{
    provide: ConfigService,
    useClass:
      process.env.NODE_ENV === 'development'
        ? DevelopmentConfigService
        : ProductionConfigService,
  }// example of useClass
  ,{
    provide: COFFEE_BRANDS, 
    //useValue: ['buddy brew', 'nescafe'] // array of coffee brands,
   // useFactory: (brands:CoffeeBrandFactory)=>brands.create(),//useFActory can inject other providers into it
    //inject:[CoffeeBrandFactory]
    useFactory: async (connection: Connection): Promise<string[]> => {
      // const coffeeBrands = await connection.query('SELECT * ...');
      const coffeeBrands = await Promise.resolve(['buddy brew', 'nescafe'])
      return coffeeBrands;
    }
  }] ,
  exports:[CoffeesService]
})
export class CoffeesModule {}
