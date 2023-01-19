// ==============================|| OVERRIDES - LINER PROGRESS ||============================== //

export default function LinearProgress() {
    return {
      MuiLinearProgress: {
        styleOverrides: {
          root: {
            height: 10,
            borderRadius: 2,
          },
          bar: {
            borderRadius: 100,
            color: "black",
          },
        },
      },
    };
}
