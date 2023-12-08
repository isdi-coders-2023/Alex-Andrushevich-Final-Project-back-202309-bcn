import { type BurgerRepository } from "../repository/BurgerMongooseRepository/types.js";
import { type NextFunction, type Request, type Response } from "express";
import { type BurgerStructure, type TypedRequestBody } from "../types.js";

class BurgerController {
  constructor(private readonly repository: BurgerRepository) {}
  getBurgers = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const burgers = await this.repository.getBurgers();

      res.status(200).json({ burgers });
    } catch (customError) {
      next(customError);
    }
  };

  deleteBurger = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {
        params: { id },
      } = req;
      const burger = await this.repository.deleteBurger(id);
      res.status(200).json({ burger });
    } catch (customError) {
      next(customError);
    }
  };

  addBurger = async (
    req: TypedRequestBody<BurgerStructure>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { body: burgerToBeAdded } = req;
      const addedBurger = await this.repository.addBurger(burgerToBeAdded);
      res.status(200).json({ burger: addedBurger });
    } catch (customError) {
      next(customError);
    }
  };
}

export default BurgerController;
