var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1HqhPQFw7mxXnTdPy1fUEgqLvc3b8wqDfZtFq4MegYBs/edit#");
var sheet = ss.getSheetByName("เทส1");
function doPost(e) {
   
  var data = JSON.parse(e.postData.contents)
  var userMsg = data.originalDetectIntentRequest.payload.data.message.text;
  var values = sheet.getRange(2, 1, sheet.getLastRow(),sheet.getLastColumn()).getValues();
for(var i = 0;i<values.length; i++){
    
    if(values[i][0] == userMsg ){
      i=i+2;
var Data1 = sheet.getRange(i,1).getValue();
var Data2 = sheet.getRange(i,2).getValue();
var Data3 = sheet.getRange(i,3).getValue();
var Data4 = sheet.getRange(i,4).getValue();
   
      var result = {
    "fulfillmentMessages": [
  {
    "platform": "line",
    "type": 4,
    "payload" : {
    "line":  {
  "type": "text",
  "text": "คุณ " +Data1+" เลขประจำตัวประชาชน " + Data2 +" ที่อยู่ "+ Data3+" หมายเลขโทรศัพท์ " + Data4
    }
        
   }
  }
 ]
}
      
    var replyJSON = ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
    return replyJSON;
}
  }
}
