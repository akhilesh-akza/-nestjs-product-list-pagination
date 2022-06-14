import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepo: Repository<Category>,
  ) {}

  async findAll() {
    const [list, count] = await this.categoryRepo.findAndCount();
    return list;
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }
}
