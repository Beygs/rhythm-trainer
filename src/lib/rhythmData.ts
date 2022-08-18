export default Object.freeze<Rhythm[][]>(
  [[2], [4], [8, 8], [16, 16, 16, 16], [8, 16, 16], [16, 16, 8], [16, 8, 16]]
    .map((rhythms) => rhythms.map<Rhythm>((r) => ({ dur: r })))
    .concat([
      [{ dur: 8, dotted: true }, { dur: 16 }],
      [{ dur: 16 }, { dur: 8, dotted: true }],
    ])
);
