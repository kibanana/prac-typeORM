import { Column, CreateDateColumn, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity('group')
export default class Group {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 30 })
    type: string;

    @Column({ type: 'varchar', length: 20 })
    name: string;

    @Column({ name: 'is_fluid' })
    isFluid: boolean;

    @Column({ type: 'text', nullable: true, name: 'logo_url' })
    logoUrl: string;

    @Column({ name: 'manager_permission_active' })
    managerPermissionActive: boolean;

    @Column({ name: 'skip_limit' })
    skipLimit: number;

    @Column({ nullable: true, name: 'bank_account_number' })
    bankAccountNumber: number;

    @Column({ name: 'use_alternative_payment' })
    useAlternativePayment: boolean;

    @Column({ name: 'payment_active' })
    paymentActive: boolean;
    
    @Column({ nullable: true, name: 'total_coin' })
    totalCoin: number;

    @Column({ nullable: true, name: 'award_standard' })
    awardStandard: number;

    @Column({ nullable: true, name: 'penalty_standard' })
    penaltyStandard: number;

    @Column({ nullable: true, name: 'award_money' })
    awardMoney: number;

    @Column({ nullable: true, name: 'penalty_money' })
    penaltyMoney: number;

    @Column({ nullable: true, name: 'award_payment_combo' })
    awardPaymentCombo: number;

    @Column({ nullable: true, name: 'penalty_payment_combo' })
    penaltyPaymentCombo: number;

    @Column({ nullable: true, name: 'award_payment_combo_start' })
    awardPaymentComboStart: number;

    @Column({ nullable: true, name: 'penalty_payment_combo_start' })
    penaltyPaymentComboStart: number;

    @Column({ nullable: true, name: 'award_payment_combo_limit' })
    awardPaymentComboLimit: number;

    @Column({ nullable: true, name: 'penalty_payment_combo_limit' })
    penaltyPaymentComboLimit: number;

    @Column()
    active: boolean;

    @Column({ nullable: true, name: 'last_inactivate_date' })
    lastInactivateDate: Date;

    @Column({ nullable: true, type: 'varchar', length: 100, name: 'last_inactivate_reason' })
    lastInactivateReason: string;

    @CreateDateColumn({ name: 'create_date' })
    createDate: Date;
}
