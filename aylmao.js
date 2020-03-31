
// api call for US data



var domesticRequest = new XMLHttpRequest()
domesticRequest.open('GET', 'https://coronavirus-19-api.herokuapp.com/countries/USA', true)
domesticRequest.onload = function() {
    var domData = JSON.parse(this.response)
    console.log("cases: " + domData.cases + "\ndeaths: " + domData.deaths)
    

    var domesticArray = [domData.cases, domData.deaths, domData.recovered, domData.active];

    // for viewing as a webpage:
    //document.getElementById("resp").innerHTML = "cases: " + domData.cases + "\ndeaths: " + domData.deaths;

    // for viewing as an extension:
    chrome.storage.sync.set({dLine: domesticArray}, function(domData) {
        //console.log('success ' + domData.dLine); 
    });
    
    document.getElementById('respd').onclick = function() {
        chrome.storage.sync.get('dLine', function(data) {
            alert('There are currently ' + data.dLine[0] + ' cases, ' + 
            data.dLine[1] + ' deaths, ' + data.dLine[2] + ' patients recovered, and ' + data.dLine[3] + ' active cases in America.'); //this works
        })
    }

}

domesticRequest.send()