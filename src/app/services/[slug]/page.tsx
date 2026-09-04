import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { services } from "../../../components/data/service";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <section className="relative bg-surface pt-32 pb-20 sm:pt-36 sm:pb-24 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 10%, var(--color-primary-wash) 0%, transparent 55%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-text-muted hover:text-primary transition-colors text-sm mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Services
        </Link>

        <div className="relative w-full h-64 sm:h-80 rounded-3xl overflow-hidden mb-10 border border-surface-border">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent" />
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-light mb-6 [text-shadow:0_0_30px_var(--color-primary-glow)]">
          {service.title}
        </h1>

        <p className="text-text-muted text-base sm:text-lg leading-relaxed mb-10 max-w-2xl">
          {service.description}
        </p>

        <div className="bg-surface-card border border-surface-border rounded-2xl p-6 sm:p-8">
          <h2 className="text-lg font-bold text-light mb-5">What&apos;s included</h2>
          <ul className="space-y-3">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-primary" />
                </span>
                <span className="text-text-muted">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 mt-10 rounded-full border border-primary bg-primary px-6 py-3 text-sm font-bold text-dark shadow-[0_0_25px_var(--color-primary-glow)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-hover"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}