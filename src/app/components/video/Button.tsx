import React from 'react';

type ButtonProps = {
  text: string;
  className?: string;
  onClick?: () => void;
};

export class Button extends React.Component<ButtonProps> {
  private buttonRef: React.RefObject<HTMLButtonElement>;

  constructor(props: ButtonProps) {
    super(props);
    this.buttonRef = React.createRef();
  }

  public setFocus = (): void => {
    this.buttonRef.current?.focus();
  };

  render() {
    return (
      <button
        ref={this.buttonRef}
        className={this.props.className}
        onClick={this.props.onClick}
      >
        {this.props.text}
      </button>
    );
  }
}
