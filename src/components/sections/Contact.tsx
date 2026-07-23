import { type FormEvent, type ReactNode, useState } from 'react';
import { Send } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { TechIcon } from '@/components/ui/TechIcon';
import { SOCIAL_LINKS } from '@/data/social';
import { fadeInUp } from '@/animations/variants';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const INITIAL_STATE: FormState = { name: '', email: '', message: '' };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  function validate(): boolean {
    const nextErrors: Partial<FormState> = {};
    if (!form.name.trim()) nextErrors.name = 'Conte seu nome.';
    if (!EMAIL_PATTERN.test(form.email)) nextErrors.email = 'Informe um e-mail válido.';
    if (form.message.trim().length < 10) nextErrors.message = 'Escreva uma mensagem um pouco mais detalhada.';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;

    // Site estático sem backend: abre o cliente de e-mail do usuário com os
    // dados já preenchidos. Para um envio sem reload, troque por um serviço
    // como Formspree/Web3Forms/EmailJS e substitua esta função pelo POST deles.
    const subject = encodeURIComponent(`Contato via portfólio — ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:lucasgianini2006@gmail.com?subject=${subject}&body=${body}`;

    setStatus('sent');
    setForm(INITIAL_STATE);
  }

  return (
    <Section
      id="contato"
      eyebrow="Contato"
      title="Vamos conversar"
      subtitle="Aberto a oportunidades de Front-End, Full Stack ou Analista de Sistemas. Me chame por aqui ou pelas redes abaixo."
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <RevealOnScroll variants={fadeInUp} className="space-y-6">
          <p className="text-base leading-relaxed text-pretty text-zinc-600 dark:text-zinc-400">
            Respondo o quanto antes. Se preferir um canal direto, use qualquer um destes:
          </p>
          <div className="flex flex-col gap-3">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.platform}
                href={link.href}
                target={link.platform === 'email' ? undefined : '_blank'}
                rel="noreferrer"
                className="hover:border-accent-500/50 hover:text-accent-600 dark:hover:text-accent-400 flex items-center gap-3 rounded-xl border border-zinc-200/80 bg-white/50 px-4 py-3 text-sm font-medium text-zinc-700 transition-colors dark:border-zinc-800/80 dark:bg-zinc-900/40 dark:text-zinc-300"
              >
                <TechIcon name={link.icon} className="h-4 w-4" />
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-500">
            Baseado no Brasil ·{' '}
            <a
              href={`mailto:lucasgianini2006@gmail.com`}
              className="hover:text-accent-500 underline underline-offset-4"
            >
              lucasgianini2006@gmail.com
            </a>
          </p>
        </RevealOnScroll>

        <RevealOnScroll variants={fadeInUp} delay={0.1}>
          <Card hoverable={false} className="p-6 sm:p-8">
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <Field id="name" label="Nome" error={errors.name}>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className={inputClasses}
                />
              </Field>

              <Field id="email" label="E-mail" error={errors.email}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={inputClasses}
                />
              </Field>

              <Field id="message" label="Mensagem" error={errors.message}>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className={`${inputClasses} resize-none`}
                />
              </Field>

              <Button type="submit" className="w-full" icon={<Send className="h-4 w-4" />}>
                Enviar mensagem
              </Button>

              <p
                role="status"
                aria-live="polite"
                className="text-center text-sm text-emerald-600 dark:text-emerald-400"
              >
                {status === 'sent' && 'Abrindo seu cliente de e-mail com a mensagem pronta…'}
              </p>
            </form>
          </Card>
        </RevealOnScroll>
      </div>
    </Section>
  );
}

const inputClasses =
  'w-full rounded-xl border border-zinc-200 bg-white/70 px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 transition-colors focus:border-accent-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-100';

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
