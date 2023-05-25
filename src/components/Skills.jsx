import React from "react";
import { skills } from "../assets/data";
import {FiAward, FiCheck} from "react-icons/fi";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
          <FiAward className="mx-auto inline-block w-10 h-10 mb-4 mt-2 mr-4"/>
            Skills &amp; Knowledges
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Le principali Skills e Conoscenze apprese durante i miei studi.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center hover:bg-violet-600">
              <FiCheck className="mr-2"/>
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
