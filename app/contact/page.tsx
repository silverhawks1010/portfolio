"use client";
import { useState } from "react";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Textarea } from "@heroui/input";
import { Select, SelectItem } from "@heroui/select";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { addToast } from "@heroui/toast";
import { GrContact } from "react-icons/gr";
import { FaEnvelope, FaUser, FaBuilding, FaComments } from "react-icons/fa";

export default function Contact() {
  const [type, setType] = useState("perso");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = {
      nom: form.nom.value,
      prenom: form.prenom.value,
      email: form.email.value,
      objet: form.objet.value,
      type: form.type.value,
      societe: form.societe?.value || "",
      message: form.message.value,
    };
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setLoading(false);
    if (res.ok) {
      addToast({ title: "Message envoyé !", description: "Merci pour votre message.", color: "success" });
      form.reset();
      setType("perso");
    } else {
      addToast({ title: "Erreur", description: "Une erreur est survenue.", color: "danger" });
    }
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 shadow-lg">
          <GrContact size={32} className="text-white" />
        </div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Contactez-moi
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Prêt à collaborer ? N'hésitez pas à me contacter pour discuter de vos projets, 
          opportunités ou simplement échanger sur nos passions communes.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Informations de contact */}
        <div className="lg:col-span-1">
          <Card className="h-fit shadow-xl">
            <CardHeader className="pb-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Informations</h2>
            </CardHeader>
            <Divider />
            <CardBody className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mt-1">
                  <FaEnvelope className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-1">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300 break-words">kevmaublanc@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mt-1">
                  <FaUser className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-1">Disponibilité</h3>
                  <p className="text-gray-600 dark:text-gray-300">Réponse sous 24h</p>
                </div>
              </div>

            </CardBody>
          </Card>
        </div>

        {/* Formulaire */}
        <div className="lg:col-span-2">
          <Card className="shadow-xl">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <FaComments className="text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Formulaire de contact</h2>
                  <p className="text-gray-600 dark:text-gray-300">Remplissez le formulaire ci-dessous</p>
                </div>
              </div>
            </CardHeader>
            <Divider />
            <CardBody className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input 
                    name="nom" 
                    label="Nom" 
                    placeholder="Votre nom"
                    variant="bordered"
                    required 
                  />
                  <Input 
                    name="prenom" 
                    label="Prénom" 
                    placeholder="Votre prénom"
                    variant="bordered"
                    required 
                  />
                </div>
                
                <Input 
                  name="email" 
                  label="Email" 
                  type="email" 
                  placeholder="votre.email@exemple.com"
                  variant="bordered"
                  required 
                />

                <Input 
                  name="objet" 
                  label="Objet" 
                  placeholder="Sujet de votre message"
                  variant="bordered"
                  required 
                />

                <Select 
                  name="type" 
                  label="Type de contact" 
                  selectedKeys={[type]} 
                  onSelectionChange={(keys) => setType(Array.from(keys)[0] as string)}
                  variant="bordered"
                  placeholder="Sélectionnez le type"
                  required
                >
                  <SelectItem key="perso">Personnel</SelectItem>
                  <SelectItem key="boite">Entreprise</SelectItem>
                </Select>

                {type === "boite" && (
                  <Input 
                    name="societe" 
                    label="Nom de la société" 
                    placeholder="Nom de votre entreprise"
                    variant="bordered"
                    required 
                  />
                )}

                <Textarea 
                  name="message" 
                  label="Votre message" 
                  placeholder="Décrivez votre projet ou votre demande..."
                  variant="bordered"
                  minRows={6}
                  required 
                />

                <div className="flex justify-center pt-6">
                  <Button 
                    type="submit" 
                    size="lg"
                    isLoading={loading}
                    className="px-12 py-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    {loading ? "Envoi en cours..." : "Envoyer le message"}
                  </Button>
                </div>
              </form>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
} 