testData.push({

    groupTitle: "Compliance",

    //********************************************************************************
    apiCalls: [
        {
            comments: "Get Is Compliance Phase Open",
            url: "ComplianceService/IsPhaseOpen",
            dataToSend: {
            }
        },
        {
            comments: "Get the Compliance Record for the Employee",
            url: "ComplianceService/GetEmployeeComplianceRecord",
            dataToSend: {
            }
        },
        {
            comments: "Get the Non Compliance Records for the employee",
            url: "ComplianceService/ListEmployeeNonCompliance",
            dataToSend: {
            }
        },
        //{
        //    comments: "Add Non Compliance Records for the employee",
        //    url: "ComplianceService/WriteEmployeeNonComplianceList",
        //    dataToSend: {
        //        NonComplianceItems: [{
        //                LegislationDescription: "",
        //                DescriptionOfNonCompliance: "",
        //                MitigationPlan: "",
        //                TargetMitigationDate: "18 Mar 2019"
        //            }]
        //    }
        //},
        {
            comments: "Confirm Employee Policy Comprehension",
            url: "ComplianceService/ConfirmEmployeePolicyComprehension",
            dataToSend: {
            }
        },
        {
            comments: "Confirm Employee Compliance",
            url: "ComplianceService/ConfirmEmployeeCompliance",
            dataToSend: {
            }
        },
        {
            comments: "Confirm Employee Non-Compliance",
            url: "ComplianceService/ConfirmEmployeeNonCompliance",
            dataToSend: {
                NonComplianceItems: [{
                    LegislationDescription: "",
                    DescriptionOfNonCompliance: "",
                    MitigationPlan: "",
                    TargetMitigationDate: "18 Mar 2019"
                }]
            }
        },
        {
            comments: "Confirm Employee OMEs Conditionals Acknowledged",
            url: "ComplianceService/ConfirmEmployeeBUConditionalsAcknowledged",
            dataToSend: {
            }
        },
        {
            comments: "Confirm Employee Declaration",
            url: "ComplianceService/ConfirmEmployeeSDSDeclaration",
            dataToSend: {
                
            }
        },
        {
            comments: "Log Policy Navigation",
            url: "ComplianceService/LogPolicyNavigation",
            dataToSend: {
                ItemId: 1
            }
        },
        {
            comments: "List Compliance Officers for logged on User",
            url: "ComplianceService/ListUserComplianceOfficers",
            dataToSend: {
            }
        }
    ]
    //********************************************************************************
});  