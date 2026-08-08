function createAndFormatDepartmentSheets() {
  // Get the spreadsheet ID from script properties
  var ssId = PropertiesService.getScriptProperties().getProperty("dummySheetId");
  if (!ssId) {
    Logger.log("Error: dummySheetId script property not set.");
    return;
  }

  try {
    var ss = SpreadsheetApp.openById(ssId);
    var sourceSheet = ss.getSheetByName("Allotment_Matrix");

    if (!sourceSheet) {
      Logger.log("Error: 'Allotment_Matrix' sheet not found.");
      return;
    }

    // Create copies
    var sheet1 = sourceSheet.copyTo(ss).setName("Dept_wise_Block_1");
    var sheet2 = sourceSheet.copyTo(ss).setName("Dept_wise_Block_2");

    // Format Dept_wise_Block_1
    formatDepartmentSheet(sheet1, "Block_1", "Block_2");

    // Format Dept_wise_Block_2
    formatDepartmentSheet(sheet2, "Block_2", "Block_1");

    Logger.log("Department sheets created and formatted successfully.");
    return "Department sheets created and formatted successfully."

  } catch (error) {
    Logger.log("An error occurred: " + error);
    return "An Error occured"
  }
}

function formatDepartmentSheet(sheet, sortColumnName, deleteColumnName) {
  var lastColumn = sheet.getLastColumn();
  var headers = sheet.getRange(1, 1, 1, lastColumn).getValues()[0];

  // Find the column indices
  var sortColumnIndex = headers.indexOf(sortColumnName) + 1; // +1 for 1-based index
  var deleteColumnIndex = headers.indexOf(deleteColumnName) + 1;

  if (sortColumnIndex === 0 || deleteColumnIndex === 0) {
    Logger.log("Error: Column headers '" + sortColumnName + "' or '" + deleteColumnName + "' not found in sheet '" + sheet.getName() + "'.");
    return; // Stop processing this sheet if headers not found
  }
  var lastRow = sheet.getLastRow()
  var rangeToSort = sheet.getRange(2,1,lastRow-1,lastColumn)

  // Sort the data
  rangeToSort.sort(sortColumnIndex);

  // Delete the unwanted column
  sheet.deleteColumn(deleteColumnIndex);
}