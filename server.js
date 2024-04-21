import express from 'express'
const app=express();
app.use(express.static('dist'));


app.get('/',(req,res)=>{
    res.send('Server is ready')
})




//get a list of five jokes
app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:'Joke A',
            content:'This is joke A'
        },
        {
            id:1,
            title:'Joke B',
            content:'This is joke B'
        },
        {
            id:1,
            title:'Joke C',
            content:'This is joke C'
        }
    ]
    res.send(jokes)

})

const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})