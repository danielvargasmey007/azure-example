/*
 * This function is not intended to be invoked directly. Instead it will be
 * triggered by an HTTP starter function.
 * 
 * Before running this sample, please:
 * - create a Durable activity function (default name is "Hello")
 * - create a Durable HTTP starter function
 * - run 'npm install durable-functions' from the wwwroot folder of your 
 *    function app in Kudu
 */

const df = require("durable-functions");

module.exports = df.orchestrator(function* (context) {
    const outputs = [];
    try {
        console.log("Lamando Activity1...");
        outputs.push(yield context.df.callActivity("Activity1", "Tokyo"));
        console.log("Lamando Activity1 Completado...");
        
        console.log("Lamando ActivityHttp...");
        outputs.push(yield context.df.callActivity("ActivityHttp", "Anderson"));
        console.log("Lamando ActivityHttp Completado...");
    } catch (error) {
        console.log("ROLLBACK");
    }

    return outputs;
});