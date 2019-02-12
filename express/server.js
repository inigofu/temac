const { Nuxt, Builder } = require("nuxt-edge")
const fs = require("fs")
const path = require("path")
const http2 = require("http2")

const app = require("express")()
const isProd = process.env.NODE_ENV === "production"
const port = process.env.PORT || 3001

// We instantiate nuxt.js with the options
const config = require("../nuxt.config.js")
config.dev = !isProd
const nuxt = new Nuxt(config)
app.get("*.js", (req, res, next) => {
  // only if file exists, the substr is to remove /assets in front
  console.log(
    `${req.url}`,
    fs.existsSync(
      path.resolve(
        path.join(process.cwd(), `/.nuxt/dist/${req.url.substr(7)}.gz`)
      )
    )
  )
  if (
    !fs.existsSync(
      path.resolve(
        path.join(process.cwd(), `/.nuxt/dist/${req.url.substr(7)}.gz`)
      )
    )
  ) {
    return next()
  }

  console.log(`${req.url} -> ${req.url}.gz`)

  req.url = `${req.url}.gz`
  res.set("Content-Encoding", "gzip")
  res.set("Content-Type", "text/javascript")
  next()
})
// Render every route with Nuxt.js
app.use(nuxt.render)

// Build only in dev mode with hot-reloading
if (config.dev) {
  new Builder(nuxt)
    .build()
    .then(listen)
    .catch(error => {
      console.error(error)
      process.exit(1)
    })
} else {
  listen()
}

function listen() {
  // Listen the server
  app.listen(port, "0.0.0.0")
  console.log("Server listening on `localhost:" + port + "`.")
}
