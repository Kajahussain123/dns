const Domain = require('../models/Domain');

exports.getDomains = async (req, res) => {
  try {
    const domains = await Domain.find();
    res.json(domains);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createDomain = async (req, res) => {
  try {
    const { name } = req.body;
    const newDomain = new Domain({ name });
    await newDomain.save();
    res.status(201).json({ message: 'Domain created successfully', domain: newDomain });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateDomain = async (req, res) => {
  try {
    const domainId = req.params.domainId;
    const { name } = req.body;
    const updatedDomain = await Domain.findByIdAndUpdate(domainId, { name }, { new: true });
    if (!updatedDomain) {
      return res.status(404).json({ error: 'Domain not found' });
    }
    res.json({ message: 'Domain updated successfully', domain: updatedDomain });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



exports.deleteDomain = async (req, res) => {
  try {
    const domainId = req.params.domainId;
    const deletedDomain = await Domain.findByIdAndDelete(domainId);
    if (!deletedDomain) {
      return res.status(404).json({ error: 'Domain not found' });
    }
    res.json({ message: 'Domain deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
