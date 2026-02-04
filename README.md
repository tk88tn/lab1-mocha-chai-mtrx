# TDD Matrix Library

This project demonstrates the use of Test-Driven Development (TDD)
for building a simple matrix operations library.

## User Requirements (Formalized as Tests)

The following user requirements were first expressed as unit tests
using Mocha and Chai:

- Add two matrices of the same size
- Subtract one matrix from another
- Multiply two matrices
- Transpose a matrix

## TDD Workflow

1. User requirements were written as unit tests (`test/mtrx.test.js`)
2. Tests initially failed
3. Matrix operations were implemented in `src/matrix.js`
4. The implementation was refined until all tests passed

## Technologies Used

- Node.js
- Mocha
- Chai

## Running Tests

```bash
npm install
npm test
