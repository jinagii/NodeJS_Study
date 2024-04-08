var express = require('express')
var app = express()

app.get('/', function (req, res)
{
    res.send('Hello World 그래서 이게 뭔ㄴㅇㅁㄹㄴ데')
})

app.get('/game', function (req, res) {
    res.send('Hello game')
})

app.get('/movie', function (req, res) {
    res.send('Hello movie')
})

app.get('/music', function (req, res)
{
    var q = req.params
    console.log(q)

    res.send('Hello music')
})

//app.get('/user/:id', function (req, res) {
//    var q = req.params
//    console.log(q.id)

//    res.json({'Hello': q.id})
//})

app.get('/user/:id', function (req, res) {
    var q = req.query
    console.log(q.q)
    console.log(q.name)
    console.log(q.age)

    res.json({ 'Hello': q.id })
})

app.listen(3000)

