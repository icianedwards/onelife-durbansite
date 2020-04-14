testData.push({

    groupTitle: "ADMIN: Related Party Report",

    //********************************************************************************
    apiCalls: [
        /******* Related Party ********/
        {
            comments: "Get the Reporting Cycles List",
            url: "SDSAdminService/GetReportingCycles",
            dataToSend: {
            }
        },
        {
            comments: "Export the Related Party Report to Excel",
            url: "SDSAdminService/ExportRelatedPartyReportXLS",
            dataToSend: {
                ReportingCycleId: 8            }
        }
    ]
    //********************************************************************************
});  