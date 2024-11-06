'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { send } from 'emailjs-com';
import 'aos/dist/aos.css';
import AOS from 'aos';



export default function ContactForm() {

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  
    let formData;
    if (event.target instanceof HTMLFormElement) {
      formData = new FormData(event.target);
    }
  
    const data = formData ? Object.fromEntries(formData) : {};
  
    // Set up EmailJS configuration
    const serviceId = 'your_service_id';
    const templateId = 'your_template_id';
    const userId = 'your_user_id';
  
    // Send the email
    try {
      const response = await send(
        serviceId,
        templateId,
        {
          to_name: 'Lucio',
          to_email: 'luciomedinawork@gmail.com',
          ...data, // Spread the form data into the email template
        },
        userId
      );
      console.log('Email sent successfully:', response.status);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };


  return (
    <Card className="w-full max-w-2xl mx-auto" data-aos="fade-up">
      <CardHeader>
        <CardTitle>Contactanos</CardTitle>
        <CardDescription>
          Elegí el tipo de consulta que se adapte mejor a tus necesidades.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="parentName">Nombre y Apellido</Label>
            <Input
              id="parentName"
              name="parentName"
              placeholder="Nombre y Apellido"
              required
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="childName">Ciudad</Label>
              <Input
                id="childName"
                name="childName"
                placeholder="Ciudad"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="childAge">Edad</Label>
              <Input
                id="childAge"
                name="childAge"
                type="number"
                placeholder="Edad"
                min="0"
                max="50"
                required
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="ejemplo@email.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Número de teléfono</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(123) 456-7890"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="concernType">Tipo de consulta</Label>
            <Select name="concernType" required>
              <SelectTrigger>
                <SelectValue placeholder="Elegí tu consulta" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="anxiety">Ansiedad</SelectItem>
                <SelectItem value="stress">Estrés</SelectItem>
                <SelectItem value="trauma">Traumas</SelectItem>
                <SelectItem value="other">Otros</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Consulta</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Por favor describa su consulta..."
              className="min-h-32"
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Enviar Consulta
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}