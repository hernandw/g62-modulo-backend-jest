import express from 'express';
import { controller } from '../controllers/controller.js';
const router = express.Router()

router.get('/', controller.home)

router.get('*', controller.notFound)


export default router