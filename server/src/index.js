import app from "../App.js";
const PORT = process.env.PORT
app.listen(PORT ,()=>{
    console.log(`Server running at http://localhost:${PORT}`);    
})