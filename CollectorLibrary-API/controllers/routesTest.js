let getTest = async (request, response) => {
    response.json({
        message: "Hello World",
        hora: "6:14 PM 2026"
    })
}

const postTest = async (request, response) => {
}

module.exports = {
    getTest,
    postTest
}
