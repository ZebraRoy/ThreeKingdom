

// document ready
$(function () {
    MAIN.Init();
});

// Define namespace
var MAIN = MAIN || {};


// Init
MAIN.Init = function () {

    with (MAIN) {
         
        let socket;

        // [Connect] click
        $("button[name='buttConnect']").click(function () {
            console.log("buttConnect clicked");

            // Connect to server
            socket = io.connect();

            // Map the messages to event listener
            const arr = ['gameList', 'gameUpdate', 'generalUpdate'];
            for (let k in arr) {
                socket.on(arr[k], function (data) { OnDataReceived(arr[k], data);  });
            }
           
        });


        // [syncGameList] click
        $("button[name='buttSyncGameList']").click(function () {
            console.log("buttSyncGameList clicked");
            socket.emit('syncGameList');
        });


        // [createGame] click
        $("button[name='buttCreateGame']").click(function () {
            const strPlayerName = $("#txtCreateGamePlayerName").val();

            console.log("buttCreateGame clicked. strPlayerName=" + strPlayerName);
            socket.emit('createGame', strPlayerName);
        });


        // [startGame] click
        $("button[name='buttStartGame']").click(function () {
            const strGameId = $("#txtStartGameGameId").val();

            console.log("buttStartGame clicked. strGameId=" + strGameId);
            socket.emit('startGame', strGameId);
        });


        // [joinGame] click
        $("button[name='buttJoinGame']").click(function () {

            const strPlayerName = $("#txtJoinGamePlayerName").val();
            const strGameId = $("#txtJoinGameGameId").val();

            console.log("buttJoinGame clicked. strPlayerName=" + strPlayerName + ", strGameId=" + strGameId);
            socket.emit('joinGame', strPlayerName, strGameId);
        });


        // [chooseGenerals] click
        $("button[name='buttChooseGenerals']").click(function () {

            const strGameId = $("#txtChooseGeneralsGameId").val();
            const strGeneralName = $("#txtChooseGeneralsGenName").val();

            console.log("buttChooseGenerals clicked. strGameId=" + strGameId + ", strGeneralName=" + strGeneralName);
            socket.emit('chooseGenerals', strGameId, strGeneralName);
        });


    }
}

// Function to handle all messages sent from server
MAIN.OnDataReceived = function (message, data) {
    console.log(message + " received");

    // Convert data to string
    const strJson = JSON.stringify(data);

    // Get current time
    const strTime = new Date().toLocaleTimeString();

    // Generate dr and add to table
    const dr = $("<tr class='receive' onclick='MAIN.msgClick(this)'> <td class='message'>" + message + "</td> <td class='content'>" + strJson + "</td> <td class='time'>" + strTime + "</td> </tr>");
    $(".clickable-table > tbody").append(dr);

    // Auto scroll to bottom
    $("#divSc").scrollTop($("#divSc")[0].scrollHeight);

    // Display latest gameStatus to JSON-Viewer for reading easily
    if (message == 'gameUpdate') {
     
        var options = {
            collapsed: $('#collapsed').is(':checked'),
            withQuotes: $('#with-quotes').is(':checked')
        };
        $("#jviewlastGameStatus").jsonViewer(data, options);
        $("#labLastGameStatusTime").html(strTime);
    }
}

// Message row click
MAIN.msgClick = function (dr) {

    // Get data in string
    const strData = $(dr).find("td.content").html();

    try {

        // Convert to object
        const input = eval('(' + strData + ')');

        // Display in JSON-Viewer for reading easily
        $('#jviewRow').jsonViewer(input);
    }
    catch (error) {
        return console.log("Cannot eval JSON: " + error);
    }
}
