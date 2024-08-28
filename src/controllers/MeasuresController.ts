import {Request, Response} from 'express';

class MeasuresController {
    async upload(req: Request, res: Response){
        return res.json({method: 'UPLOAD'});
    }

    async list(req: Request, res: Response) {
        return res.json({method: 'LIST'});
    }

    async confirm(req: Request, res: Response) {
        return res.json({method: 'CONFIRM'});
    }
}

export default new MeasuresController();