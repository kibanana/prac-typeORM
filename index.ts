import * as bcryptjs from 'bcryptjs';
import { createConnection } from 'typeorm';
import Account from './entity/Account';
import ormConfig from './ormConfig'

createConnection(ormConfig)
    .then(async connection => {
        const account = new Account();
        
        account.email = 'kyw017763@naver.com';
        account.password = bcryptjs.hashSync('123123');
        account.username = '김예원';
        account.type = 'local';
        account.notificationOpen = true;
        account.notificationOpenDate = new Date();
        account.emailOpen = true;
        account.emailOpenDate = new Date();
        account.lastUpdateIp = '';
        account.createIp = '';
        account.active = true;

        await connection.manager.save(account);
    })
    .catch(err => console.log(err));