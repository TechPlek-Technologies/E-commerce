const customIdNew = require("custom-id-new");
const { dbConnect, dbDisconnect } = require("../../utils/dbConnect");
const pageModel = require("./webpage.model");
const { deleteFiles } = require("../../utils/functions");

module.exports = {
    getPageService,
    postPageService,
    postHomePageService,
    updateHomePageCarouselService,
    deleteHomePageCarouselService
};




async function getPageService(req, res) {
    try {
        
        const pageData = await pageModel.findOne({});
        res.status(200).json({ success: true, page: pageData });
      } catch (err) {
        console.log(err);
        res.status(400).json({ success: false });
      } 
}
async function postPageService(req, res) {
    try {
        
        const { query, body } = req;
        let pageData = await pageModel.findOne({});
        if (pageData === null) {
          pageData = new pageModel({ aboutPage: { content: "" } });
        }
        //Check Data Scope
        switch (query.scope) {
          case "about":
            pageData.aboutPage.content = body.content;
            await pageData.save();
            break;

          case "privacy":
            pageData.privacyPage.content = body.content;
            await pageData.save();
            break;

          case "terms":
            pageData.termsPage.content = body.content;
            await pageData.save();
            break;

          case "return":
            pageData.returnPolicyPage.content = body.content;
            await pageData.save();
            break;

          case "faq":
            pageData.faqPage.content = body.content;
            await pageData.save();
            break;

          default:
            return res.status(400).json({ success: false });
            break;
        }

        res.status(200).json({ success: true });
      } catch (err) {
        console.log(err);
        res.status(400).json({ success: false });
      } 
}
async function postHomePageService(req, res) {
    try {
        
        const { query, body } = req;
        let pageData = await pageModel.findOne({});
        if (pageData === null) {
          pageData = new pageModel({ aboutPage: { content: "" } });
        }
        //Check Data Scope
        switch (query.scope) {
          case "carousel":
            const { title, subTitle, description, url, image } = body;
            const carouselData = {
              title,
              subTitle,
              description,
              url,
              image,
              id: customIdNew({ randomLength: 4, lowerCase: true }),
            };
            pageData.homePage.carousel.carouselData.push(carouselData);
            await pageData.save();
            break;

          case "background":
            const { background } = body;
            const arg =
              pageData.homePage.carousel.background[0].name !==
              background[0].name;
            if (arg) {
              const fileName = [
                { Key: pageData.homePage.carousel.background[0].name },
              ];
              await deleteFiles(fileName);
            }
            pageData.homePage.carousel.background = background;
            await pageData.save();
            break;

          case "banner":
            const arg2 =
              pageData.homePage.banner.image[0].name !== body.image[0].name;
            if (arg2) {
              const fileName = [
                { Key: pageData.homePage.banner.image[0].name },
              ];
              await deleteFiles(fileName);
            }
            const bannerData = {
              title: body.title,
              subTitle: body.subTitle,
              description: body.description,
              url: body.url,
              image: body.image,
            };
            pageData.homePage.banner = bannerData;
            await pageData.save();
            break;

          case "collection":
            const collectionItem =
              pageData.homePage.collection[query.dataScope];
            const arg3 =
              collectionItem.image[0] &&
              collectionItem.image[0].name !== body.image[0].name;
            if (arg3) {
              const fileName = [{ Key: collectionItem.image[0].name }];
              await deleteFiles(fileName);
            }
            const collectionData = {
              title: body.title,
              url: body.url,
              image: body.image,
            };
            pageData.homePage.collection[query.dataScope] = collectionData;
            await pageData.save();
            break;

          default:
            return res.status(400).json({ success: false });
            break;
        }

        res.status(200).json({ success: true });
      } catch (err) {
        console.log(err);
        res.status(400).json({ success: false, err: err.message });
      } 
}
async function deleteHomePageCarouselService(req, res) {
    try {
        
        const { query } = req;
        const pageData = await pageModel.findOne({});
        //Check Data Scope
        switch (query.scope) {
          case "carousel":
            const item = await pageData.homePage.carousel.carouselData.filter(
              (item) => item.id === query.id
            );
            const fileName = [{ Key: item[0].image[0].name }];
            await deleteFiles(fileName);
            await pageModel.updateOne(
              {},
              {
                $pull: { "homePage.carousel.carouselData": { id: query.id } },
              }
            );
            res.status(200).json({ success: true });
            break;
          default:
            res.status(400).json({ success: false });
            break;
        }
      } catch (err) {
        console.log(err);
        res.status(400).json({ success: false, err: err.message });
      } 
}
async function updateHomePageCarouselService(req, res) {
    try {
        
        const { query } = req;
        //Check Data Scope
        switch (query.scope) {
          case "carousel":
            const r = await pageModel.updateOne(
              { "homePage.carousel.carouselData.id": req.body.id },
              {
                $set: { "homePage.carousel.carouselData.$": req.body },
              }
            );
            res.status(200).json({ success: r.modifiedCount > 0 });
            break;
          default:
            res.status(400).json({ success: false });
            break;
        }
      } catch (err) {
        console.log(err);
        res.status(400).json({ success: false, err: err.message });
      } 
}