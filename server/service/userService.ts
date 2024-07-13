import data from "../data/users.json"
import {IUser} from "../types/user";
import ApiError from "../errors/index"

class UserService {
    async search(body :IUser) {
        await new Promise((resolve) => setTimeout(resolve, 5000));
        const results: IUser[] = data.reduce((acc: IUser[], item) => {
            if (item.email === body.email && (!body.number || item.number === body.number)) {
                acc.push(item);
            }
            return acc;
        }, []);
        if (!results.length) {
            return ApiError.notFound('Пользователь не найден')
        }
        return results
    }

}


export default new UserService();
