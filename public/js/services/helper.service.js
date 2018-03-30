class HelperService {

    constructor() {
        throw new Error("Class não pode ser instanciada.");
    }

    static get ip() {
        let http = new XMLHttpRequest;


        http.open("get", "http://api.ipify.org/?format=jsonp&callback", false);

        http.send();
        let ip = http.responseText.split('"')[3];
        return ip;

    }

    static get data() {
        var d = new Date();
        return d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear() + " " +
            d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    }

}