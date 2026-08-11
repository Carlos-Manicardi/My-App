import express from "express";

const app = express();

app.get("/curso-docker", (req, res) => {
    res.json({message: "Fullstack Academy - Docker do zero"});

});

app.listen(3000, () => {
    console.log("Servidor executando a porta 3000");
});
