import * as functions from 'firebase-functions'

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
export const helloWorld2 = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!\n\n")
})
