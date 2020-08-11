Taken from [Emily Bache's Tennis Kata](https://github.com/emilybache/Tennis-Refactoring-Kata)

# Tennis in JavaScript
Imagine you work for a consultancy company, and one of your colleagues has been doing some work for the Tennis Society. The contract is for 10 hours billable work, and your colleague has spent 8.5 hours working on it. Unfortunately he has now fallen ill. He says he has completed the work, and the tests all pass. Your boss has asked you to take over from him. She wants you to spend an hour or so on the code so she can bill the client for the full 10 hours. She instructs you to tidy up the code a little and perhaps make some notes so you can give your colleague some feedback on his chosen design. You should also prepare to talk to your boss about the value of this refactoring work, over and above the extra billable hours.

There are three versions of this refactoring kata, each with their own design smells and challenges. I suggest you start with the first one, with the class "TennisGame1". The test suite provided is fairly comprehensive, and fast to run. You should not need to change the tests, only run them often as you refactor.


# Testing
Tests are available to be run both with node.js and in the browser.
For node, simply call
  node TennisTest.js
(Only failures will be shown on the console)

For the browser, open TennisTest.html and refresh after change.

# My take
I started with rewriting TennisGame1 and was happy with it. I skimmed over scripts 2 and 3 and took what I liked from them + refactored into 1, which made more sense to me.

I tried to timebox the code to about 1h 30min. Given more time I would: 
  - I should have probably added unit tests for my new functions and some expected failures
  - more defensive coding. 
