import {} from "dotenv/config";
import express from "express";
import proprietarioRouter from "./routers/proprietario.router.js";
import animalRouter from "./routers/animal.router.js";

const app = express();

app.use(express.json());

app.use("/proprietarios", proprietarioRouter);
app.use("/animais", animalRouter);

app.use((err, req, res, next) => {
    console.log(err);

    if (!res.statuCode) {
        res.status(500);
    }

    res.send({ error: err.message });
})

app.listen(3000, () => {
    console.log("API started");
});