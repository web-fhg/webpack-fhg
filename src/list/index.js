import { getProvinces } from "@/util/areaService";
import $ from "jquery";

getProvinces().then(resq => {
    let str = "";
    for (const province of resq) {
        str += `<li >
                    <a href="detail.html?name=${province.areaName}&id=${province.id}">
                        ${province.areaName}
                    </a>
                </li>`
    };
    $('.container .provinces').html(str);
});