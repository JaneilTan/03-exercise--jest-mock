# 03 Exercise - Jest Mock

## Brief

Practice writing unit tests mocking modules.

## Helpful Resources

- [Jest - Expect](https://jestjs.io/docs/expect)
- [Jest - Mock Functions](https://jestjs.io/docs/mock-function-api#mockfnmockimplementationfn)
- [Jest - Mocking Modules](https://jestjs.io/docs/mock-functions#mocking-modules)

## Instructions

### Write Tests

A function dependant on a third-party module has been written in the `dojo/kata.js`. It has been commented to document its functionality. Your task is to write unit tests for the function.

Write the tests in `dojo/kata.test.js`. You should not need to modify the code in `dojo/kata.js`.

The test command will also display the test coverage, as well as generate a coverage report page. There is also an Express static server provided to serve the coverage docs.

Run the following to get the coverage report server going:

```shell
npm test  # run an initial test to generate a coverage report
npm start # serve the coverage report
```

Then open http://localhost:4000/coverage in your browser. You will need to refresh this page after you re-run the tests.

You may also want to run Jest in "watch" mode, which will rerun the tests automatically when you change/save the test file. You will need to run this command in a different terminal than the express server:

```shell
npm run test:watch
```

**Acceptance criteria:**

- [ ] All happy path scenarios are covered with unit tests.
- [ ] Negative scenarios are covered with unit tests.
- [ ] All tests are well named by explaining what they are testing.
- [ ] All tests pass.

---

### Submit your Exercise

**Acceptance criteria:**

- [ ] Commits are pushed to GitHub.
- [ ] Exercise has been submitted in Google Classroom.
