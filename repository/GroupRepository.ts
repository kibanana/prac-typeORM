import { EntityRepository, Repository } from 'typeorm';
import Group from '../entity/Group';

@EntityRepository(Group)
export default class GroupRepository extends Repository<Group> {
    Create() {
        const group = new Group();
        group.type = 'Domitory';
        group.name = '2021년 상반기 기숙사 202호';
        group.isFluid = true;
        group.managerPermissionActive = true;
        group.skipLimit = 2;
        group.useAlternativePayment = true;
        group.paymentActive = true;
        group.totalCoin = 0;
        group.awardStandard = 10000;
        group.penaltyStandard = 1000;
        
        return this.createQueryBuilder('account')
            .insert()
            .into(Group)
            .values(group)
            .execute();
    }

    GetList() {
        return this.createQueryBuilder('account')
            .getMany();
    }
}
