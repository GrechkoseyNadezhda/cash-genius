import { InfinitySpin } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "100",
        left: "0",
        zIndex: "200",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        // background: "rgba(0, 0, 0, 0.2)",
        display: "flex",
        alignItems: "flexStart",
        justifyContent: "center",
      }}
    >
      <InfinitySpin width="200" color="#004835" />
    </div>
  );
};
