import { NextFunction, Request, Response } from 'express';
import { readFileSync } from 'fs';

export const checkSession = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const _sessionJson = readFileSync(`${__dirname}/session.json`, {
    encoding: 'utf-8',
  });
  const { session } = req.params;
  if (!session || !_sessionJson) {
    return res.status(401).send({
      message: 'Não autorizado',
      response: false,
    });
  }
  try {
    const sessionJson: Record<string, boolean> = JSON.parse(_sessionJson);
    const sessionStatus = sessionJson[session];
    if (!sessionStatus) {
      return res.status(401).send({
        message: 'Não autorizado',
        response: false,
      });
    }
    next();
  } catch (err) {
    console.error(err);
    return res.status(500).send({
      message: 'Erro interno no servidor',
      response: false,
    });
  }
};
