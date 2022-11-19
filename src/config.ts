type StackId = `${number}${string}`;

type Segment = {
  bays: [number, number];
  marks: [string, string];
};

type Stack = {
  id: StackId;
  segments: Segment[];
};

export const stacks: Stack[] = [
  {
    id: "1A",
    segments: [
      { bays: [39, 40], marks: ["AC1 Wol.", "D805.G7 Sim."] },
      { bays: [41, 42], marks: ["D810.S7 Say.", "DS35.32 Int."] },
      { bays: [43, 44], marks: ["DS36.2 Has.", "HC241.2 Kus."] },
      { bays: [45, 46], marks: ["HC241.2 Lig.", "HD7105.25.U6 Dix."] },
    ],
  },
  {
    id: "1B",
    segments: [
      { bays: [47, 48], marks: ["HD7105.45.E86 Fut.", "HF1418.5 Reg."] },
      { bays: [49, 50], marks: ["HF1418.5 Rob.", "HM811 The."] },
      { bays: [51, 56], marks: ["HM811 Wri.", "HV6791 Unt."] },
      { bays: [57, 58], marks: ["HV6791 War.", "HV8197.5.A2 Bre."] },
      { bays: [59, 60], marks: ["HV8197.5.A45 Mul.", "HV9649.S35 Car."] },
    ],
  },
  {
    id: "1C",
    segments: [{ bays: [61, 65], marks: ["HV9650.B72 Eme.", "JK516 Tha."] }],
  },
  {
    id: "1D",
    segments: [{ bays: [66, 70], marks: ["JK611 Don.", "JZ1405 Sat."] }],
  },
  {
    id: "1E",
    segments: [
      { bays: [71, 75], marks: ["JZ1405 Sat.", "K230.B62 Rui."] },
      { bays: [76, 79], marks: ["K230.B7 Bri.", "K235 Stu."] },
      { bays: [80, 83], marks: ["K235 Sum.", "K367 Cri."] },
      { bays: [84, 86], marks: ["K367 Imp.", "K559 Wat."] },
    ],
  },
  {
    id: "1F",
    segments: [
      { bays: [87, 89], marks: ["K560 Gut.", "K738 Mach."] },
      { bays: [90, 90], marks: ["K747 Int.", "K840 Con."] },
    ],
  },
  {
    id: "1G",
    segments: [{ bays: [91, 95], marks: ["K840 Coo.", "K1327 Com."] }],
  },
  {
    id: "1H",
    segments: [{ bays: [96, 100], marks: ["K1327 Cor.", "K2400 Wto."] }],
  },
  {
    id: "2A",
    segments: [{ bays: [101, 105], marks: ["K2400.A35 Smi.", "K3585.5.A6 Cri."] }],
  },
  {
    id: "2B",
    segments: [{ bays: [106, 112], marks: ["K3585.6 Env.", "K5104 Sch."] }],
  },
  {
    id: "2C",
    segments: [{ bays: [113, 117], marks: ["K5105.5 Lif.", "KD370 Sta."] }],
  },
  {
    id: "2D",
    segments: [{ bays: [118, 122], marks: ["KD370 Tri.", "KD680 Cla."] }],
  },
  {
    id: "2E",
    segments: [{ bays: [123, 129], marks: ["KD680 Col.", "KD1289 Cop."] }],
  },
  {
    id: "2F",
    segments: [{ bays: [130, 134], marks: ["KD1289 Cop.", "KD1634 Bat."] }],
  },
  {
    id: "3A",
    segments: [{ bays: [135, 139], marks: ["KD1634 Hep.", "KD1864 Hou."] }],
  },
  {
    id: "3B",
    segments: [{ bays: [140, 144], marks: ["KD1864 Hou.", "KD2051 Lin."] }],
  },
  {
    id: "3C",
    segments: [{ bays: [145, 149], marks: ["KD2051 Mil.", "KD2535 Mic."] }],
  },
  {
    id: "3D",
    segments: [{ bays: [150, 154], marks: ["KD2535 Pro.", "KD3372 Env."] }],
  },
  {
    id: "3E",
    segments: [{ bays: [155, 159], marks: ["KD3372 Env.", "KD4103 Gen."] }],
  },
  {
    id: "3F",
    segments: [{ bays: [160, 164], marks: ["KD4103 Jef.", "KD7117 Jac."] }],
  },
  {
    id: "4A",
    segments: [{ bays: [165, 167], marks: ["KD7119 Cun.", "KD7876 Cri."] }],
  },
  {
    id: "4B",
    segments: [{ bays: [168, 170], marks: ["KD7876 Dav.", "KDC296 Macq."] }],
  },
  {
    id: "4C",
    segments: [{ bays: [171, 173], marks: ["KDC296 Smi.", "KDC378 Wal."] }],
  },
  {
    id: "4D",
    segments: [{ bays: [174, 176], marks: ["KDC390 And.", "KDC452.A328 Wat."] }],
  },
  {
    id: "5A",
    segments: [{ bays: [257, 262], marks: ["KDC453 Hay.", "KDC913 Gor."] }],
  },
  {
    id: "5B",
    segments: [{ bays: [263, 266], marks: ["KDC913 Har.", "KE4270 Bea"] }],
  },
  {
    id: "5C",
    segments: [
      // Reference section
    ],
  },
  {
    id: "5D",
    segments: [{ bays: [275, 277], marks: ["KE4270 Far.", "KF209 Pro."] }],
  },
  {
    id: "5E",
    segments: [{ bays: [278, 280], marks: ["KF209 Sta.", "KF384 Ark."] }],
  },
  { id: "6A", segments: [{ bays: [281, 285], marks: ["KF384 Aue.", "KF4502 Rec."] }] },
  { id: "6B", segments: [{ bays: [286, 292], marks: ["KF4530 Lev.", "KF9662 Spe."] }] },
  {
    id: "6C",
    segments: [
      { bays: [293, 298], marks: ["KF9664 Gra.", "KJA147 Stu."] },
      { bays: [299, 301], marks: ["KJA147 Stu.", "KJA2190 Rab."] },
    ],
  },
  { id: "6D", segments: [{ bays: [302, 306], marks: ["KJA2190 Sal.", "KJC1720 Nig."] }] },
  { id: "6E", segments: [{ bays: [307, 313], marks: ["KJC1720 Per.", "KJE2096 Eus."] }] },
  { id: "6F", segments: [{ bays: [314, 318], marks: ["KJE2096 Gar.", "KJE6456.A8 Lit."] }] },
  { id: "7A", segments: [{ bays: [319, 322], marks: ["KJE6467 Bro.", "KJV388 Nib."] }] },
  { id: "7B", segments: [{ bays: [323, 327], marks: ["KJV388 Nib.", "KJV3932.5 Fra."] }] },
  {
    id: "7C",
    segments: [{ bays: [328, 332], marks: ["KJV3932.52003 Nou.", "KK985.51896.A6 Mun."] }],
  },
  { id: "7D", segments: [{ bays: [333, 337], marks: ["KK985.51896.A6 Pal.", "KK6242 Kot."] }] },
  { id: "7E", segments: [{ bays: [338, 342], marks: ["KK6313 Ble.", "KKT494.31889.A6 Esp."] }] },
  { id: "7F", segments: [{ bays: [343, 346], marks: ["KKT500 Alb.", "KMM702 She."] }] },
  { id: "8A", segments: [{ bays: [347, 349], marks: ["KMM873.5 Int.", "KNX68 Fun."] }] },
  { id: "8B", segments: [{ bays: [350, 352], marks: ["KNX68 Oda.", "KTL858 Chr."] }] },
  { id: "8C", segments: [{ bays: [353, 355], marks: ["KTL858 Con.", "KU1750 Ess."] }] },
  { id: "8D", segments: [{ bays: [356, 358], marks: ["KU1750 Faj.", "KZ213 Ver."] }] },
];
