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
        segments: [
            { bays: [61, 65], marks: ["HV9650.B72 Eme.", "JK516 Tha."] },
        ],
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
        segments: [
            { bays: [101, 105], marks: ["K2400.A35 Smi.", "K3585.5.A6 Cri."] },
        ],
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
];
