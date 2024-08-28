import { Router } from 'express';
import MeasuresController from './src/controllers/MeasuresController';

const routes = Router();

/* Measures */

routes.post("/upload", MeasuresController.upload);
routes.get("/:customer_id/list", MeasuresController.list);
routes.patch("/confirm", MeasuresController.confirm);

export default routes;