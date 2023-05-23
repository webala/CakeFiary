import {Router} from 'express'
import flavourModel from '../models/flavour.mjs'

const flavourRouter = Router()

flavourRouter.get('/', async (req, res) => {
   try {
      const flavours = await flavourModel.find()
      res.status(200).json(flavours)
   } catch(error) {
      res.status(500).json({message: 'Unable fo find flavours'})
   }
})

flavourRouter.post('/', async (req, res) => {
   const {name} = req.body

   try {
      const newFlavour = await flavourModel.create({
         name
      })
      const savedFlavour = await newFlavour.save()
      res.status(201).json(savedFlavour)
   } catch (error) {
      res.status(500).send('Unable to save flavour')
   }
})

export default flavourRouter