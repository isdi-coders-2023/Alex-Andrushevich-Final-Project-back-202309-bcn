import { Router } from "express";
import BurgerMongooseRepository from "../repository/BurgerMongooseRepository/BurgerMongooseRepository.js";
import BurgerController from "../controller/BurgerController.js";

export const burgerRouter = Router();

const burgerRepository = new BurgerMongooseRepository();
const burgerController = new BurgerController(burgerRepository);

burgerRouter.get("/", burgerController.getBurgers);
burgerRouter.get("/:id", burgerController.getBurgerById);
burgerRouter.delete("/:id", burgerController.deleteBurger);
burgerRouter.put("/", burgerController.editBurger);
burgerRouter.post("/", burgerController.addBurger);
