import axios from 'axios'; 
import { Request, Response, NextFunction } from 'express';


const middleware = async (req: Request, res: Response, next: NextFunction) => {
    
    const { method, url, data } = req.body;
    try {
        const response = await axios({ method, url, data });
        res.status(response.status).send(response.data);
    } catch (error: unknown) {
        if (axios.isAxiosError(error) && error.response) {
            res.status(error.response.status).send(error.response.data);
        } else {
            res.status(500).send("An unexpected error occurred.");
        }
    }
}

export default middleware;