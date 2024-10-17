const companiesTop =
    [
        {
            name: "#TopIndianStartups",
            list: ["CRED", "Vernacular.ai", "PharmEasy", "Digit Insurance", "Meesho", "Groww", "Nykaa", "Udaan", "Dream11", "Swiggy", "Instamojo", "PostMan", "Delhivery", "Slice", "InMobi", "Practo", "Boat", "Skyroot Aerospace", "LivSpace", "Ather"]
        },
        {
            name: "#12LPA+",
            list: ["Acko", "Adobe", "Airbase", "Airbnb", "Airbus", "Airtel X Labs", "Ajio", "Akamai", "AlphaGrep", "Alphonso", "Amagi", "Amazon", "American Express", "Angel One", "Ansys", "Anthem", "Apna", "AppDynamics", "Arcesium", "Arista", "Atlassian", "AutoDesk", "Auzmor", "Avail Finance", "Avalara", "BCG", "BNY Mellon", "Bain & Company", "Bankbazaar", "Belzabar", "Bharatpe", "Bigbasket", "Biofourmis", "Bizongo", "Blackbuck", "Blinkit", "BloomReach", "Booking", "Bright Money", "Broadcom", "Browserstack", "Bukuwarung", "Buyhatke", "Byjus", "C2FO", "Cadence", "CashFree", "Chargebee", "Chegg", "Chronus Software", "Cisco", "Citi Bank", "Citrix", "Citymall", "Clarisights", "ClearQuote", "ClearTax", "ClearTrip", "Cloootrack", "Cloud Lending", "Clumio", "Credgenics", "Codenation", "Cogoport", "Cohesity", "Coinbase", "Coinswitch", "CommerceIQ", "Commvault", "Confluent", "CouchBase", "Cred", "Credit Suisse", "Crowdfire", "Cult Fit", "DE Shaw", "Daily Rounds", "Datadog", "Dealshare", "Delhivery", "Dialpad", "Directi", "Dp world", "Dream 11", "Dremio", "Druva", "Duetshe bank", "Dunzo", "Eightfold ai", "Electronics Arts", "Eltropy", "Endurance", "Enfusion", "Epifi", "Expedia", "Falabella", "Fanclash", "Far Eye", "FarEye", "Fedility Investments", "Fleetx", "Flipkart", "Flock", "Fraazo", "FreeCharge", "FreshMenu", "FreshWorks", "FrontRow", "FunPlus", "GE Health Care", "Games 24x7", "GamesKraft", "Gartner", "Glance", "Gojek", "Goldman sachs", "GoodWorker", "Google", "Grab", "Graviton", "Groupon", "Groww", "Gupshup", "Harness", "Headout", "Hedge Fund", "Hotstar", "Idrive", "Indeed", "IndiaMart", "Indiagold", "Indmoney", "InsideView", "Intel", "Intuit", "Ion Trading", "Itilite", "Ixigo", "Jio", "JPMC", "Jumio", "Jungle Games", "Juniper Networks", "Jupiter Money", "Juspay", "KLA", "Khatabook", "Komprise", "Kuvera", "LambdaTest", "Leap Finance", "Leena ai", "Lenskart", "Licious", "Limeroad", "Linkedin", "Linq", "Livspace", "Loco", "MPL", "Magnitude", "MakeMyTrip", "Mastercard", "MathWorks", "McKinsey", "Medianet", "Meesho", "Meidatek", "Mentor Graphics", "Mfine", "Microsoft", "MindTickle", "MoenGage", "Money Control", "Moneyview", "MoonFrog", "Morgan Stanley", "MotorQ", "MSC", "MyKaarma", "Myntra", "NK Securities", "Nas Academy", "National Instruments", "Navi", "Nektar ai", "NetApp", "Netomi", "NewFold Digital", "Nference", "Nike", "Ninjacart", "NoBroker", "Noccarc", "Nurture Farm", "Nutanix", "Nvidia", "OCI", "OLX Group", "OkCredit", "Ola", "Oppo", "Oracle", "Oyo", "Palo Alto", "PayU", "Paypal", "Paytm", "Peak Ai", "PharmEasy", "Philips", "Phonepe", "Pickrr", "Plivo", "PlumHQ", "Porter", "Postman", "Practo", "Progress", "PropertyGuru", "Prophecy io", "Public Sapient", "Quad Eye", "Qualcomm", "Quizizz", "Rain Instant Pay", "Razorpay", "Rebel Foods", "Reliance Retail", "Revolut", "Rippling", "Rivigo", "Rubrik", "Rupeek", "SABRE", "SAP Labs", "Salesforce", "Salesken", "Samsung", "Sapient", "Schlumberger", "SenseHq", "Servicenow", "ShareChat", "Shiprocket", "Sigmoid", "Sigtuple", "Simpl", "Sixt", "Slack", "Smart Coin Financials", "Snowflake", "SocGen", "Sostronk", "Spinny", "SplashLearn", "Sprinklr", "Stashfin", "Stripe", "Sumo Logic", "Sumologic", "Swiggy", "Synopsys", "Target", "Tata 1mg", "Telstra", "Tesco", "Tesla", "Texas Instruments", "Times Internet", "Tokopedia", "TomTom", "Toppr", "Tower Research Capital", "Traveloka", "Trifacta", "Trinkerr", "TruEra", "Turvo", "Twillio", "Twitter", "UOLO", "Uber", "Udaan", "UiPat", "Unacademy", "Upstox", "Urban Company", "Urban Ladder", "Visa", "Vmware", "Vogo", "Vymo", "Walmart", "Wells Fargo", "Western Digital", "Whatfix", "Wingify", "Winzo", "Wooqer", "World Quant", "Xerox Research", "Xilinx", "Yellow AI", "Yubi", "Zendrive", "Zenefits", "Zerodha", "Zomato"]
        },
        {
            name: "#BigTech",
            list: ["Amazon", "Apple", "Facebook", "Google", "Microsoft", "Netflix", "Oracle", "Paypal", "Salesforce", "Uber", "Walmart"]
        },
        {
            name: "#Big4",
            list: ["Deloitte", "EY", "KPMG", "PwC"]
        },
        {
            name: "#Consulting",
            list: ["Accenture", "Bain & Company", "Boston Consulting Group", "Deloitte", "EY", "KPMG", "McKinsey", "PwC"]
        },
        {
            name: "#Fintech",
            list: ["Amazon", "American Express", "Apple", "Bank of America", "Barclays", "Capital One", "Citibank", "Credit Suisse", "DBS", "Goldman Sachs", "HSBC", "JPMorgan Chase", "Mastercard", "Paypal", "RBC", "SBI", "Societe Generale", "Standard Chartered", "Stripe", "UBS", "Visa", "Wells Fargo"]
        },
        {
            name: "#Healthcare",
            list: ["Amazon", "Apple", "Cerner", "Cigna", "CVS Health", "EY", "GE Healthcare", "Google", "IBM", "Johnson & Johnson", "KPMG", "Medtronic", "Microsoft", "Novartis", "Pfizer", "PwC", "Roche", "Sanofi", "UnitedHealth Group"]
        },
        {
            name: "#Insurance",
            list: ["American Express", "Aon", "AXA", "Berkshire Hathaway", "Bharti Axa", "Bupa", "Cigna", "CNA Financial", "EY", "Farmers Insurance", "Genworth Financial", "GEICO", "HDFC Life", "HDFC Standard Life", "HDFC Ergo", "HDFC ERGO General Insurance", "HDFC ERGO Health Insurance", "HDFC ERGO Motor Insurance", "HDFC ERGO Travel Insurance", "HDFC ERGO Home Insurance", "HDFC ERGO Personal Accident Insurance", "HDFC ERGO Commercial Vehicle Insurance", "HDFC ERGO Two Wheeler Insurance", "HDFC ERGO Car Insurance", "HDFC ERGO Health Insurance", "HDFC ERGO Travel Insurance", "HDFC ERGO Home Insurance", "HDFC ERGO Personal Accident Insurance", "HDFC ERGO"]
        },
        {
            name: "#Manufacturing",
            list: ["3M", "Amazon", "Apple", "Bayer", "Bosch", "Caterpillar", "Cisco", "Daimler", "Deere", "EY", "Ford", "GE", "Google", "Honda", "IBM", "Intel", "JPMorgan Chase", "KPMG", "LG", "Lockheed Martin", "Microsoft", "Nestle", "Nissan", "Pfizer", "PwC", "Samsung", "Siemens", "Sony", "Toyota", "Uber", "Walmart"]
        },
        {
            name: "#Media",
            list: ["Amazon", "Apple", "Bloomberg", "Buzzfeed", "CBS", "Disney", "EY", "Facebook", "Fox", "Google", "Hulu", "IBM", "KPMG", "Microsoft", "NBC", "Netflix", "PwC", "Reddit", "Snap", "Spotify", "TikTok", "Twitter", "Uber", "Walmart", "WarnerMedia", "YouTube"]
        },
        {
            name: "#Retail",
            list: ["Amazon", "Apple", "Best Buy", "Costco", "EY", "Google", "Home Depot", "IKEA", "KPMG", "Lowe's", "Microsoft", "Nike", "PwC", "Target", "Walmart", "Walmart"]
        },
        {
            name: "#Telecom",
            list: ["AT&T", "Bharti Airtel", "China Mobile", "China Telecom", "China Unicom", "Deutsche Telekom", "EY", "KPMG", "NTT", "PwC", "Reliance Jio", "SoftBank", "T-Mobile", "Telefonica", "Vodafone", "Vodafone Idea"]
        },
        {
            name: "#Transportation",
            list: ["Amazon", "Apple", "Berkshire Hathaway", "Bosch", "Caterpillar", "Daimler", "Deere", "EY", "Ford", "GE", "Google", "Honda", "IBM", "Intel", "JPMorgan Chase", "KPMG", "Lockheed Martin", "Microsoft", "Nestle", "Nissan", "Pfizer", "PwC", "Samsung"]
        }
    ]
function submitForm() {
    console.log("submitForm() called");
    var ullist = document.querySelector("#companies");
    var values = [];
    for (var i = 0; i < ullist.children.length; i++) {
        values.push(ullist.children[i].innerHTML);
    }
    console.log(values);
    for (var i = 0; i < values.length && i < 10; i++) {
        let url = "https://www.linkedin.com/search/results/people/?keywords=" + values[i] + "%20hiring&origin=SWITCH_SEARCH_VERTICAL&sid=V%3A_"
        console.log(url);
        window.open(url, '_blank');
    }
}

document.querySelector("#search").addEventListener("click", submitForm);

document.querySelector("#company").addEventListener("keydown", function (event) {
    var tag = document.createElement("p");
    tag.classList.add("cmp");
    var ullist = document.querySelector("#companies");
    // if it is a space, comma, or enter key
    if (event.keyCode === 32 || event.keyCode === 13 || event.keyCode === 188) {
        var textboxValue = document.querySelector("#company").value;
        var values = textboxValue.split(",");
        var lastValue = values[values.length - 1];
        var newTag = tag.cloneNode(true);
        newTag.innerHTML = lastValue;
        // console.log(lastValue);
        ullist.appendChild(newTag);
        document.querySelector("#company").value = "";
    }
    // if it is a backspace
    if (event.keyCode === 8) {
        var textboxValue = document.querySelector("#company");
        var values = textboxValue.value.split(",");
        var lastValue = values[values.length - 1];
        if (lastValue === "") {
            try {
                var val = ullist.lastChild.innerHTML;
                console.log(val);
                ullist.removeChild(ullist.lastChild);
                textboxValue.value = textboxValue.value + val;
            } catch (err) {
                console.log("No more companies to remove");
            }
        }
    }
});


var company_groups_btns = document.querySelector("#company-groups");
for (var i = 0; i < companiesTop.length; i++) {
    console.log(companiesTop[i].name);
    var btn = document.createElement("h2");
    btn.classList.add("cmp-list");
    btn.style.cursor = "pointer";
    btn.style.margin = "10px 20px";
    btn.innerHTML = companiesTop[i].name;
    btn.addEventListener("click", function (event) {
        var company = document.querySelector("#companies");
        var company_name = event.target.innerHTML;
        for (var j = 0; j < companiesTop.length; j++) {
            if (companiesTop[j].name === company_name) {
                for (var k = 0; k < companiesTop[j].list.length; k++) {
                    var tag = document.createElement("p");
                    tag.classList.add("cmp");
                    var newTag = tag.cloneNode(true);
                    newTag.innerHTML = companiesTop[j].list[k];
                    company.appendChild(newTag);
                }
            }
        }
    });
    company_groups_btns.appendChild(btn);
}

