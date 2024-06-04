const { dbConnect, dbDisconnect } = require("../../utils/dbConnect");
const { deleteFiles } = require("../../utils/functions");
const { parseForm } = require("../../utils/parseForm");
const settingModel = require("./settings.model");
const { writeFileSync } = require("fs");
module.exports = {
  getSettingService,
  postSettingService
};

async function getSettingService(req, res) {
  try {
    
    const settings = await settingModel.findOne({});
    res.status(200).json({ success: true, settings });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false });
  }
}
async function postSettingService(req, res) {
    try {
        
        const { query } = req;
        const bodyData = await parseForm(req);
        let settingData = await settingModel.findOne({});
        if (settingData === null) {
          settingData = new settingModel({ name: "" });
        }
        //Check Data Scope
        switch (query.scope) {
          case "general":
            const color_data = JSON.parse(bodyData.field.color);
            settingData.name = bodyData.field.name;
            settingData.title = bodyData.field.title;
            settingData.currency = {
              name: bodyData.field.currencyName,
              symbol: bodyData.field.currencySymbol,
              exchangeRate: bodyData.field.exchangeRate,
            };
            settingData.color = color_data;
            settingData.language = bodyData.field.language;
            await settingData.save();
            break;

          case "layout":
            const footerBanner = JSON.parse(bodyData.field.footerBanner);
            const socialLink = JSON.parse(bodyData.field.social);
            settingData.phoneHeader = bodyData.field.phoneHeader;
            settingData.shortAddress = bodyData.field.shortAddress;
            settingData.phoneFooter = bodyData.field.phoneFooter;
            settingData.email = bodyData.field.email;
            settingData.address = bodyData.field.address;
            settingData.description = bodyData.field.description;
            settingData.copyright = bodyData.field.copyright;
            settingData.footerBanner = footerBanner;
            settingData.social = socialLink;
            await settingData.save();
            break;

          case "graphics":
            const logo = JSON.parse(bodyData.field.logo);
            const favicon = JSON.parse(bodyData.field.favicon);
            const gatewayImage = JSON.parse(bodyData.field.gatewayImage);
            if (
              settingData.logo[0] &&
              settingData.logo[0].name !== logo[0].name
            ) {
              const fileName = [{ Key: settingData.logo[0].name }];
              await deleteFiles(fileName);
            }
            if (
              settingData.favicon[0] &&
              settingData.favicon[0].name !== favicon[0].name
            ) {
              const fileName = [{ Key: settingData.favicon[0].name }];
              await deleteFiles(fileName);
            }
            if (
              settingData.gatewayImage[0] &&
              settingData.gatewayImage[0].name !== gatewayImage[0].name
            ) {
              const fileName = [{ Key: settingData.gatewayImage[0].name }];
              await deleteFiles(fileName);
            }
            settingData.logo = logo;
            settingData.favicon = favicon;
            settingData.gatewayImage = gatewayImage;
            await settingData.save();
            break;

          case "seo":
            const metaImage = JSON.parse(bodyData.field.image);
            if (
              settingData.seo.image[0] &&
              settingData.seo.image[0].name !== metaImage[0].name
            ) {
              const fileName = [{ Key: settingData.seo.image[0].name }];
              await deleteFiles(fileName);
            }
            settingData.seo.title = bodyData.field.title;
            settingData.seo.description = bodyData.field.description;
            settingData.seo.keyword = bodyData.field.keyword;
            settingData.seo.image = metaImage;
            await settingData.save();
            break;

          case "script":
            settingData.script = JSON.parse(bodyData.field.script);
            await settingData.save();
            break;

          case "gateway":
            settingData.paymentGateway = JSON.parse(
              bodyData.field.gateway
            );
            await settingData.save();
            break;

          case "login":
            settingData.login = JSON.parse(bodyData.field.login);
            await settingData.save();
            break;

          case "security":
            settingData.security = JSON.parse(bodyData.field.security);
            await settingData.save();
            break;

          case "sitemap":
            writeFileSync("public/sitemap.xml", bodyData.field.sitemap);
            break;

          case "robot":
            writeFileSync("public/robots.txt", bodyData.field.robots);
            break;

          default:
            return res.status(400).json({ success: false });
            break;
        }

        res.status(200).json({ success: true });
      } catch (err) {
        console.log(err);
        res.status(500).json({ success: false });
      }
}

