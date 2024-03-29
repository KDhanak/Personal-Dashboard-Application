const options = [
	{
        text: "--- Please Select Country ---",
        value: ""
    },
    {
		text: "Afghanistan",
		value: "AF",
		"country-code": "004"
	},
	{
		text: "Albania",
		value: "AL",
		"country-code": "008"
	},
	{
		text: "Algeria",
		value: "DZ",
		"country-code": "012"
	},
	{
		text: "American Samoa",
		value: "AS",
		"country-code": "016"
	},
	{
		text: "Andorra",
		value: "AD",
		"country-code": "020"
	},
	{
		text: "Angola",
		value: "AO",
		"country-code": "024"
	},
	{
		text: "Anguilla",
		value: "AI",
		"country-code": "660"
	},
	{
		text: "Antarctica",
		value: "AQ",
		"country-code": "010"
	},
	{
		text: "Antigua and Barbuda",
		value: "AG",
		"country-code": "028"
	},
	{
		text: "Argentina",
		value: "AR",
		"country-code": "032"
	},
	{
		text: "Armenia",
		value: "AM",
		"country-code": "051"
	},
	{
		text: "Aruba",
		value: "AW",
		"country-code": "533"
	},
	{
		text: "Australia",
		value: "AU",
		"country-code": "036"
	},
	{
		text: "Austria",
		value: "AT",
		"country-code": "040"
	},
	{
		text: "Azerbaijan",
		value: "AZ",
		"country-code": "031"
	},
	{
		text: "Bahamas",
		value: "BS",
		"country-code": "044"
	},
	{
		text: "Bahrain",
		value: "BH",
		"country-code": "048"
	},
	{
		text: "Bangladesh",
		value: "BD",
		"country-code": "050"
	},
	{
		text: "Barbados",
		value: "BB",
		"country-code": "052"
	},
	{
		text: "Belarus",
		value: "BY",
		"country-code": "112"
	},
	{
		text: "Belgium",
		value: "BE",
		"country-code": "056"
	},
	{
		text: "Belize",
		value: "BZ",
		"country-code": "084"
	},
	{
		text: "Benin",
		value: "BJ",
		"country-code": "204"
	},
	{
		text: "Bermuda",
		value: "BM",
		"country-code": "060"
	},
	{
		text: "Bhutan",
		value: "BT",
		"country-code": "064"
	},
	{
		text: "Bolivia (Plurinational State of)",
		value: "BO",
		"country-code": "068"
	},
	{
		text: "Bonaire, Sint Eustatius and Saba",
		value: "BQ",
		"country-code": "535"
	},
	{
		text: "Bosnia and Herzegovina",
		value: "BA",
		"country-code": "070"
	},
	{
		text: "Botswana",
		value: "BW",
		"country-code": "072"
	},
	{
		text: "Bouvet Island",
		value: "BV",
		"country-code": "074"
	},
	{
		text: "Brazil",
		value: "BR",
		"country-code": "076"
	},
	{
		text: "British Indian Ocean Territory",
		value: "IO",
		"country-code": "086"
	},
	{
		text: "Brunei Darussalam",
		value: "BN",
		"country-code": "096"
	},
	{
		text: "Bulgaria",
		value: "BG",
		"country-code": "100"
	},
	{
		text: "Burkina Faso",
		value: "BF",
		"country-code": "854"
	},
	{
		text: "Burundi",
		value: "BI",
		"country-code": "108"
	},
	{
		text: "Cabo Verde",
		value: "CV",
		"country-code": "132"
	},
	{
		text: "Cambodia",
		value: "KH",
		"country-code": "116"
	},
	{
		text: "Cameroon",
		value: "CM",
		"country-code": "120"
	},
	{
		text: "Canada",
		value: "CA",
		"country-code": "124"
	},
	{
		text: "Cayman Islands",
		value: "KY",
		"country-code": "136"
	},
	{
		text: "Central African Republic",
		value: "CF",
		"country-code": "140"
	},
	{
		text: "Chad",
		value: "TD",
		"country-code": "148"
	},
	{
		text: "Chile",
		value: "CL",
		"country-code": "152"
	},
	{
		text: "China",
		value: "CN",
		"country-code": "156"
	},
	{
		text: "Christmas Island",
		value: "CX",
		"country-code": "162"
	},
	{
		text: "Cocos (Keeling) Islands",
		value: "CC",
		"country-code": "166"
	},
	{
		text: "Colombia",
		value: "CO",
		"country-code": "170"
	},
	{
		text: "Comoros",
		value: "KM",
		"country-code": "174"
	},
	{
		text: "Congo",
		value: "CG",
		"country-code": "178"
	},
	{
		text: "Congo, Democratic Republic of the",
		value: "CD",
		"country-code": "180"
	},
	{
		text: "Cook Islands",
		value: "CK",
		"country-code": "184"
	},
	{
		text: "Costa Rica",
		value: "CR",
		"country-code": "188"
	},
	{
		text: "Croatia",
		value: "HR",
		"country-code": "191"
	},
	{
		text: "Cuba",
		value: "CU",
		"country-code": "192"
	},
	{
		text: "Curaçao",
		value: "CW",
		"country-code": "531"
	},
	{
		text: "Cyprus",
		value: "CY",
		"country-code": "196"
	},
	{
		text: "Czechia",
		value: "CZ",
		"country-code": "203"
	},
	{
		text: "Côte d'Ivoire",
		value: "CI",
		"country-code": "384"
	},
	{
		text: "Denmark",
		value: "DK",
		"country-code": "208"
	},
	{
		text: "Djibouti",
		value: "DJ",
		"country-code": "262"
	},
	{
		text: "Dominica",
		value: "DM",
		"country-code": "212"
	},
	{
		text: "Dominican Republic",
		value: "DO",
		"country-code": "214"
	},
	{
		text: "Ecuador",
		value: "EC",
		"country-code": "218"
	},
	{
		text: "Egypt",
		value: "EG",
		"country-code": "818"
	},
	{
		text: "El Salvador",
		value: "SV",
		"country-code": "222"
	},
	{
		text: "Equatorial Guinea",
		value: "GQ",
		"country-code": "226"
	},
	{
		text: "Eritrea",
		value: "ER",
		"country-code": "232"
	},
	{
		text: "Estonia",
		value: "EE",
		"country-code": "233"
	},
	{
		text: "Eswatini",
		value: "SZ",
		"country-code": "748"
	},
	{
		text: "Ethiopia",
		value: "ET",
		"country-code": "231"
	},
	{
		text: "Falkland Islands (Malvinas)",
		value: "FK",
		"country-code": "238"
	},
	{
		text: "Faroe Islands",
		value: "FO",
		"country-code": "234"
	},
	{
		text: "Fiji",
		value: "FJ",
		"country-code": "242"
	},
	{
		text: "Finland",
		value: "FI",
		"country-code": "246"
	},
	{
		text: "France",
		value: "FR",
		"country-code": "250"
	},
	{
		text: "French Guiana",
		value: "GF",
		"country-code": "254"
	},
	{
		text: "French Polynesia",
		value: "PF",
		"country-code": "258"
	},
	{
		text: "French Southern Territories",
		value: "TF",
		"country-code": "260"
	},
	{
		text: "Gabon",
		value: "GA",
		"country-code": "266"
	},
	{
		text: "Gambia",
		value: "GM",
		"country-code": "270"
	},
	{
		text: "Georgia",
		value: "GE",
		"country-code": "268"
	},
	{
		text: "Germany",
		value: "DE",
		"country-code": "276"
	},
	{
		text: "Ghana",
		value: "GH",
		"country-code": "288"
	},
	{
		text: "Gibraltar",
		value: "GI",
		"country-code": "292"
	},
	{
		text: "Greece",
		value: "GR",
		"country-code": "300"
	},
	{
		text: "Greenland",
		value: "GL",
		"country-code": "304"
	},
	{
		text: "Grenada",
		value: "GD",
		"country-code": "308"
	},
	{
		text: "Guadeloupe",
		value: "GP",
		"country-code": "312"
	},
	{
		text: "Guam",
		value: "GU",
		"country-code": "316"
	},
	{
		text: "Guatemala",
		value: "GT",
		"country-code": "320"
	},
	{
		text: "Guernsey",
		value: "GG",
		"country-code": "831"
	},
	{
		text: "Guinea",
		value: "GN",
		"country-code": "324"
	},
	{
		text: "Guinea-Bissau",
		value: "GW",
		"country-code": "624"
	},
	{
		text: "Guyana",
		value: "GY",
		"country-code": "328"
	},
	{
		text: "Haiti",
		value: "HT",
		"country-code": "332"
	},
	{
		text: "Heard Island and McDonald Islands",
		value: "HM",
		"country-code": "334"
	},
	{
		text: "Holy See",
		value: "VA",
		"country-code": "336"
	},
	{
		text: "Honduras",
		value: "HN",
		"country-code": "340"
	},
	{
		text: "Hong Kong",
		value: "HK",
		"country-code": "344"
	},
	{
		text: "Hungary",
		value: "HU",
		"country-code": "348"
	},
	{
		text: "Iceland",
		value: "IS",
		"country-code": "352"
	},
	{
		text: "India",
		value: "IN",
		"country-code": "356"
	},
	{
		text: "Indonesia",
		value: "ID",
		"country-code": "360"
	},
	{
		text: "Iran (Islamic Republic of)",
		value: "IR",
		"country-code": "364"
	},
	{
		text: "Iraq",
		value: "IQ",
		"country-code": "368"
	},
	{
		text: "Ireland",
		value: "IE",
		"country-code": "372"
	},
	{
		text: "Isle of Man",
		value: "IM",
		"country-code": "833"
	},
	{
		text: "Israel",
		value: "IL",
		"country-code": "376"
	},
	{
		text: "Italy",
		value: "IT",
		"country-code": "380"
	},
	{
		text: "Jamaica",
		value: "JM",
		"country-code": "388"
	},
	{
		text: "Japan",
		value: "JP",
		"country-code": "392"
	},
	{
		text: "Jersey",
		value: "JE",
		"country-code": "832"
	},
	{
		text: "Jordan",
		value: "JO",
		"country-code": "400"
	},
	{
		text: "Kazakhstan",
		value: "KZ",
		"country-code": "398"
	},
	{
		text: "Kenya",
		value: "KE",
		"country-code": "404"
	},
	{
		text: "Kiribati",
		value: "KI",
		"country-code": "296"
	},
	{
		text: "Korea (Democratic People's Republic of)",
		value: "KP",
		"country-code": "408"
	},
	{
		text: "Korea, Republic of",
		value: "KR",
		"country-code": "410"
	},
	{
		text: "Kuwait",
		value: "KW",
		"country-code": "414"
	},
	{
		text: "Kyrgyzstan",
		value: "KG",
		"country-code": "417"
	},
	{
		text: "Lao People's Democratic Republic",
		value: "LA",
		"country-code": "418"
	},
	{
		text: "Latvia",
		value: "LV",
		"country-code": "428"
	},
	{
		text: "Lebanon",
		value: "LB",
		"country-code": "422"
	},
	{
		text: "Lesotho",
		value: "LS",
		"country-code": "426"
	},
	{
		text: "Liberia",
		value: "LR",
		"country-code": "430"
	},
	{
		text: "Libya",
		value: "LY",
		"country-code": "434"
	},
	{
		text: "Liechtenstein",
		value: "LI",
		"country-code": "438"
	},
	{
		text: "Lithuania",
		value: "LT",
		"country-code": "440"
	},
	{
		text: "Luxembourg",
		value: "LU",
		"country-code": "442"
	},
	{
		text: "Macao",
		value: "MO",
		"country-code": "446"
	},
	{
		text: "Madagascar",
		value: "MG",
		"country-code": "450"
	},
	{
		text: "Malawi",
		value: "MW",
		"country-code": "454"
	},
	{
		text: "Malaysia",
		value: "MY",
		"country-code": "458"
	},
	{
		text: "Maldives",
		value: "MV",
		"country-code": "462"
	},
	{
		text: "Mali",
		value: "ML",
		"country-code": "466"
	},
	{
		text: "Malta",
		value: "MT",
		"country-code": "470"
	},
	{
		text: "Marshall Islands",
		value: "MH",
		"country-code": "584"
	},
	{
		text: "Martinique",
		value: "MQ",
		"country-code": "474"
	},
	{
		text: "Mauritania",
		value: "MR",
		"country-code": "478"
	},
	{
		text: "Mauritius",
		value: "MU",
		"country-code": "480"
	},
	{
		text: "Mayotte",
		value: "YT",
		"country-code": "175"
	},
	{
		text: "Mexico",
		value: "MX",
		"country-code": "484"
	},
	{
		text: "Micronesia (Federated States of)",
		value: "FM",
		"country-code": "583"
	},
	{
		text: "Moldova, Republic of",
		value: "MD",
		"country-code": "498"
	},
	{
		text: "Monaco",
		value: "MC",
		"country-code": "492"
	},
	{
		text: "Mongolia",
		value: "MN",
		"country-code": "496"
	},
	{
		text: "Montenegro",
		value: "ME",
		"country-code": "499"
	},
	{
		text: "Montserrat",
		value: "MS",
		"country-code": "500"
	},
	{
		text: "Morocco",
		value: "MA",
		"country-code": "504"
	},
	{
		text: "Mozambique",
		value: "MZ",
		"country-code": "508"
	},
	{
		text: "Myanmar",
		value: "MM",
		"country-code": "104"
	},
	{
		text: "Namibia",
		value: "NA",
		"country-code": "516"
	},
	{
		text: "Nauru",
		value: "NR",
		"country-code": "520"
	},
	{
		text: "Nepal",
		value: "NP",
		"country-code": "524"
	},
	{
		text: "Netherlands",
		value: "NL",
		"country-code": "528"
	},
	{
		text: "New Caledonia",
		value: "NC",
		"country-code": "540"
	},
	{
		text: "New Zealand",
		value: "NZ",
		"country-code": "554"
	},
	{
		text: "Nicaragua",
		value: "NI",
		"country-code": "558"
	},
	{
		text: "Niger",
		value: "NE",
		"country-code": "562"
	},
	{
		text: "Nigeria",
		value: "NG",
		"country-code": "566"
	},
	{
		text: "Niue",
		value: "NU",
		"country-code": "570"
	},
	{
		text: "Norfolk Island",
		value: "NF",
		"country-code": "574"
	},
	{
		text: "North Macedonia",
		value: "MK",
		"country-code": "807"
	},
	{
		text: "Northern Mariana Islands",
		value: "MP",
		"country-code": "580"
	},
	{
		text: "Norway",
		value: "NO",
		"country-code": "578"
	},
	{
		text: "Oman",
		value: "OM",
		"country-code": "512"
	},
	{
		text: "Pakistan",
		value: "PK",
		"country-code": "586"
	},
	{
		text: "Palau",
		value: "PW",
		"country-code": "585"
	},
	{
		text: "Palestine, State of",
		value: "PS",
		"country-code": "275"
	},
	{
		text: "Panama",
		value: "PA",
		"country-code": "591"
	},
	{
		text: "Papua New Guinea",
		value: "PG",
		"country-code": "598"
	},
	{
		text: "Paraguay",
		value: "PY",
		"country-code": "600"
	},
	{
		text: "Peru",
		value: "PE",
		"country-code": "604"
	},
	{
		text: "Philippines",
		value: "PH",
		"country-code": "608"
	},
	{
		text: "Pitcairn",
		value: "PN",
		"country-code": "612"
	},
	{
		text: "Poland",
		value: "PL",
		"country-code": "616"
	},
	{
		text: "Portugal",
		value: "PT",
		"country-code": "620"
	},
	{
		text: "Puerto Rico",
		value: "PR",
		"country-code": "630"
	},
	{
		text: "Qatar",
		value: "QA",
		"country-code": "634"
	},
	{
		text: "Romania",
		value: "RO",
		"country-code": "642"
	},
	{
		text: "Russian Federation",
		value: "RU",
		"country-code": "643"
	},
	{
		text: "Rwanda",
		value: "RW",
		"country-code": "646"
	},
	{
		text: "Réunion",
		value: "RE",
		"country-code": "638"
	},
	{
		text: "Saint Barthélemy",
		value: "BL",
		"country-code": "652"
	},
	{
		text: "Saint Helena, Ascension and Tristan da Cunha",
		value: "SH",
		"country-code": "654"
	},
	{
		text: "Saint Kitts and Nevis",
		value: "KN",
		"country-code": "659"
	},
	{
		text: "Saint Lucia",
		value: "LC",
		"country-code": "662"
	},
	{
		text: "Saint Martin (French part)",
		value: "MF",
		"country-code": "663"
	},
	{
		text: "Saint Pierre and Miquelon",
		value: "PM",
		"country-code": "666"
	},
	{
		text: "Saint Vincent and the Grenadines",
		value: "VC",
		"country-code": "670"
	},
	{
		text: "Samoa",
		value: "WS",
		"country-code": "882"
	},
	{
		text: "San Marino",
		value: "SM",
		"country-code": "674"
	},
	{
		text: "Sao Tome and Principe",
		value: "ST",
		"country-code": "678"
	},
	{
		text: "Saudi Arabia",
		value: "SA",
		"country-code": "682"
	},
	{
		text: "Senegal",
		value: "SN",
		"country-code": "686"
	},
	{
		text: "Serbia",
		value: "RS",
		"country-code": "688"
	},
	{
		text: "Seychelles",
		value: "SC",
		"country-code": "690"
	},
	{
		text: "Sierra Leone",
		value: "SL",
		"country-code": "694"
	},
	{
		text: "Singapore",
		value: "SG",
		"country-code": "702"
	},
	{
		text: "Sint Maarten (Dutch part)",
		value: "SX",
		"country-code": "534"
	},
	{
		text: "Slovakia",
		value: "SK",
		"country-code": "703"
	},
	{
		text: "Slovenia",
		value: "SI",
		"country-code": "705"
	},
	{
		text: "Solomon Islands",
		value: "SB",
		"country-code": "090"
	},
	{
		text: "Somalia",
		value: "SO",
		"country-code": "706"
	},
	{
		text: "South Africa",
		value: "ZA",
		"country-code": "710"
	},
	{
		text: "South Georgia and the South Sandwich Islands",
		value: "GS",
		"country-code": "239"
	},
	{
		text: "South Sudan",
		value: "SS",
		"country-code": "728"
	},
	{
		text: "Spain",
		value: "ES",
		"country-code": "724"
	},
	{
		text: "Sri Lanka",
		value: "LK",
		"country-code": "144"
	},
	{
		text: "Sudan",
		value: "SD",
		"country-code": "729"
	},
	{
		text: "Suriname",
		value: "SR",
		"country-code": "740"
	},
	{
		text: "Svalbard and Jan Mayen",
		value: "SJ",
		"country-code": "744"
	},
	{
		text: "Sweden",
		value: "SE",
		"country-code": "752"
	},
	{
		text: "Switzerland",
		value: "CH",
		"country-code": "756"
	},
	{
		text: "Syrian Arab Republic",
		value: "SY",
		"country-code": "760"
	},
	{
		text: "Taiwan, Province of China",
		value: "TW",
		"country-code": "158"
	},
	{
		text: "Tajikistan",
		value: "TJ",
		"country-code": "762"
	},
	{
		text: "Tanzania, United Republic of",
		value: "TZ",
		"country-code": "834"
	},
	{
		text: "Thailand",
		value: "TH",
		"country-code": "764"
	},
	{
		text: "Timor-Leste",
		value: "TL",
		"country-code": "626"
	},
	{
		text: "Togo",
		value: "TG",
		"country-code": "768"
	},
	{
		text: "Tokelau",
		value: "TK",
		"country-code": "772"
	},
	{
		text: "Tonga",
		value: "TO",
		"country-code": "776"
	},
	{
		text: "Trinidad and Tobago",
		value: "TT",
		"country-code": "780"
	},
	{
		text: "Tunisia",
		value: "TN",
		"country-code": "788"
	},
	{
		text: "Turkey",
		value: "TR",
		"country-code": "792"
	},
	{
		text: "Turkmenistan",
		value: "TM",
		"country-code": "795"
	},
	{
		text: "Turks and Caicos Islands",
		value: "TC",
		"country-code": "796"
	},
	{
		text: "Tuvalu",
		value: "TV",
		"country-code": "798"
	},
	{
		text: "Uganda",
		value: "UG",
		"country-code": "800"
	},
	{
		text: "Ukraine",
		value: "UA",
		"country-code": "804"
	},
	{
		text: "United Arab Emirates",
		value: "AE",
		"country-code": "784"
	},
	{
		text: "United Kingdom of Great Britain and Northern Ireland",
		value: "GB",
		"country-code": "826"
	},
	{
		text: "United States Minor Outlying Islands",
		value: "UM",
		"country-code": "581"
	},
	{
		text: "United States of America",
		value: "US",
		"country-code": "840"
	},
	{
		text: "Uruguay",
		value: "UY",
		"country-code": "858"
	},
	{
		text: "Uzbekistan",
		value: "UZ",
		"country-code": "860"
	},
	{
		text: "Vanuatu",
		value: "VU",
		"country-code": "548"
	},
	{
		text: "Venezuela (Bolivarian Republic of)",
		value: "VE",
		"country-code": "862"
	},
	{
		text: "Viet Nam",
		value: "VN",
		"country-code": "704"
	},
	{
		text: "Virgin Islands (British)",
		value: "VG",
		"country-code": "092"
	},
	{
		text: "Virgin Islands (U.S.)",
		value: "VI",
		"country-code": "850"
	},
	{
		text: "Wallis and Futuna",
		value: "WF",
		"country-code": "876"
	},
	{
		text: "Western Sahara",
		value: "EH",
		"country-code": "732"
	},
	{
		text: "Yemen",
		value: "YE",
		"country-code": "887"
	},
	{
		text: "Zambia",
		value: "ZM",
		"country-code": "894"
	},
	{
		text: "Zimbabwe",
		value: "ZW",
		"country-code": "716"
	},
	{
		text: "Åland Islands",
		value: "AX",
		"country-code": "248"
	}
]

export default options