import express from "express"
import cors from "cors"
import router from "./routes/index"
import errorHandler from "./middleware/errorHandler"


const app = express()
const PORT = 8000;

app.use(express.json())
app.use(cors())
app.use('/api', router)

app.use(errorHandler)


app.listen(PORT, () => {
    console.log(`Server Started on Port ${PORT}`)
})
