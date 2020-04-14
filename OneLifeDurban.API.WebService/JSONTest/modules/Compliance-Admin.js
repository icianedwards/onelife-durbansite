testData.push({

    groupTitle: "Compliance Admin",

    //********************************************************************************
    apiCalls: [
        {
            comments: "Get OMEs and their meta data for closing and producing reports",
            url: "ComplianceAdminService/GetOMEsForClosing",
            dataToSend: {
            }
        },
        {
            comments: "Get Phase Manager Info and their meta data for closing and producing reports",
            url: "ComplianceAdminService/GetPhaseManagersForClosing",
            dataToSend: {
                PhaseOrder: 2
            }
        },
        {
            comments: "Get Allowed OMEs for Compliance Officer and Compliance Super User",
            url: "ComplianceAdminService/GetAllowedOMEs",
            dataToSend: {
            }
        },
        {
            comments: "Get Allowed Phases for Compliance Officer and Compliance Super User",
            url: "ComplianceAdminService/GetAllowedPhases",
            dataToSend: {
            }
        },
        {
            comments: "Get the Status Options for Employee Confirmations",
            url: "ComplianceAdminService/GetEmployeeConfirmationStatusOptions",
            dataToSend: {
            }
        },
        {
            comments: "Get the Status Options for Conditional Items",
            url: "ComplianceAdminService/GetConditionalStatusOptions",
            dataToSend: {
            }
        },
        {
            comments: "Get Employees List",
            url: "ComplianceAdminService/GetEmployeesList",
            dataToSend: {
                BusinessUnitIds: [39, 41, 42, 43, 44, 45],
                PhaseNumbers: [1, 2],
                ConfirmationStatuses: ['Outstanding', 'Not Participating', 'Confirmed Compliant', 'Confirmed Conditionally'],
                SearchCriteria: 'Bob the Builder',
                PageSize: 20,
                PageNumber: 1,
                OrderField: "",
                OrderDirecton: ""
            }
        },
        {
            comments: "Get Conditionals List",
            url: "ComplianceAdminService/GetConditionalsList",
            dataToSend: {
                BusinessUnitIds: [39, 41, 42, 43, 44, 45],
                PhaseNumbers: [1, 2],
                ConditionalStatuses: ['Pending', 'Previously Reported', 'New Conditional', 'Duplicate'],
                SearchCriteria: '',
                PageSize: 20,
                PageNumber: 1,
                OrderField: "",
                OrderDirecton: ""
            }
        },
        {
            comments: "Get Conditionals List for marking Duplicates",
            url: "ComplianceAdminService/GetConditionalsListForMarkingDuplicate",
            dataToSend: {
                BusinessUnitId: 45,
                NonComplianceId: 1,
                SearchCriteria: ''
            }
        },
        {
            comments: "Get Conditional Item",
            url: "ComplianceAdminService/GetConditionalItem",
            dataToSend: {
                NonComplianceId: 1
            }
        },
        {
            comments: "Mark Conditional Item as Duplicate of another Item",
            url: "ComplianceAdminService/MarkConditionalAsDuplicate",
            dataToSend: {
                DuplicateNonComplianceId: 1,
                MasterNonComplianceId: 2
            }
        },
        {
            comments: "UnMark Conditional Item as Duplicate of another Item",
            url: "ComplianceAdminService/UnMarkConditionalAsDuplicate",
            dataToSend: {
                DuplicateNonComplianceId: 1
            }
        },
        {
            comments: "Mark Non-Participating Employee",
            url: "ComplianceAdminService/MarkNonParticipatingEmployee",
            dataToSend: {
                NonParticipatingEmployeeId: 62594,
                NonParticipationReasonId: 4
            }
        },
        {
            comments: "Open Compliance Confirmation for Employee",
            url: "ComplianceAdminService/OpenComplianceConfirmation",
            dataToSend: {
                SelectedEmployeeId: 62594
            }
        },
        {
            comments: "Update Conditional Item Information",
            url: "ComplianceAdminService/UpdateConditionalItem",
            dataToSend: {
                NonComplianceId: 1,
                ConditionalStatus: "Previously Reported",
                RiskCategoryId: 11,
                BusinessUnitIssueLogNumber: "12345",
                ComplianceConfirmedReportedReasonId: 1
            }
        },
        {
            comments: "List Risk Categories for the Current Reporting Cycle",
            url: "ComplianceAdminService/ListRiskCategories",
            dataToSend: {
            }
        },
        {
            comments: "List Confirmed Reported Reasons for the Current Reporting Cycle",
            url: "ComplianceAdminService/ListConfirmedReportedReasons",
            dataToSend: {
            }
        },
        {
            comments: "List Non Participation Reasons for the Current Reporting Cycle",
            url: "ComplianceAdminService/ListNonParticipationReasons",
            dataToSend: {
            }
        },
        {
            comments: "Get Email Notification Summary List",
            url: "ComplianceAdminService/GetEmailNotificationSummaryList",
            dataToSend: {
                BusinessUnitIds: [39, 41, 42, 43, 44, 45],
                PhaseNumbers: [1, 2],
                EmailType: ["All"],
                SearchCriteria: 'Bob the Builder',
                PageSize: 20,
                PageNumber: 1,
                OrderField: "",
                OrderDirecton: ""
            }
        },
        {
            comments: "Get Email Notification Detail List",
            url: "ComplianceAdminService/GetEmailNotificationDetailList",
            dataToSend: {
                BusinessUnitIds: [39, 41, 42, 43, 44, 45],
                PhaseNumbers: [1, 2],
                EmailType: ["All"],
                SearchCriteria: 'Bob the Builder',
                PageSize: 20,
                PageNumber: 1,
                OrderField: "",
                OrderDirecton: ""
            }
        },
        {
            comments: "Get Communication Types List",
            url: "ComplianceAdminService/GetCommunicationControlTypesList",
            dataToSend: {
            }
        },
        {
            comments: "Export Employees List",
            url: "ComplianceAdminService/ExportEmployeesList",
            dataToSend: {
                BusinessUnitIds: [39, 41, 42, 43, 44, 45],
                PhaseNumbers: [1, 2],
                ConfirmationStatuses: ['Outstanding', 'Not Participating', 'Confirmed Compliant', 'Confirmed Conditionally'],
                SearchCriteria: 'Bob the Builder',
                PageSize: 20,
                PageNumber: 1,
                OrderField: "",
                OrderDirecton: ""
            }
        },
        {
            comments: "Export Conditionals List",
            url: "ComplianceAdminService/ExportConditionalsList",
            dataToSend: {
                BusinessUnitIds: [39, 41, 42, 43, 44, 45],
                PhaseNumbers: [1, 2],
                ConditionalStatuses: ['Pending', 'Previously Reported', 'New Conditional', 'Duplicate'],
                SearchCriteria: '',
                PageSize: 20,
                PageNumber: 1,
                OrderField: "",
                OrderDirecton: ""
            }
        },
        {
            comments: "Export Email Notification Summary List",
            url: "ComplianceAdminService/ExportEmailNotificationSummaryList",
            dataToSend: {
                BusinessUnitIds: [39, 41, 42, 43, 44, 45],
                PhaseNumbers: [1, 2],
                EmailType: ["All"],
                SearchCriteria: 'Bob the Builder',
                PageSize: 20,
                PageNumber: 1,
                OrderField: "",
                OrderDirecton: ""
            }
        },
        {
            comments: "Export Email Notification Detail List",
            url: "ComplianceAdminService/ExportEmailNotificationDetailList",
            dataToSend: {
                BusinessUnitIds: [39, 41, 42, 43, 44, 45],
                PhaseNumbers: [1, 2],
                EmailType: ["All"],
                SearchCriteria: 'Bob the Builder',
                PageSize: 20,
                PageNumber: 1,
                OrderField: "",
                OrderDirecton: ""
            }
        },
        {
            comments: "Get Phase Managers List",
            url: "ComplianceAdminService/GetCompliancePhaseManagersList",
            dataToSend: {
                ConfirmationReportingCycleId: 1,
                SearchCriteria: "abc",
                ConfirmStatus: "ALL;Confirmed;Unconfirmed"
            }
        },
        {
            comments: "Search Employee List",
            url: "ComplianceAdminService/SearchEmployees",
            dataToSend: {
                Item: "Tate"
            }
        },
        {
            comments: "Save Phase Manager Record",
            url: "ComplianceAdminService/SaveOMEPhaseManagers",
            dataToSend: {
                ConfirmationReportingCycleId: 1,
                CompliancePhaseManagerId: 0,
                CompliancePhaseManagerBusinessUnitId: 0,
                Phase2ManagerEmployeeId: 0,
                Phase3ManagerEmployeeId: 0,
                Phase4ManagerEmployeeId: 0
            }
        },
        {
            comments: "Confirm Compliance Reporting Cycle Phase Managers",
            url: "ComplianceAdminService/ConfirmCompliancePhaseManagers",
            dataToSend: {
                ConfirmationReportingCycleId: 1
            }
        },
        {
            comments: "Unconfirm Compliance Reporting Cycle Phase Managers",
            url: "ComplianceAdminService/UnconfirmCompliancePhaseManagers",
            dataToSend: {
                ConfirmationReportingCycleId: 1
            }
        },
        {
            comments: "Get the data for Manual Capture on the OME",
            url: "ComplianceAdminService/GetManualOMECaptureData",
            dataToSend: {
                ItemId: 39
            }
        },
        {
            comments: "Write the data for Manual Capture on the OME",
            url: "ComplianceAdminService/WriteManualOMECaptureData",
            dataToSend: {
                BusinessUnitId: 39,
                "RoleCategoryItems": [
                    {
                        "RoleCategoryId": 1,
                        "RoleCategoryName": "Enterprise Leadership",
                        "TargetAudience": 500,
                        "ConfirmedCompliant": 488,
                        "ConfirmedConditionally": 1,
                        "NonParticipationItems": [
                            {
                                "NonParticipationReasonId": 7,
                                "NonParticipationReasonName": "Maternity Leave",
                                "EmployeeCount": 2
                            },
                            {
                                "NonParticipationReasonId": 9,
                                "NonParticipationReasonName": "Long Leave",
                                "EmployeeCount": 4
                            },
                            {
                                "NonParticipationReasonId": 8,
                                "NonParticipationReasonName": "Extended Sick Leave",
                                "EmployeeCount": 3
                            }
                        ],
                        "Defaulters": 2
                    },
                    {
                        "RoleCategoryId": 2,
                        "RoleCategoryName": "Group Executive",
                        "TargetAudience": 500,
                        "ConfirmedCompliant": 488,
                        "ConfirmedConditionally": 1,
                        "NonParticipationItems": [
                            {
                                "NonParticipationReasonId": 7,
                                "NonParticipationReasonName": "Maternity Leave",
                                "EmployeeCount": 2
                            },
                            {
                                "NonParticipationReasonId": 9,
                                "NonParticipationReasonName": "Long Leave",
                                "EmployeeCount": 4
                            },
                            {
                                "NonParticipationReasonId": 8,
                                "NonParticipationReasonName": "Extended Sick Leave",
                                "EmployeeCount": 3
                            }
                        ],
                        "Defaulters": 2
                    },
                    {
                        "RoleCategoryId": 3,
                        "RoleCategoryName": "Group Leadership",
                        "TargetAudience": 500,
                        "ConfirmedCompliant": 488,
                        "ConfirmedConditionally": 1,
                        "NonParticipationItems": [
                            {
                                "NonParticipationReasonId": 7,
                                "NonParticipationReasonName": "Maternity Leave",
                                "EmployeeCount": 2
                            },
                            {
                                "NonParticipationReasonId": 9,
                                "NonParticipationReasonName": "Long Leave",
                                "EmployeeCount": 4
                            },
                            {
                                "NonParticipationReasonId": 8,
                                "NonParticipationReasonName": "Extended Sick Leave",
                                "EmployeeCount": 3
                            }
                        ],
                        "Defaulters": 2
                    },
                    {
                        "RoleCategoryId": 4,
                        "RoleCategoryName": "Leadership",
                        "TargetAudience": 500,
                        "ConfirmedCompliant": 488,
                        "ConfirmedConditionally": 1,
                        "NonParticipationItems": [
                            {
                                "NonParticipationReasonId": 7,
                                "NonParticipationReasonName": "Maternity Leave",
                                "EmployeeCount": 2
                            },
                            {
                                "NonParticipationReasonId": 9,
                                "NonParticipationReasonName": "Long Leave",
                                "EmployeeCount": 4
                            },
                            {
                                "NonParticipationReasonId": 8,
                                "NonParticipationReasonName": "Extended Sick Leave",
                                "EmployeeCount": 3
                            }
                        ],
                        "Defaulters": 2
                    },
                    {
                        "RoleCategoryId": 5,
                        "RoleCategoryName": "Expertise",
                        "TargetAudience": 500,
                        "ConfirmedCompliant": 488,
                        "ConfirmedConditionally": 1,
                        "NonParticipationItems": [
                            {
                                "NonParticipationReasonId": 7,
                                "NonParticipationReasonName": "Maternity Leave",
                                "EmployeeCount": 2
                            },
                            {
                                "NonParticipationReasonId": 9,
                                "NonParticipationReasonName": "Long Leave",
                                "EmployeeCount": 4
                            },
                            {
                                "NonParticipationReasonId": 8,
                                "NonParticipationReasonName": "Extended Sick Leave",
                                "EmployeeCount": 3
                            }
                        ],
                        "Defaulters": 2
                    },
                    {
                        "RoleCategoryId": 6,
                        "RoleCategoryName": "Specialisation",
                        "TargetAudience": 500,
                        "ConfirmedCompliant": 488,
                        "ConfirmedConditionally": 1,
                        "NonParticipationItems": [
                            {
                                "NonParticipationReasonId": 7,
                                "NonParticipationReasonName": "Maternity Leave",
                                "EmployeeCount": 2
                            },
                            {
                                "NonParticipationReasonId": 9,
                                "NonParticipationReasonName": "Long Leave",
                                "EmployeeCount": 4
                            },
                            {
                                "NonParticipationReasonId": 8,
                                "NonParticipationReasonName": "Extended Sick Leave",
                                "EmployeeCount": 3
                            }
                        ],
                        "Defaulters": 2
                    },
                    {
                        "RoleCategoryId": 7,
                        "RoleCategoryName": "Optimisation",
                        "TargetAudience": 500,
                        "ConfirmedCompliant": 488,
                        "ConfirmedConditionally": 1,
                        "NonParticipationItems": [
                            {
                                "NonParticipationReasonId": 7,
                                "NonParticipationReasonName": "Maternity Leave",
                                "EmployeeCount": 2
                            },
                            {
                                "NonParticipationReasonId": 9,
                                "NonParticipationReasonName": "Long Leave",
                                "EmployeeCount": 4
                            },
                            {
                                "NonParticipationReasonId": 8,
                                "NonParticipationReasonName": "Extended Sick Leave",
                                "EmployeeCount": 3
                            }
                        ],
                        "Defaulters": 2
                    },
                    {
                        "RoleCategoryId": 8,
                        "RoleCategoryName": "Execution",
                        "TargetAudience": 500,
                        "ConfirmedCompliant": 488,
                        "ConfirmedConditionally": 1,
                        "NonParticipationItems": [
                            {
                                "NonParticipationReasonId": 7,
                                "NonParticipationReasonName": "Maternity Leave",
                                "EmployeeCount": 2
                            },
                            {
                                "NonParticipationReasonId": 9,
                                "NonParticipationReasonName": "Long Leave",
                                "EmployeeCount": 4
                            },
                            {
                                "NonParticipationReasonId": 8,
                                "NonParticipationReasonName": "Extended Sick Leave",
                                "EmployeeCount": 3
                            }
                        ],
                        "Defaulters": 2
                    }
                ]
            }
        },
        {
            comments: "Get the Role Categories that we can add Non-Compliances for",
            url: "ComplianceAdminService/GetRoleCategoriesForManualConditionalCapture",
            dataToSend: {
            }
        },
        {
            comments: "Write a Manual Non-Compliance item",
            url: "ComplianceAdminService/WriteOMEManualNonComplianceItem",
            dataToSend: {
                BusinessUnitId: 39,
                RoleCategoryId: 2,
                LegislationDescription: "Legislation A",
                DescriptionOfNonCompliance: "Description of Non-Compliance",
                MitigationPlan: "Mitigation Plan",
                TargetMitigationDate: "15 June 2020"
            }
        },
        {
            comments: "Delete a Manual Non-Compliance item",
            url: "ComplianceAdminService/DeleteOMEManualNonComplianceItem",
            dataToSend: {
                ItemId: 1
            }
        },
        {
            comments: "Release a Conditional Report to a Manager",
            url: "ComplianceAdminService/ReleaseConditionalReportToManager",
            dataToSend: {
                BusinessUnitId: 70,
                PhaseOrder: 1,
                SelectedEmployeeId: 92242
            }
        },
        {
            comments: "Get Chief Compliance and Ethics Officer List",
            url: "ComplianceAdminService/GetCCEOEmployees",
            dataToSend: {
            }
        },
        {
            comments: "Add Chief Compliance and Ethics Officer",
            url: "ComplianceAdminService/AddCCEOAccess",
            dataToSend: {
                UserRoleEmployeeId: 100
            }
        },
        {
            comments: "Remove Chief Compliance and Ethics Officer",
            url: "ComplianceAdminService/RemoveCCEOAccess",
            dataToSend: {
                UserRoleEmployeeId: 100
            }
        },
        {
            comments: "Get Senior Compliance Officer List",
            url: "ComplianceAdminService/GetSCMEmployees",
            dataToSend: {
            }
        },
        {
            comments: "Add Senior Compliance Officer",
            url: "ComplianceAdminService/AddSCMAccess",
            dataToSend: {
                UserRoleEmployeeId: 100
            }
        },
        {
            comments: "Remove Senior Compliance Officer",
            url: "ComplianceAdminService/RemoveSCMAccess",
            dataToSend: {
                UserRoleEmployeeId: 100
            }
        },
        {
            comments: "Get Compliance Officer List",
            url: "ComplianceAdminService/GetComplianceOfficers",
            dataToSend: {
            }
        },
        {
            comments: "Add Compliance Officer",
            url: "ComplianceAdminService/AddComplianceOfficerRecord",
            dataToSend: {
                ComplianceOfficerEmployeeId: 100,
                ComplianceOfficerBusinessUnitId: 39
            }
        },
        {
            comments: "Remove Compliance Officer",
            url: "ComplianceAdminService/RemoveComplianceOfficerRecord",
            dataToSend: {
                ComplianceOfficerEmployeeId: 100,
                ComplianceOfficerBusinessUnitId: 39
            }
        },
        {
            comments: "Get Compliance Super Users List",
            url: "ComplianceAdminService/GetCSUEmployees",
            dataToSend: {
            }
        },
        {
            comments: "Add Compliance Super User",
            url: "ComplianceAdminService/AddCSUAccess",
            dataToSend: {
                UserRoleEmployeeId: 100
            }
        },
        {
            comments: "Remove Compliance Super User",
            url: "ComplianceAdminService/RemoveCSUAccess",
            dataToSend: {
                UserRoleEmployeeId: 100
            }
        }
    ]
    //********************************************************************************
});  