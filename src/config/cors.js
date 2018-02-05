module.exports = (request, response, next) => {

    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, OPTIONS, DELETE')
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-Width, Content-Type, Accept')
    
    if(request.method === "OPTIONS") {
        response.status(204).send()
    } else {
        next()
    }
}