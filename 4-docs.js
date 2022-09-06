const fs = require('fs')
async function main() {
    let since = fs.readFileSync("./since.txt", "ascii").split("\n").filter(v=>!!v)
    for (let row of since) {
        let [method,version] = row.split(",")
        if (!method.startsWith("faker.locales.") 
            && !method.startsWith("faker._locale")
            && !method.endsWith(".faker")
            && method.split(".").length==3) {
            let [faker,mod,methodname] = method.split(".")
            let file = `../faker/src/modules/${mod}/index.ts`
            let data = fs.readFileSync(file, "utf-8")
            let regex = new RegExp(` ${methodname}[<(]`)
            const index = data.match(regex)?.index
            if (index) {
                const endOfComment = data.lastIndexOf("*/", index)-2
                const newData = data.slice(0,endOfComment)+`  * @since ${version}\n`+data.slice(endOfComment-1)
                fs.writeFileSync(file, newData)
            }
        }
    }
    
}

main()