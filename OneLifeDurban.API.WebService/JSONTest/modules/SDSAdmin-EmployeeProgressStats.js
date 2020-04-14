testData.push({

    groupTitle: "ADMIN: Employee Progress Stats",

    //********************************************************************************
    apiCalls: [
        /******* Employee Progress Stats ********/
        {
            comments: "Get the Progress Stats List",
            url: "SDSAdminService/GetEmployeeProgressStats",
            dataToSend: {
                ReportingCycleId: 8,
                BusinessUnitIds: null,
                RoleCategoryIds: null,
                RoleCategoryTypeIds: null,
                SearchCriteria: '',
                PageSize: 20,
                PageNumber: 1,
                OrderField: "EmployeeFullName",
                OrderDirecton: "asc"
            }
        },
        {
            comments: "Export the Progress Stats Employee List",
            url: "SDSAdminService/ExportEmployeeProgressStats",
            dataToSend: {
                ReportingCycleId: 8,
                BusinessUnitIds: null,
                RoleCategoryIds: null,
                RoleCategoryTypeIds: null,
                SearchCriteria: '',
                PageSize: 20,
                PageNumber: 1,
                OrderField: "EmployeeFullName",
                OrderDirecton: "asc"
            }
        },
    ]
    //********************************************************************************
});  