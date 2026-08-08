Head over to this  link (https://script.google.com/macros/s/AKfycby4xrQIGiXtUmCzJIZLmP3f2QCqlpcrMLLjbMo3kuDV/dev). (THIS WILL ONLY WORK IF THE LINK IS CALLED AS A kapvmeu user)

Click the “Create Electives Form” Button to create a new electives form. The data for this form would be taken from this sheet “ElectivesList”. (Also note that any change in this sheet would immediately trigger a function to update the script Properties). This function also creates the spreadsheet which collects the data for the form. The id of this spreadsheet will be stored in the script Property “dummySheetId”


Check if the responses are in the desired order (eg. Time stamp based ascending or merit etc)

Click the Process response sheet button which is linked to the function “test_responseSheetPreprocess” from “test” file to preprocess the dats. (What was kept in mind while preprocessing - suppose if a student has chosen the same choice more than once for a block, then the list of departments that were not chosen would be randomly put for that preference)
Then click the button Allot for all students button which is linked to the function   “test_createAllotmentMatrixAndGenerateDeptWiseMatrix”. This function creates Allotment matrix for students and the 2 other sheets where the list of students going to a particular department would be seen.
IF THE ENTIRE BATCH IS GOING TO BE SENT TO BLOCK 1 AND BLOCK 2 SIMULTANEOUSLY (75 IN EACH BLOCK), THEN DOUBLE THE NUMBER OF VACANCIES IN THE “ElectivesList” Sheet before clicking Allot for all students. 

