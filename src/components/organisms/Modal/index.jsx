import React, { useContext } from "react";
import "./style.scss";

import Button from "../../atoms/Button";
import Icon from "../../atoms/Icon";
import { ModalContext, getInitialState } from "../../../store/Modal";

export default () => {
  const { state, setState } = useContext(ModalContext);
  const { visible, title, message, confirm, content, cancel } = state;
  const isConfirm = confirm && confirm.action;

  const close = () => {
    const defaultState = getInitialState();
    setState({ visible: false });
    setTimeout(() => {
      setState(defaultState);
    }, 600);
  };

  const onConfirm = () => {
    const { action } = confirm || {};
    action && action();
    close();
  };

  const onCancel = () => {
    const { action } = cancel || {};
    action && action();
    close();
  };

  return (
    <article id="app-modal" className={`${visible ? "visible" : ""}`}>
      <div className="backdrop" onClick={onCancel} />
      <section className="modal">
        <header>
          <h1>{title}</h1>
          <Button className="btn round btn-close" type="button" onClick={close}>
            <Icon name="close" width={26} height={26} />
          </Button>
        </header>
        {content && <main>{content}</main>}
        {!content && (
          <>
            <main>
              <p>{message}</p>
            </main>
            <footer>
              {isConfirm && (
                <Button className="btn" type="button" onClick={onConfirm}>
                  {confirm.label}
                </Button>
              )}
              <Button className="btn primary" type="button" onClick={onCancel}>
                {(isConfirm && cancel.label) || "Ok"}
              </Button>
            </footer>
          </>
        )}
      </section>
    </article>
  );
};
