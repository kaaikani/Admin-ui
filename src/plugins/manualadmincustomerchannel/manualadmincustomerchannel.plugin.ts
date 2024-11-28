import { PluginCommonModule, VendurePlugin } from '@vendure/core';
import { AdminUiExtension } from '@vendure/ui-devkit/compiler';
import * as path from 'path';
import { ChannelAssignmentResolver } from './resolvers/channel-assignment.resolver';
import { CustomerChannelService } from './services/customer-channel.service';
import gql from 'graphql-tag';

@VendurePlugin({
    imports: [PluginCommonModule],
    compatibility: "3.0.5",
    adminApiExtensions: {
        schema: gql`
            extend type Mutation {
                assignCustomerToChannels(customerId: ID!, channelIds: [ID!]!): String!
            }
        `,
        resolvers: [ChannelAssignmentResolver],
    },
    providers: [CustomerChannelService],
})
export class ManualCustomerChannelPlugin {
    static ui: AdminUiExtension = {
        id: 'manual-customer-channel-ui',
        extensionPath: path.join(__dirname, 'ui'),
        routes: [{ route: 'manual-customer-channel', filePath: 'routes.ts' }],
        providers: ['providers.ts'],
    };
}
