const PROXY_CONFIG = [
    {
        context: [
            "/getalldata",
            "/adddata",
            "/updatedata",
            "/deletedata",
        ],
        target: "http://172.17.12.97:8080/",
        secure: false
    }
]

module.exports = PROXY_CONFIG;