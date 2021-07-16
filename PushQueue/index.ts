import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.bindings.msg = req.body.msg;
    context.res = {
        body: 'Msg pushed'
    };

};

export default httpTrigger;