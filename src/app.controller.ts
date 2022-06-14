import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import PaginationParams from './dto/paginationOptions.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/products')
  getProducts(
    @Query('search') search: string,
    @Query() { offset, limit, sort }: PaginationParams,
  ) {
    return this.appService.getCategoryList({ offset, limit, sort }, search);
  }
}
