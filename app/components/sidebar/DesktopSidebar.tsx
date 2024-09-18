'use client';

import { useState, useEffect } from "react";
import { User } from "@prisma/client";
import useRoutes from "@/app/hooks/useRoutes";
import Avatar from "../Avatar";
import DesktopItem from "./DesktopItem";
import SettingsModal from "./SettingsModal";

interface DesktopSidebarProps {
  currentUser: User
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({
  currentUser
}) => {
  const routes = useRoutes();
  const [isOpen, setIsOpen] = useState(false);

  // Chatbot integration
  useEffect(() => {
    const script1 = document.createElement("script");
    const script2 = document.createElement("script");

    script1.innerHTML = `
      window.embeddedChatbotConfig = {
        chatbotId: "vhiy6iMs6JquWrOtHPRwS",
        domain: "www.chatbase.co"
      };
    `;

    script2.src = "https://www.chatbase.co/embed.min.js";
    script2.setAttribute("chatbotId", "vhiy6iMs6JquWrOtHPRwS");
    script2.setAttribute("domain", "www.chatbase.co");
    script2.defer = true;

    document.body.appendChild(script1);
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <>
      <SettingsModal
        currentUser={currentUser}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
      <div
        className="
          hidden
          lg:fixed
          lg:inset-y-0
          lg:left-0
          lg:z-40
          lg:w-20
          xl:px-6
          lg:overflow-y-auto
          lg:bg-white
          lg:border-r-[1px]
          lg:pb-4
          lg:flex
          lg:flex-col
          justify-between
          relative
        "
      >
        <nav
          className="
            mt-4
            flex
            flex-col
            justify-between
          "
        >
          <ul
            role="list"
            className="
              flex
              flex-col
              items-center
              space-y-1
            "
          >
            {routes.map((item) => (
              <DesktopItem
                key={item.label}
                href={item.href}
                label={item.label}
                icon={item.icon}
                active={item.active}
                onClick={item.onClick}
              />
            ))}
          </ul>
        </nav>
        <nav
          className="
            mt-4
            flex
            flex-col
            justify-between
            items-center
          "
        >
          <div
            onClick={() => setIsOpen(true)}
            className="
              cursor-pointer
              hover:opacity-75
              transition
            "
          >
            <Avatar user={currentUser} />
          </div>
        </nav>

        {/* Chatbot positioning */}
        <div
          id="chatbot-container"
          className="
            absolute
            bottom-0
            left-0
            p-2
          "
        >
          {/* The chatbot will be dynamically added here by the script */}
        </div>
      </div>
    </>
  );
}

export default DesktopSidebar;
