"use client";

import { LeftArrow } from "@/components/icons/LeftArrow";
import LogoSecondary from "@/components/icons/LogoSecondary";
import Refresh from "@/components/icons/Refresh";
import Logo from "@/components/Logo";
import chatbotMapping from "@/utils/chatbotMappings";
import { manropeFont } from "@/utils/fonts";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { submitForm } from "@/actions/formActions";

type MessageStateProps = {
  message: string;
  sender: "bot" | "user";
  purpose: "name" | "phone" | "email" | "flat" | "thanks";
};

type FormProps = {
  name: string;
  phone: string;
  email: string;
  flat: "2 BHK" | "3 BHK" | "4 BHK";
};

const Chatbot = () => {
  const initialMessage: MessageStateProps = {
    message: `Hi! Welcome to North Wind Estates. Let's help you find
                  your dream home at Northwind Sanctuary. May I have your name,
                  please?`,
    sender: "bot",
    purpose: "name",
  };

  const [formData, setFormData] = useState<FormProps>({
    name: "",
    phone: "",
    email: "",
    flat: "2 BHK",
  });

  const [messages, setMessages] = useState<MessageStateProps[]>([
    initialMessage,
  ]);

  const addMessage = (messageBody: MessageStateProps) => {
    setMessages((prevData) => [
      ...prevData,
      {
        message: messageBody.message,
        sender: messageBody.sender,
        purpose: messageBody.purpose,
      },
    ]);
  };

  const [userMessage, setUserMessage] = useState<string>("");

  const [context, setContext] = useState<MessageStateProps["purpose"]>("name");

  let placeholder: string;

  if (context === "name") placeholder = "Type your name";
  else if (context === "phone") placeholder = "Type your contact number";
  else placeholder = "Type your email";


  const handleFormValidation = () => {
    
      if (
        formData.name.length === 0 ||
        formData.email.length === 0 ||
        formData.phone.length === 0 ||
        formData.flat.length === 0
      ) {
        
        return false;
      }
  
      if (!formData.email.includes("@")) {
        
        return false;
      }
  
      if (!Number.isInteger(Number.parseInt(formData.phone))) {
        
        return false;
      }
  
      return true;
    };
  
    const handleFormSubmission = async () => {
  
      const isFormValidated = handleFormValidation();
      if (!isFormValidated) {
        alert("Invalid values submitted in the form!");
        return;
      }
      const responseFromAction = await submitForm({
        name: formData.name,
        email: formData.email,
        mobile: formData.phone,
        message: formData.flat
      });
  
      if (responseFromAction) {
        alert("Form submitted successfully!");
      }
    };

  useEffect(() => {
    
    const handleBotFunctionality = () => {
      switch (messages.length) {
        case 2:
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              message: chatbotMapping(
                messages[messages.length - 1].message,
                "phone"
              ),
              sender: "bot",
              purpose: context,
            },
          ]);
          setContext("phone");
          break;
        case 4:
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              message: chatbotMapping("", "email"),
              sender: "bot",
              purpose: context,
            },
          ]);
          setContext("email");
          break;
        case 6:
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              message: chatbotMapping("", "flat"),
              sender: "bot",
              purpose: context,
            },
          ]);
          setContext("flat");
          break;
        case 8:
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              message: chatbotMapping("", "thanks"),
              sender: "bot",
              purpose: context,
            },
          ]);
          setContext("thanks");
          setFormData(() => {
            
            const updatedFormData: FormProps = {
              name: messages[1].message,
              phone: messages[3].message,
              email: messages[5].message,
              flat: messages[7].message as "2 BHK" | "3 BHK" | "4 BHK"
            }
            return updatedFormData;
          })
          
          break;
        default:
          break;
      }
    };

    handleBotFunctionality();
  }, [messages.length]);


  useEffect(() => {
    handleFormSubmission();
  }, [formData])

  const [display, setDisplay] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-3 fixed custom400:right-10 sm:right-10 bottom-10 z-[1000000]">
      <AnimatePresence>
        {display && (
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 20,
            }}
            transition={{
              duration: 0.5,
              type: "spring",
            }}
            className="rounded-[15px] w-[360px] max-custom400:w-[100%] h-[444px] flex flex-col overflow-hidden bg-primary  pb-[10px]"
          >
            {/* Header */}
            <div className="bg-secondary flex justify-between items-center px-4 py-3">
              <div className="flex items-center gap-3">
                <Logo width={40} height={40} />
                <div
                  className={`${manropeFont.className} text-primary text-2xl`}
                >
                  SANCTUARY
                </div>
              </div>

              <div
                onClick={() => {
                  setMessages([initialMessage]);
                  setContext("name");
                }}
                className="cursor-pointer"
              >
                <Refresh />
              </div>
            </div>

            {/* Messages */}
            <div
              className={`overflow-x-hidden overflow-y-scroll flex flex-col gap-3 px-3 py-2 ${manropeFont.className}`}
            >
              {/* Conversation */}
              {messages.map((messageBody, index) => {
                if (messageBody.sender === "user")
                  return (
                    <div
                      className={`bg-secondary text-primary rounded-[8px] px-3 py-2 self-end`}
                      key={index}
                    >
                      {messageBody.message}
                    </div>
                  );
                else
                  return (
                    <div key={index} className="flex gap-2 items-end">
                      <LogoSecondary />
                      <div className="w-[90%] bg-chatbotMessage text-primary rounded-[8px] p-[10px_10px]">
                        {messageBody.message}
                      </div>
                    </div>
                  );
              })}
              {context === "flat" ? (
                <div key={"flat"} className="f-c-row gap-2">
                  <span
                    onClick={() => {
                      setMessages((prevData) => [
                        ...prevData,
                        { message: "2 BHK", sender: "user", purpose: "flat" },
                      ]);
                    }}
                    className="rounded-[99px] px-3 py-2 border border-secondary cursor-pointer"
                  >
                    2 BHK
                  </span>
                  <span
                    onClick={() => {
                      setMessages((prevData) => [
                        ...prevData,
                        { message: "3 BHK", sender: "user", purpose: "flat" },
                      ]);
                    }}
                    className="rounded-[99px] px-3 py-2 border border-secondary cursor-pointer"
                  >
                    3 BHK
                  </span>
                  <span
                    onClick={() => {
                      setMessages((prevData) => [
                        ...prevData,
                        { message: "4 BHK", sender: "user", purpose: "flat" },
                      ]);
                    }}
                    className="rounded-[99px] px-3 py-2 border border-secondary cursor-pointer"
                  >
                    4 BHK
                  </span>
                </div>
              ) : null}
            </div>

            {/* Input */}
            {(context === "name" || context === "phone" || context === "email") && (
              <div className="flex justify-center gap-2 mt-auto">
                <input
                  type="text"
                  value={userMessage}
                  onChange={(e) => {
                    setUserMessage(e.target.value);
                  }}
                  className={`rounded-3xl border border-secondary px-3 py-2 w-[280px] ${manropeFont.className}`}
                  placeholder={placeholder}
                />
                <div
                  onClick={() => {
                    addMessage({
                      message: userMessage,
                      sender: "user",
                      purpose: context,
                    });
                    setUserMessage("");
                  }}
                  className="rounded-full px-4 py-3 bg-secondary text-primary rotate-180 cursor-pointer"
                >
                  <LeftArrow />
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      <div
        onClick={() => setDisplay(!display)}
        className="bg-secondary rounded-full f-c-row p-3 text-primary max-w-[50px] self-end cursor-pointer"
      >
        <LeftArrow
          className={`${
            display ? "rotate-90" : "-rotate-90"
          } transition-transform duration-300`}
        />
      </div>
    </div>
  );
};

export default Chatbot;
