exports.ok = function(body) {
    return({ status: 200, text: () => JSON.stringify(body) });
}

exports.error = function(message) {
    return({ status: 400, text: () => JSON.stringify({ message }) });
}