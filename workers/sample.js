'use strict';

const Promise = require('bluebird');
const TaskWorker = require('../components/task_worker');

class Sample extends TaskWorker {

    handleTask(task) {
        this.logger.info('Sample Task:', task);
        return Promise.resolve().delay(30000);
    }

}

module.exports = Sample;
