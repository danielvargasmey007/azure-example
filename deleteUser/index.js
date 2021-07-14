const { CosmosClient } = require("@azure/cosmos");

const endpoint = process.env["CosmosDBString"];
const key = process.env["CosmosDBKey"];
const databaseId = "avargas-cumbia-test-db";
const containerId = "users";
const cosmosClient = new CosmosClient({ endpoint, key });

module.exports = async function (context, req) {
    if(req.body.id){
        let id = req.body.id;
        await cosmosClient.database(databaseId).container(containerId).item(id).delete();
        context.res = {
            status: 200
        };
    }else{
        context.res = {
            status: 400
        };
    }
}