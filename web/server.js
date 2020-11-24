const express = require('express');
const app = express();
const port = 6001;
const mysql = require('mysql');
const bodyParser = require('body-parser')

app.set('views', './views');
app.set('view engine','pug');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var connection = mysql.createConnection({
	host : 'db',
	user : 'root',
	password : 'admin',
	database : 'registration_db'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

//app.get('/',(req,res) => res.send('hello world'));
app.get('/',(req,res) => {
	if(req.query.id != null){
	 connection.query("SELECT * FROM student WHERE student_id LIKE '%"+req.query.id+"%'",(err,result) => {
	  res.render('index',{
	   student:result
	  });
	 })
	 console.log("Search!");
	}else{
	 connection.query('SELECT * FROM student',(err,result) => {
	  res.render('index',{
	   student:result
	  });
	 })
	 console.log("Query!");
	}
	
	
   });

app.get('/add',(req,res) => {
	res.render('add');
});

app.post('/add',(req,res) => {
	const student_id = req.body.student_id;
	const name = req.body.name;
	const year = req.body.year;
	const email = req.body.email
	const post = {
		student_id:student_id,
		name:name,
		year:year,
		email:email,
	}
	connection.query('INSERT INTO student SET ?',post,(err) => {
		console.log('Student Inserted');
		return res.redirect('/');
	});
});

app.get('/edit/:id',(req,res) => {
	
	const edit_postID = req.params.id;
	
	connection.query('SELECT * FROM student WHERE student_id=?',[edit_postID],(err,results) => {
		if(results){
			res.render('edit',{
				student:results[0]
			});
		}
	});
});

app.post('/edit/:id',(req,res) => {
	const update_name = req.body.name;
	const update_year = req.body.year;
	const update_email = req.body.email;
	const userId = req.params.id;
	connection.query('UPDATE `student` SET name = ?, year = ?, email = ? WHERE student_id = ?', [update_name, update_year, update_email , userId], (err, results) => {
        if(results.changedRows === 1){
            console.log('Student Updated');
        }
		return res.redirect('/');
    });
});

app.get('/delete/:id',(req,res) => {
    connection.query('DELETE FROM `student` WHERE student_id = ?', [req.params.id], (err, results) => {
        return res.redirect('/');
    });	
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))