var adal = require("adal-node");
const axios = require("axios");

function createUser(token) {
  return new Promise((resolve, reject) => {
    axios
      .post(
        "https://graph.microsoft.com/v1.0/users/",
        {
          accountEnabled: true,
          displayName: "Daniel",
          identities: [
            {
              signInType: "userName",
              issuer: "cidenetcumbia.onmicrosoft.com",
              issuerAssignedId: "anderson_vargas"
            },
            {
              signInType: "emailAddress",
              issuer: "cidenetcumbia.onmicrosoft.com",
              issuerAssignedId: "anderson@elpoli.edu.co"
            }
          ],
          passwordProfile: {
            forceChangePasswordNextSignIn: false,
            password: "xWwvJ]6NMw+bWH-d",
          },
        },
        {
          headers: {
            'Authorization': 'Bearer ' + token
          },
        }
      )
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

const TENANT = "TENANT";
const CLIENT_ID = "CLIENT_ID";
const CLIENT_SECRET = "CLIENT_SECRET";
const GRAPH_URL = "https://graph.microsoft.com";

function getToken() {
  return new Promise((resolve, reject) => {
    const authContext = new adal.AuthenticationContext(
      `https://login.microsoftonline.com/${TENANT}`
    );
    authContext.acquireTokenWithClientCredentials(
      GRAPH_URL,
      CLIENT_ID,
      CLIENT_SECRET,
      (err, tokenRes) => {
        if (err) {
          reject(err);
        }
        resolve(tokenRes.accessToken);
      }
    );
  });
}

module.exports = function (context, req) {
  context.log("Starting function");
  context.log("Parameters OK. Next: get token");
  getToken().then((token) => {
    context.log("Token OK. Next: create the group");
    createUser(token)
      .then((result) => {
        context.log("Everything OK.");
        context.res = {
          status: 200,
          body: JSON.stringify(result),
          headers: {
            "Content-Type": "application/json",
          },
        };
        context.done();
      })
      .catch((err) => {
        context.log("An error occurred while creating the user", err);
        context.done();
      });
  });
};
