testData.push({

    groupTitle: "Mobile App",

    //********************************************************************************
    apiCalls: [

        //Device Enrollment
        {
            comments: "Enroll a new device for a user",
            url: "UserService/EnrollDevice",
            dataToSend: {
                QRCodeGUID: "",
                PINCode: "",
                DeviceUUID: "",
                DevicePlatform: "",
                DeviceModel: "",
                DeviceVersion: ""
            }
        },
        //Device Unenrollment
        {
            comments: "Unenroll a device for a user",
            url: "UserService/UnenrollDevice",
            dataToSend: {
            }
        },
        //Declaration
        //:get related parties
        {
            comments: "Get the Employee's Related Parties",
            url: "DeclarationService/RelatedPartiesList",
            dataToSend: {}
        },
        //:write related party
        {
            comments: "Write the Employee's Related Party Details",
            url: "DeclarationService/WriteRelatedParty",
            dataToSend: {
                RelatedPartyId: null,
                RelationshipTypeId: 2,
                FirstName: "Bob",
                Surname: "Dillon",
                IdentificationRegistrationNumber: "1234567890123",
                CompanyTypeId: null,
                CompanyName: null,
                CompanyTypeOther: null
            }
        },
        //:delete related party
        {
            comments: "Delete the Employee's Related Party",
            url: "DeclarationService/DeleteRelatedParty",
            dataToSend: {
                ItemId: 2334
            }
        },
        //:get currencies list
        {
            comments: "Get CurrencyTypes List",
            url: "DeclarationService/CurrencyTypesList",
            dataToSend: {}
        },
        //:get company types list
        {
            comments: "Get Company Types List",
            url: "DeclarationService/CompanyTypesList",
            dataToSend: {
                ItemId: null
            }
        },
        //:get company types list
        {
            comments: "Get Conflict Types List",
            url: "DeclarationService/ConflictTypesList",
            dataToSend: {}
        },
        //:get relationship types list
        {
            comments: "Get Relationship Types List",
            url: "DeclarationService/RelationshipTypesList",
            dataToSend: {}
        },
        //:get entity types list
        {
            comments: "Get Entity Types List",
            url: "DeclarationService/EntityTypesList",
            dataToSend: {}
        },
        //:get entities list
        {
            comments: "Get Entities List",
            url: "DeclarationService/EntitiesListForEntityType",
            dataToSend: {
                ItemId: 5           //entity type id
            }
        },
        //:number of items to approve
        {
            comments: "Get Number of items to approve",
            url: "DeclarationService/AllItemsToApproveCount",
            dataToSend: {}
        },
        //:list of items to approve
        {
            comments: "Get Summary List of items to approve",
            url: "DeclarationService/AllItemsToApproveSummary",
            dataToSend: {}
        },
        //:list of items to approve
        {
            comments: "Yearly confirmation of declaration",
            url: "DeclarationService/YearlyConfirmation",
            dataToSend: {}
        },
        //:is the logged on user an approver
        {
            comments: "Is the logged on user an approver",
            url: "DeclarationService/IsApprover",
            dataToSend: {}
        },
        //:can the logged on user submit material transactions
        {
            comments: "Can the logged on user submit material transactions",
            url: "DeclarationService/CanDoMaterialTransactions",
            dataToSend: {}
        },
        //:are we in the period for submitting the yearly confirmation
        {
            comments: "Are we in the period for submitting the yearly confirmation",
            url: "DeclarationService/CanDoYearlyConfirmation",
            dataToSend: {}
        },
        //:get delegated approvers list
        {
            comments: "Get Delegated Approvers List",
            url: "DeclarationService/GetDelegatedApprover",
            dataToSend: {
                ItemId: 5000
            }
        },
        //:get approvers list
        {
            comments: "Get Approvers List",
            url: "DeclarationService/GetApprovers",
            dataToSend: {
                Item: "gifts"
            }
        },
        //:get the default approver
        {
            comments: "Get Default Approver",
            url: "DeclarationService/GetDefaultApprover",
            dataToSend: {
                Item: "gifts"
            }
        },
        //:get the default approver
        {
            comments: "Get Role Categories that can Approve",
            url: "DeclarationService/GetApprovalRoleCategories",
            dataToSend: {
                Item: "gifts"
            }
        },
        //:upload employee attachment
        {
            comments: "Upload Employee Attachment",
            url: "MediaService/UploadEmployeeAttachment",
            dataToSend: {
                DeclarationType: "EmployeeDirectorship/EmployeeGift/EmployeeConflictInterest/EmployeeFinancialInterest/EmployeeExtraWork/Employee<aterialTransaction",
                Description: "",
                EmployeeType: "Employee/Approver",
                URLLink: ""
            }
        },
        //:get employee attachment list
        {
            comments: "GET Employee Attachment List",
            url: "DeclarationService/GetEmployeeAttachmentList",
            dataToSend: {
                DeclarationId: 3321,
                DeclarationType: "EmployeeDirectorship/EmployeeGift/EmployeeConflictInterest/EmployeeFinancialInterest/EmployeeExtraWork/Employee<aterialTransaction",                
                EmployeeType: "Employee"
            }
        },
        //:delete employee attachment
        {
            comments: "Delete Employee Attachment",
            url: "DeclarationService/DeleteEmployeeAttachment",
            dataToSend: {
                ItemId: 3321
            }
        },
        //Directorships
        //:get directorships list
        {
            comments: "Get Directorships List",
            url: "DirectorshipsService/List",
            dataToSend: {}
        },
        //:get shares previous declaration list
        {
            comments: "Get Directorship Items for Previous Year Declarations",
            url: "DirectorshipsService/ListPrevious",
            dataToSend: {}
        },
        //:get directorship previous declaration list
        {
            comments: "Get Directorship Items for Previous Year Declarations for the WEB system",
            url: "DirectorshipsService/ListPreviousWeb",
            dataToSend: {}
        },
        //:get shares delete declaration
        {
            comments: "Delete Directorships Item",
            url: "DirectorshipsService/Delete",
            dataToSend: { ItemId: 4091 }
        },
        //:get shares add declaration
        {
            comments: "Add / Update Directorships Item",
            url: "DirectorshipsService/WriteItem",
            dataToSend: {
                Id: null,
                EmployeeDependantId: null,
                CompanyType: "Listed",
                UnlistedCompanyTypeId: null,
                UnlistedCompanyTypeOther: null,
                SasolEntityId: null,
                CompanyRegistrationNumber: "5465/654654/65",
                CompanyName: "ABC XYZ",
                AppointmentDate: "13 Jan 2017",
                TerminationDate: null,
                NumberOfDaysForMeetings: 3,
                NatureOfInterest: "Director",
                ApproverEmployeeId: 2
            }
        },
        {
            comments: "Add / Update Directorships Item to the WEB controller",
            url: "DirectorshipsService/WriteItemWeb",
            dataToSend: {
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
        },
        //:Material Transaction Sasol Entities
        {
            comments: "Get the Sasol Entities list for Directorships",
            url: "DirectorshipsService/ListSasolEntities",
            dataToSend: {
            }
        },
        //:get entity by registration number
        {
            comments: "Get the Entity Details based on the Registration Number",
            url: "DirectorshipsService/CompanyByRegistrationNumber",
            dataToSend: {
                RegistrationNumber: "2011/078452/23"
            }
        },
        //:get nature of interests list
        {
            comments: "Get Nature of Interests List",
            url: "DirectorshipsService/NatureOfInterestList",
            dataToSend: {}
        },
        //:get directorship declaration for approval
        {
            comments: "Get Directorship Item for approval",
            url: "DirectorshipsService/GetDeclarationForApproval",
            dataToSend: { Item: "de5cbae1-e5ee-4aad-9661-2643ee96ed56" }
        },
        //:approve directorship declaration
        {
            comments: "Approve Directorship Item",
            url: "DirectorshipsService/ApproveDeclaration",
            dataToSend: {
                ItemGUID: "de5cbae1-e5ee-4aad-9661-2643ee96ed56", ApproverResponse: "Approved", ApproverComments: "These are the comments",
                ApproverAttachments: [{
                    EmployeeAttachmentId: 0,
                    FileName: "",
                    DownloadLink: "",
                    DeclarationType: "",
                    Description: ""
                }]}
        },
        //:items to approve count directorships
        {
            comments: "Directorship items employee has to approve",
            url: "DirectorshipsService/ItemsToApproveCount",
            dataToSend: {}
        },
        //:items to approve summary directorships
        {
            comments: "Directorship items summary employee has to approve",
            url: "DirectorshipsService/ItemsToApproveSummary",
            dataToSend: {}
        },
        //:Check CIPC Company Registration
        {
            comments: "Check CIPC Company Registration",
            url: "DirectorshipsService/CIPCCompanyRegistration",
            dataToSend: {
                CompanyRegistrationNumber:""
            }
        },
        //:Get Single Directorship item
        {
            comments: "Get Single Directorship item",
            url: "DirectorshipsService/GetDirectorship",
            dataToSend: {
                ItemId: 5759
            }
        },
        //:get shares declaration list
        {
            comments: "Get Shares Items fr Current Year Declaration",
            url: "FinancialInterestService/List",
            dataToSend: {}
        },
        //:get shares previous declaration list
        {
            comments: "Get Shares Items for Previous Year Declarations",
            url: "FinancialInterestService/ListPrevious",
            dataToSend: {}
        },
        //:get shares delete declaration
        {
            comments: "Delete Shares Item",
            url: "FinancialInterestService/Delete",
            dataToSend: { ItemId: 4091 }
        },
        //:get shares add declaration
        {
            comments: "Add / Update Shares Item",
            url: "FinancialInterestService/WriteItem",
            dataToSend: {
                Id: null,
                EmployeeDependantId: null,
                CompanyType: "Listed",
                UnlistedCompanyTypeId: null,
                UnlistedCompanyTypeOther: null,
                CompanyRegistrationNumber: "5465/654654/65",
                CompanyName: "ABC XYZ",
                TypeOfShares: "Ordinary Shares",
                NumberOfShares: 50,
                CostOfInvestment: "20.00",
                ExtentOfHolding: "16% - 25%",
                RightToVote: true,
                PotentialRiskToSasol: "This is the potential Risk to Sasol",
                RiskMitigation: "This is the Risk Mitigation",
                ControlToTestMitigation: "This is the control to Test the Mitigation that is proposed",
                ApproverEmployeeId: 2
            }
        },
        //:write the financial interest item via web
        {
            comment: "Add / Update Shares Item via Web",
            url: "FinancialInterestService/WriteItemWeb",
            dataToSend: {
                "ApproverEmployeeId": 17555,
                "CompanyName": "Gail's share company name",
                "CompanyTypeId": 7,
                "CompanyTypeOther": null,
                "CostOfInvestment": "150000",
                "CostOfInvestmentCurrencyCode": "ZAR",
                "DeclareForMyself": true,
                "EmployeeAttachments": [],
                "EmployeeDependantId": null,
                "EmployeeSharesId": 2504,
                "EntityTypeId": 7,
                "EntityTypeOrganisationId": null,
                "ForWhom": "Myself",
                "HoldingExtent": "Greater than 25%",
                "HoldingRight": "Yes",
                "MitigationControlProposed": "Controls are as follows",
                "MitigationPlan": "Mitigation is as follos",
                "PotentialSasolRisk": "Risk is as follows - tested that i could edit after submitted but before approved.",
                "RegisteredOfficeAddress": "test address",
                "RegistrationNumber": "1945/321452/12",
                "SecurityNumber": 2500,
                "SecurityType": "Preferential Shares"
            }
        },
        //:get shares declaration for approval
        {
            comments: "Get shares Item for approval",
            url: "FinancialInterestService/GetDeclarationForApproval",
            dataToSend: { Item: "1f511216-aebd-4343-855f-bc2206a3dbbc" }
        },
        //:approve shares declaration
        {
            comments: "Approve shares Item",
            url: "FinancialInterestService/ApproveDeclaration",
            dataToSend: {
                ItemGUID: "1f511216-aebd-4343-855f-bc2206a3dbbc", ApproverResponse: "Approved", ApproverComments: "These are the comments",
                ApproverAttachments: [{
                    EmployeeAttachmentId: 0,
                    FileName: "",
                    DownloadLink: "",
                    DeclarationType: "",
                    Description: ""
                }]
            } 
        },
        //:items to approve count shares
        {
            comments: "shares items employee has to approve",
            url: "FinancialInterestService/ItemsToApproveCount",
            dataToSend: {}
        },
        //:items to approve summary shares
        {
            comments: "shares items summey employee has to approve",
            url: "FinancialInterestService/ItemsToApproveSummary",
            dataToSend: {}
        },

        //:get COI declaration
        {
            comments: "Get COI Item",
            url: "ConflictInterestService/GetDeclaration",
            dataToSend: { ItemId: 1566 }
        },
        //:get COI declaration list
        {
            comments: "Get COI Item",
            url: "ConflictInterestService/List",
            dataToSend: {}
        },
        //:get COI previous declaration list
        {
            comments: "Get COI Item",
            url: "ConflictInterestService/ListPrevious",
            dataToSend: {}
        },
        //:get COI delete declaration
        {
            comments: "Get COI Item",
            url: "ConflictInterestService/Delete",
            dataToSend: { ItemId: 4091 }
        },
        //:get COI add declaration
        {
            comments: "Get COI Item",
            url: "ConflictInterestService/WriteItem",
            dataToSend: {
                Id: null,
                EmployeeDependantId: null,
                NatureOfConflictId: null,
                OtherConflict: "Other Conflict Type",
                ConflictDescription: "This is the detailed description of such a bad COI",
                ApproverEmployeeId: 2,
                RiskToSasol: "This is the potential Risk to Sasol",
                RiskMitigation: "This is the Risk Mitigation",
                TestMitigation: "This is the control to Test the Mitigation that is proposed",
                EmployeeAttachments: [{
                    EmployeeAttachmentId: 0,
                    FileName: "",
                    DownloadLink: "",
                    DeclarationType: "",
                    Description: ""
                }]
            }
        },
        //:get COI declaration for approval
        {
            comments: "Get COI Item for approval",
            url: "ConflictInterestService/GetDeclarationForApproval",
            dataToSend: { Item: "ec548dc6-ddc9-473a-afdb-7bbbf4f80e2a" }
        },
        //:approve COI declaration
        {
            comments: "Approve COI Item",
            url: "ConflictInterestService/ApproveDeclaration",
            dataToSend: {
                ItemGUID: "ec548dc6-ddc9-473a-afdb-7bbbf4f80e2a", ApproverResponse: "Approved", ApproverComments: "These are the comments",
                ApproverAttachments: [{
                    EmployeeAttachmentId: 0,
                    FileName: "",
                    DownloadLink: "",
                    DeclarationType: "",
                    Description: ""
                }]
            } 
        },
        //:items to approve count COI
        {
            comments: "COI items employee has to approve",
            url: "ConflictInterestService/ItemsToApproveCount",
            dataToSend: {}
        },
        //:items to approve summary COI
        {
            comments: "COI items summey employee has to approve",
            url: "ConflictInterestService/ItemsToApproveSummary",
            dataToSend: {}
        },

        //:List of Nature of Conflicts
        {
            comments: "List of Nature of Conflicts",
            url: "ConflictInterestService/NatureOfConflictsList",
            dataToSend: {}
        },

        //:get Private Work declarations current
        {
            comments: "List Private Work Items for Current Declaration",
            url: "ExtraWorkService/List",
            dataToSend: {
            }
        },
        //:get Private Work declarations previous
        {
            comments: "List Private Work Items for Previous Declaration",
            url: "ExtraWorkService/ListPrevious",
            dataToSend: {
            }
        },
        //:write private work to approve
        {
            comments: "Private Work items being declared (added or updated) by the employee",
            url: "ExtraWorkService/WriteItem",
            dataToSend: {
                Id: null,
                CompanyType: "Unlisted",
                UnlistedCompanyTypeId: null,
                UnlistedCompanyTypeOther: null,
                CompanyRegistrationNumber: "ACDE12345",
                CompanyName: "School-Days",
                DescriptionOfWork: "I do some contract work for them",
                DoYouGainFinancially: "Yes",
                DetailsOfFinancialGain: "I get paid handsomely",
                DoTheyTransactWithSasol: "DontKnow",
                ApproverEmployeeId: 3
            }
        },
        //:delete private work item
        {
            comments: "Delete a Private Work items",
            url: "ExtraWorkService/Delete",
            dataToSend: {
                ItemId: null
            }
        },
        //:get Private Work declaration for approval
        {
            comments: "Get Private Work Item for approval",
            url: "ExtraWorkService/GetDeclarationForApproval",
            dataToSend: { Item: "7ba0b5da-a0a6-471b-833d-8debecee5123" }
        },
        //:approve Private Work declaration
        {
            comments: "Approve Private Work Item",
            url: "ExtraWorkService/ApproveDeclaration",
            dataToSend: {
                ItemGUID: "7ba0b5da-a0a6-471b-833d-8debecee5123", ApproverResponse: "Approved", ApproverComments: "These are the comments",
                ApproverAttachments: [{
                    EmployeeAttachmentId: 0,
                    FileName: "",
                    DownloadLink: "",
                    DeclarationType: "",
                    Description: ""
                }]
            } 
        },
        //:items to approve count Private Work
        {
            comments: "Private Work items employee has to approve",
            url: "ExtraWorkService/ItemsToApproveCount",
            dataToSend: {}
        },
        //:items to approve summary Private Work
        {
            comments: "Private Work items summey employee has to approve",
            url: "ExtraWorkService/ItemsToApproveSummary",
            dataToSend: {}
        },
        /////////////////////// MATERIAL TRANSACTIONS //////////////////////
        //:get Material Transaction declarations current
        {
            comments: "List Material Transaction Items for Current Declaration",
            url: "MaterialTransactionService/List",
            dataToSend: {
            }
        },
        //:get Material Transaction declarations previous
        {
            comments: "List Material Transaction Items for Previous Declaration",
            url: "MaterialTransactionService/ListPrevious",
            dataToSend: {
            }
        },
        //:write Material Transaction
        {
            comments: "Material Transaction items being declared (added or updated) by the employee",
            url: "MaterialTransactionService/WriteItem",
            dataToSend: {
                Id: null,
                EmployeeDependentId: null,
                CompanyType: "Unlisted",
                UnlistedCompanyTypeId: null,
                UnlistedCompanyTypeOther: null,
                CompanyRegistrationNumber: "ACDE12345",
                CompanyName: "School-Days",
                SasolEntityId: 15,
                AnnualValueCurrencyCode: "ZAR",
                ApproximateAnnualValue: 10000000,
                NatureAndExtentOfTransaction: "This is the nature and extent of the transaction"
            }
        },
        //:delete Material Transaction item
        {
            comments: "Delete a Material Transaction item",
            url: "MaterialTransactionService/Delete",
            dataToSend: {
                ItemId: null
            }
        },
        //:Material Transaction Sasol Entities
        {
            comments: "Get the Sasol Entities list for Material Transaction",
            url: "MaterialTransactionService/ListSasolEntities",
            dataToSend: {
            }
        },
        ///////////////////////        GIFTS          //////////////////////
        //:get Gift declaration
        {
            comments: "List Gift Items declared",
            url: "GiftService/List",
            dataToSend: {}
        },
        //:get Gift declaration
        {
            comments: "List Gift Items declared in previous year's declarations",
            url: "GiftService/ListPrevious",
            dataToSend: {}
        },
        //:delete a gift item
        {
            comments: "Delete a Gift Item",
            url: "GiftService/Delete",
            dataToSend: {
                ItemId: 4091
            }
        },
        //:get Gift declaration for approval
        {
            comments: "Get Gift Item for approval",
            url: "GiftService/GetDeclarationForApproval",
            dataToSend: { Item: "b6812bcc-1c36-42a8-bfa1-9617ac9b0fe2" }
        },
        //:approve Gift declaration
        {
            comments: "Approve Gift Item",
            url: "GiftService/ApproveDeclaration",
            dataToSend: {
                ItemGUID: "826f55ad-9df2-4ec1-97b3-dfd78cb14b63", ApproverResponse: "Approved", ApproverComments: "These are the comments",
                ApproverAttachments: [{
                    EmployeeAttachmentId: 0,
                    FileName: "",
                    DownloadLink: "",
                    DeclarationType: "",
                    Description: ""
                }]
            } 
        },
        //:items to approve count Gift
        {
            comments: "Gift items employee has to approve",
            url: "GiftService/ItemsToApproveCount",
            dataToSend: {}
        },
        //:items to approve summary Gift
        {
            comments: "Gift items summey employee has to approve",
            url: "GiftService/ItemsToApproveSummary",
            dataToSend: {}
        },
        //:write gift item to approve
        {
            comments: "Gift items being declared (added or updated) by the employee",
            url: "GiftService/WriteItem",
            dataToSend: {
                Id: null,
                EmployeeDependantId: null,
                GiftOrEntertainment: "Gift",
                GivingOrReceiving: "Giving",
                ReceivedFromOrGivenTo: "Bob and Billy",
                CompanyName: "SOFTICE IT",
                DateGivenOrReceived: "13 Jan 2017",
                Relationship: "My relationship to the giver of the gift",
                CurrencyCode: "ZAR",
                Value: 1000,
                DescriptionContext: "The description of the gift",
                HowWillItBeDisposed: "Quietly",
                ApproverEmployeeId: 3
            }
        },
        //:items to approve count ALL ITEMS
        {
            comments: "Gift items employee has to approve",
            url: "DeclarationService/AllItemsToApproveCount",
            dataToSend: {}
        },
        //:items to approve summary ALL ITEMS
        {
            comments: "Gift items summey employee has to approve",
            url: "DeclarationService/AllItemsToApproveSummary",
            dataToSend: {}
        },
        //:Is Approver
        {
            comments: "Is this employee an approver",
            url: "DeclarationService/IsApprover",
            dataToSend: {}
        },
        //:Get Employee Personal Information
        {
            comments: "Get Employee Personal Information",
            url: "DeclarationService/GetPersonalInformation",
            dataToSend: {}
        },
        //:Update personal Information
        {
            comments: "Update personal Information",
            url: "DeclarationService/WritePersonalInformation",
            dataToSend: {
                TitleId: 1,
                MaidenName: "",
                CountryId: "",
                CityOfResidence: "",
                OfficeTelNumber: "",
                PostalAddress: "",
                PhysicalAddress: "",
                BusinessAddress: ""
            }
        },
        //:List of Titles
        {
            comments: "List of Titles",
            url: "DeclarationService/GetTitles",
            dataToSend: {}
        },
        //:ist of Countries
        {
            comments: "List of Countries",
            url: "DeclarationService/GetCountries",
            dataToSend: {}
        },
        //:List of OMEs
        {
            comments: "List of OMEs",
            url: "DeclarationService/GetBusinessUnits",
            dataToSend: {}
        },
        //:CIPC Check
        {
            comments: "CIPC Check",
            url: "DeclarationService/GetCompanyNameFromCIPCLookUp",
            dataToSend: {
                Item: "2006/064996/23"
            }
        },
        //:Get Employee Attachments allowed file extensions
        {
            comments: "Get Employee Attachments allowed file extensions",
            url: "DeclarationService/GetEmployeeAttachmentAllowedFileExternsions",
            dataToSend: {
            }
        },
        //:Get Single Shares item
        {
            comments: "Get Single Shares item",
            url: "FinancialInterestService/GetShareItem",
            dataToSend: {
                ItemId: 5759
            }
        },
        //:Get Security Types
        {
            comments: "Get Security Types",
            url: "DeclarationService/GetSecurityTypes",
            dataToSend: {
                ItemId: 1
            }
        },
        //:Get Previous Shares Web
        {
            comments: "Get Previous Shares Web",
            url: "FinancialInterestService/ListPreviousWeb",
            dataToSend: {
            }
        },
        {
            comments: "Add / Update Financial Interest Item to the WEB controller",
            url: "FinancialInterestService/WriteItemWeb",
            dataToSend: {
                EmployeeSharesId: 0,
                EmployeeDependantId: null,
                ForWhom: "",
                EntityTypeId: 0,
                EntityTypeOrganisationId: 0,
                CompanyTypeId: 0,
                CompanyTypeOther: "",
                RegistrationNumber: "",
                CompanyName: "",
                RegisteredOfficeAddress: "",
                SecurityType: "",
                SecurityNumber: 10,
                CostOfInvestment: "",
                PotentialSasolRisk: "",
                MitigationPlan: "",
                MitigationControlProposed: "",
                HoldingExtent: "",
                HoldingRight: "",
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
                }]
            }
        },
        //:Get Single MT item
        {
            comments: "Get Single Material Transaction item",
            url: "MaterialTransactionService/GetMaterialTransactionItem",
            dataToSend: {
                ItemId: 5759
            }
        },
        //:Get Previous MT Web
        {
            comments: "Get Previous Material Transaction Web",
            url: "MaterialTransactionService/ListPreviousWeb",
            dataToSend: {
            }
        },
        {
            comments: "Add / Update Material Transaction Item to the WEB controller",
            url: "MaterialTransactionService/WriteItemWeb",
            dataToSend: {
                EmployeeMaterialTransactionId: 0,
                EmployeeDependantId: null,
                ForWhom: "",
                EntityTypeOrganisationId: 0,
                CompanyTypeId: 0,
                CompanyTypeOther: "",
                RegistrationNumber: "",
                CompanyName: "",
                RegisteredOfficeAddress: "",
                AnnualValueCurrencyCode: "",
                ApproximateAnnualValue: 10,
                NatureAndExtentOfTransaction: "",
                EmployeeAttachments: [{
                    EmployeeAttachmentId: 0,
                    FileName: "",
                    DownloadLink: "",
                    DeclarationType: "",
                    Description: ""
                }]
            }
        },
        //:Get Previous COI Web
        {
            comments: "Get Previous COI Web",
            url: "ConflictInterestService/ListPreviousWeb",
            dataToSend: {
            }
        },
        //:Get Single COI item
        {
            comments: "Get Single COI item",
            url: "ConflictInterestService/GetConflictOfInterestItem",
            dataToSend: {
                ItemId: 5759
            }
        },
        //:Does Shares or Directorship requires approval
        {
            comments: "Does Shares or Directorship requires approval by Entity Type Id",
            url: "DeclarationService/SharesDirectorshipRequiresApproval",
            dataToSend: {
                ItemId: 8
            }
        },
        //:Get Single Gift item
        {
            comments: "Get Single Gift item",
            url: "GiftService/GetGiftItem",
            dataToSend: {
                ItemId: 4793
            }
        },
        //:Get Previous Private Work Web
        {
            comments: "Get Previous Private Work Web",
            url: "ExtraWorkService/ListPreviousWeb",
            dataToSend: {
            }
        },
        //:Get Single Private Work item
        {
            comments: "Get Single Private Work item",
            url: "ExtraWorkService/GetExtraWorkItem",
            dataToSend: {
                ItemId: 5759
            }
        },
        {
            comments: "Add / Update Private Work Item to the WEB controller",
            url: "ExtraWorkService/WriteItemWeb",
            dataToSend: {
                EmployeePrivateWorkId: 0,
                CompanyName: "",
                CompanyTypeId: 0,
                CompanyTypeOther: "",                
                RegistrationNumber: "",

                WorkType: "",
                FinancialGain: "",
                TransactsWithSasolGroup: "", 
                LatestApprovalDate: "DateTime",
                FinancialGainDetails: "",
                CIPCCompanyName: "",
                ApproverEmployeeId: 0,
                EmployeeAttachments: [{
                    EmployeeAttachmentId: 0,
                    FileName: "",
                    DownloadLink: "",
                    DeclarationType: "",
                    Description: ""
                }]
            }
        },
        //:Web Summary Page Can Confirmation
        {
            comments: "Web Summary Page Can Confirmation",
            url: "DeclarationService/ShowSummaryConfirmation",
            dataToSend: {
            }
        },
        //:Proxy Financial Interest Summary Confirmation
        {
            comments: "Web Summary Page Can Confirmation",
            url: "DeclarationService/ConfirmProxyFinancialInterestsSummaryPage",
            dataToSend: {
            }
        },
        //:Proxy Directorship Summary Confirmation
        {
            comments: "Proxy Directorship Summary Confirmation",
            url: "DeclarationService/ConfirmProxyDirectorshipsSummaryPage",
            dataToSend: {
            }
        },
        {
            comments: "Copy from previous",
            url: "DirectorshipsService/GetDirectorshipFromPrevious",
            dataToSend: {
                ItemId: 0
            }
        },
        {
            comments: "Copy from previous",
            url: "FinancialInterestService/GetFinancialInterestFromPrevious",
            dataToSend: {
                ItemId: 0
            }
        },
        {
            comments: "Copy from previous",
            url: "ConflictInterestService/GetConflictOfInterestFromPrevious",
            dataToSend: {
                ItemId: 0
            }
        },
        {
            comments: "Copy from previous",
            url: "MaterialTransactionService/GetMaterialTransactionFromPrevious",
            dataToSend: {
                ItemId: 0
            }
        },
        //:
        {
            comments: "Can this Directorship field be editable after the item has been responded to",
            url: "DirectorshipsService/CanEditField",
            dataToSend: {
                DirectorshipId: 0,
                FieldName: ""
            }
        }
    ]
    //********************************************************************************
});  