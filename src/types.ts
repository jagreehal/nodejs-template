export type Success<T> = {
  success: true;
  data: T;
};

type ErrorDetails = {
  code: string;
  message: string;
  details?: Record<string, unknown>;
};

export type Failure = {
  success: false;
  error: ErrorDetails;
};

export type Result<T> = Success<T> | Failure;
