import { wrapper } from "@/lib/redux";
import Internal from "@/components/common/Internal";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export const getStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    return {
      props: {},
      revalidate: 50,
    };
  }
);

export default function Freelance(): JSX.Element {
  return (
    <Internal>
      <div
        style={{ backgroundImage: "url(./freelance-hero.png)" }}
        className="bg-gray-800 bg-cover bg-no-repeat bg-center flex justify-center items-center h-72 md:h-[32rem] overflow-hidden text-white relative"
      >
        <div className="absolute text-center inset-y-auto inset-x-0">
          <h1 className="text-center text-4xl font-bold text-foreground mb-4">
            Let&apos;s Build Your Website!
          </h1>
          <Button className="font-bold" asChild>
            <Link href="https://forms.gle/xuwgKSHqhPWrt2Zo8" target="_blank">
              Onboarding Form
            </Link>
          </Button>
        </div>
        <Image
          className="absolute block bottom-0 left-0 w-full"
          alt="Circular Shape at the bottom of the hero section"
          src="./freelance-hero-shape.svg"
          width={100}
          height={100}
        />
      </div>

      <div className="container mt-28 md:mt-32 mb-8 md:mb-16">
        <section className="md:text-center">
          <h2 className="font-bold font-sans text-4xl mb-4">
            First, lets talk about your project!
          </h2>
          <p className="font-roboto text-left md:text-center font-light max-w-[919px] mx-auto leading-loose">
            Effective requirement gathering is the foundation of a successful
            web design project. It beings with in-depth research and client
            consultations to understand the project&apos;s goals, target
            audience, and unique objectives. This crucial process involves
            gathering information, such as content, design preferences, and
            technical specifications, while considering SEO best practices to
            ensure search engine visibility. Thoroughly documented requirements
            serve as a roadmap for the design phase, resulting in a
            user-friendly, visually appealing, and search engine optimized
            website that aligns with the clients vision and objectives. Proper
            requirement gathering ensures a seamless and efficient web design
            process, ultimately benefiting the project&apos;s online presence
            and search engine rankings.
          </p>
        </section>

        <section className="md:flex items-center justify-between gap-12 my-16 md:my-32">
          <div className="md:w-1/2">
            <h2 className="font-bold font-sans text-4xl mb-4">
              Second, the design process!
            </h2>
            <p className="font-roboto font-light leading-loose">
              The web design process is a crucial step in creating an online
              presence that resonates with users and search engines alike. By
              meticulously crafting the layout, visuals, and functionality, of a
              website, web designers ensure an exceptional user experience. This
              user-centric approach enhances user engagement, reduces bounce
              rates, and ultimately boosts search engine rankings. A
              well-designed website not only looks appealing but also loads
              quickly, is easy to navigate, and adapts seamlessly to various
              devices, enhancing accessibility. This improved user experience
              translates to increased user satisfaction and retention,
              ultimately benefiting your web project by driving organic traffic,
              improving conversion rates, and elevating your online visbility in
              search engine results pages.
            </p>
          </div>
          <Image
            alt="Image of Adobe XD to show how a design would be made for your project"
            src="/design-example.png"
            className="block w-full md:w-1/2 h-auto mt-4 md:mt-0"
            width={500}
            height={500}
          />
        </section>

        <section className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-12 my-16 md:my-32">
          <Image
            alt="Image of Projects I have worked on in the past, Opalescence and my own Popshop application."
            src="/projects.png"
            className="block w-full md:w-1/2 h-auto mt-4 md:mt-0 order-2 md:order-1"
            width={500}
            height={500}
          />
          <div className="md:w-1/2 order-1 md:order-2">
            <h2 className="font-bold font-sans text-4xl mb-4">
              Straight to implementation!
            </h2>
            <p className="font-roboto font-light leading-loose">
              Web development is the cornerstone of a successful web project,
              shaping the digital landscape to meet user needs and search engine
              expectations. Through the intricate process of coding and database
              integration, web developers bring web designs to life, creating a
              responsive, fast, and secure website. This results in an
              exceptional user experience, characterized by quick loading times
              and seamless functionality. Such a well-structured and optimized
              website not only engages visitors but also aligns with search
              engine algorithms, leading to improved search engine rankings and
              increased organic traffic.
            </p>
          </div>
        </section>
      </div>

      <section
        style={{ backgroundImage: "url(./cta-hero.png)" }}
        className="bg-gray-800 bg-cover bg-no-repeat bg-center flex justify-center items-center h-72 text-white"
      >
        <div className="text-center">
          <h1 className="text-center text-4xl font-bold text-foreground mb-2">
            Let&apos;s Build Your Website!
          </h1>
          <Button asChild className="font-bold mt-2">
            <Link href="https://forms.gle/xuwgKSHqhPWrt2Zo8" target="_blank">
              Onboarding Form
            </Link>
          </Button>
        </div>
      </section>
    </Internal>
  );
}
