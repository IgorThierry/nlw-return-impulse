export interface FeedbackCreateData{
  type: string;
  comment: string;
  screenshot?: string;
}

export interface IFeedbacksRepository {
  create: (data: FeedbackCreateData) => Promise<void>;
}
