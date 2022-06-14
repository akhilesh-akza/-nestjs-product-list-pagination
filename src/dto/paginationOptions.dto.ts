import { Transform, Type } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export enum sortOptions {
  quantity = 'qty',
  amount = 'amt',
}

export enum sortBy {
  ASC = 'ASC',
  DESC = 'DESC',
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
  @Transform(({ value }) => value.toLowerCase())
  @IsEnum(sortOptions, {
    message: 'Sort must be any of the following (case insensitive) [qty, amt]',
  })
  sort?: string;

  @IsOptional()
  @Transform(({ value }) => value.toUpperCase())
  @IsString()
  @IsEnum(sortBy, {
    message:
      'Ordering must be any of the following (case insensitive)  [ASC, DESC] ',
  })
  ordering?: string;
}
