import builder from '../../lib/squadBuilder';

export default function handleSquads(req, res) {
  const { teams } = req.body;
  const squads = builder.build(teams);

  res.status(200).json({
    body: {
      squads,
    },
  });
}
