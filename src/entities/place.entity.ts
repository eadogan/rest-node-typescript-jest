import { Column, Entity, ObjectIdColumn } from "typeorm";
import { Base } from "./base.entity";

@Entity()
export class Place {
  @Column()
  @ObjectIdColumn()
  id: string;

  @Column()
  slug: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  address: string;

  @Column()
  country: string;

  @Column()
  starRating: number;

  @Column()
  category: string;
}
