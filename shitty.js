// random jquery testing
$(function(){
    $('#name').keyup(function(){
        $('#greet').text('Hello ' + $('#name').val())
    })
});


    var request = new XMLHttpRequest()
    request.open('GET', 'https://coronavirus-19-api.herokuapp.com/all', true)
    request.onload = function() {
        var data = JSON.parse(this.response)
        console.log("cases: " + data.cases + "\ndeaths: " + data.deaths)
        /*var cases = data.cases;
        var deaths = data.deaths;
        var recovered = data.recovered;
        */
    
        var arr = [data.cases, data.deaths, data.recovered];


        // for viewing as a webpage:
        //document.getElementById("resp").innerHTML = "cases: " + data.cases + "\ndeaths: " + data.deaths;

        // for viewing as an extension:
        chrome.storage.sync.set({myLine: arr}, function(data) {
            console.log('success ' + data.myLine); 
        });

        //chrome.storage.sync.set({deathLine: deaths})
        
        document.getElementById('resp').onclick = function() {
            chrome.storage.sync.get('myLine', function(data) {
                alert('There are currently ' + data.myLine[0] + ' cases, '
                + data.myLine[1] + ' deaths, and ' + data.myLine[2] + ' patients recovered globally.'); //this works
            })
        }

    }

    request.send()
