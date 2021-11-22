
const storeService = (function () {
    //기능1
    function loadJson(url, callback){
        $.getJSON(url, function (data) {

        })
    }
    //기능2
    function getStore(sno) {

    }

    return{loadJson, getStore} // 밖에서는 storeService.loadJson / .getStore로 사용가능 여기서는 데이터 처리만!!!!!
})()