import { Router } from "express";
import { createAccountController } from "../modules/account/useCases/createAccount";
import { listAccountController } from "../modules/account/useCases/listAccount";

const accountRoutes = Router();

accountRoutes.post("/", (req, res) => {
    return createAccountController.handle(req, res);
})

accountRoutes.get("/", (req, res) => {
    return listAccountController.handle(req, res);
})

export { accountRoutes };