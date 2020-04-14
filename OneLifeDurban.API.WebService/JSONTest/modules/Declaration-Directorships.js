testData.push({

    groupTitle: "Declaration-Directorships",

    //********************************************************************************
    apiCalls: [
        //Declaration
        //:write item from web
        {
            comments: "Write an Item from the Web",
            url: "DirectorshipsService/WriteItemWeb",
            dataToSend: {
                "EmployeeDirectorshipId": 5648,
                "EmployeeDependantId": null,
                "DeclareForMyself": true,
                "EntityTypeId": 8,
                "EntityTypeOrganisationId": null,
                "CompanyTypeId": 3,
                "CompanyTypeOther": null,
                "RegistrationNumber": null,
                "CompanyName": "PMG TRAINING SOLUTIONS AND CONSULTANCY",
                "CompanyAddress": "3 West End Street Postmasburg 8420",
                "AppointmentDate": "\/Date(1448920800000)\/",
                "TerminationDate": "\/Date(1562536800000)\/",
                "NatureOfInterest": "Director",
                "MeetingDays": 2,
                "RepresentativeDirector": "No",
                "RepresentativeDirectorName": null,
                "RepresentativeDirectorArrangement": null,
                "FeesPayable": "No",
                "FeesCurrency": null,
                "FeesAmount": null,
                "ApproverEmployeeId": 5789,
                "FullDetails": "I am a director in said company, however after my relocation to Secunda in 2016 I´m no longer an active participant of this company.\nNothing further to declare",
                "CIPCCompanyName": null,
                "EmployeeAttachments": null,
                "CIPCChildId": 0,
                "CIPCResponseId": 0,
                "CIPCDetailedReason": null
            }
        }
    ]
    //********************************************************************************
});  