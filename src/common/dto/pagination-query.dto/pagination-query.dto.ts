import { Type } from "class-transformer";
import { IsOptional, IsPositive } from "class-validator";

export class PaginationQueryDto {
   // @Type(() => Number) --> query param as string so converting manaully but we can also do it in validationpipe
    @IsOptional()
    @IsPositive()
    limit: number;
  
   // @Type(() => Number)
    @IsOptional()
    @IsPositive()
    offset: number;
}
