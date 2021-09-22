import { Column, Entity, Index } from 'typeorm';
import { Base } from './base.entity';

@Entity()
class Place extends Base {
    @Column({ nullable: false})
    @Index({ unique: true })
    id: string;

    @Column({ nullable: false})
    slug: string;

    @Column({ nullable: false})
    title: string;

    @Column({ nullable: false})
    description: string;

    @Column({ nullable: false})
    address: string;

    @Column({ nullable: true})
    country: string;

    @Column({ nullable: true})
    starRating: number;

    @Column({ nullable: false})
    category: string;
}