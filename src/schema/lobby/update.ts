import Type from "typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Update some properties of the lobby the player is in.",
    request: {
        data: Type.Object({
            name: Type.Optional(Type.String({ description: "to rename the lobby" })),
            description: Type.Optional(
                Type.String({
                    maxLength: 500,
                    description: "update the lobby description",
                })
            ),
            tags: Type.Optional(
                Type.Array(
                    Type.Enum(["duel", "small team", "large team", "PvE"]),
                    {
                        maxItems: 4,
                        description: "Replace existing tags with new set",
                    }
                )
            ),
            mapName: Type.Optional(Type.String()),
            allyTeamConfig: Type.Optional(Type.Ref("allyTeamConfig")),
        }),
    },
    response: [{ status: "success" }],
});
