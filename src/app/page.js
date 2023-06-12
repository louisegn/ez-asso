import Image from "next/image";
import TabSection from "@/components/TabSection";

// import { useState } from "react";

export default function Home() {
  // const [tab, setTab] = useState("presentation");

  return (
    <main className="h-screen">
      <div className="h-32 flex items-center bg-mylightgreen">
        <h2 className="text-6xl ml-10">Tai Chi - Qi Gong</h2>
      </div>
      <div className="flex p-10">
        <div className="w-3/6 flex justify-center items-center">
          <h1 className="text-4xl">
            Cours de <br />
            Tai Chi et Qi Gong <br />à Arcueil
          </h1>
        </div>
        <div>
          <iframe
            width="630"
            height="355"
            src="https://www.youtube.com/embed/K2Ytfe4FAw8"
            title="YouTube video player"
            // frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          {/* <Image
            src="/zen-sand.jpg"
            alt="Zen sand"
            // className="dark:invert"
            width={500}
            height={24}
            // priority
          /> */}
          {/* <video
            src="https://www.youtube.com/watch?v=K2Ytfe4FAw8"
            alt="Zen sand"
            // className="dark:invert"
            width={600}
            height={24}
            // priority
          /> */}
        </div>
      </div>
      <div className="bg-mygreen flex flex-col items-center p-10">
        <h3 className="text-mywhite text-4xl">Presentation</h3>
        {/* <div className="flex">
          <TabSection title="Présentation" opened={true} />
          <TabSection title="Contact" opened={false} />
        </div>
        <div></div> */}
        {/* <Image
          src="/presentation.png"
          alt="presentation"
          // className="dark:invert"
          width={500}
          height={24}
        /> */}
        <div className="w-80">
          <p>
            Assistez aux cours de Tai-Chi les jeudis soirs auprès du professeur
            ZHANG Zhen Qi au sein de la salle associative de la Résidence Emile
            Zola à Arcueil, à 2 minutes de la gare Laplace &#40;RER B&#41;. Le
            cours a lieu en petit comité &#40;moins d&apos;une dizaine de
            personne&#41;, facilitant l&apos;initiative et
            l&apos;approfondissement de cette gestuelle méditative
            d&apos;inspiration martiale, avec un maître très pédagogue prêt à
            s&apos;interrompre et à être sollicité en toute bienveillance.
          </p>
        </div>
      </div>
      <div></div>
    </main>
  );
}

// border-solid border-2 border-blue-600
