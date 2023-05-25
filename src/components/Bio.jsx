import React from "react";
import { projects } from "../assets/data";
import test from "../assets/test1.jpg";
import { FiUser } from "react-icons/fi";
import "../styles/projects.css";

export default function Bio() {
  return (
    <section id="sudime" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            <FiUser className="mx-auto inline-block w-10 h-10 mb-4 mt-2 mr-4" />
            Su di me
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Sono nato a Putignano, in provincia di Bari, il 22 Agosto 2000. Dopo aver conseguito il diploma, nel luglio 2019,
            presso il Liceo Scientifico "Majorana-Laterza", nel paese natale, ho intrapreso la carriera universitaria
            presso il Politecnico di Bari. Ho iniziato gli studi in Ingegneria Informatica e dell'Automazione,
            conseguendo la laurea nel luglio 2022, con votazione 108/110. <br/>
            Attualmente sto frequentando il corso di laurea magistrale in Cybersecurity and Cloud, nella suddetta università.
          </p>
        </div>
      </div>
    </section>
  );
}
