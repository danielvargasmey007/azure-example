module.exports = async function (context, req) {
    let users = context.bindings.getUser;

    context.res = {
        status: 200,
        body: users
    };

}