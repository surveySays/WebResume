const { app } = require('firebase');
var twilio = require('twilio');

var client = new twilio('ACe7edc0791050546a3aa4d2ff58f3bfbf', '257c0e30dc4bc410edda70ca9f70a75e');

app.post('/api/messages', (req, res) => {
    res.header('Content-Type', 'application/json');
    client.messages.create({
        to: '+19713880073',
        from: '+14049904947',
        body: req.body.body
    })
    .then(() => {
        res.send(JSON.stringify({success: true}));
    })
    .catch(err => {
        console.log(err);
        res.send(JSON.stringify({success: false}))
    });
});
