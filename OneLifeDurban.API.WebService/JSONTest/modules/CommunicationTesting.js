testData.push({

    groupTitle: "Communication Testing",

    //********************************************************************************
    apiCalls: [
        {
            comments: "Send OME Transfer Emails (assuming a report must be unreleased)",
            url: "DevelopmentTestingService/SendOMETransferEmailAndUnReleaseReport",
            dataToSend: {
            }
        },
        {
            comments: "Send OME Transfer Emails (assuming no report to be unreleased)",
            url: "DevelopmentTestingService/SendOMETransferEmailWithoutUnReleasingReport",
            dataToSend: {
            }
        },
        {
            comments: "Send Non-Compliance Confirmation Notification to CO (Phase 1, 2) or CCEO (Phase 3, 4)",
            url: "DevelopmentTestingService/SendNonComplianceConfirmationNotificationToCOorCCEO",
            dataToSend: {
            }
        },
        {
            comments: "Send Confirmation that CO has completed processing Non-Compliances to Employee",
            url: "DevelopmentTestingService/SendComplianceCompletionNotificationToEmployee",
            dataToSend: {
            }
        },
        {
            comments: "Send Email to CCEO when all Phase 2 Managers have declared and Non-Compliances are dealt with",
            url: "DevelopmentTestingService/SendPhase2EmailToCCEOs",
            dataToSend: {
            }
        },
        {
            comments: "Send Email to CCEO when all Phase 3 Managers have declared",
            url: "DevelopmentTestingService/SendPhase3EmailToCCEOs",
            dataToSend: {
            }
        },
        {
            comments: "Send Email to CCEO when all Phase 4 Managers have declared",
            url: "DevelopmentTestingService/SendPhase4EmailToCCEOs",
            dataToSend: {
            }
        }
    ]
    //********************************************************************************
});  