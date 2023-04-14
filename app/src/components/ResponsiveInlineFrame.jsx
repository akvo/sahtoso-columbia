const ResponsiveInlineFrame = ({ src }) => (
  <iframe
    src={src}
    frameBorder="0"
    style={{
      overflow: "hidden",
      width: "100%",
      height: window.innerHeight,
    }}
    width="100%"
  />
);

export default ResponsiveInlineFrame;
