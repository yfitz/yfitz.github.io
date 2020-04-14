<script type="text/javascript">

function pruefeEingaben() {

    var rabe = document.getElementsByName("rabe")[0].value;
    //var rabe = rabe.replace(/[^a-zäöüÄÖÜß0-9s_-]/gi, "");

    function pruefeFo(checken) {
        var gecheckt = document.getElementsByName(checken)[0].checked;
        return gecheckt;
    }

    if (rabe == "") {
        alert("Es wurde kein Text eingegen!");
        return false;
    }
    if (pruefeFo("kate") === false && pruefeFo("rubi") === false) {
        alert("Es wurde weder Filme noch Movie ausgewählt!");
        return false;
    }
    if (pruefeFo("item") === false && pruefeFo("para") === false) {
        alert("Es wurde weder 30 noch 50 ausgewählt!");
        return false;
    }
}
</script>