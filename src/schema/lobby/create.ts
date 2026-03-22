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
