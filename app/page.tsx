"use client";
import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Chip } from "@heroui/chip";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Avatar } from "@heroui/avatar";
import { Spacer } from "@heroui/spacer";
import { Divider } from "@heroui/divider";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";

import { title, subtitle } from "@/components/primitives";

export default function Home() {
  return (
    <section>
      <div className="flex flex-row justify-center items-center gap-20">
        <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
          <div className="inline-block max-w-xl text-center justify-center">
            <span className={title()}>Kévin&nbsp;</span>
            <span className={title({ color: "violet" })}>Maublanc&nbsp;</span>
            <div className={subtitle({ class: "mt-4" })}>
              Développeur français de site internet et logiciel.
            </div>
          </div>
          <div className="flex gap-3">
            <Link
              isExternal
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
              })}
              href="https://www.linkedin.com/in/kevinmaublanc/"
            >
              <FaLinkedinIn size={20} />
              LinkedIn
            </Link>
            <Link
              isExternal
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
              })}
              href="https://github.com/silverhawks1010"
            >
              <FaGithub size={20} />
              GitHub
            </Link>
            <Link
              isExternal
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
              })}
              href="https://x.com/_SilverHawks_"
            >
              <FaXTwitter size={20} />
              Twitter
            </Link>
          </div>

          <div className="mt-8">
            <Snippet hideCopyButton hideSymbol variant="bordered">
              <span>
                Me contacter :{" "}
                <Code color="primary">kevmaublanc@gmail.com</Code>
              </span>
            </Snippet>
          </div>
        </div>
        <Avatar isBordered alt="hero" className="w-1/5 h-1/3 hidden md:block" src="/moi.png" />
      </div>
      <Spacer y={10} />
      <Divider />
      <Spacer y={3} />
      <p className="text-center">
        <span className={title()}>Mes&nbsp;</span>
        <span className={title({ color: "violet" })}>Projets&nbsp;</span>
      </p>

      <Spacer y={10} />

      <Accordion selectionMode="multiple">
        <AccordionItem
          aria-label="MeetSync"
          startContent={
            <Avatar isBordered color="primary" radius="lg" src="" />
          }
          subtitle="Site internet de gestion d'événements en ligne"
          title="MeetSync"
        >
          <p className="text-md">Description :</p>
          <p className="text-sm">
            MeetSync est un site internet de gestion d&apos;événements en ligne.
            Il permet de créer des événements, d&apos;inviter simplement les
            personne avec un email et un nom et de définir le lieu et le prix de
            celui-ci.
          </p>
          <Spacer y={2} />
          <p className="text-md">Technologies utilisées :</p>
          <Chip color="primary" size="sm">
            React
          </Chip>{" "}
          <Chip color="primary" size="sm">
            Next.js
          </Chip>{" "}
          <Chip color="primary" size="sm">
            TailwindCSS
          </Chip>
          <Chip color="primary" size="sm">
            Supabase
          </Chip>
          <Spacer y={2} />
          <p className="text-md">Status : </p>
          <Chip color="warning" size="sm">
            En cours de développement
          </Chip>
          <Spacer y={2} />
          <p className="text-md">Accès : </p>
          <Link isDisabled isExternal href="https://meetsync.vercel.app">
            {" "}
            <FaExternalLinkAlt /> <Spacer x={1} /> Lien vers le site
          </Link>
          <br />
          <Link isExternal href="https://github.com/meetsync-esieeit/meetsync">
            {" "}
            <FaGithub /> <Spacer x={1} /> Lien vers le github
          </Link>
        </AccordionItem>
        <AccordionItem
          aria-label="Gam'Ex"
          startContent={
            <Avatar isBordered color="secondary" radius="lg" src="" />
          }
          subtitle="Site internet de gestion de liste de jeux vidéos."
          title="Gam'Ex"
        >
          <p className="text-md">Description :</p>
          <p className="text-sm">
            Gam&apos;Ex est un site internet regroupant tout les jeux vidéo
            regroupant de nombreuses information et permettant aux utilisateur
            des liste de jeux personalisé pour prévoir les futurs jeux auquels
            ils joueront ou crée des tiers list.
          </p>
          <Spacer y={2} />
          <p className="text-md">Technologies utilisées :</p>
          <Chip color="primary" size="sm">
            React
          </Chip>{" "}
          <Chip color="primary" size="sm">
            Next.js
          </Chip>{" "}
          <Chip color="primary" size="sm">
            TailwindCSS
          </Chip>
          <Chip color="primary" size="sm">
            Supabase
          </Chip>
          <Spacer y={2} />
          <p className="text-md">Status : </p>
          <Chip color="default" size="sm">
            Projet naissant
          </Chip>
          <Spacer y={2} />
          <p className="text-md">Accès : </p>
          <Link isDisabled isExternal href="">
            {" "}
            <FaExternalLinkAlt /> <Spacer x={1} /> Lien vers le site
          </Link>
          <br />
          <Link isDisabled isExternal href="">
            {" "}
            <FaGithub /> <Spacer x={1} /> Lien vers le github
          </Link>
        </AccordionItem>
        <AccordionItem
          aria-label="Cap'Tain"
          startContent={
            <Avatar isBordered color="primary" radius="lg" src="/captain.png" />
          }
          subtitle={
            <p className="flex">
              Petit jeu indépendant de bataille navale basé sur le thème de la
              piraterie.
            </p>
          }
          title="Cap'Tain"
        >
          <p className="text-md">Description :</p>
          <p className="text-sm">
            Cap&apos;Tain est un jeu indépendant de bataille naval jouable en
            solo contre l&apos;ia ou contre des amis dans une partie multijoueur
            local sur deux appareil distinct.
          </p>
          <Spacer y={2} />
          <p className="text-md">Technologies utilisées :</p>
          <Chip color="primary" size="sm">
            C#
          </Chip>{" "}
          <Chip color="primary" size="sm">
            Unity
          </Chip>
          <Spacer y={2} />
          <p className="text-md">Status : </p>
          <Chip color="warning" size="sm">
            En cours de développement
          </Chip>
          <Spacer y={2} />
          <p className="text-md">Accès : </p>
          <Link isDisabled isExternal href="https://meetsync.vercel.app">
            {" "}
            <FaExternalLinkAlt /> <Spacer x={1} /> Aucun Accès actuellement
            disponible
          </Link>
          <br />
        </AccordionItem>
      </Accordion>
      <Spacer y={10} />
      <Divider />
      <Spacer y={3} />
      <p className="text-center">
        <span className={title()}>Mes&nbsp;</span>
        <span className={title({ color: "violet" })}>Compétences&nbsp;</span>
      </p>
      <Spacer y={10} />
      <div className="flex justify-center pb-3">
        <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="z-10 top-1 flex-col !items-start">
              <h4 className="font-medium text-large">Développeur Web</h4>
              <p className="text-tiny uppercase font-bold">
                Next.JS, Tailwind Css, HeroUI, Django, Node JS
              </p>
            </CardHeader>
            <CardBody>
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src="/webdesign.jpg"
              />
            </CardBody>
          </Card>
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="z-10 top-1 flex-col !items-start">
              <h4 className="font-medium text-large">Développeur Logiciel</h4>
              <p className="text-tiny uppercase font-bold">
                Java, Python, C, C#
              </p>
            </CardHeader>
            <CardBody>
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src="/software.jpg"
              />
            </CardBody>
          </Card>
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="z-10 top-1 flex-col !items-start">
              <h4 className="font-medium text-large">Gestion de projet</h4>
              <p className="text-tiny uppercase font-bold">
                Jira, Trello, GitHub, Notion
              </p>
            </CardHeader>
            <CardBody>
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src="/project.jpg"
              />
            </CardBody>
          </Card>
          <Card
            isFooterBlurred
            className="w-full h-[300px] col-span-12 sm:col-span-7"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <h4 className="text-white/90 font-medium text-xl">Game Dev</h4>
              <p className="text-tiny text-white/60 uppercase font-bold">
                Unity, Unreal Engine 5, Blender
              </p>
            </CardHeader>
            <Image
              removeWrapper
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover"
              src="/gamedev.jpg"
            />
          </Card>
        </div>
      </div>
    </section>
  );
}
