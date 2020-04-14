testData.push({

	groupTitle: "Declaration-GIFTS",

	//********************************************************************************
	apiCalls: [
		//Declaration
		//:write item
		{
			comments: "Write a gift item",
			url: "GiftService/WriteItem",
			dataToSend: {
				"Id": 0,
				"EmployeeDependantId": null,
				"CompanyName": "Oxis Energy Limited",
				"DescriptionContext": "Sasol holds an investment in Oxis Energy Limited. I am a director on the Board of the Company. I am attending the Company\u0027s Board meeting on 20th February 2020 in Cardiff, UK. In addition and post the 21 February 2020 Oxis Board Meeting and in my capacity as director on the Oxis Board, I have been invited to attend (along with all other Board members) an Oxis Corporate Investment day  to meet with Strategic Partners and Potential Oxis Investors. The activities of the day inter alia  includes attendance to the Six nations rugby match between Wales and France in Cardiff with the Strategic Partners and Investors.",
				"DateGivenOrReceived": "\/Date(1582322400000)\/",
				"ApproverEmployeeId": 14425,
				"ReceivedFromOrGivenTo": "CEO invite to all Board members",
				"GiftOrEntertainment": "Entertainment",
				"GivingOrReceiving": "Receiving",
				"Value": 80,
				"Relationship": "Sasol holds an investment in Oxis Energy Limited. I am a director on the Board of the Company. I am attending the Company\u0027s Board meeting on 20th February 2020 in Cardiff, UK. In addition and post the 21 February 2020 Oxis Board Meeting and in my capacity as director on the Oxis Board, I have been invited to attend (along with all other Board members) an Oxis Corporate Investment day  to meet with Strategic Partners and Potential Oxis Investors. The activities of the day inter alia  includes attendance to the Six nations rugby match between Wales and France in Cardiff with the Strategic Partners and Investors.",
				"HowWillItBeDisposed": "No gift",
				"CurrencyCode": "GBP",
				"CIPCCompanyName": null,
				"EmployeeAttachments": [{
					"EmployeeAttachmentId": 497,
					"FileName": null,
					"DownloadLink": "https://zakstscdweb002.scd.sasol.com/api/home/DownloadFile?FileGUID=e3a3829e-ae3a-4b65-8cb8-933ed35e3741\u0026XSRF-TOKEN-VALUE=97a821e7-0e70-45b5-a598-7db8aa1a9090",
					"DeclarationType": "EmployeeGift",
					"Description": "Letter of invitation"
				}]
			}
		}
	]
	//********************************************************************************
});  