import React from "react";

export default function GetIcon(id) {
    switch (id) {
        case 611:
        case 612:
        case 700:
        case 711:
        case 721:
        case 731:
        case 741:
        case 751:
            return "cloudy"
        case 800:
        case 801:
        case 802:
            return "sunny"
        case 200:
        case 201:
        case 202:
        case 230:
        case 231:
        case 232:
        case 233:
            return "stormy"
        case 610:
        case 621:
        case 622:
        case 623:
            return "snowy"
        case 300:
        case 301:
        case 803:
        case 804:
        case 900:
            return "partly-cloudy"
        case 302:
        case 500:
        case 501:
        case 502:
        case 511:
        case 520:
        case 521:
        case 522:
            return "rainy"
        default:
            return 'cloudy'
    }
}