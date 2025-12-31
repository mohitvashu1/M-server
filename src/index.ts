import { initServer } from "./app/index.js";

async function init() {
    const app = await initServer();

    app.listen(3000, ()=> console.log(`Server Started at PORT:8000`));
    
}

init()