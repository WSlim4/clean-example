import { Request, Response } from "express-serve-static-core";
import { ListAccountUseCase } from "./listAccountUseCase";

class ListAccountController {
    constructor(private listAccountUseCase: ListAccountUseCase) { };

    handle(request: Request, response: Response) {
        try {
            const accounts = this.listAccountUseCase.execute();

            return response.status(200).send({ data: accounts })
        } catch (error) {
            let errorMessage = "Não foi possível buscar as contas!";

            if(error instanceof Error) {
                errorMessage = error.message;
            }

            return response.status(201).send({ message: errorMessage })
        }
    }
}

export { ListAccountController }

