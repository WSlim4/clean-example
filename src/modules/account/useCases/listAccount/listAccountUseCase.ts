import { IAccountRepository } from "../../repositories/IAccountRepository";
import { Account } from "../../model/Account";

class ListAccountUseCase {
    constructor(private accountRepository: IAccountRepository) { };

    execute(): Account[] {
        return this.accountRepository.list();
    }
}

export { ListAccountUseCase };