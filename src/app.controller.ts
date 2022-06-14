import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import PaginationParams from './dto/paginationOptions.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Example : http://localhost:3000/products?limit=5&offset=5&sort=qty&ordering=desc
  // By default, sorts by ID.

  @Get('/products')
  getProducts(
    @Query('search') search: string,
    @Query() { offset, limit, sort, ordering }: PaginationParams,
  ) {
    return this.appService.getProductList(
      { offset, limit, sort, ordering },
      search,
    );
  }

  /* For testing purposes */

  @Get('/categories')
  getCategories() {
    return this.appService.getCategoryList();
  }
}
