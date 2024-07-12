import { ListAccountUseCase } from "./listAccountUseCase";
import { ListAccountController } from "./listAccountController";
import { AccountRepositories } from "../../repositories/implementations/AccountRepository";

const accountRepositories = AccountRepositories.getInstance();

const listAccountUseCase = new ListAccountUseCase(accountRepositories);

const listAccountController = new ListAccountController(listAccountUseCase);

export { listAccountController };