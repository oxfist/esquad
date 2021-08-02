export default function handler(req, res) {
  console.log(req.body)

  const squads = req.body.teams

  res.status(200).json({
    body: {
      squads: squads
    },
  })
}
