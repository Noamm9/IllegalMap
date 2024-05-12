import { dmapData, gc, cc } from "../utils"


let checked = false
register("step", () => {
    if (checked) return
    checked = true
    if (!dmapData.firstTime) return
    dmapData.firstTime = false 
    dmapData.save()
    ChatLib.chat(`&b&m${ChatLib.getChatBreak(" ")}`)
    cc(`&6&l[&b&lNoamm&d&lMap&6&l]&r ${JSON.parse(FileLib.read("NoammMap", "metadata.json")).version}`)
    cc("&a&a&b&c&d&e")
    cc("&aThank you for installing &b&lNoamm&d&lMap&r!")
    cc("&a&a&b&c&d&e&r")
    //new TextComponent(gc("&6Click here &7to join my Discord server to report")).setClick("open_url", "https://discord.gg/pykzREcAuZ").setHover("show_text", "&9https://discord.gg/pykzREcAuZ").chat()
    //cc("&7bugs or make suggestions!")
    cc("&a&a&b&c&d&d&e")
    ChatLib.chat(`&b&m${ChatLib.getChatBreak(" ")}`)
}).setFps(5)