testData.push({

    groupTitle: "Compliance Reporting",

    //********************************************************************************
    apiCalls: [
        {
            comments: "Compliance Conditional Report",
            url: "ComplianceReportingService/ReportEmployeeNonCompliance",
            dataToSend: {
                "SelectedEmployeeId": null,
                "BusinessUnitId": 0,
                "PhaseOrder": 0,
                "IncludeDefaulters": true
            }
        },
        {
            comments: "Compliance Conditional Report - previously Generated",
            url: "ComplianceReportingService/ReportEmployeeNonComplianceWithoutRegenerating",
            dataToSend: {
                "SelectedEmployeeId": 92242,
                "BusinessUnitId": 70,
                "PhaseOrder": 1,
                "IncludeDefaulters": true
            }
        },
        {
            comments: "Employee Status Report",
            url: "ComplianceReportingService/EmployeeStatusReport",
            dataToSend: {
                "ConfirmationReportingCycleIds": [1,2],
                "BusinessUnitIds": null
            }
        },
        {
            comments: "Employee Status Report",
            url: "ComplianceReportingService/ReportConditionalsForOME",
            dataToSend: {
                "ConfirmationReportingCycleIds": [1, 2],
                "BusinessUnitIds": [1, 2],
                "SelectedPhaseOrder": 1,
                "ReportType": "WithDefaulters/WithoutDefaulters/OnlyDefaulters"
            }
        },
        {
            comments: "Get Confirmation Completers Stats",
            url: "ComplianceReportingService/GetConfirmationProcessCompletionStats",
            dataToSend: {
                SelectedConfirmationPeriodId: 1,
                BusinessUnitIds: [70, 39, 46]
            }
        }
    ]
    //********************************************************************************
});  