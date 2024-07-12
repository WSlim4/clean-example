import { CreateAccountUseCase } from "./createAccountUseCase";
import { CreateAccountController } from "./createAccountController";
import { AccountRepositories } from "../../repositories/implementations/AccountRepository";

const accountRepositories = AccountRepositories.getInstance();

const createAccountUseCase = new CreateAccountUseCase(accountRepositories);

const createAccountController = new CreateAccountController(createAccountUseCase);

export { createAccountController };