import { Account } from "../../model/Account";
import { IAccountRepository, ICreateAccountDTO } from "../IAccountRepository";

class AccountRepositories implements IAccountRepository {
    private accounts: Account[];

    private constructor() {
        this.accounts = [];
    }

    private static INSTANCE: AccountRepositories;

    public static getInstance(): AccountRepositories {
        if(!AccountRepositories.INSTANCE) {
            AccountRepositories.INSTANCE = new AccountRepositories;
        }

        return AccountRepositories.INSTANCE
    }

    create({ user_id, amount }:  ICreateAccountDTO): void {
        const account = new Account;

        Object.assign(account, {
            user_id,
            amount
        })

        this.accounts.push(account)
    }

    findByUserId(userId: Number): Account {
        const account = this.accounts.find(account => account.user_id == userId) as Account;

        return account;
    }

    list(): Account[] {
        return this.accounts;
    }
}

export { AccountRepositories }
