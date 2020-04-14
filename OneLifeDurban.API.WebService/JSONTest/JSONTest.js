var VERSION = "0.0.4";


var APIBaseURL = window.location.protocol + '//' + window.location.host +
     (window.location.host.indexOf('localhost') !== -1 ? "" : "/api");

//var APIBaseURL = "http://sdsmobileapi.testza.co.za";
//var APIBaseURL = "http://localhost:27470";
//var APIBaseURL = "http://sds-api.testza.co.za";

//var HeaderData = { "authenticationToken": "xlwxgp/LEgKPxW+r8Ucb82owmB2rF9cKyO7oQfjbYus=", "environment": "WebApp", "declarationsCycleMode": "current" };
var HeaderData = { "authenticationToken": "xlwxgp/LEgKPxW+r8Ucb82owmB2rF9cKyO7oQfjbYus=", "environment": "WebApp", "declarationsCycleMode": "current" };

var testModules =
    [
        'SDSAdmin-Employees',
        'SDSAdmin-HRData',
        'SDSAdmin-ReportingCycles',
        'SDSAdmin-ListMaintenance',
        'SDSAdmin-OMEMapping',
        'SDSAdmin-BillingReport',
        'SDSAdmin-RelatedPartyReport',
        'SDSAdmin-EmployeeProgressStats',
        'SDSAdmin-AutomatedApprovalReminders',
        'SDSAdmin-ProxyCaptureGeneral',
        'SDSAdmin-EmployeesReports',
        'SDSAdmin-Reporting',
        'Authentication',
        'Mobile-App',
        'Navigation',
        'Employee',
        'Compliance',
        'Compliance-Planning',
        'Compliance-Admin',
        'DevelopmentTesting',
        'SDCS-General',
        'Compliance-Reporting',
        'Declaration-General',
        'Acting-Approval',
        'Declaration-COI',
        'Declaration-GIFTS',
        'Declaration-Directorships',
        'SDSAdmin-ProxyDirectorshipReport',
        'SDSAdmin-ProxyFinancialInterestReport',
        'SDSAdmin-CIPCDataRun',
        'SDSAdmin-EmployeeAttachments'
    ];

var headers = [
    {
        "HeaderName": "Windows Auth",
        "HeaderValue": {
            "environment": "WebApp"
        }
    },
    {
        "HeaderName": "End User",
        "HeaderValue": {
            "authenticationToken": "C/qDpC8RBN+gx5+FnxFTnA==",
            "environment": "WebApp"
        }
    },
    {
        "HeaderName": "Compliance Officer",
        "HeaderValue": {
            "authenticationToken": "dQ589zxBnvCb5tYlFooXkA==",
            "environment": "WebApp"
        }
    },
    {
        "HeaderName": "Compliance Super User",
        "HeaderValue": {
            "authenticationToken": "C/qDpC8RBN+gx5+FnxFTnA==",
            "environment": "WebApp"
        }
    },
    {
        "HeaderName": "Chief Compliance & Ethics Officer",
        "HeaderValue": {
            "authenticationToken": "vaajBMIVHRb0B9+8IyYPmw==",
            "environment": "WebApp"
        }
    },
    {
        "HeaderName": "Brittany Lamb",
        "HeaderValue": {
            "authenticationToken": "cjY1h12GQb1wMD3annZkIw==",
            "environment": "WebApp"
        }
    },
    {
        "HeaderName": "Michelle du Toit",
        "HeaderValue": {
            "authenticationToken": "EmECTRTFl+KhgHfZXyDCrYubeIGgAi/+2mjH0Wse60s=",
            "environment": "WebApp"
        }
    },
];