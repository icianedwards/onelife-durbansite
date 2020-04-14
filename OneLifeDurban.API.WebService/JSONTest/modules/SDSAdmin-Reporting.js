testData.push({

    groupTitle: "ADMIN: Reporting",

    //********************************************************************************
    apiCalls: [
        /******* Get the Reports Type List ********/
        /*{
            comments: "Get Report types list",
            url: "SDSReportingService/GetReportTypes",
            dataToSend: {
            }
        },*/
        /******* Employee Data ********/
        {
            comments: "Get Report filter setup and lookup data",
            url: "SDSReportingService/GetReportFilter",
            dataToSend: {
                ReportType: "AccessRights"
            }
        },
        {
            comments: "Get render data for general report",
            url: "SDSReportingService/GetReportFilterRenderData",
            dataToSend: {
                ReportType: "AccessRights",
                SelectedEmployeeRoleCategoryTypes: [1, 2, 3],
                SelectedEmployeeRoleCategories: [1, 2, 3],
                SelectedOMEs: [1, 2, 3],
                SelectedSecurityGroupDescriptors: ['End Users', 'Compliance Officers'],
                SelectedReportingCycles: [9],
                DateFrom: null,
                DateTo: null,
                SecondaryDateFrom: null,
                SecondaryDateTo: null,
                ShowChartLabels: true,
                IsExport: false,
                ExportType: ""
            }
        },


        {
            comments: "Get a list of meeting packs",
            url: "SDSReportingService/GetMeetingPacks",
            dataToSend: {
               
            }
        },
        {
            comments: "Remove a Meeting Pack",
            url: "SDSReportingService/RemoveMeetingPack",
            dataToSend: {
                "MeetingPackId": 0
            }
        },
        {
            comments: "Get a list of Meeting Pack report types",
            url: "SDSReportingService/GetMeetingPackReportTypes",
            dataToSend: { 
            }
        },
        {
            comments: "Create or update a meeting pack",
            url: "SDSReportingService/WriteMeetingPack",
            dataToSend: {
                "MeetingPackId": 0,
                "MeetingPackTitle": "New Meeting Pack Title"
            }
        }




        
        
    ]
    //********************************************************************************
}); 