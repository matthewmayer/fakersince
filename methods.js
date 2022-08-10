let faker = require("@faker-js/faker")
if (faker.faker) {
    faker = faker.faker //for newer versions of faker
}
const keys = Object.keys(faker)
for (let key of keys) {
    console.log("faker."+key)
    let subkeys = Object.keys(faker[key])
    for (let subkey of subkeys) {
        console.log("faker."+key+"."+subkey)
    }
}