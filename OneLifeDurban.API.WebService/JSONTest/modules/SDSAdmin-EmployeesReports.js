testData.push({

    groupTitle: "ADMIN: Employees Reports",

    //********************************************************************************
    apiCalls: [
        /******* Employee Data ********/
        {
            comments: "Get the Employee Report Data OMEs List",
            url: "SDSAdminService/GetEmployeeReportsOMEs",
            dataToSend: {
                ReportingCycleIds: [8, 9, 10]
            }
        },
        {
            comments: "Get the Employee Report Data Role Categories List",
            url: "SDSAdminService/GetEmployeeReportsRoleCategories",
            dataToSend: {
                ReportingCycleIds: [8, 9, 10]
            }
        },
        {
            comments: "Get the Employee Report Data",
            url: "SDSAdminService/GetEmployeeReportsData",
            dataToSend: {
                ReportingCycleIds: [8, 9, 10],
                OMEIds: [],
                RoleCategoryIds: [],
                SecurityGroupDescriptors: ['Developers', 'Company Administrators', 'End Users'],
                ActiveStatuses: ['Active', 'Inactive'],
                CompletionStatuses: ['Finalised', 'Interim', 'Incomplete'],
                LoginStatuses: ['Logged In', 'Not Logged In'],
                SearchCriteria: '',
                PageSize: 20,
                PageNumber: 1,
                OrderField: "",
                OrderDirecton: ""
            }
        },
        {
            comments: "Get the Status Lookup for Active Statuses",
            url: "SDSAdminService/GetEmployeeReportsActiveStatuses",
            dataToSend: {
            }
        },
        {
            comments: "Get the Status Lookup for Login Statuses",
            url: "SDSAdminService/GetEmployeeReportsLoginStatuses",
            dataToSend: {
            }
        },
        {
            comments: "Get the Status Lookup for Declaration Completion Statuses",
            url: "SDSAdminService/GetEmployeeReportsDeclarationCompletionStatuses",
            dataToSend: {
            }
        },
        {
            comments: "Get the Security Groups Lookup",
            url: "SDSAdminService/GetEmployeeSecurityGroups",
            dataToSend: {
            }
        },
        {
            comments: "Get the Report Section Lookup",
            url: "SDSAdminService/GetEmployeesReportSections",
            dataToSend: {
            }
        },
        {
            comments: "Generate the Reports",
            url: "SDSAdminService/GenerateEmployeesReports",
            dataToSend: {
                EmployeeIds: [ 1 ],
                ReportingCycleIds: [ 8, 9, 10 ],
                OMEIds: [],
                RoleCategoryIds: [],
                SecurityGroupDescriptors: ['Developers', 'Company Administrators', 'End Users'],
                ActiveStatuses: ['Active', 'Inactive'],
                CompletionStatuses: ['Finalised', 'Interim', 'Incomplete'],
                LoginStatuses: ['Logged In', 'Not Logged In'],
                SectionsToInclude: [ 1, 2, 3, 4, 5, 6, 7 ],
                ReportFormat: "PDF",
                ReportOrder: "EmployeeName",
                IncludeEmptyDeclarations: false
            }
        },
    ]
    //********************************************************************************
});  