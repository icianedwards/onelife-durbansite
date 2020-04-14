testData.push({

    groupTitle: "SDCS General",

    //********************************************************************************
    apiCalls: [
        {
            comments: "Get all the OMEs for the system",
            url: "SDCSGeneralService/GetOMEs",
            dataToSend: {
            }
        },
        {
            comments: "Dowbload file using full path",
            url: "SDCSGeneralService/DownloadFile",
            dataToSend: {
                "FullPathFileName": ""
            }
        }
    ]
    //********************************************************************************
});  