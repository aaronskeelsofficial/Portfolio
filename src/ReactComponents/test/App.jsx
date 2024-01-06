import ScrollingBackdrop from '/src/ReactComponents/common/scrollingbackdrop'

const ScrollingBackdropProps_Stars = {
  id: "",
  src: "/src/img/bg-stars.png",
  naturalwidth: "1920",
  naturalheight: "1080",
  transition: "left linear 5s",
  timetoscroll: "5000",
  //
  enablepc: "true",
  zindexpc: "-2",
  //
  enablephone: "true",
  zindexphone: "-2",
}

export default function App() {
  return (
    <>
      <ScrollingBackdrop {...ScrollingBackdropProps_Stars} />
    </>
  )
}
