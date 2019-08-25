const fs = require('fs')
const key = 'd50f85d0fa734509be4e4a165a89607e'

String objectId = "1234567890"; //example-objectId
Request metadataRequest = new Request.Builder()
  .header("Ocp-Apim-Subscription-Key", key)
  .url(baseUrl + "/dms/objects/" + objectId)
  .get().build();

Response metadataResponse = client.newCall(metadataRequest).execute();
String metadataResponseString = metadataResponse.body().string();


Request contentRequest = new Request.Builder()
  .header("Ocp-Apim-Subscription-Key", key)
  .url(baseUrl + "/dms/objects/" + objectId + "/contents/file")
  .get().build();
