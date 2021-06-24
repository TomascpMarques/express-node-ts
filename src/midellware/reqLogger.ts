import express from 'express'

const requestLogger = (
   req: express.Request,
   _res: express.Response,
   next: any
) => {
   console.log(`${req.method} @ ${req.path} by ${req.ip}`)
   next()
}

export default requestLogger
