var config = require('../config/endpoints'),
    request = require('supertest')(config.host[config.env]);

describe('test baidu web', function() {

    this.timeout(10000);

    it('response code is :200 ' + config.env, function(done) {
        request.get('/')
            .expect(200)
            .end(done);
    });
});
