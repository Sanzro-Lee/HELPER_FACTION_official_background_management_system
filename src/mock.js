const Mock = require('mockjs')
const Random = Mock.Random

Mock.mock('/news', 'get', req => {
    if (req.type == "GET") {
        let newsList = []
        for (let i = 0; i < 20; i++) {
            let newNewsObject = {
                title: Random.ctitle(),
                content: Random.cparagraph(),
                createdTime: Random.date()
            }
            newsList.push(newNewsObject)
        }
        return newsList
    } else {
        return null
    }
})
