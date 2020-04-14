testData.push({

    groupTitle: "SDSAdmin-CIPCDataRun",

    //********************************************************************************
    apiCalls: [
        /******* SDSAdmin - CIPC Data Run ********/
        {
            comments: "Get the last date the CIPC Data Run was done",
            url: "SDSAdminService/CheckCIPCLastDateRun",
            dataToSend: {
            }
        },
        {
            comments: "create the CIPC Session",
            url: "SDSAdminService/CreateCIPCDataRunSession",
            dataToSend: {
            }
        },
        {
            comments: "validate the CIPC Session",
            url: "SDSAdminService/ValidateCIPCDataRunSession",
            dataToSend: {
                CIPCSessionId: "dsfsdf",
                OTPValue: "1234"
            }
        },
        {
            comments: "get the cipc data",
            url: "SDSAdminService/GetCIPCData",
            dataToSend: {
                CIPCSessionId: "dsfsdf"
            }
        }
    ]
    //********************************************************************************
});  