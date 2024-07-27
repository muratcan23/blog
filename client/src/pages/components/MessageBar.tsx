import React from "react";
import MessageBox from "./MessageBox";

interface MessageBarProps {
  show: boolean;
  onClose: () => void;
  userId: string;
}

const MessageBar: React.FC<MessageBarProps> = ({ show, onClose, userId }) => {
  if (!show) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden h-96">
      <div className="bg-blue-500 text-white p-2 flex justify-between items-center">
        <div className="flex items-center mx-auto">
          <span className="mr-2">📩</span>
          <h3>Messages</h3>
        </div>
        <button onClick={onClose}>&times;</button>
      </div>
      <div className="p-2 h-full overflow-y-auto">
        <MessageBox userId={userId} />
      </div>
    </div>
  );
};

export default MessageBar;