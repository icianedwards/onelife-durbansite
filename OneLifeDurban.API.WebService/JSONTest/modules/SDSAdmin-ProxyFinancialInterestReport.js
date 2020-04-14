testData.push({

    groupTitle: "ADMIN: Proxy Financial Interest Report",

    //********************************************************************************
    apiCalls: [
        /******* Proxy Financial Interest Report ********/
        {
            comments: "Get the Proxy Report User Changed By List",
            url: "SDSAdminService/ProxyFinancialInterestAuditReportUserList",
            dataToSend: {
                AuditReportReportingCycleId: 8,
                AuditReportDateFrom: "01 Dec 2000",
                AuditReportDateTo: "10 May 2020"
            }
        },
        {
            comments: "Get the Proxy Report Employee List",
            url: "SDSAdminService/GetProxyFinancialInterestsEmployeeList",
            dataToSend: {
                AuditReportReportingCycleId: 8,
                AuditReportDateFrom: "01 Dec 2000",
                AuditReportDateTo: "10 May 2020",
                AuditReportProxyUserId: 0
            }
        },
        {
            comments: "Get the Proxy Report Audit List",
            url: "SDSAdminService/GetAuditFinancialInterestRecordList",
            dataToSend: {
                AuditReportReportingCycleId: 8,
                AuditReportDateFrom: "01 Dec 2000",
                AuditReportDateTo: "10 May 2020",
                AuditReportProxyUserId: 0,
                AuditReportEmployeeUserId: 0,
                AuditReportActionId: 0
            }
        },
        //:get shares declaration list
        {
            comments: "Get Shares Items fr Current Year Declaration",
            url: "SDSAdminService/ListProxyFinancialInterest",
            dataToSend: {
                ProxyDeclarationId: 0
            }
        },
        //:get shares previous declaration list
        {
            comments: "Get Shares Items for Previous Year Declarations",
            url: "SDSAdminService/ListProxyFinancialInterestPrevious",
            dataToSend: {
                ProxyDeclarationId: 0
            }
        },
        //:get shares delete declaration
        {
            comments: "Delete Shares Item",
            url: "SDSAdminService/DeleteProxyFinancialInterest",
            dataToSend: { ItemId: 4091, ProxyDeclarationId: 0 }
        },
        //:write the financial interest item via web
        {
            comment: "Add / Update Shares Item via Web",
            url: "SDSAdminService/WriteWebProxyFinancialInterest",
            dataToSend: {
                ProxyDeclarationId: 0,
                "ApproverEmployeeId": 17555,
                "CompanyName": "Gail's share company name",
                "CompanyTypeId": 7,
                "CompanyTypeOther": null,
                "CostOfInvestment": "150000",
                "CostOfInvestmentCurrencyCode": "ZAR",
                "DeclareForMyself": true,
                "EmployeeAttachments": [],
                "EmployeeDependantId": null,
                "EmployeeSharesId": 2504,
                "EntityTypeId": 7,
                "EntityTypeOrganisationId": null,
                "ForWhom": "Myself",
                "HoldingExtent": "Greater than 25%",
                "HoldingRight": "Yes",
                "MitigationControlProposed": "Controls are as follows",
                "MitigationPlan": "Mitigation is as follos",
                "PotentialSasolRisk": "Risk is as follows - tested that i could edit after submitted but before approved.",
                "RegisteredOfficeAddress": "test address",
                "RegistrationNumber": "1945/321452/12",
                "SecurityNumber": 2500,
                "SecurityType": "Preferential Shares"
            }
        }
    ]
    //********************************************************************************
});  