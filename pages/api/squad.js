import builder from '../../lib/squadBuilder';

export default function handleSquads(req, res) {
  const { teams, squadAmount } = req.body;
  const squads = builder.build(teams, squadAmount);

  res.status(200).json({
    body: {
      squads,
    },
  });
}
