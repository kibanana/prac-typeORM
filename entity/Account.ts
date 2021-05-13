import { Column, CreateDateColumn,UpdateDateColumn,  PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity()
export default class Account {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    username: string;

    @Column()
    nickname: string;

    @Column()
    profile_url: string;

    @Column()
    profile: string;

    @Column()
    type: string;

    @Column()
    notification_open: boolean;

    @Column()
    notification_open_date: Date;

    @Column()
    email_open: boolean;
    
    @Column()
    email_open_date: Date;

    @UpdateDateColumn()
    last_update_date: Date;

    @Column()
    last_update_ip: string;

    @CreateDateColumn()
    create_date: Date;

    @Column()
    create_ip: string;

    @Column()
    active: boolean;
}

