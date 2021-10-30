'use strict';
const https = require('https');

function alpha2CodeToCountry(code) {
    
    const api_url = "https://jsonmock.hackerrank.com/api/countries?page=";

    async function getCountryName(code) {        
        const { total_pages, data } = await fetch(api_url+"1");
        const countryFound = returnCountryName(data, code);
        if (countryFound){
            console.log(countryFound.name)
            return countryFound.name;
        } 
        for (let i = 2; i <= total_pages; i++) {
            const { data } = await fetch(api_url+`${i}`);
            const countryFound = returnCountryName(data, code, i);
            if (countryFound){
                console.log(countryFound.name)
                return countryFound.name;
            } 
        }
    }

    function fetch(url) {
        return new Promise((resolve, reject) => {
            https
                .get(url, (res) => {
                    let result = "";
                    res.on("data", (chunk) => {
                        result += chunk;
                    });
                    res.on("end", () => {
                        resolve(JSON.parse(result));
                    });
                })
                .on("error", (error) => {
                    reject(error);
                });
        });
    }

    function returnCountryName(dataWithCoutries, code, i = 1) {
        if (dataWithCoutries !== undefined){
            return dataWithCoutries.find((c) => c["alpha2Code"] === code);
        } 
    }
    return getCountryName(code);
}


export default alpha2CodeToCountry;
  