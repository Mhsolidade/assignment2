class HelperService {

    constructor() {
        throw new Error("Class nao pode ser instanciada.");
    }

    static get ip() {
        let http = new XMLHttpRequest;

        http.open("get", "https://api.ipify.org/?format=jsonp&callback", false);

        http.send();
        let ip = http.responseText.split('"')[3];
        return ip;

    }

    static get data() {
        var d = new Date();
        return d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear() + " " +
            d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    }

    static scrollSlow() {
        $(document).ready(function () {
            $("a").on('click', function (event) {

                if (this.hash !== "") {

                    event.preventDefault();
                    let hash = this.hash;

                    $('html, body').animate({
                        scrollTop: $(hash).offset().top
                    }, 1800, function () {
                        window.location.hash = hash;
                    });

                } // End if
            });
        });
    }
}