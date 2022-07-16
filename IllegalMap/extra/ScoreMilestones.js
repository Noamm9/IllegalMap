import Dungeon from "../../BloomCore/Dungeons/Dungeon"
import Config from "../data/Config"
import { prefix } from "../utils"

let announced270 = false
let announced300 = false
register("worldUnload", () => {
    announced270 = false
    announced300 = false
})

register("tick", () => {
    if (!Config.enabled || !Dungeon.inDungeon) return
    if (!announced270 && Dungeon.score >= 270) {
        if (Config.scoreMilestones) ChatLib.chat(`${prefix} &a270 Score Reached! &b(${Dungeon.time})`)
        if (Config.announce270) ChatLib.command(`pc ${Config.announce270Message}`)
        announced270 = true
    }
    if (!announced300 && Dungeon.score >= 300) {
        if (Config.scoreMilestones) ChatLib.chat(`${prefix} &a300 Score Reached! &b(${Dungeon.time})`)
        if (Config.announce300) ChatLib.command(`pc ${Config.announce300Message}`)
        announced300 = true
    }
})