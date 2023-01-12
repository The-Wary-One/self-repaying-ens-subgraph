import { Resolvers } from "./.graphclient"

const resolvers: Resolvers = {
    Name: {
        registration: {
            selectionSet: /* GraphQL */`
                {
                    labelName
                }
            `,
            // FIXME: N+1 problem.
            resolve: async (root, _args, context, info) => {
                console.log("called")
                const registrations = await context.ens.Query.registrations({
                    root,
                    args: {
                        first: 1,
                        orderBy: "registrationDate",
                        orderDirection: "desc",
                        where: { labelName: root.text }
                    },
                    context,
                    info,
                })

                return registrations[0]
            }
        }
    }
}

export default resolvers
