import { EntityRepository, Repository } from 'typeorm';
import AlternativePayment from '../entity/AlternativePayment';

@EntityRepository(AlternativePayment)
export default class AlternativePaymentRepository extends Repository<AlternativePayment> {
    Create(groupId: string) {
        const alternativePayment = new AlternativePayment();
        alternativePayment.groupId = groupId;
        alternativePayment.type = 'General';
        alternativePayment.name = '진라면 컵라면 순한맛';
        alternativePayment.reason = '라면은 맛있다.';
        
        return this.createQueryBuilder('account')
            .insert()
            .into(AlternativePayment)
            .values(alternativePayment)
            .execute();
    }

    GetList() {
        return this.createQueryBuilder('account')
            .getMany();
    }
}
