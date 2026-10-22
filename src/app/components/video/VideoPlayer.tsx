import React from 'react';

type VideoPlayerProps = {
  src: string;
  type: string;
  width: string;
};

export class VideoPlayer extends React.Component<VideoPlayerProps> {
  private videoElementRef: React.RefObject<HTMLVideoElement>;

  constructor(props: VideoPlayerProps) {
    super(props);
    this.videoElementRef = React.createRef();
  }

  public playVideo = (): void => {
    this.videoElementRef.current?.play();
  };

  public pauseVideo = (): void => {
    this.videoElementRef.current?.pause();
  };

  render() {
    return (
      <video width={this.props.width} ref={this.videoElementRef}>
        <source src={this.props.src} type={this.props.type} />
      </video>
    );
  }
}
