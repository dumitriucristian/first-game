import {describe, expect, test} from '@jest/globals';
import {LearnToCount} from '../LearnToCount';

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(new LearnToCount).toBe(3);
  });
});