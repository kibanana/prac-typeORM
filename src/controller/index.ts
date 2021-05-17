import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import AccountRepository from '../repository/AccountRepository';
import AlternativePaymentRepository from '../repository/AlternativePaymentRepository';
import GroupRepository from '../repository/GroupRepository';

export const CreateAccount = async (req: Request, res: Response) => {
        const accountRepository = getManager().getCustomRepository(AccountRepository);
        await accountRepository.Create();
        res.send();

        // const accounts = await accountRepository.GetList();
        // console.log(accounts);

        // const groupRepository = connection.getCustomRepository(GroupRepository);
        // // await groupRepository.Create();
        // const groups = await groupRepository.GetList();
        // console.log(groups);

        // const alternativePaymentRepository = connection.getCustomRepository(AlternativePaymentRepository);
        // // alternativePaymentRepository.Create(groups[0].id);
        // const alternativePayments = await alternativePaymentRepository.GetList();
        // console.log(alternativePayments);
}
