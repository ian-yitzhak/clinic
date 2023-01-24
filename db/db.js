const mongoose = require('mongoose')


const connectionString  = 'mongodb+srv://ian:METH71sellah@cluster0.wfyg5.mongodb.net/cln?retryWrites=true&w=majority'

const db =  mongoose.connect(
	connectionString,
	{ useNewUrlParser: true, useUnifiedTopology: true }

	)
.then(()=> console.log('Connected successfully'))
.catch((err)=> console.log(err))

module.exports = db



