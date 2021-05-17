import { EntityRepository, Repository } from 'typeorm';
import AlternativePaymentLog from '../entity/AlternativePaymentLog';

@EntityRepository(AlternativePaymentLog)
export default class AlternativePaymentLogRepository extends Repository<AlternativePaymentLog> {
    CreateAwardAlternativePaymentLog(groupMemberId: string, alternativePaymentId: string, targetId: string, awardPenaltyId: string) {
        const alternativePaymentLog = new AlternativePaymentLog();
        alternativePaymentLog.groupMemberId = groupMemberId;
        alternativePaymentLog.alternativePaymentId = alternativePaymentId;
        alternativePaymentLog.targetId = targetId;
        alternativePaymentLog.type = 'Award';
        alternativePaymentLog.awardPenaltyId = awardPenaltyId;
        
        return this.createQueryBuilder('alternative_payment_log')
            .insert()
            .into(AlternativePaymentLog)
            .values(alternativePaymentLog)
            .execute();
    }

    GetList() {
        return this.createQueryBuilder('alternative_payment_log')
            .getMany();
    }
}
