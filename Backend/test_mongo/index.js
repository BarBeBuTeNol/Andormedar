import express from 'express';
import cors from 'cors';
import IndexConfig from './src/index.config.js'
import IndexRouter from './src/index.route.js'
import IndexMiddleware from './src/index.middleware.js';
const app = express();
app.use(IndexConfig)
app.use(IndexMiddleware)

app.use('/api', IndexRouter)

app.get('/',(req,res)=>{
    res.status(200).json({
        success: true,
        date: {
            timestamp: new Date()
        }
    })
})

const PORT = 3000
    app.listen(PORT, () => {
    console.log(`Server is running on port [${PORT}]`);
}); 
