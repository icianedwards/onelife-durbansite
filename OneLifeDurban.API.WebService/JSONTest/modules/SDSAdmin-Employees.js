testData.push({

    groupTitle: "ADMIN: Employees",

    //********************************************************************************
    apiCalls: [
        /******* Employee Data ********/
        {
            comments: "Get the Employee Data OMEs List",
            url: "SDSAdminService/GetEmployeeOMEs",
            dataToSend: {
                ReportingCycleId: 8
            }
        },
        {
            comments: "Get the Employee Data Role CategorY tYPES List",
            url: "SDSAdminService/GetEmployeeRoleCategoryTypes",
            dataToSend: {
                ReportingCycleId: 8
            }
        },
        {
            comments: "Get the Employee Data Role Categories List",
            url: "SDSAdminService/GetEmployeeRoleCategories",
            dataToSend: {
                ReportingCycleId: 8
            }
        },
        {
            comments: "Get the Employee Data",
            url: "SDSAdminService/GetEmployeeData",
            dataToSend: {
                ReportingCycleId: 8,
                OMEIds: [],
                RoleCategoryIds: [],
                SecurityGroupDescriptors: ['Developers', 'Company Administrators', 'End Users'],
                ActiveStatuses: ['Active', 'Inactive'],
                CompletionStatuses: ['Finalised', 'Interim', 'Incomplete'],
                LoginStatuses: ['Logged In', 'Not Logged In'],
                SearchCriteria: '',
                PageSize: 20,
                PageNumber: 1,
                OrderField: "",
                OrderDirecton: ""
            }
        },
        {
            comments: "Export the Employee Data",
            url: "SDSAdminService/ExportEmployeeData",
            dataToSend: {
                ReportingCycleId: 8,
                OMEIds: [],
                RoleCategoryIds: [],
                SecurityGroupDescriptors: ['Developers', 'Company Administrators', 'End Users'],
                ActiveStatuses: ['Active', 'Inactive'],
                CompletionStatuses: ['Finalised', 'Interim', 'Incomplete'],
                LoginStatuses: ['Logged In', 'Not Logged In'],
                SearchCriteria: '',
                PageSize: 20,
                PageNumber: 1,
                OrderField: "",
                OrderDirecton: ""
            }
        },
        {
            comments: "Can Employees Declare for the Reporting Cycle",
            url: "SDSAdminService/CanEmployeeDeclareForReportingCycle",
            dataToSend: {
                ReportingCycleId: 8
            }
        },
        {
            comments: "Get the counts for Employee Quick Reminders",
            url: "SDSAdminService/GetEmployeeDataQuickReminderCounts",
            dataToSend: {
                ReportingCycleId: 8
            }
        },
        {
            comments: "Get the Employee data for viewing / editing",
            url: "SDSAdminService/GetEmployee",
            dataToSend: {
                SelectedReportingCycleId: 8,
                SelectedEmployeeId: 1,
                SelectedEmployeeDeclarationId: 191763
            }
        },
        {
            comments: "Update the employee data that is updateable",
            url: "SDSAdminService/WriteEmployee",
            dataToSend: {
                SelectedEmployeeId: 1,
                IsDirector: false,
                IsExecutiveDirector: true,
                IsSVPGovernanceComplianceEthics: true,
                IsCompanySecretary: false
            }
        },
        {
            comments: "Get the Status Lookup for Active Statuses",
            url: "SDSAdminService/GetEmployeeActiveStatuses",
            dataToSend: {
            }
        },
        {
            comments: "Get the Status Lookup for Login Statuses",
            url: "SDSAdminService/GetEmployeeLoginStatuses",
            dataToSend: {
            }
        },
        {
            comments: "Get the Status Lookup for Declaration Completion Statuses",
            url: "SDSAdminService/GetDeclarationCompletionStatuses",
            dataToSend: {
            }
        },
        {
            comments: "Get the Security Groups Lookup",
            url: "SDSAdminService/GetEmployeeSecurityGroups",
            dataToSend: {
            }
        },
        /******* Entity Types ********/
        {
            comments: "Get the Entity Types List",
            url: "SDSAdminService/GetEntityTypes",
            dataToSend: {
            }
        },
        {
            comments: "Get the Entity Type for Editing",
            url: "SDSAdminService/GetEntityType",
            dataToSend: {
                ItemId: 1
            }
        },
        {
            comments: "Add / update the entity type",
            url: "SDSAdminService/WriteEntityType",
            dataToSend: {
                EntityTypeId: 1,
                EntityTypeName: "test",
                IsEntityTypeNonSasol: false,
                IsMustCaptureOwnInfo: false,
                IsAllowedForMaterialTransaction: false,
                IsRequiresSharesApproval: false
            }
        },
        {
            comments: "Delete the entity type",
            url: "SDSAdminService/DeactivateEntityType",
            dataToSend: {
                ItemId: 1
            }
        },
        {
            comments: "Delete the entity type",
            url: "SDSAdminService/ActivateEntityType",
            dataToSend: {
                ItemId: 1
            }
        },
        {
            comments: "Get the Entity Type Organisation List",
            url: "SDSAdminService/GetEntityTypeOrganisations",
            dataToSend: {
                ItemId: 7
            }
        },
        {
            comments: "Get the Entity Type Organisation for Editing",
            url: "SDSAdminService/GetEntityTypeOrganisation",
            dataToSend: {
                ItemId: 1
            }
        },
        {
            comments: "Add / update the entity type Organisation",
            url: "SDSAdminService/WriteEntityTypeOrganisation",
            dataToSend: {
                EntityTypeId: 1,
                EntityTypeOrganisationId: 0,
                EntityTypeOrganisationName: "test",
                Address: "",
                CompanyTypeId: 3,
                CompanyRegistrationNumber: "1234/56/7898/12",
                CompanyTypeOther: ""
            }
        },
        {
            comments: "Delete the entity type Organisation",
            url: "SDSAdminService/DeactivateEntityTypeOrganisation",
            dataToSend: {
                ItemId: 1
            }
        },
        {
            comments: "Delete the entity type Organisation",
            url: "SDSAdminService/ActivateEntityTypeOrganisation",
            dataToSend: {
                ItemId: 1
            }
        },
        {
            comments: "Get the Audit Parent Data",
            url: "SDSAdminService/GetAuditRecordParentList",
            dataToSend: {
                AuditReportReportingCycleId: 8,
                AuditReportEmployeeId: 0,
                AuditReportDateFrom: "1 Jan 2019",
                AuditReportDateTo: "1 Dec 2019",
                AuditReportSection: "-- All --",
                AuditReportActionId: 0
            }
        },
        {
            comments: "Get the Audit Detail Data",
            url: "SDSAdminService/GetAuditRecordDetailList",
            dataToSend: {
                AuditReportReportingCycleId: 8,
                AuditReportEmployeeId: 0,
                AuditReportDateFrom: "1 Jan 2019",
                AuditReportDateTo: "1 Dec 2019",
                AuditReportSection: "-- All --",
                AuditReportActionId: 0
            }
        },
        {
            comments: "Get the Audit report tables",
            url: "SDSAdminService/GetAuditReportTables",
            dataToSend: {
            }
        },
        {
            comments: "Get the Audit report tables",
            url: "SDSAdminService/GetAuditActionList",
            dataToSend: {
            }
        },
        {
            comments: "Get the Audit Detail Data",
            url: "SDSAdminService/GetAuditRecordDetailDateOrderedList",
            dataToSend: {
                AuditReportReportingCycleId: 8,
                AuditReportEmployeeId: 0,
                AuditReportDateFrom: "1 Jan 2019",
                AuditReportDateTo: "1 Dec 2019",
                AuditReportSection: "-- All --",
                AuditReportActionId: 0
            }
        },
        /******* Messaging ********/
        {
            comments: "Get the list of message statuses",
            url: "SDSAdminService/GetMessageSentStatuses",
            dataToSend: {
            }
        },
        {
            comments: "Get message list",
            url: "SDSAdminService/GetMessagesData",
            dataToSend: {
                ExcludeErrorEmails: true,
                SentStatuses: ["-- All --"],
                SearchCriteria: '',
                PageSize: 20,
                PageNumber: 1,
                OrderField: "",
                OrderDirection: ""
            }
        },
        {
            comments: "Get message group list",
            url: "SDSAdminService/GetMessageGroups",
            dataToSend: {
                
            }
        },
        {
            comments: "Get email template list",
            url: "SDSAdminService/GetEmailTemplates",
            dataToSend: {

            }
        },
        {
            comments: "Get email template body",
            url: "SDSAdminService/GetEmailTemplateBody",
            dataToSend: {
                ItemId: 2
            }
        },
        {
            comments: "Get email reminder rules",
            url: "SDSAdminService/GetMessagingReminderRules",
            dataToSend: {
            }
        },
        {
            comments: "Upload the file",
            url: "MediaService/UploadMessageAttachment",
            dataToSend: {
            }
        },
        {
            comments: "Save Message",
            url: "SDSAdminService/AddMessage",
            dataToSend: {
                MessageId: 0,
                MessageSubject: "Subject",
                HTMLBody: "html",
                MessageSendType: "SaveAndSend - Save - Schedule - Reminder - MessageSent",
                ScheduleDate: null,
                ReminderRuleId: null,
                Attachments: [{
                    UniqueFileName: "",
                    AttachmentFileName: "",
                    FilePath: "",
                    ContentType: ""
                }],
                MessageGroupsTo: [{
                    Group: "",
                    ItemId: [1,2,3]
                }],
                EmployeesList: [1,2,3]
            }
        },
        {
            comments: "Get reminder list",
            url: "SDSAdminService/GetReminderList",
            dataToSend: {
                ItemId: 2 // reporting cycle
            }
        },
        {
            comments: "Get message / reminder",
            url: "SDSAdminService/GetMessage",
            dataToSend: {
                MessageId: 0,
                IsReminder: false
            }
        },
        {
            comments: "Delete message / reminder",
            url: "SDSAdminService/DeleteMessage",
            dataToSend: {
                MessageId: 0,
                IsReminder: false
            }
        },
        {
            comments: "Activate/deactivate all reminder",
            url: "SDSAdminService/ActivateDeactiveAllReminders",
            dataToSend: {
                Item: "Activate/Deactivate"
            }
        },
        {
            comments: "Activate single reminders",
            url: "SDSAdminService/ActivateSingleReminder",
            dataToSend: {
                ItemId: 0
            }
        },
        {
            comments: "Deactivate single reminders",
            url: "SDSAdminService/DeactivateSingleReminder",
            dataToSend: {
                ItemId: 0
            }
        },
        {
            comments: "Archive a message",
            url: "SDSAdminService/ArchiveMessage",
            dataToSend: {
                ItemId: 0
            }
        },
        {
            comments: "Get the message queue",
            url: "SDSAdminService/GetMessageQueue",
            dataToSend: {
                ItemId: 0
            }
        },
        {
            comments: "Get the Employee Data to message",
            url: "SDSAdminService/MessageEmployeesThatMatchCriteria",
            dataToSend: {
                ReportingCycleId: 8,
                OMEIds: [],
                RoleCategoryIds: [],
                SecurityGroupDescriptors: ['Developers', 'Company Administrators', 'End Users'],
                ActiveStatuses: ['Active', 'Inactive'],
                CompletionStatuses: ['Finalised', 'Interim', 'Incomplete'],
                LoginStatuses: ['Logged In', 'Not Logged In'],
                SearchCriteria: '',
                PageSize: 20,
                PageNumber: 1,
                OrderField: "",
                OrderDirecton: ""
            }
        },
        {
            comments: "Get the Employee Data to message - for the quick reminder",
            url: "SDSAdminService/MessageReminderEmployeesThatMatchCriteria",
            dataToSend: {
                ReportingCycleId: 8,
                OMEIds: [],
                RoleCategoryIds: [],
                SecurityGroupDescriptors: ['Developers', 'Company Administrators', 'End Users'],
                ActiveStatuses: ['Active', 'Inactive'],
                CompletionStatuses: ['Finalised', 'Interim', 'Incomplete'],
                LoginStatuses: ['Logged In', 'Not Logged In'],
                SearchCriteria: '',
                PageSize: 20,
                PageNumber: 1,
                OrderField: "",
                OrderDirecton: ""
            }
        },
        {
            comments: "Send reminder to employees who have not logged in",
            url: "SDSAdminService/MessageReminderEmployeesWhoHaveNotLoggedIn",
            dataToSend: {                
            }
        },
        {
            comments: "Send reminder to employees who have not completed",
            url: "SDSAdminService/MessageReminderEmployeesWhoHaveNotCompleted",
            dataToSend: {
            }
        },
        {
            comments: "Get document uploads list",
            url: "SDSAdminService/GetDocumentUploadList",
            dataToSend: {
                DocumentTypeId: 0
            }
        },
        {
            comments: "Upload Document upload file",
            url: "SDSAdminService/WriteDocumentUploadItem",
            dataToSend: {
                DocumentUploadId: 0,
                DocumentTypeId: 0,
                DocumentSectionId: 0,
                DocumentTitle: "",
                URLLink: "",
                ReleaseDate: "",
                UniqueFileName: "",
                AttachmentFileName: "",
                FilePath: "",
                ContentType: ""
            }
        },
        {
            comments: "Delete Document Upload File",
            url: "SDSAdminService/DeleteDocumentUploadItem",
            dataToSend: {
                ItemId: 0
            }
        },
        {
            comments: "Get Document Types List",
            url: "SDSAdminService/GetDocumentTypesList",
            dataToSend: {
            }
        },
        {
            comments: "Get Declaration Section List",
            url: "SDSAdminService/GetDeclarationSectionList",
            dataToSend: {
            }
        },
        {
            comments: "Upload Policy Document",
            url: "MediaService/UploadDocumentUploads",
            dataToSend: {
            }
        },
        {
            comments: "Upload Policy Document",
            url: "SDSAdminService/GetDocumentUploadItem",
            dataToSend: {
                ItemId: 0
            }
        },
        {
            comments: "Get Default Approvvers For Proxy",
            url: "DeclarationService/GetDefaultProxyApprover",
            dataToSend: {
                ItemId: 0,
                ProxyDeclarationId: 0
            }
        },
        {
            comments: "Get Proxy Approvers",
            url: "DeclarationService/GetProxyApprovers",
            dataToSend: {
                ItemId: 0,
                ProxyDeclarationId: 0
            }
        }
    ]
    //********************************************************************************
});  