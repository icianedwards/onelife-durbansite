testData.push({

    groupTitle: "Authentication",

    //********************************************************************************
    apiCalls: [
        {
            comments: "Test Authentication",
            url: "AuthenticationService/TestAPIAuthentication",
            dataToSend: {
            }
        },
        {
            comments: "Test Authentication",
            url: "AuthenticationService/GetAuthenticationStatus",
            dataToSend: {
            }
        },
        {
            comments: "Get XSRF Token",
            url: "AuthenticationService/GetXSRFToken",
            dataToSend: {
            }
        }
    ]
    //********************************************************************************
});  