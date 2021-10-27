# JavaScript Koans

## Introduction
The Koans are a series of assertions you must solve to understand how a programming language works. These assertions are the first step to become a better developer. The Koans become increasingly more difficult as you continue, so don't feel discouraged as you move forward through them.

There are Koans for all the programming languages. We will be working with JavaScript Koans. The mechanism is the following:

- You get an assertion that is not passing a **test**.
- You need to change/add code to make the **test** pass.

## Requirements

- Fork this repo
- Clone this repo

## Submission

- Upon completion, run the following commands:

  ```
  git add .
  git commit -m "done"
  git push origin master
  ```

- Create Pull Request so your TAs can check up your work.


We need to execute our tests so open the file `SpecRunner.html` with your browser.

In the beginning, you will see all the tests in yellow because the tests we have to implement are commented. (except for one, that throws an error, no worries :wink:)

All the tests are located inside the `spec` folder. Open the `koans.js` file and uncomment the following line:

```javascript
it('`var` works as usual, it does not restricts scope', () => {
  if (true) {
    /*You should add your code in here*/
  }
  expect(varX).toBe(true);
});
```


**The primary goal is not to finish all the tests. We want you to understand why each test is failing and how does JavaScript ES6 work in specific scopes.**

To do that, the correct workflow is the one used on Test Driven Development([TDD](https://en.wikipedia.org/wiki/Test-driven_development)):

- Uncomment the test
- Refresh the page to see that the uncommented test is failing
- Change the code to pass the test
- Refresh the page to see that the test is passing

