let json = JSON.stringify(
    [
        {
            "time": new Date(2022, 2, 22, 9, 0, 0),
            "isBusy": false
        },
        {
            "time": new Date(2022, 2, 22, 9, 30, 0),
            "isBusy": false
        },
        {
            "time": new Date(2022, 2, 22, 10, 0, 0),
            "isBusy": false
        },
        {
            "time": new Date(2022, 2, 22, 11, 30, 0),
            "isBusy": true
        },
        {
            "time": new Date(2022, 2, 22, 11, 0, 0),
            "isBusy": true
        },
        {
            "time": new Date(2022, 2, 22, 12, 30, 0),
            "isBusy": false
        },
        {
            "time": new Date(2022, 2, 22, 12, 0, 0),
            "isBusy": true
        },
        {
            "time": new Date(2022, 2, 22, 13, 30, 0),
            "isBusy": false
        },
        {
            "time": new Date(2022, 2, 22, 13, 0, 0),
            "isBusy": true
        },
        {
            "time": new Date(2022, 2, 22, 14, 30, 0),
            "isBusy": true
        },
        {
            "time": new Date(2022, 2, 22, 14, 0, 0),
            "isBusy": true
        },
        {
            "time": new Date(2022, 2, 22, 14, 30, 0),
            "isBusy": true
        },
        {
            "time": new Date(2022, 2, 22, 15, 0, 0),
            "isBusy": true
        },
        {
            "time": new Date(2022, 2, 22, 15, 30, 0),
            "isBusy": false
        },
        {
            "time": new Date(2022, 2, 22, 16, 0, 0),
            "isBusy": true
        },
        {
            "time": new Date(2022, 2, 22, 16, 30, 0),
            "isBusy": true
        },
        {
            "time": new Date(2022, 2, 22, 17, 0, 0),
            "isBusy": true
        },
        {
            "time": new Date(2022, 2, 22, 17, 30, 0),
            "isBusy": true
        },
        {
            "time": new Date(2022, 2, 22, 18, 0, 0),
            "isBusy": true
        },
        {
            "time": new Date(2022, 2, 22, 18, 30, 0),
            "isBusy": false
        },
        {
            "time": new Date(2022, 2, 22, 19, 0, 0),
            "isBusy": false
        },
        {
            "time": new Date(2022, 2, 22, 19, 30, 0),
            "isBusy": false
        }
    ]
)

function getScheduledJson() {
    return json;
}

module.exports = {
    getScheduledJson
}