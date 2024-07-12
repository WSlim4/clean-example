import { Account } from "../model/Account";

interface ICreateAccountDTO {
    user_id: Number;
    amount: Number;
}

interface IAccountRepository {
    create({ user_id, amount }: ICreateAccountDTO): void;
    findByUserId(userId: Number): Account;
    list(): Account[];
}

export { ICreateAccountDTO, IAccountRepository }