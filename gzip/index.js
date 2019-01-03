const express = require("express")

// Create express instnace
const app = express()

// Export the server middleware
module.exports = {
  path: "/",
  handler: app
}
