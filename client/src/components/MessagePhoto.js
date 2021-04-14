function MessagePhoto(props) {
  return (
    <div className="flex-shrink-0 place-self-start mt-5">
      <img src={"http://192.168.0.10:4000/images/" + props.uid + ".jpeg"} alt=""
          className="h-12 w-12 rounded-full" />
    </div>
  )
}

export default MessagePhoto;