const functions = require('firebase-functions')
const childProcess = require('child_process')

exports.server = functions.https.onRequest((req, res) => {
    const child = childProcess.spawn('node', [server.js])

    child.stdout.on( 'data', (data) => {
        console.log(data.toString())
    })
    child.stderr.on('data', (data) => {
        console.error(data.toString())
    })

    child.on('close', (code) => {
        if(code === 0){
            res.status(200).send('Server executed Succesfully!', code)
        }else{
            res.status(400).send('Server Execution Failed.', code)
        }
    })
})