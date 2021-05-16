import { createConnection } from 'typeorm';
import ormConfig from './ormConfig'
import AccountRepository from './repository/AccountRepository';
import AlternativePaymentRepository from './repository/AlternativePaymentRepository';
import GroupRepository from './repository/GroupRepository';

createConnection(ormConfig)
    .then(async connection => {
        // const accountRepository = connection.getCustomRepository(AccountRepository);
        // await accountRepository.Create();
        // const accounts = await accountRepository.GetList();
        // console.log(accounts);

        const groupRepository = connection.getCustomRepository(GroupRepository);
        await groupRepository.Create();
        const groups = await groupRepository.GetList();
        console.log(groups);

        const alternativePaymentRepository = connection.getCustomRepository(AlternativePaymentRepository);
        alternativePaymentRepository.Create(groups[0].id);
        const alternativePayments = await alternativePaymentRepository.GetList();
        console.log(alternativePayments);
    })
    .catch(err => console.log(err));
