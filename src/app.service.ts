import { Injectable } from '@nestjs/common';
import { CategoryService } from './category/category.service';
import { ProductService } from './product/product.service';

@Injectable()
export class AppService {
  constructor(
    private readonly productService: ProductService,
    private readonly categoryService: CategoryService,
  ) {}

  async getProductList(paginationOptions, search?: string) {
    return await this.productService.findAllProducts(paginationOptions, search);
  }

  getCategoryList() {
    return this.categoryService.findAll();
  }
}
