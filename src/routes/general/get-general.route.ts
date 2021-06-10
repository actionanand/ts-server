import { Request, Response } from 'express';
import moment from 'moment';


export function getGeneralRoutev1(req: Request, res: Response) {
    const name = req.params.name.slice(0, 15),
    date = new Date(),
    formattedDate = moment(date).format('MMMM Do, YYYY');

    res.status(200).json({
        name,
        'message': 'Hello World!',
        'api': 'Currently API v1 is only supported, API v2 will be released soon.',
        'usage': 'To mock api for frontend like Angular',
        'time' : formattedDate
    });
}
