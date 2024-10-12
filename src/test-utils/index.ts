import type { Failure, Result, Success } from '@/types';

function isSuccessResult(result: Result<unknown>): result is Success<unknown> {
  return result.success;
}

export function expectSuccessResult<T>(
  result: Result<T>
): asserts result is Success<T> {
  if (!isSuccessResult(result)) {
    throw new Error('Expected success');
  }
  return;
}

export function expectFailureResult<T>(
  result: Result<T>
): asserts result is Failure {
  if (isSuccessResult(result)) {
    throw new Error('Expected error');
  }
  return;
}
