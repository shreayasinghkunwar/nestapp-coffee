import { Coffee } from "src/coffees/entities/coffee.entity";
import { Flavor } from "src/coffees/entities/flavor.entity";
import { CoffeeRefactor1677741111558 } from "src/migrations/1677741111558-CoffeeRefactor";
import { DataSource } from "typeorm";
export default new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'pass123',
    database: 'postgres',
    entities: [Coffee,Flavor],
    migrations: [CoffeeRefactor1677741111558],
  });

  
// Creating a TypeOrm Migration npx typeorm migration:create src/migrations/CoffeeRefactor
// CoffeeRefactor being the NAME we are giving "this" migration


/* RUNNING MIGRATIONS */

/**
 * 💡 Remember 💡
 * You must BUILD your Nest project (so that everything is output to the `/dist/` folder,
 * before a Migration can run, it needs compilated files.
 */
 
// Compile project first npm run build

// Run migration(s) npx typeorm migration:run -d dist/typeorm-cli.config

// REVERT migration(s)npx typeorm migration:revert -d dist/typeorm-cli.config

// Let TypeOrm generate migrations (for you)npx typeorm migration:generate src/migrations/SchemaSync -d dist/typeorm-cli.config