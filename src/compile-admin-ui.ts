import { compileUiExtensions, setBranding } from "@vendure/ui-devkit/compiler";
import path from "path";
import { BannerPlugin } from "./plugins/banner/banner.plugin";
import { ManualCustomerChannelPlugin } from "./plugins/manualadmincustomerchannel/manualadmincustomerchannel.plugin";


if (require.main === module) {
  // Called directly from command line
  customAdminUi({ recompile: true, devMode: false })
    .compile?.()
    .then(() => {
      process.exit(0);
    });
}

export function customAdminUi(options: {
  recompile: boolean;
  devMode: boolean;
}) {
  const compiledAppPath = path.join(__dirname, "../admin-ui");
  if (options.recompile) {
    return compileUiExtensions({
      outputPath: compiledAppPath,
      extensions: [
        BannerPlugin.UiExtensions,
        ManualCustomerChannelPlugin.UiExtensions,
        
      ],
      devMode: options.devMode,
    });
  } else {
    return {
      path: path.join(compiledAppPath, "dist"),
    };
  }
}