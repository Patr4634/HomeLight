exports.ok = function(body) {
    return({ status: 200, text: () => JSON.stringify(body) });
}

exports.unauthorised = function() {
    return({ status: 401, text: () => JSON.stringify({ message: 'Unauthorised' }) });
}

exports.error = function(message) {
    return({ status: 400, text: () => JSON.stringify({ message }) });
}