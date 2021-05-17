import { EntityRepository, Repository } from 'typeorm';
import GroupMember from '../entity/GroupMember';

@EntityRepository(GroupMember)
export default class GroupMemberRepository extends Repository<GroupMember> {
    Create(groupId: string) {
        const groupMember = new GroupMember();
        groupMember.groupId = groupId;
        groupMember.nickname = 'Member 1';
        groupMember.isManager = true;
        
        return this.createQueryBuilder('account')
            .insert()
            .into(GroupMember)
            .values(groupMember)
            .execute();
    }

    GetList() {
        return this.createQueryBuilder('account')
            .getMany();
    }
}
