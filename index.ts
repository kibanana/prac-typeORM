import { createConnection } from 'typeorm';
import Account from './entity/Account';

createConnection()
    .then(async connection => {
        const account = new Account();
        account.username = "TypeScript";
        await connection.manager.save(account);
    })
    .catch(err => console.log(err));