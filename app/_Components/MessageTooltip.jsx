"use client";

export default function MessageTooltip({ message }) {
  const truncated =
    message.length > 200 ? `${message.substring(0, 300)}...` : message;

  const copyMessage = () => {
    navigator.clipboard.writeText(message);
  };

  return (
    <p
      className="text-base text-start leading-relaxed cursor-pointer select-none"
      title={message}                     // full message on hover
      onDoubleClick={copyMessage}         // double click to copy
    >
      {truncated}
    </p>
  );
}
