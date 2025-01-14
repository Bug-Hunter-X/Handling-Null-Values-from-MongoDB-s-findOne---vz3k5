# Handling Null Values in MongoDB findOne()

This repository demonstrates a common error when using MongoDB's `findOne()` method:  not properly handling the case where no document matches the query. The `findOne()` method returns `null` if no matching document is found.  Failure to account for this can lead to errors when accessing properties of the returned object.

## The Problem
The provided `bug.js` file showcases the problematic scenario.  If no user named 'John Doe' exists, attempting to access properties of `result` will result in an error.

## The Solution
The `bugSolution.js` file corrects this by explicitly checking if `result` is null before accessing its properties, providing a more robust and error-free solution.