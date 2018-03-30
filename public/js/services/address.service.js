class AddressService {
    static get ip() {
        let http = new XMLHttpRequest;

        
        http.open("get", "http://api.ipify.org/?format=jsonp&callback", false);

        http.send();
        let ip =  http.responseText.split('"')[3];
        return ip ;

    }

}