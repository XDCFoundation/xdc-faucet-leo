import React, { useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { httpConstants } from "../../constants";
import { REDIRECT_URL } from "../../constants";
import { httpService } from "../../utility/httpService";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Tooltip } from "@material-ui/core";
import CopyImage from "../../assets/images/Copy.png";
import SuccessImage from "../../assets/images/success.png";
import CrossImage from "../../assets/images/Cross_Mark.png";
import XDCImage from "../../assets/images/XDC-Icon.png";

function XDCTestFaucet() {
  const [receiver, setReceiver] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [captchaErr, setCaptchaErr] = useState(false);
  const [inputErr, setInputErr] = useState(false);
  const [message, setMessage] = useState({
    status: false,
    message: "",
    Hash: "",
  });
  const [isCopied, setIsCopied] = useState(false);
  const [appropriateError, setAppropriateError] = useState("");
  const validateCaptcha = (token, key) => {
    setIsVerified(true);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (receiver.length < 43) {
      setInputErr(true);
      return;
    }
    if (!isVerified) {
      setCaptchaErr(true);
      return;
    } else {
      setIsLoading(true);
      const data = {
        receiver,
      };
      const response = await httpService(
        httpConstants.METHOD_TYPE.POST,
        { "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON },
        data,
        process.env.REACT_APP_NODE_URL
      );
      if (response.success) {
        setMessage({
          status: true,
          message: "Sent",
          Hash: response?.success?.txHash,
        });
      } else {
        setMessage({ status: true, message: "Failed", Hash: "" });
        setAppropriateError(response?.error?.message);
      }
    }
  };
  const inputHandler = (e) => {
    setReceiver(e.target.value);
    setInputErr(false);
  };

  return (
    <>
      <div className="w-full bg-primary-50 pt-18.25 px-3">
        <div className="flex flex-col h-90v justify-between">
          <div>
            <img className="h-20 w-20 mx-auto" src={XDCImage} alt="" />
            <div className="min-h-115 max-w-123.75 flex flex-col items-center bg-white mx-auto rounded-lg mt-7 px-6.75 pt-6.75 mb-28 pb-12">
              <div className="sm:text-ft10 text-ft9 font-InterSemiBold">
                <span className="text-blue-200">XDC</span>Drop
              </div>
              <div className="text-grey-100 sm:text-ft8 text-ft7 font-InterMedium mt-1.75">
                XDC Testnet Faucet
              </div>
              <div className="text-black-100 sm:text-ft7 text-ft5 font-InterSemiBold mt-11.25">
                Apothem Network
              </div>
              <form className="w-full mt-3.75" onSubmit={handleOnSubmit}>
                <input
                  type="text"
                  value={receiver}
                  onChange={(e) => inputHandler(e)}
                  placeholder="XDC Address"
                  className="border border-grey-150 w-full rounded-lg sm:text-ft6 text-ft5 font-InterRegular p-3.25 focus:border focus:border-grey-150 focus:outline-none placeholder-grey-250 placeholder-align-custom"
                />
                {inputErr ? (
                  <div className="sm:text-ft3 text-ft1 font-InterRegular text-red-100 text-center">
                    Please enter a valid address
                  </div>
                ) : (
                  ""
                )}
                {!isLoading ? (
                  <>
                    <div className="w-full flex justify-center flex-col items-center">
                      <div className="sm:mt-8 mt-5 sm:mb-5 mb-3 transform sm:scale-144">
                        <HCaptcha
                          sitekey="6ec32851-ea77-4623-8b40-5f6c76353f0c"
                          onVerify={(token, key) => validateCaptcha(token, key)}
                        />
                      </div>
                      {captchaErr && !isVerified ? (
                        <div className="sm:text-ft3 text-ft1 font-InterRegular text-red-100">
                          Before you proceed, please complete the captcha
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <button
                      type="submit"
                      className="w-full text-center mt-5 text-white py-3.5 bg-blue-50 text-ft6 font-InterSemiBold rounded-lg cursor-pointer"
                    >
                      Get 1000 XDC
                    </button>
                  </>
                ) : (
                  <>
                    {!message.status ? (
                      <div className="text-center font-InterRegular text-ft6 text-black-100 mt-10.25">
                        Sending XDC…
                      </div>
                    ) : (
                      <>
                        <div className="flex gap-1 justify-center items-center w-full mt-10.25">
                          {message.message === "Sent" ? (
                            <img
                              className="h-4.75 w-4.75"
                              src={SuccessImage}
                              alt=""
                            />
                          ) : (
                            <img
                              className="h-4.75 w-4.75"
                              src={CrossImage}
                              alt=""
                            />
                          )}
                          <div className="text-ft6 font-InterRegular block text-black-100">
                            {message.message}
                          </div>
                        </div>
                        {appropriateError?.length > 2 ? (
                          <div className="sm:text-ft3 text-ft1 font-InterRegular text-red-100 text-center mt-1">
                            {appropriateError}
                          </div>
                        ) : (
                          ""
                        )}
                      </>
                    )}
                    <div className="mt-11.25">
                      <div className="h-2.25 w-full -mb-2.25 rounded-sm bg-grey-200"></div>
                      <div
                        className={`h-2.25 rounded-sm bg-blue-100 ${
                          !message.status ? "animate-progress" : "w-full"
                        }`}
                      ></div>
                      <div className="flex -mt-2.25 justify-evenly">
                        <span className="h-2.25 w-2.75 bg-white"></span>
                        <span className="h-2.25 w-2.75 bg-white"></span>
                        <span className="h-2.25 w-2.75 bg-white"></span>
                        <span className="h-2.25 w-2.75 bg-white"></span>
                        <span className="h-2.25 w-2.75 bg-white"></span>
                      </div>
                    </div>
                    {message.message === "Sent" ? (
                      <>
                        <div className="mt-10 text-ft7 flex items-center justify-center">
                          <div className="font-InterRegular mr-1">TxHash: </div>
                          <div className="truncate font-InterRegular text-blue-50">
                            {message?.Hash}
                          </div>
                          <CopyToClipboard text={message?.Hash}>
                            <Tooltip
                              title={isCopied ? "Copied" : "Copy"}
                              placement="top"
                              onClick={() => setIsCopied(true)}
                            >
                              <img
                                className="cursor-pointer"
                                src={CopyImage}
                                alt=""
                              />
                            </Tooltip>
                          </CopyToClipboard>
                        </div>
                        <a
                          href={
                            REDIRECT_URL.OBSERVER_TRANSACTION_HASH_URL +
                            message?.Hash
                          }
                          className="w-full rounded-lg h-12 flex justify-center items-center mt-7.75 border text-blue-50 sm:text-ft6 text-ft4 font-InterSemiBold border-blue-50 cursor-pointer"
                        >
                          View Transaction on Observatory
                        </a>
                      </>
                    ) : (
                      ""
                    )}
                  </>
                )}
              </form>
            </div>
          </div>
          <div className="flex justify-center w-full mb-10">
            <span className="text-center text-ft4 text-grey-50 font-InterMedium">
              Powered by XDC
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default XDCTestFaucet;
