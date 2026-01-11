import { initServer } from "./app/index.js";

async function init() {
    const app = await initServer();

    app.listen(3001, ()=> console.log(`Server Started at PORT:3001`));
    
}

init()