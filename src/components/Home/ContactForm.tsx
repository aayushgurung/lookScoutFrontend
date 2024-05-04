import React, { useState, ChangeEvent, FormEvent } from "react";
import Container from "../Container";
import Button from "../Button";

type FormData = {
  firstName: string;
  email: string;
  phoneNumber: string;
  inquiry: string;
  message: string;
  agreePolicy: boolean;
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    email: "",
    phoneNumber: "",
    inquiry: "",
    message: "",
    agreePolicy: false,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [responseMessage, setResponseMessage] = useState<any>();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log(JSON.stringify(formData));
      const response = await fetch("http://localhost:3000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const responseData = await response.json();
      setResponseMessage(responseData.message);
    } catch (error) {
      if (error instanceof Error)
        console.error("Error sending form data:", error.message);
    }
  };

  return (
    <>
      <Container style="md:h-[833px] h-[950px] h-full bg-[#151B28]">
        <form
          onSubmit={handleSubmit}
          className="mt-20 text-white flex flex-col items-center w-full gap-[48px]"
        >
          <div className="bg-red-500 text-white rounded-md p-[20px]">
            {responseMessage}
          </div>
          <div className=" w-full h-[104px]">
            <div className="flex flex-col xl:gap-[16px] items-center">
              <div className="font-bold xl:text-[32px] xl:leading-[40px] text-[#F9F9F9]">
                Get in Touch With Us
              </div>
              <div className="xl:w-[800px] text-center text-custom-grey">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,{" "}
              </div>
            </div>
          </div>
          <div className="w-full h-[553px] rounded-lg border bg-[#1C2534] border-[#252D3C] p-[32px]">
            <div className="flex flex-col md:grid md:grid-cols-2 md:gap-[24px] gap-[24px]">
              <div>
                <div>First Name</div>
                <div>
                  <input
                    type="text"
                    placeholder="Input"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="py-[12px] px-[16px] w-full rounded-md bg-[#2C3444]   border border-[#2C3444]"
                  />
                </div>
              </div>
              <div>
                <div>Email</div>
                <div>
                  <input
                    type="text"
                    placeholder="example@example.com"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="py-[12px] px-[16px] w-full rounded-md bg-[#2C3444]   border border-[#2C3444]"
                  />
                </div>
              </div>
              <div>
                <div>Phone Number</div>
                <div>
                  <input
                    type="text"
                    placeholder="+000"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="py-[12px] px-[16px] w-full rounded-md bg-[#2C3444]   border border-[#2C3444]"
                  />
                </div>
              </div>
              <div>
                <div>Get In Touch with us</div>
                <div>
                  <input
                    type="text"
                    placeholder="Dropdown"
                    name="inquiry"
                    value={formData.inquiry}
                    onChange={handleChange}
                    className="py-[12px] px-[16px] w-full rounded-md bg-[#2C3444]   border border-[#2C3444]"
                  />
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>Message</div>
                <div>
                  <textarea
                    placeholder="Hi! We are LookScout..."
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="py-[12px] px-[16px] w-full h-[150px] rounded-md bg-[#2C3444]   border border-[#2C3444]"
                  />
                </div>
              </div>
            </div>
            <div>
              <div>
                <input
                  type="checkbox"
                  placeholder="Input"
                  name="agreePolicy"
                  checked={formData.agreePolicy}
                  onChange={handleChange}
                  className=""
                />{" "}
                I agree with LookOut Privacy Policy
              </div>
            </div>
            <div>
              <Button variant="blue">Submit</Button>
            </div>
          </div>
        </form>
      </Container>
    </>
  );
};

export default ContactForm;
