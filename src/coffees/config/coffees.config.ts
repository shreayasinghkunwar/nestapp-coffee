import { registerAs } from "@nestjs/config";
//namespace configuration object as key ie coffees
export default registerAs('coffees', () => ({ 
    foo: 'bar', 
  }));