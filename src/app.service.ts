import { Injectable } from '@nestjs/common';
import { CategoryService } from './category/category.service';
import { ProductService } from './product/product.service';

@Injectable()
export class AppService {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly productService: ProductService,
  ) {}

  async getCategoryList(paginationOptions, search?: string) {
    return await this.productService.findAllProducts(paginationOptions, search);
  }
}
