testData.push({

    groupTitle: "ADMIN: Employee Attachments",

    //********************************************************************************
    apiCalls: [
        /******* Employee Progress Stats ********/
        {
            comments: "Get the Employee Attachments List",
            url: "SDSAdminService/GetEmployeeAttachmentsData",
            dataToSend: {
                ReportingCycleId: 8,
                BusinessUnitIds: null,
                RoleCategoryIds: null,
                RoleCategoryTypeIds: null,
                SecurityGroupDescriptors: null, 
                CompletionStatuses: null,
                DeclarationSection: null,
                DateFrom: '10 June 2010',
                DateTo: '10 June 2020',
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