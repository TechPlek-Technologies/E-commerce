const { dbConnect, dbDisconnect } = require("../../utils/dbConnect");
const notificationModel = require("./notification.model");

module.exports = {
  getNotificationService,
  deleteNotificationService
};

async function getNotificationService(req, res) {
    try {
        
        const notification = await notificationModel
          .find({})
          .sort("-createdAt")
          .limit(20)
          .exec();
        res.status(200).json({ success: true, notification });
      } catch (err) {
        console.log(err);
        res.status(500).json({ success: false });
      } 
}
async function deleteNotificationService(req, res) {
    try {
        
        await notificationModel.deleteMany({});
        res.status(200).json({ success: true });
      } catch (e) {
        console.log(e);
        res.status(200).json({ success: false });
      } 
}

