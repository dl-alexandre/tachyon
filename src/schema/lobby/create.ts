import Type from "typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Create a lobby",
    request: {
        data: Type.Object({
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
                        description: "Lobby tags for filtering (duel, small team, large team, PvE)",
                    }
                )
            ),
            mapName: Type.String(),
            allyTeamConfig: Type.Ref("allyTeamConfig"),
        }),
    },
    response: [
        {
            status: "success",
            data: Type.Ref("lobbyDetails"),
        },
    ],
});
