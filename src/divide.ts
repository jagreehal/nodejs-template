import type { Result } from "@/types";

type DivideParams = {
  dividend: number;
  divisor: number;
};

type DivideResult = Result<number>;

export function divide({ dividend, divisor }: DivideParams): DivideResult {
  if (divisor === 0) {
    return {
      success: false,
      error: {
        code: 'DIVISION_BY_ZERO',
        message: 'Cannot divide by zero',
        details: {
          dividend,
          divisor
        }
      }
    };
  }

  return {
    success: true,
    data: dividend / divisor
  };
}