import * as bcryptjs from 'bcryptjs';
import { EntityRepository, Repository } from 'typeorm';
import Account from '../entity/Account';

@EntityRepository(Account)
export default class AccountRepository extends Repository<Account> {
    Create() {
        const account = new Account();
        
        account.email = 'kyw017763@naver.com';
        account.password = bcryptjs.hashSync('123123');
        account.name = '김예원';
        account.nickname = 'Yewon Kim';
        account.type = 'local';
        account.notificationOpen = true;
        account.notificationOpenDate = new Date();
        account.emailOpen = true;
        account.emailOpenDate = new Date();
        account.lastUpdateIp = '';
        account.createIp = '';

        return this.createQueryBuilder('account')
            .insert()
            .into(Account)
            .values(account)
            .execute();
    }

    GetList() {
        return this.createQueryBuilder('account')
            .getMany();
    }
}
