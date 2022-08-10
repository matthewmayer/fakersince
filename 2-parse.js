const versions = require("./versions.json")
const spawn = require('await-spawn')
const fs = require('fs')
async function main() {
    for (let v of versions.reverse()) {
        if (!v.includes("-")) {
            console.log(v)
            try {
                await spawn('npm',["install","@faker-js/faker@"+v])
                const out = await spawn('node',["methods.js"])
                fs.writeFileSync("./methods/methods-"+v+".txt",out.toString())
            } catch (e) {
                console.error(e)
            }
        }
    }
}

main()