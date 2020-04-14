testData.push({

    groupTitle: "Compliance Planning",

    //********************************************************************************
    apiCalls: [
        //******************* POLICIES **************************
        {
            comments: "List Policies for the Specified Reporting Cycle",
            url: "CompliancePlanningService/ListPolicies",
            dataToSend: {
                ConfirmationReportingCycleId: 1
            }
        },
        {
            comments: "Add / Edit a Policy for the Specified Reporting Cycle",
            url: "CompliancePlanningService/WritePolicy",
            dataToSend: {
                ConfirmationReportingCycleId: 1,
                PolicyId: 0,
                PolicyLinkURL: "",
                PolicyTitle: "",
                PolicyDescription: "",
                PolicyDisplayOrder: 0
            }
        },
        {
            comments: "Delete a Policy for the Specified Reporting Cycle",
            url: "CompliancePlanningService/DeletePolicy",
            dataToSend: {
                ConfirmationReportingCycleId: 1,
                PolicyId: 0
            }
        },
        {
            comments: "Move a Policy UP in the order for the Specified Reporting Cycle",
            url: "CompliancePlanningService/MovePolicyUp",
            dataToSend: {
                ConfirmationReportingCycleId: 1,
                ItemId: 1
            }
        },
        {
            comments: "Move a Policy DOWN in the order for the Specified Reporting Cycle",
            url: "CompliancePlanningService/MovePolicyDown",
            dataToSend: {
                ConfirmationReportingCycleId: 1,
                ItemId: 1
            }
        },
        //******************* RISK CATEGORIES **************************
        {
            comments: "List Risk Categories for the Specified Reporting Cycle",
            url: "CompliancePlanningService/ListRiskCategories",
            dataToSend: {
                ConfirmationReportingCycleId: 1
            }
        },
        {
            comments: "Add / Edit a Risk Category for the Specified Reporting Cycle",
            url: "CompliancePlanningService/WriteRiskCategory",
            dataToSend: {
                ConfirmationReportingCycleId: 1,
                RiskCategoryId: 0,
                RiskCategoryTitle: "",
                RiskCategoryDescription: "",
                RiskCategoryDisplayOrder: 0,
                IsActive: true
            }
        },
        {
            comments: "Delete a Risk Category for the Specified Reporting Cycle",
            url: "CompliancePlanningService/DeleteRiskCategory",
            dataToSend: {
                ConfirmationReportingCycleId: 1,
                RiskCategoryId: 0
            }
        },
        {
            comments: "Move a Risk Category UP in the order for the Specified Reporting Cycle",
            url: "CompliancePlanningService/MoveRiskCategoryUp",
            dataToSend: {
                ConfirmationReportingCycleId: 1,
                ItemId: 1
            }
        },
        {
            comments: "Move a Risk Category DOWN in the order for the Specified Reporting Cycle",
            url: "CompliancePlanningService/MoveRiskCategoryDown",
            dataToSend: {
                ConfirmationReportingCycleId: 1,
                ItemId: 1
            }
        },
        //******************* REASONS FOR CONFIRMED REPORTED **************************
        {
            comments: "List Confirmed Reported Reasons for the Specified Reporting Cycle",
            url: "CompliancePlanningService/ListConfirmedReportedReasons",
            dataToSend: {
                ConfirmationReportingCycleId: 1
            }
        },
        {
            comments: "Add / Edit a Confirmed Reported Reason for the Specified Reporting Cycle",
            url: "CompliancePlanningService/WriteConfirmedReportedReason",
            dataToSend: {
                ConfirmationReportingCycleId: 1,
                ConfirmedReportedReasonId: 0,
                ConfirmedReportedReasonDescription: "",
                ConfirmedReportedReasonDisplayOrder: 0,
                IsActive: true
            }
        },
        {
            comments: "Delete a Confirmed Reported Reason for the Specified Reporting Cycle",
            url: "CompliancePlanningService/DeleteConfirmedReportedReason",
            dataToSend: {
                ConfirmationReportingCycleId: 1,
                ConfirmedReportedReasonsId: 0
            }
        },
        {
            comments: "Move a Confirmed Reported Reason UP in the order for the Specified Reporting Cycle",
            url: "CompliancePlanningService/MoveConfirmedReportedReasonUp",
            dataToSend: {
                ConfirmationReportingCycleId: 1,
                ItemId: 1
            }
        },
        {
            comments: "Move a Confirmed Reported Reason DOWN in the order for the Specified Reporting Cycle",
            url: "CompliancePlanningService/MoveConfirmedReportedReasonDown",
            dataToSend: {
                ConfirmationReportingCycleId: 1,
                ItemId: 1
            }
        },
        //******************* REASONS FOR NON PARTICIPATION **************************
        {
            comments: "List Non Participation Reasons for the Specified Reporting Cycle",
            url: "CompliancePlanningService/ListNonParticipationReasons",
            dataToSend: {
                ConfirmationReportingCycleId: 1
            }
        },
        {
            comments: "Add / Edit a Non Participation Reason for the Specified Reporting Cycle",
            url: "CompliancePlanningService/WriteNonParticipationReason",
            dataToSend: {
                ConfirmationReportingCycleId: 1,
                NonParticipationReasonId: 0,
                NonParticipationReasonDescription: "",
                NonParticipationReasonDisplayOrder: 0
            }
        },
        {
            comments: "Delete a Non Participation Reason for the Specified Reporting Cycle",
            url: "CompliancePlanningService/DeleteNonParticipationReason",
            dataToSend: {
                ConfirmationReportingCycleId: 1,
                NonParticipationReasonId: 0
            }
        },
        {
            comments: "Move a Non Participation Reason UP in the order for the Specified Reporting Cycle",
            url: "CompliancePlanningService/MoveNonParticipationReasonUp",
            dataToSend: {
                ConfirmationReportingCycleId: 1,
                ItemId: 1
            }
        },
        {
            comments: "Move a Non Participation Reason DOWN in the order for the Specified Reporting Cycle",
            url: "CompliancePlanningService/MoveNonParticipationReasonDown",
            dataToSend: {
                ConfirmationReportingCycleId: 1,
                ItemId: 1
            }
        },
        //******************* EMAIL TEMPLATES **************************
        {
            comments: "List Email Templates for the Specified Reporting Cycle",
            url: "CompliancePlanningService/ListEmailTemplates",
            dataToSend: {
                ConfirmationReportingCycleId: 1
            }
        },
        {
            comments: "Edit an Email Template for the Specified Reporting Cycle (no adding because types are pre-defined)",
            url: "CompliancePlanningService/WriteEmailTemplate",
            dataToSend: {
                ConfirmationReportingCycleId: 1,
                EmailType: "PreAnnouncement",
                EmailTitle: "ANNUAL COMPLIANCE CONFIRMATION - NOW DIGITAL",
                EmailSubject: "Annual Compliance Confirmation Platform",
                EmailBody: "This is where it is going to get interesting"
            }
        },
        {
            comments: "Send a test email message of the specified type for the Specified Reporting Cycle to the logged on user",
            url: "CompliancePlanningService/SendTestEmailToLoggedOnUser",
            dataToSend: {
                ConfirmationReportingCycleId: 1,
                Item: "PreAnnouncement"
            }
        },
        {
            comments: "Get recipients for Email Type",
            url: "CompliancePlanningService/GetRecipientsForEmailType",
            dataToSend: {
                ConfirmationReportingCycleId: 1,
                Item: "WeeklyReminder-Phase3"
            }
        },
        {
            comments: "Send a manual email to the recipients",
            url: "CompliancePlanningService/SendEmailToRecipients",
            dataToSend: {
                ConfirmationReportingCycleId: 1,
                Item: "WeeklyReminder-Phase3"
            }
        },
        //******************* OME / ROLE CATEGORY EXCEPTIONS **************************
        {
            comments: "List OME / Role Category Exceptions for the Specified Reporting Cycle",
            url: "CompliancePlanningService/ListOMERoleCategoryExceptions",
            dataToSend: {
                ConfirmationReportingCycleId: 1
            }
        },
        {
            comments: "Add an OME / Role Category Exception for the Specified Reporting Cycle",
            url: "CompliancePlanningService/WriteOMERoleCategoryException",
            dataToSend: {
                ConfirmationReportingCycleId: 1,
                ConfirmationPhaseId: 1,
                BusinessUnitId: 45,
                RoleCategoryId: 11
            }
        },
        {
            comments: "Delete an OME / Role Category Exception for the Specified Reporting Cycle",
            url: "CompliancePlanningService/DeleteOMERoleCategoryException",
            dataToSend: {
                ConfirmationReportingCycleId: 1,
                BusinessUnitId: 45,
                RoleCategoryId: 11
            }
        },        
        {
            comments: "Get all the Role Categories for the specified OME for which we can set up OME / Role Category Exceptions for the system",
            url: "CompliancePlanningService/GetRoleCategoriesForOMEExceptions",
            dataToSend: {
                ConfirmationReportingCycleId: 1,
                ItemId: 39
            }
        },
        //******************* INDIVIDUAL EXCEPTIONS **************************
        {
            comments: "List Individual Exceptions for the Specified Reporting Cycle",
            url: "CompliancePlanningService/ListIndividualExceptions",
            dataToSend: {
                ConfirmationReportingCycleId: 1
            }
        },
        {
            comments: "Add an Individual Exception for the Specified Reporting Cycle",
            url: "CompliancePlanningService/WriteIndividualException",
            dataToSend: {
                ConfirmationReportingCycleId: 1,
                ConfirmationPhaseId: 1,
                IndividualEmployeeId: 62401
            }
        },
        {
            comments: "Delete an Individual Exception for the Specified Reporting Cycle",
            url: "CompliancePlanningService/DeleteIndividualException",
            dataToSend: {
                ConfirmationReportingCycleId: 1,
                IndividualEmployeeId: 62401
            }
        },
        {
            comments: "Get all the Individuals for which we can set up Individual Exceptions for the system",
            url: "CompliancePlanningService/GetIndividualsForExceptions",
            dataToSend: {
                ConfirmationReportingCycleId: 1,
                Item: "sds"
            }
        },
        //******************* COMPLIANCE CYCLES AND PHASES **************************
        {
            comments: "List Compliance Cycles",
            url: "CompliancePlanningService/ListComplianceCycles",
            dataToSend: {
            }
        },
        {
            comments: "Add new compliance cycle",
            url: "CompliancePlanningService/WriteNewComplianceCycle",
            dataToSend: {
            }
        },
        {
            comments: "List Compliance Cycle Phases",
            url: "CompliancePlanningService/ListCompliancePhases",
            dataToSend: {
                ConfirmationReportingCycleId: 1,
                RunAsDate: "1 July 2019"
            }
        },
        {
            comments: "Close Compliance Cycle Phase",
            url: "CompliancePlanningService/CloseCompliancePhase",
            dataToSend: {
                CompliancePhaseId: 1,
            }
        },
        {
            comments: "Open Compliance Cycle Phase",
            url: "CompliancePlanningService/OpenCompliancePhase",
            dataToSend: {
                CompliancePhaseId: 1,
            }
        },
        {
            comments: "Update Compliance Cycle Phase",
            url: "CompliancePlanningService/UpdateCompliancePhase",
            dataToSend: {
                CompliancePhaseId: 1,
                StartDate: "",
                EndDate: ""
            }
        },
        {
            comments: "Confirm Compliance Cycle Phases",
            url: "CompliancePlanningService/ConfirmPhases",
            dataToSend: {
                ConfirmationReportingCycleId: 1,
            }
        },
        {
            comments: "UnConfirm Compliance Cycle Phases",
            url: "CompliancePlanningService/UnConfirmPhases",
            dataToSend: {
                ConfirmationReportingCycleId: 1,
            }
        },
        {
            comments: "Confirm Compliance Cycle Policies",
            url: "CompliancePlanningService/ConfirmPolicies",
            dataToSend: {
                ConfirmationReportingCycleId: 1,
            }
        },
        {
            comments: "UnConfirm Compliance Cycle Policies",
            url: "CompliancePlanningService/UnConfirmPolicies",
            dataToSend: {
                ConfirmationReportingCycleId: 1,
            }
        },
        {
            comments: "Confirm Compliance Cycle Risk Categories",
            url: "CompliancePlanningService/ConfirmRiskCategories",
            dataToSend: {
                ConfirmationReportingCycleId: 1,
            }
        },
        {
            comments: "UnConfirm Compliance Cycle Risk Categories",
            url: "CompliancePlanningService/UnConfirmRiskCategories",
            dataToSend: {
                ConfirmationReportingCycleId: 1,
            }
        },
        {
            comments: "Confirm Compliance Cycle Email Templates",
            url: "CompliancePlanningService/ConfirmEmailTemplates",
            dataToSend: {
                ConfirmationReportingCycleId: 1,
            }
        },
        {
            comments: "UnConfirm Compliance Cycle Email Templates",
            url: "CompliancePlanningService/UnConfirmEmailTemplates",
            dataToSend: {
                ConfirmationReportingCycleId: 1,
            }
        },
        {
            comments: "Confirm Compliance Cycle Exceptions",
            url: "CompliancePlanningService/ConfirmExceptions",
            dataToSend: {
                ConfirmationReportingCycleId: 1,
            }
        },
        {
            comments: "UnConfirm Compliance Cycle Exceptions",
            url: "CompliancePlanningService/UnConfirmExceptions",
            dataToSend: {
                ConfirmationReportingCycleId: 1,
            }
        },
        {
            comments: "Confirm Compliance Cycle Reasons for Non-Compliance",
            url: "CompliancePlanningService/ConfirmConfirmedReportedReason",
            dataToSend: {
                ConfirmationReportingCycleId: 1,
            }
        },
        {
            comments: "UnConfirm Compliance Cycle Reasons for Non-Compliance",
            url: "CompliancePlanningService/UnConfirmConfirmedReportedReason",
            dataToSend: {
                ConfirmationReportingCycleId: 1,
            }
        },
        {
            comments: "Confirm Compliance Cycle Reasons for Non-Participation",
            url: "CompliancePlanningService/ConfirmNonParticipationReason",
            dataToSend: {
                ConfirmationReportingCycleId: 1,
            }
        },
        {
            comments: "UnConfirm Compliance Cycle Reasons for Non-Participation",
            url: "CompliancePlanningService/UnConfirmNonParticipationReason",
            dataToSend: {
                ConfirmationReportingCycleId: 1,
            }
        }
    ]
    //********************************************************************************
});  