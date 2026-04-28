import { MapPin, Phone, MessageCircle, Mail, Clock } from "lucide-react";
import { CLINIC } from "@/lib/clinic";
import { SectionHeading } from "@/components/SectionHeading";
import { usePageMeta } from "@/lib/usePageMeta";

export default function ContactPage() {
  usePageMeta(
    "Contact & Location — SmileCraft Dental, Jubilee Hills, Hyderabad",
    "Visit SmileCraft Dental in Jubilee Hills, Hyderabad. Call or WhatsApp to book your appointment."
  );

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Visit Us"
            title="We're right in Jubilee Hills"
            description="Easy parking, ground floor access and same-day appointments. Drop in or get in touch — we'd love to meet you."
          />
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10">

            {/* LEFT SIDE (Info cards) */}
            <div className="space-y-4">
              {[
                { icon: MapPin, title: "Address", value: CLINIC.address, action: { label: "Get directions", href: "https://maps.google.com/?q=Jubilee+Hills+Hyderabad" } },
                { icon: Phone, title: "Phone", value: CLINIC.phone, action: { label: "Call now", href: CLINIC.phoneTel } },
                { icon: MessageCircle, title: "WhatsApp", value: CLINIC.phone, action: { label: "Open WhatsApp", href: CLINIC.whatsapp } },
                { icon: Mail, title: "Email", value: CLINIC.email, action: { label: "Send email", href: `mailto:${CLINIC.email}` } },
                { icon: Clock, title: "Hours", value: CLINIC.hours },
              ].map((c) => (
                <div key={c.title} className="rounded-2xl bg-card border border-border p-5 shadow-soft flex gap-4">
                  <div className="h-11 w-11 rounded-xl bg-primary-soft text-primary grid place-items-center shrink-0">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{c.title}</p>
                    <p className="font-semibold text-foreground mt-0.5">{c.value}</p>
                    {c.action && (
                      <a
                        href={c.action.href}
                        target={c.action.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="text-xs text-primary font-semibold mt-1 inline-block hover:underline"
                      >
                        {c.action.label} →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT SIDE (Action + Map) */}
            <div className="space-y-6">

              {/* ACTION CARD */}
              <div className="rounded-3xl bg-card border border-border p-7 shadow-card">
                <h3 className="text-2xl font-bold text-foreground">
                  Book your appointment
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Call or WhatsApp us to confirm your visit instantly.
                </p>

                <div className="mt-6 space-y-4">
                  <a
                    href={CLINIC.phoneTel}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-soft"
                  >
                    <Phone className="h-4 w-4" />
                    Call Now to Book
                  </a>

                  <a
                    href={CLINIC.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 text-base font-semibold text-foreground hover:bg-muted"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Message on WhatsApp
                  </a>
                </div>

                <div className="mt-6 text-sm text-muted-foreground space-y-2">
                  <div className="flex justify-between">
                    <span>📞 Phone</span>
                    <span className="text-foreground font-medium">{CLINIC.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>⏱ Response</span>
                    <span className="text-foreground font-medium">Within minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>🕒 Hours</span>
                    <span className="text-foreground font-medium">{CLINIC.hours}</span>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground text-center mt-5">
                  Same-day appointments available • No long waiting
                </p>
              </div>

              {/* MAP CARD */}
              <div className="rounded-3xl overflow-hidden border border-border shadow-card">
                <iframe
                  title="SmileCraft Dental location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.4863!2d78.4089!3d17.4239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI1JzI2LjAiTiA3OMKwMjQnMzIuMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}