import { getCitys } from "@/util/areaService";
import queryString from "query-string";
import $ from "jquery";

const parsed = queryString.parse(location.search);

$('.container .title').text(parsed.name);

getCitys(parsed.id).then(resq => {
    let str = '<dt>管辖城市:</dt>';
    for (const city of resq) {
        str += `<dd>${city.areaName}</dd>`
    };
    $('.container dl').html(str);
});