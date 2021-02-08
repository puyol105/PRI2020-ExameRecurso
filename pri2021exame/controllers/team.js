var Team = require('../models/team')

module.exports.listar = () => {
  return Team
    .aggregate([
      {
        $project: {
          _id: 1,
          team: 1,
          pitch1:1,
          pitch2:1,
          techPitch: 1,
          businessReport: 1,
          techReport: 1,
          nmembers: { $cond: { if: { $isArray: "$members" }, then: { $size: "$members" }, else: "0"} }
        }
      }
    ])
    .exec()
}

module.exports.listarTeam = id => {
  return Team
    .findOne({
      _id: id
    })
    .exec()
  }

module.exports.listarMembro = (id,member) => {
  return Team
    .find({_id : id, members: {$elemMatch: {member}}})
    .exec()
}

module.exports.inserir = t => {
  var novo = new Team(t)
  return novo.save()
}



module.exports.inserirId = (idTeam, m) => {
  return Team
    .findOneAndUpdate(
      {_id:idTeam},
      { $push:{members: m}},
      { new: true, useFindAndModify: false }
    )
    .exec()
}

module.exports.eliminar = id => {
  return Team
    .deleteOne({
      _id: id
    })
}

module.exports.eliminarMember = (idTeam,idMember) => {
  return Team
    .updateOne(
      { _id: idTeam },
      { $pull: { "members" : { id: idMember } } }
    )
}
