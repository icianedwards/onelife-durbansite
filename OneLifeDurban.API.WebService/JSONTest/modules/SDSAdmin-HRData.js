testData.push({

    groupTitle: "ADMIN: Sasol HR Data",

    //********************************************************************************
    apiCalls: [
        /******* HR Data ********/
        {
            comments: "Get the HR Data OMEs List",
            url: "SDSAdminService/GetHRDataOMEs",
            dataToSend: { 
            }
        },
        {
            comments: "Get the HR Data Role Categories List",
            url: "SDSAdminService/GetHRDataRoleCategories",
            dataToSend: {
            }
        },
        {
            comments: "Get the HR Data",
            url: "SDSAdminService/GetHRData",
            dataToSend: {
                OMEDescriptors: [],
                RoleCategoryDescriptors: [],
                SearchCriteria: 'Bob the Builder',
                PageSize: 20,
                PageNumber: 1,
                OrderField: "",
                OrderDirecton: ""
            }
        },
        {
            comments: "Export the HR Data",
            url: "SDSAdminService/ExportHRData",
            dataToSend: {
                OMEDescriptors: [],
                RoleCategoryDescriptors: [],
                SearchCriteria: 'Bob the Builder',
                PageSize: 20,
                PageNumber: 1,
                OrderField: "",
                OrderDirecton: ""
            }
        },
    ]
    //********************************************************************************
});  