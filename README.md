# Node.js Port Already in Use Error

This repository demonstrates a common error encountered when starting a Node.js HTTP server: the error that the port is already in use.  The `server.js` file contains the problematic code, while `serverSolution.js` provides a solution.

## Problem

Attempting to start a server on a port that's already occupied by another process will result in an error. This often happens if you're running multiple Node.js servers concurrently or if another application is using the same port.

## Solution

The solution involves checking if the port is available before attempting to start the server.  We can achieve this by using a `try...catch` block and checking the specific error message.