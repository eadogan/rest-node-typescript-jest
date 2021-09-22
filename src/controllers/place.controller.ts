import { Request, Response } from 'express';

export const getPlace =  (req: Request, res: Response) => {
    return res.status(200).json({
        message: 'Get Place'
    })
}

export const createPlace =  (req: Request, res: Response) => {
    return res.status(201).json({
        message: "Create Place"
    })
}