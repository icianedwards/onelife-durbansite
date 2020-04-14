testData.push({

    groupTitle: "Acting-Approval",

    //********************************************************************************
    apiCalls: [
        {
            comments: "Get Role Categories",
            url: "ActingApproverService/GetRoleCategories",
            dataToSend: {
            }
        },
        {
            comments: "Get OMEs",
            url: "ActingApproverService/GetBusinessUnits",
            dataToSend: {

            }
        },
        {
            comments: "Get Acting Approval Employee List",
            url: "ActingApproverService/GetEmployeesList",
            dataToSend: {
                "BusinessUnitIds": 1,
                "RoleCategories": 1,
                "AppointmentType": "Vacancy",
                "SearchCriteria": ""
            }
        },
        {
            comments: "Write Acting Approvals Vacancy",
            url: "ActingApproverService/WriteActingApprovalsVacancy",
            dataToSend: {
                "CurrentApproverName": "",
                "CurrentApproverId": 0,
                "VacancyText": "",
                "VacancyId": 0,
                "DateFrom": "",
                "DateTo": "",
                "RecieveNotification": false,
                "DesignationReasons": "",
                "EmployeeVacancyIds": []
            }
        },
        {
            comments: "Write Acting Approvals Employee",
            url: "ActingApproverService/WriteActingApprovalsEmployee",
            dataToSend: {
                "DefaultApproverName": "",
                "DefaultApproverId": 0,
                "AppointedApproverName": "",
                "AppointedApproverId": 0,
                "DateFrom": "",
                "DateTo": "",
                "RecieveNotification": false,
                "DesignationReasons": "",
                "ReportingLineEmployeeIds": [],
                "SameRoleEmployeeIds": []
            }
        },
        {
            comments: "Get Current Approvers",
            url: "ActingApproverService/GetCurrentApprovers",
            dataToSend: {
                "Item": ""
            }
        },
        {
            comments: "Get Approvers For Vacancy",
            url: "ActingApproverService/GetApproversForVacancy",
            dataToSend: {
                "ItemId": 6
            }
        },
        {
            comments: "Get Employees reporting to Approver Acting for the Vacancy",
            url: "ActingApproverService/EmployeesReportingApproverActing",
            dataToSend: {
                "ItemId": 1
            }
        },
        {
            comments: "Get Approvers",
            url: "ActingApproverService/GetApprovers",
            dataToSend: {
                "Item": "thane"
            }
        },
        {
            comments: "Get Employee for the Acting Employee",
            url: "ActingApproverService/GetEmployeeForActingEmployee",
            dataToSend: {
                "ItemId": 10
            }
        },
        {
            comments: "Deactivate Acting Approver",
            url: "ActingApproverService/DeactivateActingApprover",
            dataToSend: {
                "ItemId": 65
            }
        },
        {
            comments: "Get List of Approver Reporting Line and Same Role Category Employees",
            url: "ActingApproverService/EmployeeReportingList",
            dataToSend: {
                "ItemId": 34
            }
        }
    ]
    //********************************************************************************
});  