testData.push({

    groupTitle: "ADMIN: Billing Report",

    //********************************************************************************
    apiCalls: [
        /******* Billing Report ********/
        {
            comments: "Get the OMEs List",
            url: "SDCSGeneralService/GetOMEs",
            dataToSend: {
                ActiveOnly: true
            }
        },
        {
            comments: "Get the Reporting Cycles List",
            url: "SDSAdminService/GetReportingCycles",
            dataToSend: {
            }
        },
        {
            comments: "Get the Billing Report",
            url: "SDSAdminService/GetBillingReport",
            dataToSend: {
                ReportingCycleId: 8,
                BusinessUnitId: null,
                DateFrom: '1 Jan 1990',
                DateTo: '29 Aug 2019',
                SearchCriteria: '',
                PageSize: 20,
                PageNumber: 1,
                OrderField: "EmployeeName",
                OrderDirecton: "asc"
            }
        },
        {
            comments: "Export the Billing Report to Excel",
            url: "SDSAdminService/ExportBillingReportXLS",
            dataToSend: {
                ReportingCycleId: 8,
                BusinessUnitId: null,
                DateFrom: '1 Jan 1990',
                DateTo: '29 Aug 2019',
                SearchCriteria: '',
                OrderField: "EmployeeName",
                OrderDirection: "asc"
            }
        },
        {
            comments: "Export the Billing Report to PDF",
            url: "SDSAdminService/ExportBillingReportPDF",
            dataToSend: {
                ReportingCycleId: 8,
                BusinessUnitId: null,
                DateFrom: '1 Jan 1990',
                DateTo: '29 Aug 2019',
                SearchCriteria: '',
                OrderField: "EmployeeName",
                OrderDirection: "asc"
            }
        }
    ]
    //********************************************************************************
});  