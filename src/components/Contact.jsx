import React from "react";
import { projects } from "../assets/data";
import test from "../assets/test1.jpg";
import { FiCornerUpRight } from "react-icons/fi";
import "../styles/projects.css";

export default function Contact() {
  return (
    <section id="contact" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            <FiCornerUpRight className="mx-auto inline-block w-10 h-10 mb-4 mt-2 mr-4" />
            Contattami
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed">
            Puoi contattarmi su <a href="https://www.linkedin.com/in/giovannisilvestri/" className="underline-offset-2 hover:text-white">
                <h6 className="font-bold inline-block">LinkedIn</h6>
                </a> o puoi scrivermi alla mia <a href="mailto:vannislash@gmail.com" className="font-bold hover:text-white">email</a>
          </p>
        </div>
      </div>
    </section>
  );
}
