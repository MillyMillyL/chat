function ChatChat() {
  return (
    <div className="col-span-2 border flex flex-col">
      <div className="min-h-[10rem] ">chat window</div>
      <textarea
        rows="5"
        className="w-[95%] border mx-auto "
        placeholder="enter message"
      >
        text
      </textarea>
      <button>Send</button>
    </div>
  );
}

export default ChatChat;
