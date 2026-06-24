"use client";

import { useState } from "react";
import { Send, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});

  const validate = (): Errors => {
    const e: Errors = {};
    if (!values.name.trim()) e.name = "Cuéntanos tu nombre.";
    if (!values.email.trim()) e.email = "Necesitamos tu correo.";
    else if (!emailRe.test(values.email)) e.email = "Ese correo no parece válido.";
    if (values.message.trim().length < 10)
      e.message = "Escribe un mensaje un poco más largo.";
    return e;
  };

  const update =
    (field: keyof typeof values) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [field]: e.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate();
    if (Object.keys(found).length > 0) {
      setErrors(found);
      toast.error("Revisa los campos marcados.");
      return;
    }

    const text = `¡Hola Café Tsiluba! 😊\n\nSoy ${values.name} (${values.email}).\n\n${values.message}`;
    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
    toast.success("¡Listo! Te llevamos a WhatsApp para enviar tu mensaje.");
    setValues({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <Field label="Nombre" htmlFor="name" error={errors.name}>
        <Input
          id="name"
          name="name"
          value={values.name}
          onChange={update("name")}
          placeholder="Tu nombre"
          aria-invalid={!!errors.name}
          className="h-12 rounded-xl bg-card"
        />
      </Field>

      <Field label="Correo" htmlFor="email" error={errors.email}>
        <Input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={update("email")}
          placeholder="tu@correo.com"
          aria-invalid={!!errors.email}
          className="h-12 rounded-xl bg-card"
        />
      </Field>

      <Field label="Mensaje" htmlFor="message" error={errors.message}>
        <Textarea
          id="message"
          name="message"
          value={values.message}
          onChange={update("message")}
          placeholder="¿En qué podemos ayudarte?"
          rows={5}
          aria-invalid={!!errors.message}
          className="rounded-xl bg-card"
        />
      </Field>

      <Button type="submit" className="h-12 rounded-full text-base">
        <Send className="size-4.5" />
        Enviar por WhatsApp
      </Button>
      <p className="flex items-center justify-center gap-1.5 text-xs text-foreground/50">
        <MessageCircle className="size-3.5" />
        Tu mensaje se abrirá en WhatsApp para enviarlo al instante.
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={htmlFor}
        className="text-sm font-medium text-foreground/80"
      >
        {label}
      </label>
      {children}
      {error && (
        <span className={cn("text-xs text-destructive")} role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
