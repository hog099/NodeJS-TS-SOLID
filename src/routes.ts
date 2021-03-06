import { Router } from 'express'
import { createUserController } from './useCases/CreateUser'

const router = Router()

router.get('/', (req, res)=>{
    return res.status(200).json({ok:true});
    // return res.status(201).send();

})

router.post('/users', (req, res)=>{

    return createUserController.handle(req, res)
})

export { router }