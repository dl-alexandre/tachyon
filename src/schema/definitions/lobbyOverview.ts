import Type from "typebox";

import { Nullable } from "@/typebox-utils.js";

export const lobbyOverview = Type.Object(
    {
        id: Type.String(),
        name: Type.String(),
        description: Type.Optional(
            Type.String({
                maxLength: 500,
                description: "Optional description of the lobby, rules, or requirements",
            })
        ),
        tags: Type.Optional(
            Type.Array(
                Type.Enum(["duel", "small team", "large team", "PvE"]),
                {
                    maxItems: 4,
                    description: "Lobby tags for filtering",
                }
            )
        ),
        playerCount: Type.Integer(),
        maxPlayerCount: Type.Integer(),
        mapName: Type.String(),
        engineVersion: Type.String(),
        gameVersion: Type.String(),
        currentBattle: Nullable(
            Type.Object({
                startedAt: Type.Ref("unixTime"),
            })
        ),
    },
    { description: "Simplified view of a lobby for list display purposes.", $id: "lobbyOverview" }
);
