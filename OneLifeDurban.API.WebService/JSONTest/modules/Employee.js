testData.push({

    groupTitle: "Employee",

    //********************************************************************************
    apiCalls: [
        {
            comments: "Get Employee POPI Consent details",
            url: "EmployeeService/GetPOPIConsent",
            dataToSend: {
            }
        },
        {
            comments: "Get Is Compliance Phase Open for Employee",
            url: "EmployeeService/IsEmployeePhaseOpen",
            dataToSend: {
            }
        },
        {
            comments: "Update POPI consent",
            url: "EmployeeService/UpdatePOPIConsent",
            dataToSend: {
                EmployeePOPIConsentGiven: true
            }
        },
        {
            comments: "Get Employee Mobile App status",
            url: "EmployeeService/GetEmployeeMobileAppStatus",
            dataToSend: {
            }
        },
        {
            comments: "Get Employee Landing Page Status",
            url: "EmployeeService/GetEmployeeLandingPageStatus",
            dataToSend: {
            }
        }
    ]
    //********************************************************************************
});  