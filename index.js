const express = require('express')

const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false}))
app.use(express.static('public'))

app.get('/',(req,res) => {
    //res.send('This home page')
    //res.sendFile(__dirname + '/index.html')
    res.render('index')
})

app.get('/about',(req,res) => {
    //res.send('Про нас')
    res.render('about')
    
})

//app.get('/user/:username/:id',(req,res) => {
/*app.get('/user/:username',(req,res) => { 
    let data = { username: req.params.username, hobbies: [ 'Football', 'Skate', 'Basketball'] }
    //res.send('User ID: '+ req.params.id + '. Username: ' + req.params.username)
    //res.render('user', { username: req.params.username, hobbies: [ 'Football', 'Skate', 'Basketball'] })
    res.render('user', data)
})
*/
/*
app.get('/user/:username',(req,res) => { 
    let data = { username: req.params.username, hobbies_aizik: [ 'Gaming', 'Watching films', 'Travelling'] }
    //res.send('User ID: '+ req.params.id + '. Username: ' + req.params.username)
    //res.render('user', { username: req.params.username, hobbies: [ 'Football', 'Skate', 'Basketball'] })
    res.render('user', data)
})*/

/*
app.get('/user/:username',(req,res) => { 
    let data = { username: req.params.username, hobbies_jenek: [ 'Gaming', 'Parkour', 'Sport'] }
    //res.send('User ID: '+ req.params.id + '. Username: ' + req.params.username)
    //res.render('user', { username: req.params.username, hobbies: [ 'Football', 'Skate', 'Basketball'] })
    res.render('user', data)
})*/
/*
app.get('/user/:username',(req,res) => { 
    let data = { username: req.params.username, hobbies: [ 'ЗАВОД ЗАВОД ЗАВОД', 'Велики', 'Фигурки Hot Toys'] }
    //res.send('User ID: '+ req.params.id + '. Username: ' + req.params.username)
    //res.render('user', { username: req.params.username, hobbies: [ 'Football', 'Skate', 'Basketball'] })
    res.render('user', data)
})*/

app.get('/user/:username',(req,res) => { 
    let data = { username: req.params.username, hobbies: [ 'Турники', 'Велик', 'Думать'] }
    //res.send('User ID: '+ req.params.id + '. Username: ' + req.params.username)
    //res.render('user', { username: req.params.username, hobbies: [ 'Football', 'Skate', 'Basketball'] })
    res.render('user', data)
})

app.post('/check-user', (req,res) => {
    let username = req.body.username
    if (username == "")
        return res.redirect('/')
    else
        return res.redirect('/user/'+ username)
    //console.log(req.body)
})

const PORT = 3000

app.listen(PORT, () => {
    console.log('Server started: http://localhost:'+PORT)
})

//Проверка git
//Проверка git Version 2