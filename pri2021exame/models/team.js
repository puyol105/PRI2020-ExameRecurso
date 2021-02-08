var mongoose = require('mongoose')

var MemberSchema = new mongoose.Schema({
    id: String,
    name: String,               
    course: String,
    scores: [Number]
});

var TeamSchema = new mongoose.Schema({
    _id: String,
    guid: String,
    teams: String,               
    pitch1: Boolean,
    pitch2: Boolean,
    techPitch: Boolean,
    businessReport: Boolean,
    techReport: Boolean,
    members: [MemberSchema]
});

module.exports = mongoose.model('Team', TeamSchema, 'teams') 