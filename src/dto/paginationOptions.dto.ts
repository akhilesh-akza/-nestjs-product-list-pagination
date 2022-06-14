import { Type } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional, Min } from 'class-validator';

export enum sortOptions {
  quantity = 'qty',
  amount = 'amt',
}

export default class PaginationParams {
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  offset?: number;

  @IsOptional()
  @Type(() => Number)
  @Min(1)
  limit?: number;

  @IsOptional()
  @IsEnum(sortOptions, {
    message: 'Sort must be any of the following [qty, amt]',
  })
  sort?: string;

  @IsOptional()
  @Type(() => Number)
  @Min(0)
  startIndex: number;
}
