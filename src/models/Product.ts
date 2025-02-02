import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 100 })
    name!: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    price!: number;

    @Column({ type: 'text' })
    description!: string;
} 