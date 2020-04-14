testData.push({

    groupTitle: "ADMIN: Proxy Directorship Report",

    //********************************************************************************
    apiCalls: [
        /******* Proxy Directorship Report ********/
        {
            comments: "Get the Proxy Capture Reporting Cycles",
            url: "SDSAdminService/GetProxyCaptureReportingCycles",
            dataToSend: {
                AuditReportReportingCycleId: 8,
                AuditReportDateFrom: "01 Dec 2000",
                AuditReportDateTo: "10 May 2020"
            }
        },
        {
            comments: "Get the Proxy Report User Changed By List",
            url: "SDSAdminService/ProxyDirectorshipAuditReportUserList",
            dataToSend: {
                AuditReportReportingCycleId: 8,
                AuditReportDateFrom: "01 Dec 2000",
                AuditReportDateTo: "10 May 2020"
            }
        },
        {
            comments: "Get the Proxy Report Employee List",
            url: "SDSAdminService/GetProxyDirectorshipsEmployeeList",
            dataToSend: {
                AuditReportReportingCycleId: 8,
                AuditReportDateFrom: "01 Dec 2000",
                AuditReportDateTo: "10 May 2020",
                AuditReportProxyUserId: 0
            }
        },
        {
            comments: "Get the Proxy Report Audit List",
            url: "SDSAdminService/GetAuditDirectorshipRecordList",
            dataToSend: {
                AuditReportReportingCycleId: 8,
                AuditReportDateFrom: "01 Dec 2000",
                AuditReportDateTo: "10 May 2020",
                AuditReportProxyUserId: 0,
                AuditReportEmployeeUserId: 0,
                AuditReportActionId: 0
            }
        },
        {
            comments: "Get Directorships List",
            url: "SDSAdminService/ListProxyDirectorship",
            dataToSend: { ProxyDeclarationId: 0 }
        },
        //:get directorship previous declaration list
        {
            comments: "Get Directorship Items for Previous Year Declarations for the WEB system",
            url: "SDSAdminService/ListProxyDirectorshipPrevious",
            dataToSend: { ProxyDeclarationId: 0 }
        },
        //:get shares delete declaration
        {
            comments: "Delete Directorships Item",
            url: "SDSAdminService/DeleteProxyDirectorship",
            dataToSend: { ItemId: 4091, ProxyDeclarationId: 0 }
        },
        {
            comments: "Add / Update Directorships Item to the WEB controller",
            url: "SDSAdminService/WriteWebProxyDirectorship",
            dataToSend: {
                ProxyDeclarationId: 0,
                EmployeeDirectorshipId: 0,
                EmployeeDependantId: null,
                DeclareForMyself: true,
                EntityTypeId: 0,
                EntityTypeOrganisationId: 0,
                CompanyTypeId: 0,
                CompanyTypeOther: "",
                RegistrationNumber: "",
                CompanyName: "",
                CompanyAddress: "",
                AppointmentDate: "DateTime",
                TerminationDate: "Date Time",
                NatureOfInterest: "",
                MeetingDays: 0,
                RepresentativeDirector: true,
                RepresentativeDirectorName: "",
                RepresentativeDirectorArrangement: "",
                FeesPayable: true,
                FeesCurrency: "",
                FeesAmount: 50.5,
                ApproverEmployeeId: 0,
                ApproverName: "",
                ApproverEmail: "",
                FullDetails: "",
                EmployeeAttachments: [{
                    EmployeeAttachmentId: 0,
                    FileName: "",
                    DownloadLink: "",
                    DeclarationType: "",
                    Description: ""
                }],

                CIPCChildId: null,
                CIPCResponseId: null,
                CIPCDetailedReason: ""
            }
        }
    ]
    //********************************************************************************
});  