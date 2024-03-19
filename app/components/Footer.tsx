import React from "react";
import { Envelope, Linkedin } from "../icons";

type FooterProps = {
  contactMeLinks: string[];
};

const Footer = ({ contactMeLinks }: FooterProps) => {
  return (
    <footer className="w-full bg-white shadow-footer mt-12 py-4 fixed bottom-0">
      <div className="flex items-center justify-center gap-1">
        <a href={contactMeLinks[0]} aria-label="Email"></a>
        <Envelope className="icons_contactme" />

        <a href={contactMeLinks[1]} aria-label="Linkedin"></a>
        <Linkedin className="icons_contactme" />
      </div>
    </footer>
  );
};

export default Footer;
