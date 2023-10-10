const mongooes = require('mongoose');

mongooes.set('strictQuery', false);

mongooes.connect("mongodb+srv://nil:123456789Com@nodeapi.nfsdvq5.mongodb.net/node-user?retryWrites=true&w=majority", {
    useNewUrlParser: true,
}).then(() => {
    console.log('DB Connection....done');
}).catch((error) => {
    console.log(error);
})