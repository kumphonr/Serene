﻿namespace Serene.Test {
    export let dataLocalText = {
        "Controls": {
            "EntityDialog": {
                "ApplyChangesButton": "Apply Changes",
                "CloneButton": "Clone",
                "DeleteButton": "Delete",
                "DeleteConfirmation": "Delete record?",
                "EditRecordTitle": "Edit {0}{1}",
                "LocalizationBack": "Back to Form",
                "LocalizationButton": "Localization",
                "LocalizationConfirmation": "Save changes to translations?",
                "NewRecordTitle": "New {0}",
                "SaveButton": "Save",
                "SaveSuccessMessage": "Save success",
                "UndeleteButton": "Undelete",
                "UndeleteConfirmation": "Undelete record?",
                "UpdateButton": "Update"
            },
            "EntityGrid": {
                "IncludeDeletedToggle": "display inactive records",
                "NewButton": "New {0}",
                "RefreshButton": "Refresh"
            },
            "FilterPanel": {
                "AddFilter": "add criteria",
                "All": "<all>",
                "And": "and",
                "AndInParens": "(and)",
                "ApplyGroups": "apply grouping",
                "ChangeAndOr": "click to switch between AND/OR",
                "ClearGroups": "clear grouping",
                "CurrentFilter": "Active Filter: {0}",
                "DialogTitle": "Edit Filter",
                "EditFilter": "edit filter",
                "EffectiveEmpty": "none",
                "EffectiveFilter": "Active Filter:",
                "FixErrorsMessage": "Please fix errors that are marked in red",
                "GroupBy": "--group--",
                "InvalidDate": "invalid date!",
                "InvalidNumber": "invalid number!",
                "InvalidOperator": "invalid operator",
                "OperatorFormats": {
                    "bw": "{0} is between {1} and {2}",
                    "contains": "{0} contains '{1}'",
                    "eq": "{0} = {1}",
                    "false": "{0} = no",
                    "ge": "{0} >= {1}",
                    "gt": "{0} > {1}",
                    "in": "{0} is one of [{1}]",
                    "isnotnull": "{0} is not null",
                    "isnull": "{0} is null",
                    "le": "{0} <= {1}",
                    "lt": "{0} < {1}",
                    "ne": "{0} <> {1}",
                    "startswith": "{0} starts with '{1}'",
                    "true": "{0} = yes"
                },
                "OperatorNames": {
                    "bw": "between",
                    "contains": "contains",
                    "eq": "equal",
                    "false": "no",
                    "ge": "greater than or equal",
                    "gt": "greater than",
                    "in": "in",
                    "isnotnull": "is not null",
                    "isnull": "is null",
                    "le": "less than or equal",
                    "lt": "less than",
                    "ne": "not equal",
                    "startswith": "starts with",
                    "true": "yes"
                },
                "Or": "or",
                "OrInParens": "(or)",
                "RemoveField": "remove criteria",
                "ResetButton": "reset",
                "ResetFilterHint": "clear filter",
                "SearchButton": "apply filter",
                "SelectField": "---select field---",
                "ThenBy": "--then by--",
                "ValueRequired": "value required!"
            },
            "ImageUpload": {
                "AddFileButton": "Select File",
                "DeleteButtonHint": "Remove",
                "UploadFileTooBig": "Uploaded file must be smallar than {0}",
                "UploadFileTooSmall": "Uploaded file must be at least {0}"
            },
            "Pager": {
                "DefaultLoadError": "An error occured while loading data!",
                "LoadingStatus": "Please wait, loading data...",
                "NoRowStatus": "No records",
                "Page": "Page",
                "PageStatus": "Showing {from} to {to} of {total} total records"
            },
            "PropertyGrid": {
                "DefaultCategory": "Properties",
                "RequiredHint": "this field is required"
            },
            "QuickSearch": {
                "FieldSelection": "select the field to search on",
                "Hint": "enter the text to search for...",
                "Placeholder": "search..."
            },
            "SelectEditor": {
                "ClickToDefine": "*** Click to define a new one ***",
                "EmptyItemText": "--select--",
                "InplaceAdd": "Define New",
                "InplaceEdit": "Edit",
                "NoResultsClickToDefine": "*** No results. Click to define a new one ***"
            }
        },
        "Db": {
            "Administration": {
                "Language": {
                    "EntityPlural": "Languages",
                    "EntitySingular": "Language",
                    "Id": "Id",
                    "LanguageId": "Language Id",
                    "LanguageName": "Language Name"
                },
                "Role": {
                    "EntityPlural": "Roles",
                    "EntitySingular": "Role",
                    "RoleId": "Role Id",
                    "RoleName": "Role Name"
                },
                "RolePermission": {
                    "EntityPlural": "Role Permissions",
                    "EntitySingular": "Role Permission",
                    "PermissionKey": "Permission Key",
                    "RoleId": "Role Id",
                    "RolePermissionId": "Role Permission Id",
                    "RoleRoleName": "Role Role Name"
                },
                "Translation": {
                    "CustomText": "User Translation in Target Language",
                    "EntityPlural": "Translations",
                    "Key": "Local Text Key",
                    "OverrideConfirmation": "Overwrite user translation with clicked text?",
                    "SaveChangesButton": "Save Changes",
                    "SourceLanguage": "Source Language",
                    "SourceText": "Effective Translation in Source Language",
                    "TargetLanguage": "Target Language",
                    "TargetText": "Effective Translation in Target Language"
                },
                "User": {
                    "DisplayName": "Display Name",
                    "Email": "Email",
                    "EntityPlural": "Users",
                    "EntitySingular": "User",
                    "LastDirectoryUpdate": "Last Directory Update",
                    "Password": "Password",
                    "PasswordConfirm": "Confirm Password",
                    "PasswordHash": "Password Hash",
                    "PasswordSalt": "Password Salt",
                    "Source": "Source",
                    "UserId": "User Id",
                    "Username": "Username"
                },
                "UserPermission": {
                    "EntityPlural": "UserPermissions",
                    "EntitySingular": "UserPermissions",
                    "PermissionKey": "Permission Key",
                    "User": "User Display Name",
                    "UserId": "User Id",
                    "UserPermissionId": "User Permission Id",
                    "Username": "User Username"
                },
                "UserRole": {
                    "EntityPlural": "UserRoles",
                    "EntitySingular": "UserRoles",
                    "RoleId": "Role Id",
                    "User": "User Display Name",
                    "UserId": "User Id",
                    "UserRoleId": "User Role Id",
                    "Username": "User Username"
                }
            },
            "CustomerRepresentatives": {
                "CustomerId": "Customer Id",
                "EmployeeId": "Employee Id",
                "EntityPlural": "CustomerRepresentatives",
                "EntitySingular": "CustomerRepresentatives",
                "RepresentativeId": "Representative Id"
            },
            "Northwind": {
                "Category": {
                    "CategoryID": "Category Id",
                    "CategoryName": "Category Name",
                    "Description": "Description",
                    "EntityPlural": "Categories",
                    "EntitySingular": "Category",
                    "Picture": "Picture"
                },
                "CategoryLang": {
                    "CategoryId": "Category Id",
                    "CategoryName": "Category Name",
                    "Description": "Description",
                    "EntityPlural": "CategoryLang",
                    "EntitySingular": "CategoryLang",
                    "Id": "Id",
                    "LanguageId": "Language Id"
                },
                "Customer": {
                    "Address": "Address",
                    "City": "City",
                    "CompanyName": "Company Name",
                    "ContactName": "Contact Name",
                    "ContactTitle": "Contact Title",
                    "Country": "Country",
                    "CustomerID": "Customer Id",
                    "EntityPlural": "Customers",
                    "EntitySingular": "Customer",
                    "Fax": "Fax",
                    "ID": "ID",
                    "Phone": "Phone",
                    "PostalCode": "Postal Code",
                    "Region": "Region"
                },
                "CustomerCustomerDemo": {
                    "CustomerAddress": "Customer Address",
                    "CustomerCity": "Customer City",
                    "CustomerCompanyName": "Customer Company Name",
                    "CustomerContactName": "Customer Contact Name",
                    "CustomerContactTitle": "Customer Contact Title",
                    "CustomerCountry": "Customer Country",
                    "CustomerFax": "Customer Fax",
                    "CustomerID": "Customer Id",
                    "CustomerPhone": "Customer Phone",
                    "CustomerPostalCode": "Customer Postal Code",
                    "CustomerRegion": "Customer Region",
                    "CustomerTypeCustomerDesc": "Customer Type Customer Desc",
                    "CustomerTypeID": "Customer Type Id",
                    "EntityPlural": "CustomerCustomerDemo",
                    "EntitySingular": "CustomerCustomerDemo",
                    "ID": "Id"
                },
                "CustomerDemographic": {
                    "CustomerDesc": "Customer Desc",
                    "CustomerTypeID": "Customer Type Id",
                    "EntityPlural": "CustomerDemographics",
                    "EntitySingular": "CustomerDemographics",
                    "ID": "Id"
                },
                "Employee": {
                    "Address": "Address",
                    "BirthDate": "Birth Date",
                    "City": "City",
                    "Country": "Country",
                    "EmployeeID": "Employee Id",
                    "EntityPlural": "Employees",
                    "EntitySingular": "Employee",
                    "Extension": "Extension",
                    "FirstName": "First Name",
                    "FullName": "FullName",
                    "Gender": "Gender",
                    "HireDate": "Hire Date",
                    "HomePhone": "Home Phone",
                    "LastName": "Last Name",
                    "Notes": "Notes",
                    "Photo": "Photo",
                    "PhotoPath": "Photo Path",
                    "PostalCode": "Postal Code",
                    "Region": "Region",
                    "ReportsTo": "Reports To",
                    "ReportsToAddress": "Reports To Address",
                    "ReportsToBirthDate": "Reports To Birth Date",
                    "ReportsToCity": "Reports To City",
                    "ReportsToCountry": "Reports To Country",
                    "ReportsToExtension": "Reports To Extension",
                    "ReportsToFirstName": "Reports To First Name",
                    "ReportsToFullName": "Reports To",
                    "ReportsToHireDate": "Reports To Hire Date",
                    "ReportsToHomePhone": "Reports To Home Phone",
                    "ReportsToLastName": "Reports To Last Name",
                    "ReportsToNotes": "Reports To Notes",
                    "ReportsToPhoto": "Reports To Photo",
                    "ReportsToPhotoPath": "Reports To Photo Path",
                    "ReportsToPostalCode": "Reports To Postal Code",
                    "ReportsToRegion": "Reports To Region",
                    "ReportsToReportsTo": "Reports To",
                    "ReportsToTitle": "Reports To Title",
                    "ReportsToTitleOfCourtesy": "Reports To Title Of Courtesy",
                    "Title": "Title",
                    "TitleOfCourtesy": "Title Of Courtesy"
                },
                "EmployeeTerritory": {
                    "EmployeeAddress": "Employee Address",
                    "EmployeeBirthDate": "Employee Birth Date",
                    "EmployeeCity": "Employee City",
                    "EmployeeCountry": "Employee Country",
                    "EmployeeExtension": "Employee Extension",
                    "EmployeeFirstName": "Employee First Name",
                    "EmployeeHireDate": "Employee Hire Date",
                    "EmployeeHomePhone": "Employee Home Phone",
                    "EmployeeID": "Employee Id",
                    "EmployeeLastName": "Employee Last Name",
                    "EmployeeNotes": "Employee Notes",
                    "EmployeePhoto": "Employee Photo",
                    "EmployeePhotoPath": "Employee Photo Path",
                    "EmployeePostalCode": "Employee Postal Code",
                    "EmployeeRegion": "Employee Region",
                    "EmployeeReportsTo": "Employee Reports To",
                    "EmployeeTitle": "Employee Title",
                    "EmployeeTitleOfCourtesy": "Employee Title Of Courtesy",
                    "EntityPlural": "EmployeeTerritories",
                    "EntitySingular": "EmployeeTerritories",
                    "TerritoryID": "Territory Id",
                    "TerritoryRegionID": "Territory Region Id",
                    "TerritoryTerritoryDescription": "Territory Territory Description"
                },
                "Note": {
                    "EntityId": "Entity Id",
                    "EntityPlural": "Notes",
                    "EntitySingular": "Note",
                    "EntityType": "Entity Type",
                    "InsertDate": "Insert Date",
                    "InsertUserDisplayName": "Insert User",
                    "InsertUserId": "Insert User Id",
                    "NoteId": "Note Id",
                    "Text": "Text"
                },
                "Order": {
                    "CustomerCity": "Customer City",
                    "CustomerCompanyName": "Customer",
                    "CustomerContactName": "Customer Contact Name",
                    "CustomerContactTitle": "Customer Contact Title",
                    "CustomerCountry": "Customer Country",
                    "CustomerFax": "Customer Fax",
                    "CustomerID": "Customer",
                    "CustomerPhone": "Customer Phone",
                    "CustomerRegion": "Customer Region",
                    "DetailList": "Details",
                    "EmployeeFullName": "Employee",
                    "EmployeeGender": "Employee Gender",
                    "EmployeeID": "Employee",
                    "EntityPlural": "Orders",
                    "EntitySingular": "Order",
                    "Freight": "Freight",
                    "OrderDate": "Order Date",
                    "OrderID": "Order ID",
                    "RequiredDate": "Required Date",
                    "ShipAddress": "Ship Address",
                    "ShipCity": "Ship City",
                    "ShipCountry": "Ship Country",
                    "ShipName": "Ship Name",
                    "ShipPostalCode": "Ship Postal Code",
                    "ShipRegion": "Ship Region",
                    "ShipVia": "Ship Via",
                    "ShipViaCompanyName": "Ship Via",
                    "ShipViaPhone": "Ship Via Phone",
                    "ShippedDate": "Shipped Date",
                    "ShippingState": "Shipping State"
                },
                "OrderDetail": {
                    "DetailID": "ID",
                    "Discount": "Discount",
                    "EntityPlural": "Order Details",
                    "EntitySingular": "Order Detail",
                    "LineTotal": "Line Total",
                    "OrderCustomerID": "Order Customer Id",
                    "OrderDate": "Order Date",
                    "OrderEmployeeID": "Order Employee Id",
                    "OrderID": "Order Id",
                    "OrderShipCity": "Order Ship City",
                    "OrderShipCountry": "Order Ship Country",
                    "OrderShipVia": "Order Ship Via",
                    "OrderShippedDate": "Order Shipped Date",
                    "ProductDiscontinued": "Product Discontinued",
                    "ProductID": "Product",
                    "ProductName": "Product Name",
                    "ProductQuantityPerUnit": "Product Quantity Per Unit",
                    "ProductSupplierID": "Product Supplier Id",
                    "ProductUnitPrice": "Product Unit Price",
                    "Quantity": "Quantity",
                    "UnitPrice": "Unit Price"
                },
                "Product": {
                    "CategoryDescription": "Category Description",
                    "CategoryID": "Category",
                    "CategoryName": "Category",
                    "CategoryPicture": "Category Picture",
                    "Discontinued": "Discontinued",
                    "EntityPlural": "Products",
                    "EntitySingular": "Product",
                    "ProductID": "Product Id",
                    "ProductImage": "Product Image",
                    "ProductName": "Product Name",
                    "QuantityPerUnit": "Quantity Per Unit",
                    "ReorderLevel": "Reorder Level",
                    "SupplierAddress": "Supplier Address",
                    "SupplierCity": "Supplier City",
                    "SupplierCompanyName": "Supplier",
                    "SupplierContactName": "Supplier Contact Name",
                    "SupplierContactTitle": "Supplier Contact Title",
                    "SupplierCountry": "Supplier Country",
                    "SupplierFax": "Supplier Fax",
                    "SupplierHomePage": "Supplier Home Page",
                    "SupplierID": "Supplier",
                    "SupplierPhone": "Supplier Phone",
                    "SupplierPostalCode": "Supplier Postal Code",
                    "SupplierRegion": "Supplier Region",
                    "UnitPrice": "Unit Price",
                    "UnitsInStock": "Units In Stock",
                    "UnitsOnOrder": "Units On Order"
                },
                "ProductLang": {
                    "EntityPlural": "ProductLang",
                    "EntitySingular": "ProductLang",
                    "Id": "Id",
                    "LanguageId": "Language Id",
                    "ProductId": "Product Id",
                    "ProductName": "Product Name"
                },
                "Region": {
                    "EntityPlural": "Region",
                    "EntitySingular": "Region",
                    "RegionDescription": "Region Description",
                    "RegionID": "Region Id"
                },
                "SalesByCategory": {
                    "CategoryId": "Category Id",
                    "CategoryName": "Category Name",
                    "EntityPlural": "Sales by Category",
                    "EntitySingular": "Sales by Category",
                    "ProductName": "Product Name",
                    "ProductSales": "Product Sales"
                },
                "Shipper": {
                    "CompanyName": "Company Name",
                    "EntityPlural": "Shippers",
                    "EntitySingular": "Shipper",
                    "Phone": "Phone",
                    "ShipperID": "Shipper Id"
                },
                "Supplier": {
                    "Address": "Address",
                    "City": "City",
                    "CompanyName": "Company Name",
                    "ContactName": "Contact Name",
                    "ContactTitle": "Contact Title",
                    "Country": "Country",
                    "EntityPlural": "Suppliers",
                    "EntitySingular": "Supplier",
                    "Fax": "Fax",
                    "HomePage": "Home Page",
                    "Phone": "Phone",
                    "PostalCode": "Postal Code",
                    "Region": "Region",
                    "SupplierID": "Supplier Id"
                },
                "Territory": {
                    "EntityPlural": "Territories",
                    "EntitySingular": "Territory",
                    "ID": "ID",
                    "RegionDescription": "Region",
                    "RegionID": "Region",
                    "TerritoryDescription": "Territory Description",
                    "TerritoryID": "Territory ID"
                }
            },
            "Shared": {
                "RecordId": "ID"
            }
        },
        "Dialogs": {
            "AlertTitle": "Alert",
            "CancelButton": "Cancel",
            "ConfirmationTitle": "Confirm",
            "InformationTitle": "Information",
            "MaximizeHint": "Maximize",
            "NoButton": "No",
            "OkButton": "OK",
            "RestoreHint": "Restore",
            "WarningTitle": "Warning",
            "YesButton": "Yes"
        },
        "Enums": {
            "CustomFieldType": {
                "Boolean": "Mantıksal (Boolean)",
                "Date": "Tarih (Date)",
                "DateTime": "Tarih / Zaman (DateTime)",
                "Decimal": "Ondalıklı Sayı (Decimal)",
                "Int32": "Tamsayı (Int32)",
                "Int64": "Tamsayı (Int64)",
                "String": "Metin (String)"
            },
            "Northwind": {
                "OrderShippingState": {
                    "NotShipped": "Not Shipped",
                    "Shipped": "Shipped"
                }
            }
        },
        "Forms": {
            "Membership": {
                "ChangePassword": {
                    "FormTitle": "Change Password",
                    "SubmitButton": "Change Password",
                    "Success": "Your password is changed."
                },
                "ForgotPassword": {
                    "FormInfo": "Please enter the e-mail you used to signup.",
                    "FormTitle": "Forgot My Password",
                    "SubmitButton": "Reset My Password",
                    "Success": "An e-mail with password reset instructions is sent to your e-mail address."
                },
                "Login": {
                    "ForgotPassword": "forgot password?",
                    "FormTitle": "Welcome to SERENE (Serenity Application Template)",
                    "SignInButton": "Sign In",
                    "SignUpButton": "register a new account"
                },
                "ResetPassword": {
                    "EmailSubject": "Reset Your Serene Password",
                    "FormTitle": "Reset Password",
                    "SubmitButton": "Reset Password",
                    "Success": "Your password is changed. Please login with your new password."
                },
                "SignUp": {
                    "ActivateEmailSubject": "Activate Your Serene Account",
                    "ActivationCompleteMessage": "Your account is now activated. Use the e-mail and password you used while signing up to login.",
                    "FormInfo": "Enter your details to create a free account.",
                    "FormTitle": "Sign up for Serene",
                    "SubmitButton": "Sign Up",
                    "Success": "An e-mail with instructions to active your account is sent to your e-mail address. Please check your e-mails."
                }
            }
        },
        "Permission": {
            "Administration:": "Administration",
            "Administration:Security": "User, Role Management and Permissions",
            "Administration:Translation": "Languages and Translations",
            "Northwind:Customer": "Customers",
            "Northwind:Customer:Delete": "Delete",
            "Northwind:Customer:Modify": "Create/Update",
            "Northwind:Customer:View": "View",
            "Northwind:General": "[General]"
        },
        "Site": {
            "BasicProgressDialog": {
                "CancelTitle": "Operation cancelled. Waiting for in progress calls to complete...",
                "PleaseWait": "Please wait..."
            },
            "BulkServiceAction": {
                "AllHadErrorsFormat": "All {0} record(s) that are processed had errors!",
                "AllSuccessFormat": "Finished processing on {0} record(s) with success.",
                "ConfirmationFormat": "Perform this operation on {0} selected record(s)?",
                "ErrorCount": "{0} error(s)",
                "NothingToProcess": "Please select some records to process!",
                "SomeHadErrorsFormat": "Finished processing on {0} record(s) with success. {1} record(s) had errors!",
                "SuccessCount": "{0} done"
            },
            "Dashboard": {
                "ContentDescription": "a sample with random data (from free <em><a href = \"https://almsaeedstudio.com/\" target= \"_blank\">AdminLTE theme</a></em>)"
            },
            "Layout": {
                "FooterCopyright": "Copyright (c) 2015.",
                "FooterInfo": "Serenity Platform",
                "FooterRights": "All rights reserved.",
                "GeneralSettings": "General Settings",
                "Language": "Language",
                "Theme": "Theme",
                "ThemeBlack": "Black",
                "ThemeBlackLight": "Black Light",
                "ThemeBlue": "Blue",
                "ThemeBlueLight": "Blue Light",
                "ThemeGreen": "Green",
                "ThemeGreenLight": "Green Light",
                "ThemePurple": "Purple",
                "ThemePurpleLight": "Purple Light",
                "ThemeRed": "Red",
                "ThemeRedLight": "Red Light",
                "ThemeYellow": "Yellow",
                "ThemeYellowLight": "Yellow Light"
            },
            "RolePermissionDialog": {
                "DialogTitle": "Edit Role Permissions ({0})",
                "EditButton": "Edit Permissions",
                "SaveSuccess": "Updated role permissions."
            },
            "UserDialog": {
                "EditPermissionsButton": "Edit Permissions",
                "EditRolesButton": "Edit Roles"
            },
            "UserPermissionDialog": {
                "DialogTitle": "Edit User Permissions ({0})",
                "Grant": "Grant",
                "Permission": "Permission",
                "Revoke": "Revoke",
                "SaveSuccess": "Updated user permissions."
            },
            "UserRoleDialog": {
                "DialogTitle": "Edit User Roles ({0})",
                "SaveSuccess": "Updated user roles."
            },
            "ValidationError": {
                "Title": "ERROR"
            }
        },
        "Validation": {
            "ArgumentIsNull": "Argument {0} is null!",
            "ArgumentOutOfRange": "Argument {0} is out of range!",
            "AuthenticationError": "Invalid username or password!",
            "CantFindUserWithEmail": "Can't find a user with that e-mail adress!",
            "CaptchaMismatch": "Incorrect code entered. You can generate a new one by clicking image, if you can't see the characters clearly.",
            "CurrentPasswordMismatch": "Your current password is not valid!",
            "DateInvalid": "Please enter a valid date.",
            "DayHourAndMin": "Please enter a valid timespan (e.g. 2.15:30)",
            "Decimal": "Please enter a valid decimal value.",
            "DeleteForeignKeyError": "Can't delete record. '{0}' table has records that depends on this one!",
            "Digits": "Please only use digits 0-9.",
            "Email": "Please enter a valid e-mail address.",
            "EmailConfirm": "Emails entered doesn't match!",
            "EmailExists": "There is another user registered with this e-mail address. If you don't remember your password, use the forgot my password form.",
            "EmailInUse": "Another user with this e-mail exists!",
            "EmailMultiple": "Please enter a valid e-mail address (if more than one, use ';' as separator)",
            "EntityForeignKeyViolation": "You must first delete related {0} records before deleting this one!",
            "EntityHasDeletedParent": "Before operating on this record, its parent must be undeleted!",
            "EntityIsNotActive": "Can't operate on a deleted {0} record!",
            "EntityNotFound": "Record not found. It might be deleted or you don't have required permissions!",
            "EntityReadAccessViolation": "You don't have required permissions to view {0} record with key: {1}",
            "EntityWriteAccessViolation": "You don't have required permissions to update {0} record with key: {1}",
            "FieldInvalidDateRange": "{0} field value can't be before date {1}!",
            "FieldInvalidValue": "Invalid value {0} for field {1}!",
            "FieldIsReadOnly": "{0} field is read only!",
            "FieldIsRequired": "{0} field is required!",
            "HourAndMin": "Please enter a valid time (e.g. 15:30)",
            "IncorrectPassword": "Incorrect password. Please check.",
            "Integer": "Please enter a valid integer value.",
            "InvalidActivateToken": "Your token to activate your account is invalid or has expired!",
            "InvalidFormMessage": "Please validate empty or invalid inputs (marked with red) before submitting the form.",
            "InvalidResetToken": "Your token to reset your password is invalid or has expired!",
            "MaxDate": "Please enter a date before '{0}'.",
            "MaxLength": "Please enter no more than {0} characters.",
            "MinDate": "Please enter a date after '{0}'.",
            "MinLength": "Please enter no less than {0} characters.",
            "MinRequiredPasswordLength": "Entered password doesn't have enough characters (min {0})!",
            "NorthwindPhone": "Phone numbers should be entered in format '(503) 555-9831'.",
            "NorthwindPhoneMultiple": "Phone numbers should be entered in format '(503) 555-9831. Multiple numbers can be separated with comma.",
            "PasswordConfirm": "Password entered don't match.",
            "Range": "Please enter a value between {0} and {1}.",
            "Recaptcha": "Please validate that you are not a robot!",
            "RequestIsNull": "Request is null!",
            "Required": "This field is required.",
            "SavePrimaryKeyError": "Can't save record. There is another record with the same {1} value!",
            "UnexpectedError": "An unexpected error has occured!",
            "UniqueConstraint": "Another record with the same '{0}' value(s) exists!",
            "Url": "Please enter a valid URL (e.g. http://www.site.com).",
            "Username": "Not a valid username.",
            "UsernameExists": "This username is already used. Please choose another.",
            "Xss": "Invalid value! (don't use '&lt;' and '&amp;')"
        }
    }
}