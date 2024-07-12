import { Request, Response } from "express";
import { CreateAccountUseCase } from "./createAccountUseCase";

class CreateAccountController {
    constructor(private createAccountUseCase: CreateAccountUseCase) { }

    handle(request: Request, response: Response) {
        try {
            const { user_id, amount } = request.body;

            this.createAccountUseCase.execute({ user_id, amount });

            return response.status(201).send({ message: "Success!" });
        } catch (error) {
            let errorMessage = "Não foi possível criar a conta!";

            if(error instanceof Error) {
                errorMessage = error.message;
            }

            return response.status(400).send({ message: errorMessage });
        }
    }
}

export { CreateAccountController }