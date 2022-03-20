import { authConfig } from "@shared/config/auth";
import { AppError } from "@shared/errors/AppError";

import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { isAfter } from "date-fns";

interface IPayload {
  sub: string;
  iat: number;
  exp: number;
}

function isExpired(timestamp: number): boolean {
  const date = new Date(timestamp * 1000);
  if (isAfter(new Date(), date)) return true;

  return false;
}

export async function ensureAuthenticate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing", 401);
  }

  const [_, token] = authHeader.split(" ");

  try {
    const { sub: userId, exp } = verify(token, authConfig.secretToken, {
      ignoreExpiration: true,
    }) as IPayload;

    if (isExpired(exp)) {
      throw new AppError("Token expired", 401);
    }

    req.user = {
      id: userId,
    };

    next();
  } catch (error) {
    const err = error as Error;
    throw new AppError(err.message, 401);
  }
}
