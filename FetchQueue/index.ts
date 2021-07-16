import { AzureFunction, Context } from "@azure/functions"

const queueTrigger: AzureFunction = async function (context: Context, msg: string): Promise<void> {
    context.log('Queue trigger function processed work item', msg);
};

export default queueTrigger;
