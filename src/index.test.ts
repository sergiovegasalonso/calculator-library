import { expect, test } from 'vitest'
import { add, subtract, multiply } from './index'

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3)
})

test('subtract 1 - 2 to equal -1', () => {
  expect(subtract(1, 2)).toBe(-1)
})

test('multiply 2 * 5 to equal 10', () => {
  expect(multiply(2, 5)).toBe(10)
})
