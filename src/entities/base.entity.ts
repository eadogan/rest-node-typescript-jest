import { BaseEntity, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class Base extends BaseEntity {
    @CreateDateColumn({ name: 'created_at', nullable: false })
    createdAt!: Date;

    @UpdateDateColumn({ name: 'updated_at', nullable: false })
    updatedAt!: Date;
};