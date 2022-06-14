import { Category } from 'src/category/entities/category.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity({ name: 'product' })
export class Product {
  @PrimaryColumn({ type: 'integer' })
  product_id: number;

  @Column({ type: 'text', nullable: false })
  product_name: string;

  @Column({ nullable: false })
  quantity: number;

  @Column({ nullable: false })
  amount: number;

  @ManyToOne(() => Category)
  @JoinColumn([{ name: 'category_id', referencedColumnName: 'category_id' }])
  category_id: Category;
}
