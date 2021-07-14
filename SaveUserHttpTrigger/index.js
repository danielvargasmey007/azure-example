module.exports = async function (context, req) {
    if(req.body.id){
        context.bindings.saveUser = req.body

        context.res = {
            status: 201
        };
    }else{
        context.res = {
            status: 400, /* Defaults to 400 */
        };
    }

}