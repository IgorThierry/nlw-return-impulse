import { prisma } from "../../prisma";
import {
  FeedbackCreateData,
  IFeedbacksRepository,
} from "../IFeedbacksRepository";

export class PrismaFeedbacksRepository implements IFeedbacksRepository {
  async create({ type, comment, screenshot }: FeedbackCreateData) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });
  }
}
