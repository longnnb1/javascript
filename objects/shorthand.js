// Object Literals Upgrade
//1. Property value shorthand - Cùng tên bỏ được

let first = "Long";
let last = "Nguyen";

let user = {
    firstName: first,
    last,
    age: 18
};

function logInfo({ address }) {
    console.log(address);
}

let address = "HCM"; // download from web service
let user1 = {
    address
};
logInfo(user1);

//2. Method definition shorthand - hàm ngắn gọn
let user2 = {
    age: 18,
    showname(name) {
        console.log(this)
        console.log(name)
    },
    showAddress(address) {
        console.log(address)
    }
}
user2.showname('Long')

//3. Computed property keys 
let objKey = 'name'
// abb = abbreviate
var country = {
    [objKey]: 'Vietnam',
    [objKey + 'Abb']: 'VN'
}