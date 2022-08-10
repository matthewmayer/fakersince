const versions = require("./versions.json")
const fs = require('fs')
async function main() {
    let allversions = versions.reverse().filter(v=>!v.includes("-"))
    let latest = allversions.shift()
    let latestMethods = fs.readFileSync("./methods/methods-"+latest+".txt", "ascii").split("\n").map(v=>v.trim()).filter(v=>!!v)
    for (let method of latestMethods) {
        let validVersions = [latest]
        for (let v of allversions) {
            try {
                let oldMethods = fs.readFileSync("./methods/methods-"+v+".txt", "ascii").split("\n").map(v=>v.trim())
                if (oldMethods.includes(method)) {
                    validVersions.push(v)
                }
            } catch (e) {
                //console.warn("Could not find version "+v)
            }
        }
        console.log(method+","+validVersions[validVersions.length-1])
    }
    
}

main()