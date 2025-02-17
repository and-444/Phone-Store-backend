const Question = require("../models/Question");

class QuestionController {
  async sendQuestion(req, res) {
    try {
      const { userName, phone, message, date } = req.body;

      if (!userName || !phone || !message || !date) {
        return res.status(400).json({ message: "Не все поля заполнены" });
      }

      const newQuestion = new Question({ userName, phone, message, date });

      newQuestion.save();

      res.json({ message: "Заявка отправлена" });
    } catch (e) {
      console.log(e);
      res.json({ message: "Ошибка с отправкой заявки" });
    }
  }
}

module.exports = new QuestionController();
