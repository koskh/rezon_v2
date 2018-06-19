// @flow

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const references = require('./references/index');
const random = require('./utils/random');


const api = express.Router();


api.get('/', (req: express$Request, res: express$Response) => {
    res.send('Default response for GET /api\n');
});

api.post('/token', (req: express$Request, res: express$Response) => {
    setTimeout(() => {
        res.json({
            data: {
                '.expires': "Tue, 19 Jun 2018 08:13:00 GMT",
                '.issued': "Tue, 19 Jun 2018 07:13:00 GMT",
                access_token: "h24foBha_engWxagS-xSI_rRZBHDrYygmyjGbTKKOW3AU5zg1LEKO4soBL8BlD-6brUh97GU3DMFYjSA-JX7WpMoy7v-eXXiwHG4BgXDcuj66pH3cLmwfGyVr9YNn92INu20b36IdjQearcYLrFXSCepxraALAxvYIzRUpU6VEceC-KpgAa9n19ScQfSKCvU76Hd8bdyakCm7v4qUILr2cIQc3ecZsw1uC1KWxPBkfhkF5qIevyktUnUd-BZ21MYzmy5fWNcknl8AvZcCW6wZJVsL4RaylBxbrnbGXb64IfGs6VNzDVmPOKSVnzApszOnicA9oAP9F3P70nti5eMaMwC5_6ZtltEeRMoIdvOvqXJN51iO9szwGR-Ph8iJpM5OEa4JIn7o-hFpO5xHL0XNXNgbx8",
                expires_in: 3599,
                refresh_token: "qwij3JP3-k-3TrN-TWZ3mNcqQv9jLRZOHwVb5M1sUkkyKTuu_taBCg7AY5Kb6alm83sF7PC-vkr7-4NKqSZCjzZWLJr1GHHE9ESwNHkVMq4YE8DxgVRx6tQpenW_23uqCXQzg-Wh0YrOTmD5CClV2pgGclCIB4f6aSOWF7p8nhCbQZfyRxXgsIKFDLmQukENXme2uTj-9o9sN8XgekN6NVINuKADFnHGNORb9W683axvBPkI937q-yg0YSBK7QfrZpSWoI8YxEu8mMqGmTeyC-IFLMrofflS1Vvq8TKld3yFX40axBLBoSsvckBKTUYcHxX7QhrGlMi_1HIoDz54M9Nk-503GEhTUnr0r0ERGLJKk-usRLmNeGHfVGQUh7dRAUWl8HfcHokOFe5TWNycnhM8DRkfQsW3MFmN1Tpg_lLWgvF1",
                token_type: "bearer"

            }, error: {}
        });
    }, 2000);

    // res.send('token response for GET /api\n');
})

api.use('/references', references);
api.use('/random', random);

api.use('*', (req: express$Request, res: express$Response) => {
    res.status(404);
    res.send('Not found Api route\n');
});

module.exports = api;
