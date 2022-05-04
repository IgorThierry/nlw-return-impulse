import express from "express";
import { NodemailerMailAdapter } from "./adapters/nodemailer/NodemailerMailAdapter";

import { PrismaFeedbacksRepository } from "./repositories/prisma/PrismaFeedbacksRepository";
import { SubmitFeedbackUseCase } from "./useCases/submitFeedbackUseCase";

export const routes = express.Router();

routes.post("/feedback", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
  const nodemailerMailAdapter = new NodemailerMailAdapter();

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository,
    nodemailerMailAdapter
  );

  await submitFeedbackUseCase.execute({ type, comment, screenshot });

  return res.status(201).send();
});
