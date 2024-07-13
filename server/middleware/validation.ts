import { Response, Request, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

const validateSearch = [
    body('email').notEmpty().withMessage('Поле email обязательно').isEmail().withMessage('Неправильный формат поля email'),
    body('number').optional(),

    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

export default validateSearch;
