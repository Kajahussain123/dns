const mongoose = require('mongoose');

const domainSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  // Add more fields as needed
});

const Domain = mongoose.model('Domain', domainSchema);

module.exports = Domain;
