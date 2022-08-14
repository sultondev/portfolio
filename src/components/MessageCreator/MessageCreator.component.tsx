type MessageCreatorProps = {
  title: string;
  message?: string;
};
import "./MessageCreator.style.css";

export const MessageCreator = (props: MessageCreatorProps) => {
  const { title, message } = props;
  return (
    <div className="message text-white -z-1 mx-auto">
      <div className="message-wrapper container mx-auto relative">
        <span className="message-wrapper__before absolute bg-green-600 p-2 -left-14 -top-4 -rotate-45">
          Hover Me BRO
        </span>
        <h6
          className={`message-wrapper__heading xl:text-6xl md:text-4xl ex-sm:text-xl`}
        >
          {title}
        </h6>
        <span className="message-wrapper__after absolute bg-purple-600 p-2 -right-8 -bottom-4 -rotate-45">
          {message}
        </span>
      </div>
    </div>
  );
};
