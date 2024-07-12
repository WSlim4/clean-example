import { IAccountRepository } from "../../repositories/IAccountRepository";

interface IRequest {
    user_id: Number;
    amount: Number
}

class CreateAccountUseCase {
    constructor(private accountRepositories: IAccountRepository) { };

    execute({ user_id, amount }: IRequest): void {
        let alreadyExistsAccount = this.accountRepositories.findByUserId(user_id);

        if(alreadyExistsAccount) {
            throw new Error("Este usuário já possui uma conta!");
        }

        this.accountRepositories.create({ user_id, amount });
    }
}

export { CreateAccountUseCase };