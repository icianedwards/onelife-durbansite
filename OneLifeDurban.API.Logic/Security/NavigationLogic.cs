using OneLifeDurban.API.DataAccess;
using OneLifeDurban.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace OneLifeDurban.API.Logic
{
    public class NavigationLogic
    {
        public static NavigationStructureResultModel GetUserNavigationStructure(GenericRequestModel request)
        {
            NavigationStructureResultModel result = new NavigationStructureResultModel() { HasError = false, Feedback = "", MaintenanceMode = false, MaintenanceMessage = "" };

            result.ComplianceNavigation = new List<NavigationItemModel>();
            result.DeclarationsNavigation = new List<NavigationItemModel>();
            bool showComplianceAdminNavigation = false;
            bool showDeclarationsAdminNavigation = false;
            
            try
            {
                using (var dm = new Entities(request.SessionUserName))
                {
                    showComplianceAdminNavigation = request.UserRoles.Contains("Developers")
                    || request.UserRoles.Contains("Compliance Super User")
                    || request.UserRoles.Contains("Compliance Officer")
                    || request.UserRoles.Contains("Chief Compliance & Ethics Officer")
                    || request.UserRoles.Contains("Senior Compliance Manager");

                    //COMPLIANCE NAVIGATION
                    bool showCompliance = false;
                    if (showComplianceAdminNavigation)
                    {
                        showCompliance = true;
                    }
                    if (showCompliance)
                    {
                        result.ComplianceNavigation.Add(new NavigationItemModel()
                        {
                            IsParent = false,
                            ItemTitle = "Compliance Home",
                            RoutePath = "compliance-home"
                        });
                    }

                    result.ComplianceNavigation.Add(new NavigationItemModel()
                    {
                        IsParent = false,
                        ItemTitle = "My Compliance Officer",
                        RoutePath = "compliance-officer-list"
                    });

                    //COMPLIANCE ADMIN NAVIGATION
                    if (showComplianceAdminNavigation)
                    {
                        var adminNavigation = new NavigationItemModel
                        {
                            IsParent = true,
                            ItemTitle = "Admin"
                        };
                        result.ComplianceNavigation.Insert(0, adminNavigation);

                        if (request.UserRoles.Contains("Compliance Super User") ||
                            request.UserRoles.Contains("Senior Compliance Manager"))
                        {
                            adminNavigation.ChildItems.Add(new NavigationItemModel()
                            {
                                IsParent = false,
                                ItemTitle = "Confirmations Planning",
                                RoutePath = "compliance-planning"
                            });
                        }
                        if (request.UserRoles.Contains("Compliance Super User"))
                        {
                            adminNavigation.ChildItems.Add(new NavigationItemModel()
                            {
                                IsParent = false,
                                ItemTitle = "Manage User Roles",
                                RoutePath = "compliance-user-roles"
                            });
                        }

                        if (request.UserRoles.Contains("Compliance Officer") ||
                            request.UserRoles.Contains("Senior Compliance Manager") ||
                            request.UserRoles.Contains("Chief Compliance & Ethics Officer"))
                        {
                            if (request.UserRoles.Contains("Compliance Officer") ||
                                request.UserRoles.Contains("Compliance Super User") || 
                                request.UserRoles.Contains("Senior Compliance Manager"))
                            {
                                adminNavigation.ChildItems.Add(new NavigationItemModel()
                                {
                                    IsParent = false,
                                    ItemTitle = "Employees",
                                    RoutePath = "compliance-employees",
                                    beginGroup = true
                                });
                            }
                            if (request.UserRoles.Contains("Compliance Officer") ||
                                request.UserRoles.Contains("Senior Compliance Manager") ||
                                request.UserRoles.Contains("Compliance Super User"))
                            {
                                adminNavigation.ChildItems.Add(new NavigationItemModel()
                                {
                                    IsParent = false,
                                    ItemTitle = "Conditional Items",
                                    RoutePath = "compliance-conditionals"
                                });
                            }
                            if (request.UserRoles.Contains("Compliance Officer") ||
                                request.UserRoles.Contains("Senior Compliance Manager") ||
                                request.UserRoles.Contains("Compliance Super User"))
                            {
                                adminNavigation.ChildItems.Add(new NavigationItemModel()
                                {
                                    IsParent = false,
                                    ItemTitle = "Manual Data Capture",
                                    RoutePath = "compliance-manual-capture"
                                });
                            }

                            if (request.UserRoles.Contains("Compliance Officer") ||
                                request.UserRoles.Contains("Chief Compliance & Ethics Officer") ||
                                request.UserRoles.Contains("Senior Compliance Manager") ||
                                request.UserRoles.Contains("Compliance Super User"))
                            {
                                var phaseCompletion = new NavigationItemModel()
                                {
                                    IsParent = true,
                                    ItemTitle = "Phase Completion",
                                    //RoutePath = "compliance-phasecompletion",
                                    ChildItems = new List<NavigationItemModel>()
                                };
                                phaseCompletion.ChildItems.Add(new NavigationItemModel
                                {
                                    IsParent = false,
                                    ItemTitle = "Phase 1",
                                    RoutePath = "compliance-phasecompletion-1"
                                });
                                if (request.UserRoles.Contains("Chief Compliance & Ethics Officer"))
                                {
                                    phaseCompletion.ChildItems.Add(new NavigationItemModel
                                    {
                                        IsParent = false,
                                        ItemTitle = "Phase 2",
                                        RoutePath = "compliance-phasecompletion-2"
                                    });
                                    phaseCompletion.ChildItems.Add(new NavigationItemModel
                                    {
                                        IsParent = false,
                                        ItemTitle = "Phase 3",
                                        RoutePath = "compliance-phasecompletion-3"
                                    });
                                    phaseCompletion.ChildItems.Add(new NavigationItemModel
                                    {
                                        IsParent = false,
                                        ItemTitle = "Phase 4",
                                        RoutePath = "compliance-phasecompletion-4"
                                    });
                                }
                                adminNavigation.ChildItems.Add(phaseCompletion);
                                adminNavigation.ChildItems.Add(new NavigationItemModel
                                {
                                    IsParent = false,
                                    ItemTitle = "Conditional Reports",
                                    RoutePath = "compliance-conditional-reports"
                                });
                                adminNavigation.ChildItems.Add(new NavigationItemModel
                                {
                                    IsParent = false,
                                    ItemTitle = "OME/s Conditional Report",
                                    RoutePath = "compliance-ome-conditional-report"
                                });
                                adminNavigation.ChildItems.Add(new NavigationItemModel
                                {
                                    IsParent = false,
                                    ItemTitle = "Conditional Issue Log Audit",
                                    RoutePath = "compliance-conditionals-issue-log-audit"
                                });
                            }

                            var reports = new NavigationItemModel()
                            {
                                IsParent = true,
                                ItemTitle = "Reports",
                                beginGroup = true
                            };
                            adminNavigation.ChildItems.Add(reports);
                            reports.ChildItems.Add(new NavigationItemModel
                            {
                                IsParent = false,
                                ItemTitle = "Employee Status",
                                RoutePath = "compliance-reporting-employee-status"
                            });
                            reports.ChildItems.Add(new NavigationItemModel
                            {
                                IsParent = false,
                                ItemTitle = "Employee Non-Participation",
                                RoutePath = "compliance-reporting-employee-non-participation"
                            });
                            reports.ChildItems.Add(new NavigationItemModel
                            {
                                IsParent = false,
                                ItemTitle = "Conditional Status",
                                RoutePath = "compliance-reporting-conditional-status",
                                beginGroup = true
                            });
                            reports.ChildItems.Add(new NavigationItemModel
                            {
                                IsParent = false,
                                ItemTitle = "Conditional Risk Categories",
                                RoutePath = "compliance-reporting-conditional-risk-categories"
                            });
                            reports.ChildItems.Add(new NavigationItemModel
                            {
                                IsParent = false,
                                ItemTitle = "Conditional Reasons for Previously Reported",
                                RoutePath = "compliance-reporting-conditional-confirmed-reported-reasons"
                            });
                         
                            reports.ChildItems.Add(new NavigationItemModel
                            {
                                IsParent = false,
                                ItemTitle = "Confirmations Per Day",
                                RoutePath = "compliance-confirmations-report-daily",
                                beginGroup = true
                            });

                            var emails = new NavigationItemModel()
                            {
                                IsParent = true,
                                ItemTitle = "Email Listings",
                                //RoutePath = "compliance-emailnotificationsummary",
                                ChildItems = new List<NavigationItemModel>()
                            };
                            emails.ChildItems.Add(new NavigationItemModel
                            {
                                IsParent = false,
                                ItemTitle = "Summary List",
                                RoutePath = "compliance-emailnotificationsummary",
                                ChildItems = new List<NavigationItemModel>()
                            });
                            emails.ChildItems.Add(new NavigationItemModel()
                            {
                                IsParent = false,
                                ItemTitle = "Detail List",
                                RoutePath = "compliance-emailnotificationdetail"
                            });
                            adminNavigation.ChildItems.Add(emails);
                        }
                    }

                    result.DeclarationsNavigation.Add(new NavigationItemModel()
                    {
                        IsParent = false,
                        ItemTitle = "Home",
                        RoutePath = "declarations-home"
                    });

                    //Declarations
                    var declarationsMenu = new NavigationItemModel()
                    {
                        IsParent = true,
                        ItemTitle = "Declaration"
                        //RoutePath = "declarations-process-information"
                    };
                    //:Personal Information
                    declarationsMenu.ChildItems.Add(new NavigationItemModel
                    {
                        IsParent = false,
                        ItemTitle = "Personal Information",
                        RoutePath = "declarations-process-information"
                    });
                    //:Directorships
                    declarationsMenu.ChildItems.Add(new NavigationItemModel
                    {
                        IsParent = false,
                        ItemTitle = "Directorships",
                        RoutePath = "declarations-process-directorships"
                    });
                    //:Shares
                    declarationsMenu.ChildItems.Add(new NavigationItemModel
                    {
                        IsParent = false,
                        ItemTitle = "Financial Interests / Shares",
                        RoutePath = "declarations-process-shares"
                    });
                    //:Conflicts of Interest
                    declarationsMenu.ChildItems.Add(new NavigationItemModel
                    {
                        IsParent = false,
                        ItemTitle = "Conflict of Interest",
                        RoutePath = "declarations-process-conflicts"
                    });
                    //:Private Work
                    declarationsMenu.ChildItems.Add(new NavigationItemModel
                    {
                        IsParent = false,
                        ItemTitle = "Private Work",
                        RoutePath = "declarations-process-work"
                    });
                    //:Gifts
                    declarationsMenu.ChildItems.Add(new NavigationItemModel
                    {
                        IsParent = false,
                        ItemTitle = "Gifts & Entertainment",
                        RoutePath = "declarations-process-gifts"
                    });
                    //:Summary Page
                    declarationsMenu.ChildItems.Add(new NavigationItemModel
                    {
                        IsParent = false,
                        ItemTitle = "Summary Page",
                        RoutePath = "declarations-process-summary",
                        beginGroup = true,
                        ShowBadge = false
                    });
                    result.DeclarationsNavigation.Add(declarationsMenu);
                    //Related Parties
                    result.DeclarationsNavigation.Add(new NavigationItemModel()
                    {
                        IsParent = false,
                        ItemTitle = "Related Parties",
                        RoutePath = "declarations-related-parties"
                    });
                    result.DeclarationsNavigation.Add(new NavigationItemModel()
                    {
                        IsParent = false,
                        ItemTitle = "Summary Page",
                        RoutePath = "declarations-process-summary"
                    });
                    result.DeclarationsNavigation.Add(new NavigationItemModel()
                    {
                        IsParent = false,
                        ItemTitle = "Policies",
                        RoutePath = "declarations-policies"
                    });
                    result.DeclarationsNavigation.Add(new NavigationItemModel()
                    {
                        IsParent = false,
                        ItemTitle = "Help",
                        RoutePath = "declarations-help"
                    });
                }
            }
            catch (Exception error)
            {
                var errorState = ErrorHandling.HandleError(error);
                result.Feedback = errorState.ErrorMessage;
                result.IsValidationError = errorState.IsValidationError;
                result.HasError = true;
            }

            return result;
        }
    }
}
