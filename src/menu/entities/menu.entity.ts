import { Column, Entity, ObjectIdColumn, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Menu {

    @ObjectIdColumn()
    id: number

    @Column()
    dishName: string

    @Column()
    price: number

    @Column()
    category: string
}
