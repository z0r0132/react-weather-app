export default (theme) => ({
  carousel: {
    width: "85%",
    height: "100%",
    margin: "auto",
  },
  arrow: {
    cursor: "pointer",
    position: "absolute",
    top: "-75px",
    display: "flex",
    alignItems: "center",
    color: theme.palette.common.white,
    zIndex: 1,
    "&.prevArrow": {
      left: 0,
      justifyContent: "flex-start",
      display: ({ currentSlide }) => (currentSlide ? "block" : "none"),
    },
    "&.nextArrow": {
      right: 0,
      justifyContent: "flex-end",
      display: ({ slidesToShow, currentSlide, slideCount }) =>
        currentSlide + slidesToShow === slideCount ? "none" : "block",
    },
  },
  slider: {
    "& .slick-list": { width: "90vw" },
    "& .slick-slide": { padding: theme.spacing(1) },
  },
});
