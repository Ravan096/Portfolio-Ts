import UseMousePos from "./UseMousePos";

const CustomCursor = () => {
    const { x, y } = UseMousePos();
    const style: React.CSSProperties = {
      position: "fixed",
      pointerEvents: "none",
      width: "20px",
      height: "20px",
      background: "#C5EFEC",
      borderRadius: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 9999,
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
    };
    return (
      
      <div
        style={{...style,
          left: `${x}px`,
          top: `${y}px`,
        }}
      >
      </div>
    );
  };

export default CustomCursor


