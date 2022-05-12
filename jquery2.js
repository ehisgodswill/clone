

/* 国家区号 */
var _areanoList = {
    "United Kingdom": "44",
    "France": "33",
    "Germany": "49",
    "Italy": "39",
    "Poland": "48",
    "Malaysia": "60",
    // "Singapore": "65",
    "Spain": "34",
    "Thailand": "66",
    "Aland Islands": "358",
	"Albania": "355",
    "Algeria": "213",
    "American Samoa": "1684",
    "Andorra": "376",
    "Angola": "244",
    "Anguilla": "1264",
    "Antarctica": "672",
    "Antigua and Barbuda": "1268",
    "Argentina": "54",
    "Armenia": "374",
    "Aruba": "297",
    "Austria": "43",
    "Azerbaijan": "994",
    "Bahamas": "1242",
    "Bahrain": "973",
    "Bangladesh": "880",
    "Barbados": "1246",
    "Belgium": "32",
    "Belize": "501",
    "Benin": "229",
    "Bhutan": "975",
    "Bolivia": "591",
    "Botswana": "267",
    "Bouvet Island": "147",
    "Brazil": "55",
    "British Indian Ocean Territory": "246",
    "Brunei Darussalam": "673",
    "Bulgaria": "359",
    "Burkina Faso": "226",
    "Burundi": "257",
    "Cambodia": "855",
    "Cameroon": "237",
    // "Canada": "1",
    "Cape Verde": "238",
    "Cayman Islands": "1345",
    "Chad": "235",
    "Chile": "56",
    "China": "86",
    "Christmas Island": "61",
    "Cocos (Keeling) Islands": "61",
    "Colombia": "57",
    "Comoros": "269",
    "Cook Islands": "682",
    "Costa Rica": "506",
    "Côte d'Ivoire": "225",
    "Croatia": "385",
    "Cyprus": "357",
    "Czech Republic": "420",
    "Denmark": "45",
    "Djibouti": "253",
    "Dominica": "1767",
    "Dominican Republic": "1809",
    "Ecuador": "593",
    "Egypt": "20",
    "El Salvador": "503",
    "Equatorial Guinea": "240",
    "Estonia": "372",
    "Ethiopia": "251",
    "Falkland Islands (Malvinas)": "500",
    "Faroe Islands": "298",
    "Federated States Of Micronesia Micronesia": "691",
    "Finland": "358",
    "Fiji": "679",
    "French Guiana": "594",
    "French Polynesia": "689",
    "French Southern Territories": "262",
    "Gabon": "241",
    "Gambia": "220",
    "Georgia": "995",
    "Ghana": "233",
    "Gibraltar": "350",
    "Greece": "30",
    "Greenland": "299",
    "Grenada": "1473",
    "Guadeloupe": "590",
    "Guatemala": "502",
    "Guernsey": "44",
    "Guinea": "224",
    "Guyana": "592",
    "Haiti": "509",
    "Heard Island And Mcdonald Islands": "11",
    "Honduras": "504",
    "HongKong": "852",
    "Hungary": "36",
    "Iceland": "354",
    "India": "91",
    "Indonesia": "62",
    "Ireland": "353",
    "Isle Of Man": "44",
    "Israel": "972",
    "Jamaica": "1876",
    "Japan": "81",
    "Jersey": "44",
    "Jordan": "962",
    "Kazakhstan": "77",
    "Kenya": "254",
    "Kiribati": "686",
    "Korea, Republic Of": "82",
    "Kosovo": "383",
    "Kuwait": "965",
    "Kyrgyzstan": "996",
    "Laos": "856",
    "Latvia": "371",
    "Lesotho": "266",
    "Liberia": "231",
    "Liechtenstein": "423",
    "Lithuania": "370",
    "Luxembourg": "352",
    "Macao": "853",
    "Madagascar": "261",
    "Malawi": "265",
    "Maldives": "960",
    "Mali": "223",
    "Malta": "356",
    "Marshall Islands": "692",
    "Martinique": "596",
    "Mauritania": "222",
    "Mauritius": "230",
    "Mayotte": "262",
    "Macedonia": "389",
    "Mexico": "52",
    "Moldova": "373",
    "Monaco": "377",
    "Mongolia": "976",
    "Montserrat": "1664",
    "Morocco": "212",
    "Mozambique": "258",
    "Namibia": "264",
    "Nauru": "674",
    "Nepal": "977",
    "Netherlands": "31",
    "Netherlands Antilles": "599",
    "New Caledonia": "687",
    "New Zealand": "64",
    "Nicaragua": "505",
    "Niger": "227",
    "Nigeria": "234",
    "Niue": "683",
    "Norfolk Island": "672",
    "NorthernÂ MarianaÂ Islands": "670",
    "Norway": "47",
    "Oman": "968",
    "Pakistan": "92",
    "Palau": "680",
    "Palestinian Territory, Occupied": "970",
    "Panama": "507",
    "Papua New Guinea": "675",
    "Paraguay": "595",
    "Peru": "51",
    "Philippines": "63",
    "Pitcairn": "64",
    "Poland": "48",
    "Portugal": "351",
    "Puerto Rico": "1787",
    "Qatar": "974",
    "Reunion": "262",
    "Romania": "40",
    "Rwanda": "250",
    "Saint Barthelemy": "590",
    "Saint Helena": "290",
    "Saint Kitts and Nevis": "1869",
    "Saint Lucia": "1758",
    "Saint Martin": "590",
    "Saint Pierre And Miquelon": "508",
    "Saint Vincent and the Grenadines": "1784",
    "Samoa": "685",
    "San Marino": "378",
    "Sao Tome and Principe": "239",
    "Saudi Arabia": "966",
    "Senegal": "221",
    "Serbia": "381",
    "Seychelles": "248",
    "Slovakia": "421",
    "Slovenia": "386",
    "Solomon Islands": "677",
    "South Africa": "27",
    "South Georgia And The South Sandwich Islands": "500",
    "Sri Lanka": "94",
    "Suriname": "597",
    "Svalbard And Jan Mayen": "47",
    "Swaziland": "268",
    "Sweden": "46",
    "Switzerland": "41",
    "Taiwan": "886",
    "Taiwan, Province Of China": "886",
    "Tajikistan": "992",
    "Tanzania, United Republic Of": "255",
    "Timor": "670",
    "Togo": "228",
    "Tokelau": "690",
    "Tonga": "676",
    "Trinidad and Tobago": "1868",
    "Turkey": "90",
    "Turkmenistan": "993",
    "Turks And Caicos Islands": "1649",
    "Tuvalu": "688",
    "Uganda": "256",
    "United Arab Emirates": "971",
    "Uruguay": "598",
    "Uzbekistan": "998",
    "Vanuatu": "678",
    "Vatican City State": "379",
    "Vietnam": "84",
    "Virgin Islands, British": "1284",
    "Wallis And Futuna": "681",
    "Western Sahara": "212",
    "Zambia": "260"
};
/* 区号去重 */
var phoneCodeArray = [];

for (var phoneCodeItem in _areanoList) {
    phoneCodeArray.push(_areanoList[phoneCodeItem]);
}

for(var i = 0;i<phoneCodeArray.length;i++){
    for( var j = i+1;j<phoneCodeArray.length;j++){
        if(phoneCodeArray[i] == phoneCodeArray[j]){
            phoneCodeArray.splice(j,1);
            j--;
        }
    }
}

//验证name是英文
var regp = /^[^0-9]+$/;

// 验证phone
var myReg = /^[\d\s\+]+$/;

// 验证email
var emailReg = /^[-_A-Za-z0-9]+([-_.][_A-Za-z0-9]+)*@([A-Za-z0-9]+[-.])+[A-Za-zd]{2,10}$/;

/* 添加失败类名 */
function addClassError(e) {
    e.parent().parent().parent('.form_body_li').addClass("error");
}

/* 移除失败类名 */
function removeClassError(e) {
    e.parent().parent().parent('.form_body_li').removeClass("error");
}


jQuery(document).ready(function ($) {

    /* 添加区号，国家 */

    $(".account_form_public .form_body .form_body_li .country_code").append("<div class='country_option accounr_hover' style='pointer-events: none;' >Country</div>");
    $(".account_form_public .form_body .form_body_li .phone_code").append("<div class='phone_option accounr_hover' style='pointer-events: none;' >Code</div>");

    for (var phoneCodeItem in _areanoList) {
        $(".account_form_public .form_body .form_body_li .country_code").append("<div class='country_option' data-conutry=\"" + [phoneCodeItem] + "\">" + [phoneCodeItem] + "</div>");
    }
    for (var phoneCodeArrayItem in phoneCodeArray) {
        $(".account_form_public .form_body .form_body_li .phone_code").append("<div class='phone_option' data-phone='" + phoneCodeArray[phoneCodeArrayItem] + "'>" + phoneCodeArray[phoneCodeArrayItem] + "</div>");
    }
    /*  input lable 事件 */
    $('.account_form_public input.medium').each(function () {
        if ($(this).val() == '') {
            $(this).parent().parent(".ginput_container").siblings('.gfield_label').removeClass('active');
        } else {
            $(this).parent().parent(".ginput_container").siblings('.gfield_label').addClass('active');
        }
    })
    /*  input 值改变 事件 */
    $('.account_form_public input.medium').change(function () {
        if ($(this).val() == '') {
            $(this).parent().parent(".ginput_container").siblings('.gfield_label').removeClass('active');
        } else {
            $(this).parent().parent(".ginput_container").siblings('.gfield_label').addClass('active');
        }
    })

    /*  input 聚焦 事件 */
    $('.account_form_public input.medium').focus(function () {
        $(this).parent().parent(".ginput_container").siblings('.gfield_label').addClass('active');
        $(this).parent('.ginput_container_input').addClass('active');
        $(this).parent().siblings('.ginput_container_input_select_icon').addClass('active');
        if ($(this).parent().parent(".ginput_container").siblings('.country_code').length != 0) {
            if ($(this).val()) {
                $(this).parent().parent(".ginput_container").siblings('.country_code').children('div').filter(function (e) {
                    return $(this).attr('data-conutry') == $(this).parent().siblings('.ginput_container').find('input[id=country]').val()
                }).addClass('accounr_hover').siblings().removeClass('accounr_hover');
            }
        }
        if ($(this).parent().parent(".ginput_container").siblings('.phone_code').length != 0) {
            if ($(this).val()) {
                $(this).parent().parent(".ginput_container").siblings('.phone_code').children('div').filter(function (e) {
                    return $(this).attr('data-phone') == $(this).parent().siblings('.ginput_container').find('input[id=phoneCode]').val()
                }).addClass('accounr_hover').siblings().removeClass('accounr_hover');
            }
        }

        $(this).parent().parent(".ginput_container").siblings('.country_code').addClass('active');
        $(this).parent().parent(".ginput_container").siblings('.phone_code').addClass('active');
    })

    /*  input 失焦 事件 */
    $('.account_form_public input.medium').blur(function () {
        $(this).parent('.ginput_container_input').removeClass('active');
        $(this).parent().siblings('.ginput_container_input_select_icon').removeClass('active');
        $(this).parent().parent(".ginput_container").siblings('.country_code').removeClass('active');
        $(this).parent().parent(".ginput_container").siblings('.phone_code').removeClass('active');

        if ($(this).val() == '') {
            $(this).parent().parent(".ginput_container").siblings('.gfield_label').removeClass('active');
        } else {
            $(this).parent().parent(".ginput_container").siblings('.gfield_label').addClass('active');
        }
    })

    /*  国家 赋值 事件 */
    $('.account_form_public .country_code .country_option').mousedown(function () {
        $('#country').val($(this).attr('data-conutry'));

        $('span#country').text($(this).attr('data-conutry'));

        $(this).addClass('accounr_hover');

        $(this).siblings().removeClass('accounr_hover');
        $("#phoneCode").val(_areanoList[$(this).attr("data-conutry")]);
        $("#phoneCode").change();

        $('.account_form_public span.medium').blur();
    });
    $('.account_form_public .country_code .country_option').hover(function () {
        $(this).addClass('accounr_hover');
        $(this).siblings().removeClass('accounr_hover');
    })

    /*  区号 赋值 事件 */
    $('.account_form_public .phone_code .phone_option').mousedown(function () {
        $('#phoneCode').val($(this).attr('data-phone'))
        $(this).addClass('accounr_hover');

        $(this).siblings().removeClass('accounr_hover');
    });
    $('.account_form_public .phone_code .phone_option').hover(function () {
        $(this).addClass('accounr_hover');
        $(this).siblings().removeClass('accounr_hover');
    })


    /* live demo 国家 span 修复 */
    $('.account_form_public span.medium').each(function () {
        if ($(this).text() == '') {
            $(this).parent().parent(".ginput_container").siblings('.gfield_label').removeClass('active');
        } else {
            $(this).parent().parent(".ginput_container").siblings('.gfield_label').addClass('active');
        }
    })

    $('.account_form_public span.medium').change(function () {
        if ($(this).text() == '') {
            $(this).parent().parent(".ginput_container").siblings('.gfield_label').removeClass('active');
        } else {
            $(this).parent().parent(".ginput_container").siblings('.gfield_label').addClass('active');
        }
    })

    $('.account_form_public span.medium').click(function(e){
        e.stopPropagation();
    })
    $('.account_form_public span.medium').focus(function (e) {
        
        $(this).attr('contenteditable',false);
        $(this).parent().parent(".ginput_container").siblings('.gfield_label').addClass('active');
        $(this).parent('.ginput_container_input').addClass('active');
        $(this).parent().siblings('.ginput_container_input_select_icon').addClass('active');
        if ($(this).parent().parent(".ginput_container").siblings('.country_code').length != 0) {
            if ($(this).text()) {
                $(this).parent().parent(".ginput_container").siblings('.country_code').children('div').filter(function (e) {
                    return $(this).attr('data-conutry') == $(this).parent().siblings('.ginput_container').find('input[id=country]').val()
                }).addClass('accounr_hover').siblings().removeClass('accounr_hover');
            }
        }
        if ($(this).parent().parent(".ginput_container").siblings('.phone_code').length != 0) {
            if ($(this).text()) {
                $(this).parent().parent(".ginput_container").siblings('.phone_code').children('div').filter(function (e) {
                    return $(this).attr('data-phone') == $(this).parent().siblings('.ginput_container').find('input[id=phoneCode]').val()
                }).addClass('accounr_hover').siblings().removeClass('accounr_hover');
            }
        }

        $(this).parent().parent(".ginput_container").siblings('.country_code').addClass('active');
        $(this).parent().parent(".ginput_container").siblings('.phone_code').addClass('active');
    })

    $('.account_form_public span.medium').blur(function () {
        $('span#country').attr('contenteditable',true);
        $(this).parent('.ginput_container_input').removeClass('active');
        $(this).parent().siblings('.ginput_container_input_select_icon').removeClass('active');
        $(this).parent().parent(".ginput_container").siblings('.country_code').removeClass('active');
        $(this).parent().parent(".ginput_container").siblings('.phone_code').removeClass('active');

        if ($(this).text() == '') {
            $(this).parent().parent(".ginput_container").siblings('.gfield_label').removeClass('active');
        } else {
            $(this).parent().parent(".ginput_container").siblings('.gfield_label').addClass('active');
        }
    })


    $('body').click(function(){
        $('.account_form_public span.medium').blur();
    })

});

