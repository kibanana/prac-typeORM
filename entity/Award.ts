import { Column, CreateDateColumn, PrimaryGeneratedColumn, Entity, ManyToOne, JoinColumn } from 'typeorm';
import Group from './Group';

@Entity('award')
export default class Award {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(type => Group, group => group.id)
    @JoinColumn({ name: 'group_id' })
    groupId: string;

    @Column({ type: 'varchar', length: 30 })
    type: string;

    @Column({ type: 'varchar', length: 40 })
    title: string;

    @Column({ type: 'varchar', length: 255 })
    description: string;

    @Column({ type: 'bigint', nullable: true, name: 'default_award_id' })
    defaultAwardId: number;

    @CreateDateColumn({ name: 'create_date' })
    createDate: Date;

    @Column({ default: true })
    active: boolean;

    @Column({ type: 'varchar', length: 20, nullable: true, name: 'input_title' })
    inputTitle: string;

    @Column({ type: 'varchar', length: 255, nullable: true, name: 'input_content' })
    inputContent: string;
}
