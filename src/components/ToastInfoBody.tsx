import Image from "next/image";

type Info = {
  message: string;
  type?: string;
  closeToast?: () => void;
  toastProps?: string;
};

const ToastInfoBody = ({ message, type = "info", closeToast }: Info) => {
  return (
    <div
      className={`toast_pop ${type === "info" ? "info" : "error"}`}
      style={{ width: "100%", height: "100%" }}
    >
      <Image
        width="15px"
        height="15px"
        src={`/img/icon-warning-${type === "info" ? "blue" : "red"}.svg`}
        alt="info"
      />
      <p style={{ whiteSpace: "pre-line" }}>{message}</p>
      <button className="close_btn" onClick={closeToast}>
        <Image
          width="15px"
          height="15px"
          src="/img/icon-close-light.svg"
          alt="close"
        />
      </button>
    </div>
  );
};

export default ToastInfoBody;
