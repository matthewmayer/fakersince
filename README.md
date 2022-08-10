Which version of faker introduced each method?

Step 1: `./1-getVersions.sh` uses the `npm view` command to write out a JSON list of versions to versions.json

Step 2: `node ./2-parse.js` loops through each element of version.json, and if it's not a beta version, runs `npm install @faker-js/faker@VERSION`, followed by calling `methods.js`. `methods.js` writes a text file into methods/method-X.Y.Z with a plain text list of all methods of the form (faker.foo.bar). Note v6.1.0 fails.

Step 3: `node ./3-since.js` loops backwards through the text files and for each method in the latest version, finds the oldest text file which contains this method.

Finally this prints output like:
```

```