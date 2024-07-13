import { Request, Response } from "express";
import userService from "../service/userService";
import type {IUser} from "../types/user"
import ApiError from "../errors";

class UserController {
     async search(req: Request, res: Response) {
         try {
             const { email, number }: IUser = req.body;
             const data = await userService.search({email, number});
             res.status(200).json(data);
         } catch (e) {
             ApiError.internal('Ошибка при запросе')
         }
     }
}

export default new UserController();
