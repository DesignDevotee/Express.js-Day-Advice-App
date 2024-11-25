import express from "express";

const app = express();
const port = 3000;


app.get("/", (req, res) => {
    const today = new Date();
    const day = today.getDay(); // 0 - 6

    let adv = "Time to Work Hard!!";
    let type = "a weekday";

    if (day === 0 || day === 6) { // Check if it's Sunday (0) or Saturday (6)
        adv = "Time to rest";
        type = "a weekend";
    }

    res.render("index.ejs", { // No need to include .ejs
        dayType: type,
        advice: adv,
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
