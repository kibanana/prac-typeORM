import { EntityRepository, Repository } from 'typeorm';
import Award from '../entity/Award';

@EntityRepository(Award)
export default class AwardRepository extends Repository<Award> {
    Create(groupId: string) {
        const award = new Award();

        award.groupId = groupId;
        award.type = 'General';
        award.title = '밥 해주기';
        award.description = '.';
        
        return this.createQueryBuilder('award')
            .insert()
            .into(Award)
            .values(award)
            .execute();
    }

    GetList() {
        return this.createQueryBuilder('award')
            .getMany();
    }
}
