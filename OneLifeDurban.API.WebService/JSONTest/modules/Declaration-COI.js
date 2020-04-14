testData.push({

    groupTitle: "Declaration-COI",

    //********************************************************************************
    apiCalls: [
        //Declaration
        //:get policies
        {
            comments: "Get the policies that are presently active for Declarations",
            url: "ConflictInterestService/GetDeclarationForApproval",
            dataToSend: {
                Item: "c463ed31-7b07-4062-8ca4-fba77ab4a583"
            }
        },
        //:write item
        {
            comments: "Get the policies that are presently active for Declarations",
            url: "ConflictInterestService/WriteItem",
            dataToSend: {
                "Id": 0,
                "EmployeeDependantId": null,
                "NatureOfConflictId": 999,
                "OtherConflict": "Company is a competitor or potential competitor to Sasol and could potentially  be a vendor but is not currently involved in any dealings withSasol.  ",
                "ConflictDescription": "My husband is the owner of a company called Science Friction . This company imports polymers, additives and is involved in the manufacture of lubricants, grease and certain polymer products. The company has no current dealings or interaction with Sasol. ",
                "ApproverEmployeeId": 5657,
                "RiskToSasol": "Perceived inappropriate sharing of information ",
                "RiskMitigation": "I am not involved in the  Sasol polymer or  Sasol Energy marketing area, nor am i involved in any decision making in supply chain. No confidential information that i may become privy to relating to Sasol is shared. ",
                "TestMitigation": "Verify with supply chain that company is not a vendor . Verify with OME\u0027s that in my position i am not exposed to confidential pricing or sensitive marketing information . ",
                "CIPCCompanyName": null,
                "EmployeeAttachments": null
            }
        },
    ]
    //********************************************************************************
});  