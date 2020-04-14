testData.push({

    groupTitle: "Declaration General",

    //********************************************************************************
    apiCalls: [
        //Declaration
        //:get policies
        {
            comments: "Get the policies that are presently active for Declarations",
            url: "DeclarationService/GetDeclarationPolicies",
            dataToSend: {}
        },
        //:get enrolled mobile devices
        {
            comments: "Get the mobile devices for the logged in employee",
            url: "DeclarationService/GetMobileDevices",
            dataToSend: {}
        },
        //:deactivate mobile device
        {
            comments: "Deactivate a mobile device",
            url: "DeclarationService/DeactivateMobileDevice",
            dataToSend: {
                Item: "12345"
            }
        },
        //:get QR code to enroll mobile device
        {
            comments: "Generate QR Code to enroll mobile device",
            url: "DeclarationService/GenerateDeviceEnrollmentQRCode",
            dataToSend: {
            }
        },
        //:check if the device is enrolled
        {
            comments: "Check if the Device with the specified QR Code GUID is enrolled",
            url: "DeclarationService/CheckDeviceEnrolled",
            dataToSend: {
                QRCodeGUID: "theguid-from-the-result"
            }
        },
        //:Outstanding CIPC items for employee
        {
            comments: "Outstanding CIPC items for employee",
            url: "DeclarationService/CIPCOutstandingItems",
            dataToSend: {
            }
        },
        //:CIPC Reject Reasons
        {
            comments: "CIPC Reject Reasons",
            url: "DeclarationService/GetCIPCRejectReasons",
            dataToSend: {
            }
        },
        //:CIPC Reject Reasons
        {
            comments: "CIPC Response Result",
            url: "DeclarationService/GetCIPCResponseAction",
            dataToSend: {
                CIPCChildId: 1,
                CIPCResponseId: 1,
                CIPCIdNumber: "3654683553"
            }
        },
        //:CIPC Write Reject Reasons
        {
            comments: "CIPC Write Reject Reasons",
            url: "DeclarationService/WriteCIPCRejectItem",
            dataToSend: {
                CIPCChildId: 1,
                CIPCResponseId: 1,
                CIPCIdNumber: "3654683553",
                DetailedReason: "",
                RegistrationNumber: "",
                ApproverEmployeeId: 0
            }
        },
        //:Get Role Categories that can approve
        {
            comments: "Get Role Categories that can approve",
            url: "DeclarationService/GetApprovalSectionDirectorshipText",
            dataToSend: {
            }
        },
        //:Get Role Categories that can approve
        {
            comments: "Get Role Categories that can approve",
            url: "DeclarationService/GetApprovalSectionAllPagesText",
            dataToSend: {
            }
        },
        {
            comments: "Get policy docyments per section",
            url: "DeclarationService/GetDeclarationPoliciesForDeclarationSection",
            dataToSend: {
                Item: "personalinformation/relatedparty/directorship/privatework/shares/gift/materialtransaction/conflictofinterest"
            }
        },
        //:Get Approvers
        {
            comments: "Get the approvers for the authenticated employee",
            url: "DeclarationService/GetApprovers",
            dataToSend: {
            }
        },
        //:Get Default Approver for the logged on employee
        {
            comments: "Get the default approver for the authenticated employee",
            url: "DeclarationService/GetDefaultApprover",
            dataToSend: {
            }
        }
    ]
    //********************************************************************************
});  