# Welcome to the Maven Full-Stack Engineer Take-Home Project!

The goal of this project is to build an auto-suggest REST api for a music 
application. There is a data file (./service/data.json) that contains 
10,000 album entries from discogs.com.

There are four endpoints in the service:

1. `http://service/suggest/tracks?prefix=:prefix`
2. `http://service/suggest/artists?prefix=:prefix`
3. `http://service/suggest/releases?prefix=:prefix`
4. `http://service/suggest/all?prefix=:prefix`

To run the app, enter the following commands:

```
cd service
nvm use 14.17.0 
npm i
npm run start
```

Then, to run the benchmark test, enter the following commands:

```
npm run benchmark
```



Each suggestion collection should return no more than 5 entries.

The test code is a node.js project.

To test your service, ensure it is running and enter the following commands:

```
cd test
npm i
npm run test
```

Your project is to build a service in the './service' directory, initialize your application  such that the tests successfully connect to it and validate the output of the API.

Please include a basic README in the service file with instructions to run your service.

Please do not spend more than 4 hours on this project. It's okay to not finish the project in within 4 hours, in which case plan on coming to the presentation prepared to share what you would have done to complete the project.

You are welcome to open a PR with your Maven project partner to solicit feedback, or reach out via email with any questions.

It's okay to change the shape of the API if either a) you think the shape of the API would look better if it were different or b) if the shape of the API is problematic for your implementation. However, if you do change the shape of the data, please update the tests accordingly.

Similarly, while the data itself is deterministic, if your implementation prefers different results for the test cases, please update the tests to properly validate your implementation.

Please be prepared to discuss the run-time performance of your solution during the presentation.

The service directory is empty to give you as much freedom as possible in what you create. You are free to use any language, framework, or service you wish.

All the best.
