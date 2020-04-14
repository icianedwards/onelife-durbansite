testData.push({

    groupTitle: "ADMIN: Automated Approval Reminders",

    //********************************************************************************
    apiCalls: [
        /******* Automated Approval Reminders ********/
        {
            comments: "Get the Automated Approval Reminders",
            url: "SDSAdminService/GetAutomatedApprovalReminderSettings",
            dataToSend: {
            }
        },
        {
            comments: "Get the Automated Approval Reminder for Edit",
            url: "SDSAdminService/GetAutomatedApprovalReminder",
            dataToSend: {
                ItemId: 0
            }
        },
        {
            comments: "Update the Automated Approval Reminder Settings",
            url: "SDSAdminService/WriteAutomatedApprovalReminderSettings",
            dataToSend: {
                AutomatedApprovalReminderId: 1,
                ReminderTo: "Approver",
                ReminderInitialWaitWeeks: 1, // start
                ReminderNumberOfTimesToRepeat: 2, // frequency
                RepeatReminder: true,
                ReAssignReminder: true,
                ReminderSubject: "This is the subject",
                ReminderContent: "This is the content",
                ReminderTimeBetweenReminders: 5 // after
            }
        },
        {
            comments: "Deactivate the Automated Approval Reminder",
            url: "SDSAdminService/DeactivateAutomatedApprovalReminder",
            dataToSend: {
                AutomatedApprovalReminderId: 1,
                ReminderTo: "Declarer"
            }
        },
        {
            comments: "Reactivate the Automated Approval Reminder",
            url: "SDSAdminService/ReactivateAutomatedApprovalReminder",
            dataToSend: {
                AutomatedApprovalReminderId: 1,
                ReminderTo: "Declarer"
            }
        },
    ]
    //********************************************************************************
});  