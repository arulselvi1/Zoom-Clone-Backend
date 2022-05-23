const { saveCallId, getCallId } = require("./model");

exports.saveCallId = async (req, res) => {
  try {
    const { id, signalData } = req.body;
    await this.saveCallId(id, signalData);
    res.send(200).send(true);
  } catch (error) {
    res.send(400).send(error.message);
  }
};

exports.getCallId = async (req, res) => {
  try {
    const { id } = req.params;
    const code = await this.getCallId(id);
    res.status(200).send({ code });
  } catch (error) {
    res.send(400).send(error.message);
  }
};
