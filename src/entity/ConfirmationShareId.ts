import { Column, CreateDateColumn, PrimaryGeneratedColumn, Entity, OneToOne, JoinColumn } from 'typeorm';
import Confirmation from './Confirmation';

@Entity('confirmation_share_id')
export default class ConfirmationShareId {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(type => Confirmation, confirmation => confirmation.id)
    @JoinColumn({ name: 'confirmation_id' })
    confirmationId: string;

    @Column({ type: 'varchar', length: 30, name: 'share_id' })
    shareId: string;

    @CreateDateColumn({ name: 'create_date' })
    createDate: Date;
}
