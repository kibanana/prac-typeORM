import { EntityRepository, Repository } from 'typeorm';
import Penalty from '../entity/Penalty';

@EntityRepository(Penalty)
export default class PenaltyRepository extends Repository<Penalty> {
    Create(groupId: string) {
        const penalty = new Penalty();

        penalty.groupId = groupId;
        penalty.type = 'General';
        penalty.title = '밥 해주기';
        penalty.description = '.';
        
        return this.createQueryBuilder('penalty')
            .insert()
            .into(Penalty)
            .values(penalty)
            .execute();
    }

    GetList() {
        return this.createQueryBuilder('penalty')
            .getMany();
    }
}
