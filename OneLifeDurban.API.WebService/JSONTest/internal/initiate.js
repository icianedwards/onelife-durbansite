var groupsDropdown;
var testsDropdown;
var pathBox;
var headerBox;
var tempHeaderData;
var isTransacting;
var txtRequest;
var txtResponse;
var fetchLoader;
var currentURL = "";

$(document).ready(function () {

    groupsDropdown = document.getElementById("ddlGroups");
    testsDropdown = document.getElementById("ddlTests");
    headersDropdown = document.getElementById("ddlHeaders");
    pathBox = document.getElementById("txtPath");
    headerBox = document.getElementById("txtHeaders");
    tempHeaderData = headers[0].HeaderValue;
    isTransacting = false;
    txtRequest = document.getElementById("txtRequest");
    txtResponse = document.getElementById("txtResponse");
    fetchLoader = document.getElementById("imgFetchLoader");

    headerBox.value = JSON.stringify(tempHeaderData);

    if (testData.length > 0) {

        document.getElementById("hVersion").innerHTML = "Local Update " + VERSION;

        groupsDropdown.innerHTML = "";

        for (var x = 0; x < testData.length; x++) {
            var opt = document.createElement("option");
            opt.value = x;
            opt.innerHTML = testData[x].groupTitle;
            groupsDropdown.appendChild(opt);
        }

        loadGroup();

        document.getElementById("divLoader").style.display = "none";
        document.getElementById("divUI").style.display = "block";
    }
    loadHeaders();
});

function loadHeaders() {
    headersDropdown.innerHTML = "";

    for (var x = 0; x < headers.length; x++) {
        var opt = document.createElement("option");
        opt.value = x;
        opt.innerHTML = headers[x].HeaderName;
        headersDropdown.appendChild(opt);
    }
}

function loadHeader() {
    var headerIndex = parseInt(headersDropdown.value);
    headerBox.value = JSON.stringify(headers[headerIndex].HeaderValue);
}

function loadGroup() {

    var groupIndex = parseInt(groupsDropdown.value);

    testsDropdown.innerHTML = "";
    for (var x = 0; x < testData[groupIndex].apiCalls.length; x++) {
        var opt = document.createElement("option");
        opt.value = x;
        opt.innerHTML = testData[groupIndex].apiCalls[x].url;
        testsDropdown.appendChild(opt);
    }
    loadTest();
}

function loadTest() {

    var groupIndex = parseInt(groupsDropdown.value);

    var testIndex = parseInt(testsDropdown.value);

    pathBox.value = testData[groupIndex].apiCalls[testIndex].url;

    currentURL = APIBaseURL + "/" + testData[groupIndex].apiCalls[testIndex].url; testData[groupIndex].apiCalls[testIndex].url;

    txtRequest.value = JSON.stringify(testData[groupIndex].apiCalls[testIndex].dataToSend, null, 3);
    txtResponse.value = "";
    document.getElementById("testComments").innerHTML = "";
    if (testData[groupIndex].apiCalls[testIndex].comments) {
        document.getElementById("testComments").innerHTML = testData[groupIndex].apiCalls[testIndex].comments;
    }
}

var startTime;
function testJSON() {
    startTime = new Date();
    tempHeaderData = {};
    try {
        tempHeaderData = JSON.parse(headerBox.value);
    } catch (err) {
        alert("HEADER ERROR: " + err);
    }
    txtResponse.className = "";
    txtResponse.value = "";
    isTransacting = true;
    setTimeout(showLoading, 500);
    $.ajax({
        url: currentURL,
        type: "POST",
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: txtRequest.value,
        crossDomain: false,
        headers: tempHeaderData
    })
        .done(handleResponse).fail(handleError);
}

function showLoading() {
    if (isTransacting) {
        fetchLoader.style.display = "block";
        setTimeout(showLoading, 200);
    }
    else {
        fetchLoader.style.display = "none";
    }
}

function handleResponse(data) {
    txtResponse.value = (JSON.stringify(data, null, 4));
    if (data.HasError) {
        txtResponse.className = "ErrorText";
    }
    isTransacting = false;
    var duration = (new Date() - startTime);
    document.getElementById('divDuration').style.display = 'block';
    document.getElementById('lblDuration').innerText = duration;
    if (duration > 1000) {
        document.getElementById('divDuration').style.color = 'red';
    }
    else {
        document.getElementById('divDuration').style.color = 'darkblue';
    }
}

function handleError(data) {
    txtResponse.value = JSON.stringify(data);
    txtResponse.className = "ErrorText";
    isTransacting = false;
}