import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import PaginationParams, { sortOptions } from 'src/dto/paginationOptions.dto';
import { ILike, Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
  ) {}

  async findAllProducts(options: PaginationParams, search: string) {
    const { offset, limit, sort } = options;
    search = search ? search : '';
    let orderOption = {};
    if (sort === sortOptions.quantity) {
      orderOption = { quantity: 'ASC' };
    } else if (sort === sortOptions.amount) {
      orderOption = { amount: 'ASC' };
    } else {
      orderOption = { product_id: 'ASC' };
    }

    const repo = this.productRepo;
    const [list, count] = await repo.findAndCount({
      relations: ['category_id'],
      order: orderOption,
      take: limit,
      skip: offset,
      where: [
        {
          product_name: ILike(`%${search}%`),
        },
      ],
    });

    if (offset >= count) {
      throw new BadRequestException(
        `Offset by ${offset} when there's only ${count} product/s`,
      );
    }
    return {
      result: list,
      showing: {
        from: `${isNaN(offset) ? 1 : offset + 1}`,
        to: `${offset + limit < count ? offset + limit : count}`,
        outof: `${count}`,
      },
    };
  }
}
