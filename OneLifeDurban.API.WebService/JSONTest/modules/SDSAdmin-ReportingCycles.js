testData.push({

    groupTitle: "ADMIN: Reporting Cycles",

    //********************************************************************************
    apiCalls: [
        /******* Reporting Cycles ********/
        {
            comments: "Get the Reporting Cycles List",
            url: "SDSAdminService/GetReportingCycles",
            dataToSend: {
            }
        },
        {
            comments: "Get the Reporting Cycle for Editing",
            url: "SDSAdminService/GetReportingCycle",
            dataToSend: {
                ItemId: 8
            }
        },
        {
            comments: "Add a Reporting Cycle",
            url: "SDSAdminService/AddReportingCycle",
            dataToSend: {
            }
        },
        {
            comments: "Write the Reporting Cycle details",
            url: "SDSAdminService/WriteReportingCycle",
            dataToSend: {
                ReportingCycleId: 8,
                SubmissionEndDate: "18 August 2019"
            }
        },
        {
            comments: "Set a Reporting Cycle as Active",
            url: "SDSAdminService/SetReportingCycleActive",
            dataToSend: {
                ReportingCycleId: 8
            }
        },
    ]
    //********************************************************************************
});  