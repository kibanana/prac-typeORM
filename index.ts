import { createConnection } from 'typeorm';
import ormConfig from './ormConfig'
import AccountRepository from './repository/AccountRepository';

createConnection(ormConfig)
    .then(async connection => {
        const accountRepository = connection.getCustomRepository(AccountRepository);
        await accountRepository.Create();
        const accounts = await accountRepository.GetList();
        console.log(accounts);
    })
    .catch(err => console.log(err));