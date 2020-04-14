testData.push({

    groupTitle: "Development Testing",

    //********************************************************************************
    apiCalls: [
        {
            comments: "Reset POPI Consent for logged on User",
            url: "DevelopmentTestingService/ResetPOPIConsent",
            dataToSend: {
            }
        },
        {
            comments: "Update Security Group for logged on User",
            url: "DevelopmentTestingService/UpdateUserGroup",
            dataToSend: {
                "UserGroupId": 5,
            }
        },
        {
            comments: "Assign the currently logged on User to the Currently Active Compliance Phase",
            url: "DevelopmentTestingService/AssignToCurrentPhase",
            dataToSend: {
            }
        },
        {
            comments: "Remove the currently logged on User from the Currently Active Compliance Phase",
            url: "DevelopmentTestingService/AssignToNonCurrentPhase",
            dataToSend: {
            }
        },
        {
            comments: "Remove the currently logged on user from ALL Compliance Phases for the Currently Active Compliance Reporting Cycle",
            url: "DevelopmentTestingService/RemoveFromAllPhases",
            dataToSend: {
            }
        },
        {
            comments: "Close all Phases for the current Confirmation Reporting Cycle",
            url: "DevelopmentTestingService/CloseAllPhases",
            dataToSend: {
            }
        },
        {
            comments: "Check Validity of all recorded Policy URLs for Dead Links",
            url: "DevelopmentTestingService/CheckPolicyURLs",
            dataToSend: {
                Item: "fidsupport@softiceit.co.za"
            }
        },
        {
            comments: "Update Assignment of Employees to Phases",
            url: "DevelopmentTestingService/AssignEmployeesToPhases",
            dataToSend: {
                DaysToPhaseOpen: 30
            }
        },
        {
            comments: "Send Compliance Reminders that are Due",
            url: "DevelopmentTestingService/SendComplianceReminders",
            dataToSend: {
                MailTemplateFolderName: "C:\\Dropbox\\Development\\GitHub\\deloitte-sds-api\\OneLifeDurban.Services.ComplianceCommunication\\MailTemplates",
                TestEmailAddress: "fidsupport@softiceit.co.za",
                RunAsDate: "5 May 2019",
                MaximumEmployeesToSendTo: 10,
                ImitateSend: true,
                CommunicationType: ""
            }
        },
        {
            comments: "Send the notifications that go to the Compliance Officer when the employees submits with non-compliance",
            url: "DevelopmentTestingService/SendComplianceProcessEmailsToComplianceOfficer",
            dataToSend: {
            }
        },
        {
            comments: "Send the notifications that go back to the Employee when the Compliance Officer has dealt with all non-compliances",
            url: "DevelopmentTestingService/SendComplianceProcessEmailsBackToEmployee",
            dataToSend: {
            }
        },
        {
            comments: "Time Shift the 'current' Reporting Cycle one month earlier",
            url: "DevelopmentTestingService/MoveReportingCycleOneMonthEarlier",
            dataToSend: {
            }
        },
        {
            comments: "Time Shift the 'current' Reporting Cycle one month later",
            url: "DevelopmentTestingService/MoveReportingCycleOneMonthLater",
            dataToSend: {
            }
        },
        {
            comments: "Get the Test Users List",
            url: "DevelopmentTestingService/GetTestUsers",
            dataToSend: {
            }
        },
        {
            comments: "Reset Confirmation / Declaration data for the logged on user",
            url: "DevelopmentTestingService/ResetConfirmationData",
            dataToSend: {
            }
        }
    ]
    //********************************************************************************
});  