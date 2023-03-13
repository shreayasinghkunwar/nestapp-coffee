import { Column, Entity, PrimaryGeneratedColumn,JoinTable,ManyToMany } from 'typeorm';
import { Flavor } from './flavor.entity';

@Entity() // sql table === 'coffee' or @Entity('coffees') fro differetn  table name 
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column({default:0})
  recommendations: number
  
  @JoinTable() // 👈 Join the 2 tables - only the OWNER-side does this
  @ManyToMany(
    type => Flavor,
    flavor => flavor.coffees, 
    {
      cascade: true, // 👈 or optionally just insert or update ['insert']
    },// what is "coffee" within the Flavor Entity 
  ) // 👈
  flavors: Flavor[];
}