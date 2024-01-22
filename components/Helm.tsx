import React, { FunctionComponent } from 'react';
import HelmCard from "@/components/cards/HelmCard";
import AdityaKumarSingh from "@/public/Helm/Aditya_Kumar_Singh.jpeg";
import AdityaSinghSurana from "@/public/Helm/Aditya_surana.jpeg"
import TanishaSingh from '@/public/Helm/Tanisha_singh.jpeg';

const helmData = [
    {
        name:"Aditya Singh Surana",
        position:"Joint General Secretary",
        image:AdityaSinghSurana,
    },
    {
        name:"Aditya Kumar Singh",
        position:"General Secretary",
        image:AdityaKumarSingh,
    },
    {
        name:"Tanisha Singh",
        position:"Joint General Secretary",
        image:TanishaSingh,
    }
]
interface OwnProps {}

type Props = OwnProps;

const Helm: FunctionComponent<Props> = (props) => {

  return (
      <section className="flex justify-center px-4">
          <div className="container px-6 py-6">
              <header className="text-center m-4 mb-8">
                  <h2 className="font-semibold text-6xl">Helm</h2>
              </header>
              <div className={'container flex justify-center items-center'}>
                  {helmData.map((item, index) => {
                      return (
                          <HelmCard name={item.name} position={item.position} image={item.image} key={index}/>
                      )
                  })}
              </div>
          </div>
      </section>
  );
};

export default Helm;

