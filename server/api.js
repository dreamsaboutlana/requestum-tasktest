let express = require('express');
let cors = require('cors');
let data = require('./data.json');

let app = express();
app.use(cors());

const DELAY_DURATION = 3000;
const delay = (offset, limit) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data.entities.filter((item, idx)=>{
                let val = limit * (offset - 1);

                // console.log(idx, val, val + (limit - 1))
                return ((idx >= val) && (idx <= val + (limit - 1)));
            }));
        }, DELAY_DURATION)
    });
};

app.get('/list', function (req, res) {
    const {page, per_page} = req.query

    delay(parseInt(page), parseInt(per_page))
        .then(response => res.status(200).json(response))
        .catch(e => res.status(500));
});

app.listen(4444, function () {
    console.log('Example app listening on port 4444!');
});