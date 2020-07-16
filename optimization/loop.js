const companies = ["FPT", "VNG", "Viettel", "Intel", "Apple", "Facebook"];

// 1 Traditional
for (let i = 0; i < companies.length; i++) {
    if (companies[i] === 'VNG') {
        continue;
        // break;
    }
    console.log(companies[i])
}

// 2. Functional 
companies.forEach(company => {
    console.log(company);
});

// 3. For ... in 
// loop through keys/indexes
// print all properties in prototype
Array.prototype.newFeature = function () {
    console.log('some new features')
}
for (const index in companies) {
    console.log(`Cong ty ${companies[index]} co STT: ${+index + 1}`);
}

// 4. For ... of 
for (const company of companies) {
    console.log(company);
}

for (const [index, company] of companies.entries()) {
    console.log(`Cong ty ${company} co STT: ${index + 1}`);
}

var website = 'niviki.com'
for (const char of website) {
    console.log(char)
}

function sum() {
    var total = 0
    console.log(typeof arguments)
    for (const element of arguments) {
        total += element
    }
    console.log(total)
}

sum(12, 1, 231, 23, 123, 2)

const companyObj = {
    fpt: {
        name: "fpt"
    },
    vng: {
        name: "vng"
    },
    viettel: {
        name: 'viettel'
    },
    apple: {
        name: 'apple'
    },
};

// for in vs for of object
for (var key in companyObj) {
    if (companyObj.hasOwnProperty(key)) {
        var element = companyObj[key];
        console.log(element);
    }
    console.log(key)
}

for (var prop of Object.keys(companyObj)) {
    console.log(companyObj[prop])
}