testData.push({

    groupTitle: "ADMIN: List Maintenance",

    //********************************************************************************
    apiCalls: [
        /******* List Maintenance ********/
        {
            comments: "Gets the List Maintenance Options",
            url: "SDSAdminService/GetListMaintenanceOptions",
            dataToSend: {
            }
        },
        {
            comments: "Gets the List Maintenance Items for an Option",
            url: "SDSAdminService/GetListMaintenanceItems",
            dataToSend: {
                ItemType: "General: OMEs"
            }
        },
        {
            comments: "Gets the List Maintenance Items for an Option",
            url: "SDSAdminService/WriteListMaintenanceItem",
            dataToSend: {
                ItemType: "General: OMEs",
                ItemId: 0,
                ItemDescription: "New Item"
            }
        },
        {
            comments: "Gets the List Maintenance Items for an Option",
            url: "SDSAdminService/RemoveListMaintenanceItem",
            dataToSend: {
                ItemType: "General: OMEs",
                ItemId: 1
            }
        },
    ]
    //********************************************************************************
});  