const app = require('./app.js')

require('dotenv').config()

const PORT = process.env.PORT || 3434

app.listen(PORT, () => {
    console.log(`Listening to port: ${PORT}`)
})