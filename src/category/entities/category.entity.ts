import { Column, Entity, PrimaryColumn } from 'typeorm';
// Only used to generate Database without conflicts.
@Entity({ name: 'category' })
export class Category {
  @PrimaryColumn({ type: 'integer' })
  category_id: number;

  @Column({ type: 'text' })
  category_name: string;
}
