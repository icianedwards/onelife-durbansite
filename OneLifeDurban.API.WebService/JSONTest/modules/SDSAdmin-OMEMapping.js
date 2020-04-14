testData.push({

    groupTitle: "ADMIN: OME Mapping",

    //********************************************************************************
    apiCalls: [
        /******* OME Mapping ********/
        {
            comments: "Get the OMEs List",
            url: "SDCSGeneralService/GetOMEs",
            dataToSend: {
                ActiveOnly: true
            }
        },
        {
            comments: "Get the OME Mappings",
            url: "SDSAdminService/GetOMEMappings",
            dataToSend: {
            }
        },
        {
            comments: "Update an OME Mapping",
            url: "SDSAdminService/UpdateOMEMapping",
            dataToSend: {
                SourceDataOMEDescription: "ABCDE",
                BusinessUnitId: 9
            }
        }
    ]
    //********************************************************************************
});  