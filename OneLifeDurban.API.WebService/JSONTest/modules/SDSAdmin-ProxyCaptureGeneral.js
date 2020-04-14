testData.push({

    groupTitle: "ADMIN: Proxy Capture General",

    //********************************************************************************
    apiCalls: [
        /******* Proxy Capture General ********/
        {
            comments: "Get the Proxy Capture Reporting Cycles",
            url: "SDSAdminService/GetProxyCaptureReportingCycles",
            dataToSend: {
            }
        },
        {
            comments: "Get the Employee Data for Proxy Declarations",
            url: "SDSAdminService/GetProxyEmployeeData",
            dataToSend: {
                ReportingCycleId: 8,
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
            comments: "Get Proxy Related Party List",
            url: "SDSAdminService/RelatedPartiesProxyList",
            dataToSend: {
                ProxyDeclarationId: 0
            }
        },
        {
            comments: "Write Proxy Related Proxy",
            url: "SDSAdminService/WriteProxyRelatedParty",
            dataToSend: {
                ProxyDeclarationId: 0,
                RelatedPartyId: null,
                RelationshipTypeId: 2,
                FirstName: "Bob",
                Surname: "Dillon",
                IdentificationRegistrationNumber: "1234567890123",
                CompanyTypeId: null,
                CompanyName: null,
                CompanyTypeOther: null
            }
        },
        {
            comments: "Delete Proxy Related Party",
            url: "SDSAdminService/DeleteProxyRelatedParty",
            dataToSend: {
                ItemId: 0,
                ProxyDeclarationId: 0
            }
        },
        {
            comments: "Get Proxy Reporting Cycle Details",
            url: "SDSAdminService/GetProxyReportingCycleDetails",
            dataToSend: {
            }
        },
        {
            comments: "Get Proxy default approver",
            url: "SDSAdminService/GetDefaultProxyApprover",
            dataToSend: {
                ProxyDeclarationId: 0,
                Item: ""
            }
        },
        {
            comments: "Get Proxy Approvers",
            url: "SDSAdminService/GetProxyApprovers",
            dataToSend: {
                ProxyDeclarationId: 0,
                Item: ""
            }
        }
    ]
    //********************************************************************************
});  