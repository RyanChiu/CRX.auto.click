var cnt = 0;
var chkcnt = 0;
var theSite = "dxgh.fsdxhlwgh.cn";
var url = window.location.href;
if (url.includes(theSite)
    || url.includes("auto.click.test.html")){
    var ref = "";
    function check() {
        var date = new Date();
        let stime = moment().format("hh:mm:ss");
        console.log(cnt++ + " time(s) check it. (@" + stime + ")");
        $("#btn1").click();
        if (date.getDay() % 6 == 0) {// the weekend
            console.log("weekend, should be between '06:00-12:00' and '14:00-20:00'.");
        } else {
            console.log("not weekend, should be between '10:30-11:00' and '16:00-16:30'.");
        }

        if (url.includes(theSite)) {
            if (chkcnt == 0 && (stime > "10:30:00" && stime < "11:00:00")) {
                chkcnt++;
                $(".btn-img").click();
                console.log("morning checked at " + stime +"(" + chkcnt + ")");
            }
            if (chkcnt == 1 && (stime > "16:00:00" && stime < "16:30:00")) {
                chkcnt++;
                $(".btn-img").click();
                console.log("afternoon checked at " + stime +"(" + chkcnt + ")");
            }
        }
    }
    ref = setInterval(function() {
        check();
    }, 12606);
} else {
    console.log("none of my business.");
}

