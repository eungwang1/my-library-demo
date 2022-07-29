import React, { useEffect, useState } from "react";
import styled from "styled-components";
import OutsideClickHandler from "react-outside-click-handler";
import ToastErrorIcon from "../assets/toast/ToastErrorIcon";
import ToastSuccessIcon from "../assets/toast/ToastSuccessIcon";
import CloseIcon from "../assets/toast/CloseIcon";
import palette from "../styles/palette";
import { responsive } from "../styles/responsive";
import useToast from "../hooks/useToast";
import ToastWarnIcon from "../assets/toast/ToastWarnIcon";
import ToastInfoIcon from "../assets/toast/ToastInfoIcon";
type toastIconType = "success" | "error" | "warn" | "info";
const ToastBlock = styled.div<{ isVisible: boolean; type: toastIconType }>`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  @keyframes slideIn {
    from {
      top: 0;
      opacity: 0;
    }
    to {
      top: 84px;
      opacity: 1;
    }
  }
  @keyframes slideOut {
    from {
      top: 84px;
      opacity: 1;
    }
    to {
      top: 0;
      opacity: 0;
    }
  }

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(176, 176, 176, 0.2);
  z-index: 999;
  cursor: pointer;

  animation: ${(props) => (props.isVisible ? "fadeIn .5s forwards" : "fadeOut .5s forwards")};

  .toast-inner-box {
    width: 335px;
    height: inherit;
    position: absolute;
    transform: translateX(-50%);
    background-color: ${palette.white};
    padding: 13px 10px 13px 20px;
    border-radius: 4px;
    box-shadow: 0 4px 8px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: space-between;

    animation: ${(props) => (props.isVisible ? "slideIn .5s forwards" : "slideOut .5s forwards")};

    &:before {
      display: block;
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 100%;
      /* background-color: ${(props) =>
        props.type === "success" ? palette.neon_green_500 : palette.red_300}; */
      background-color: ${(props) =>
        props.type === "success"
          ? palette.neon_green_500
          : props.type === "error"
          ? palette.red_300
          : props.type === "warn"
          ? palette.yellow_700
          : props.type === "info" && palette.blue_500};
    }

    .toast-inner-content-box {
      display: flex;
      align-items: center;

      .toast-inner-content-title {
        font-size: 14px;
        line-height: 21px;
        font-weight: bold;
        margin-left: 12px;
      }
    }
  }

  @media (max-width: ${responsive.medium}) {
    .toast-inner-box {
      width: 85%;
    }
  }
`;

type ToastProps = {
  type: toastIconType;
  message?: string;
};

const Toast = ({ ...props }: ToastProps) => {
  const { type, message = "" } = props;
  const { closeToast } = useToast();
  const [isVisible, setIsVisible] = useState(true);
  const ToastIcon = (type: toastIconType) => {
    switch (type) {
      case "success":
        return <ToastSuccessIcon />;
      case "error":
        return <ToastErrorIcon />;
      case "warn":
        return <ToastWarnIcon />;
      case "info":
        return <ToastInfoIcon />;
    }
  };
  useEffect(() => {
    document.body.style.cssText = `
      overflow:hidden`;
    return () => {
      document.body.style.cssText = "";
    };
  }, []);

  return (
    <ToastBlock type={type} isVisible={isVisible}>
      <OutsideClickHandler
        onOutsideClick={() => {
          setIsVisible(false);
          closeToast();
        }}
      >
        <div className="toast-inner-box">
          <div className="toast-inner-content-box">
            <>
              {ToastIcon(type)}
              <p className="toast-inner-content-title">{message}</p>
            </>
          </div>
          <div
            onClick={() => {
              setIsVisible(false);
              closeToast();
            }}
          >
            <CloseIcon />
          </div>
        </div>
      </OutsideClickHandler>
    </ToastBlock>
  );
};

export default Toast;
