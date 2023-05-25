import React from "react";
import { projects } from "../assets/data";
import {FiCode} from 'react-icons/fi';
import "../styles/projects.css";

export default function Projects() {
  return (
    <section id="progetti" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
          <FiCode className="mx-auto inline-block w-10 h-10 mb-4 mt-2 mr-4"/>
            Progetti a cui ho lavorato
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            I principali progetti di cui mi sono occupato durante la mia
            carriera universitaria. <br/>
            Visita il mio profilo LinkedIn per maggiori dettagli!
          </p>
        </div>
        <div className="flex flex-wrap -m-4 rounded-md">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
