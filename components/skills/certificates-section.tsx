"use client";

import { useState, useMemo, type ReactNode } from "react";
import Image from "next/image";
import {
  Calendar,
  ExternalLink,
  ShieldCheck,
  X,
  FileText,
  Download,
  Eye,
  CheckCircle2,
  Sparkles,
  Award,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { portfolioData, resolveLocalized, type CertificateItem } from "@/data/portfolio";
import { useLanguage } from "@/lib/language-context";

type CertCategory = "all" | "aviation" | "software";

const CERTIFICATES = portfolioData.certificates ?? [];

export function CertificatesSection(): ReactNode {
  const { lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<CertCategory>("all");
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  const filteredCerts = useMemo(() => {
    if (activeCategory === "all") return CERTIFICATES;
    return CERTIFICATES.filter((c) => c.category === activeCategory);
  }, [activeCategory]);

  const categories: { id: CertCategory; label: string; count: number }[] = useMemo(() => {
    const aviationCount = CERTIFICATES.filter((c) => c.category === "aviation").length;
    const softwareCount = CERTIFICATES.filter((c) => c.category === "software").length;

    return [
      {
        id: "all",
        label: lang === "id" ? "Semua Kredensial" : "All Credentials",
        count: CERTIFICATES.length,
      },
      {
        id: "aviation",
        label: lang === "id" ? "Drone & Aviasi (UAV)" : "Drone & Aviation (UAV)",
        count: aviationCount,
      },
      {
        id: "software",
        label: lang === "id" ? "Software & Backend" : "Software & Backend",
        count: softwareCount,
      },
    ];
  }, [lang]);

  return (
    <section className="mx-auto w-full max-w-7xl px-6 pb-24 sm:px-10 sm:pb-32">
      {/* Header */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-14">
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 dark:bg-sky-400/10 px-3.5 py-1.5 shadow-[0_0_15px_rgba(56,189,248,0.2)] backdrop-blur-md mb-4">
          <Award className="h-3.5 w-3.5 text-sky-400" />
          <span className="font-mono text-xs uppercase tracking-wider text-sky-600 dark:text-sky-300 font-semibold">
            {lang === "id" ? "KREDENSIAL & SERTIFIKASI RESMI" : "OFFICIAL CREDENTIALS & CERTIFICATES"}
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] font-medium tracking-tight text-foreground leading-tight">
          {lang === "id" ? "Sertifikasi & Lisensi" : "Certifications & Licenses"}
        </h2>

        <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-foreground/75 max-w-[62ch]">
          {lang === "id"
            ? "Lisensi resmi pilot drone dari FASI, sertifikat kepengurusan riset wahana terbang AVRO Polinema, serta sertifikasi keahlian rekayasa software dan pemrograman."
            : "Official drone pilot license from FASI, autonomous UAV robotics research credentials with AVRO Polinema, and verified software engineering mastery certifications."}
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-sky-500 dark:bg-sky-400 text-white dark:text-slate-950 font-semibold shadow-[0_0_20px_rgba(56,189,248,0.35)] scale-[1.02]"
                  : "bg-foreground/4 text-foreground/75 hover:bg-sky-400/10 hover:text-sky-500 dark:hover:text-sky-300 border border-foreground/10"
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                  isActive
                    ? "bg-black/20 text-white dark:bg-black/15 dark:text-slate-950"
                    : "bg-foreground/8 text-foreground/60"
                }`}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Certificates Grid: Apple Liquid Glass Cards with Real Document Preview */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
      >
        <AnimatePresence>
          {filteredCerts.map((cert) => {
            const title = resolveLocalized(cert.title, lang);
            const desc = resolveLocalized(cert.description, lang);

            return (
              <motion.article
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="group relative flex flex-col justify-between rounded-3xl border border-sky-400/20 bg-gradient-to-b from-sky-400/10 via-white/70 to-sky-500/[0.04] dark:from-sky-500/10 dark:via-[#0c0e14]/85 dark:to-sky-950/25 p-5 sm:p-6 backdrop-blur-2xl transition-all duration-300 hover:border-sky-400/50 hover:shadow-[0_20px_45px_rgba(56,189,248,0.15)] shadow-[0_10px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)] overflow-hidden"
              >
                {/* Visual Document Snapshot / Preview Area */}
                <div
                  onClick={() => setSelectedCert(cert)}
                  className="relative aspect-16/10 w-full overflow-hidden rounded-2xl border border-sky-400/25 bg-slate-900/60 shadow-inner cursor-pointer group/thumb mb-5"
                >
                  {cert.imageUrl ? (
                    <div className="relative h-full w-full">
                      <Image
                        src={cert.imageUrl}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-top transition-transform duration-500 group-hover/thumb:scale-105"
                      />
                      {/* Frosted Sheen & Inspector Prompt Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                        <span className="font-mono text-xs text-white flex items-center gap-1.5 font-medium">
                          <Eye className="h-4 w-4 text-sky-400" />
                          {lang === "id" ? "Buka & Perbesar Kredensial" : "Inspect Credential"}
                        </span>
                        <span className="font-mono text-[10px] text-sky-300 bg-sky-500/30 px-2 py-0.5 rounded border border-sky-400/40 uppercase">
                          PREVIEW
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <FileText className="h-10 w-10 text-foreground/40" />
                    </div>
                  )}

                  {/* Top-Right Badge on Thumbnail */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full border border-sky-400/40 bg-slate-950/75 px-2.5 py-1 text-[10px] font-mono text-sky-300 backdrop-blur-md shadow-xs">
                    <ShieldCheck className="h-3 w-3 text-emerald-400" />
                    <span>{cert.badge ?? "VERIFIED"}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    {/* Issuer & Metric Tag */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono font-medium text-sky-600 dark:text-sky-300 flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-sky-500" />
                        {cert.issuer}
                      </span>
                      {cert.metric && (
                        <span className="font-mono text-[10.5px] text-foreground/60 bg-foreground/5 px-2 py-0.5 rounded-md border border-foreground/8">
                          {cert.metric}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3
                      onClick={() => setSelectedCert(cert)}
                      className="font-serif text-lg sm:text-xl font-medium tracking-tight text-foreground group-hover:text-sky-500 dark:group-hover:text-sky-300 transition-colors leading-snug cursor-pointer mb-2.5"
                    >
                      {title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm leading-relaxed text-foreground/75 mb-4 line-clamp-3">
                      {desc}
                    </p>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg border border-sky-400/15 bg-sky-400/5 dark:bg-sky-950/30 px-2.5 py-1 text-[11px] font-mono text-foreground/80"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Actions */}
                  <div className="pt-4 border-t border-sky-400/15 flex items-center justify-between text-xs font-mono">
                    <span className="text-foreground/50 truncate max-w-[170px] sm:max-w-[220px]">
                      ID: {cert.credentialId ?? "VERIFIED"}
                    </span>

                    <div className="flex items-center gap-2">
                      {cert.pdfUrl && (
                        <a
                          href={cert.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 rounded-lg border border-sky-400/25 bg-sky-500/10 dark:bg-sky-400/10 px-2.5 py-1 text-[11px] text-sky-600 dark:text-sky-300 hover:bg-sky-400 hover:text-white dark:hover:text-slate-950 transition-all font-semibold"
                          title="Open Original PDF"
                        >
                          <FileText className="h-3 w-3" />
                          <span>PDF</span>
                        </a>
                      )}

                      <button
                        type="button"
                        onClick={() => setSelectedCert(cert)}
                        className="inline-flex items-center gap-1 text-[11px] text-foreground/70 hover:text-sky-500 dark:hover:text-sky-300 transition-colors cursor-pointer"
                      >
                        <span>{lang === "id" ? "Inspeksi" : "Inspect"}</span>
                        <ExternalLink className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* ========================================================= */}
      {/* PRO CREDENTIAL INSPECTOR MODAL (Dual-Pane High-End Viewer) */}
      {/* ========================================================= */}
      <AnimatePresence>
        {selectedCert && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xl overflow-y-auto"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl border border-sky-400/30 bg-background/95 dark:bg-[#0c0e14]/95 p-5 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.6)] backdrop-blur-2xl"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="absolute top-5 right-5 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-foreground/15 bg-foreground/5 text-foreground/60 hover:text-foreground hover:bg-foreground/10 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
                {/* Left Column: High-Res Document Display */}
                <div className="lg:col-span-7 flex flex-col items-center">
                  <div className="relative w-full aspect-16/11 sm:aspect-16/11 rounded-2xl overflow-hidden border border-sky-400/30 bg-slate-950/80 shadow-2xl">
                    {selectedCert.imageUrl ? (
                      <Image
                        src={selectedCert.imageUrl}
                        alt={resolveLocalized(selectedCert.title, lang)}
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-contain p-1"
                        priority
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <FileText className="h-16 w-16 text-foreground/30" />
                      </div>
                    )}
                  </div>

                  {/* Document Actions Bar */}
                  <div className="w-full mt-4 flex flex-wrap items-center justify-between gap-2.5">
                    <span className="font-mono text-[11px] text-foreground/50 flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5 text-sky-400" />
                      {lang === "id" ? "Dokumen Terotentikasi" : "Authentic Verified Document"}
                    </span>

                    <div className="flex items-center gap-2">
                      {selectedCert.pdfUrl && (
                        <>
                          <a
                            href={selectedCert.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-xl border border-sky-400/40 bg-sky-500/10 dark:bg-sky-400/10 px-3.5 py-1.5 text-xs font-mono font-semibold text-sky-600 dark:text-sky-300 hover:bg-sky-400 hover:text-white dark:hover:text-slate-950 transition-all shadow-xs"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                            <span>{lang === "id" ? "Buka PDF Asli" : "Open Original PDF"}</span>
                          </a>

                          <a
                            href={selectedCert.pdfUrl}
                            download
                            className="inline-flex items-center gap-1.5 rounded-xl border border-foreground/15 bg-foreground/5 px-3 py-1.5 text-xs font-mono text-foreground/75 hover:bg-foreground/10 transition-colors"
                          >
                            <Download className="h-3.5 w-3.5" />
                            <span>{lang === "id" ? "Unduh" : "Download"}</span>
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Column: Credential Details & Verification Matrix */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Status Pill */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400 shadow-xs">
                        <ShieldCheck className="h-3.5 w-3.5" />
                        {selectedCert.badge ?? "100% VERIFIED"}
                      </span>
                      <span className="flex items-center gap-1 text-xs font-mono text-foreground/55">
                        <Calendar className="h-3 w-3" />
                        {selectedCert.date}
                      </span>
                    </div>

                    {/* Certificate Title */}
                    <h3 className="font-serif text-xl sm:text-2xl font-medium tracking-tight text-foreground leading-snug mb-1">
                      {resolveLocalized(selectedCert.title, lang)}
                    </h3>

                    <p className="text-sm font-mono font-semibold text-sky-600 dark:text-sky-400 mb-4">
                      {selectedCert.issuer}
                    </p>

                    {/* Credential ID / Registration Box */}
                    <div className="rounded-2xl border border-sky-400/20 bg-sky-500/5 dark:bg-sky-400/5 p-3.5 mb-4 font-mono">
                      <div className="text-[10px] text-foreground/50 uppercase tracking-wider mb-0.5">
                        {lang === "id" ? "NOMOR KREDENSIAL / REGISTRASI" : "CREDENTIAL REGISTRATION ID"}
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-foreground break-all">
                        {selectedCert.credentialId ?? "VERIFIED-POLINEMA-SULTAN"}
                      </div>
                      {selectedCert.metric && (
                        <div className="text-[11px] text-sky-600 dark:text-sky-300 mt-1 font-medium">
                          {selectedCert.metric}
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                      <h4 className="text-[11px] font-mono uppercase tracking-wider text-foreground/50 mb-1.5 font-semibold">
                        {lang === "id" ? "RUANG LINGKUP & DESKRIPSI" : "SCOPE & DESCRIPTION"}
                      </h4>
                      <p className="text-xs sm:text-sm leading-relaxed text-foreground/75">
                        {resolveLocalized(selectedCert.description, lang)}
                      </p>
                    </div>

                    {/* Skills Covered */}
                    <div>
                      <h4 className="text-[11px] font-mono uppercase tracking-wider text-foreground/50 mb-2 font-semibold">
                        {lang === "id" ? "KOMPETENSI TERUJI" : "TESTED COMPETENCIES"}
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedCert.skills.map((s) => (
                          <span
                            key={s}
                            className="rounded-lg border border-sky-400/20 bg-sky-400/5 dark:bg-sky-950/40 px-2.5 py-1 text-xs font-mono text-foreground/80"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Verification URL Link (if applicable) */}
                  {selectedCert.credentialUrl && (
                    <div className="pt-3 border-t border-foreground/10">
                      <a
                        href={selectedCert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-500 dark:text-sky-400 hover:underline"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        <span>{lang === "id" ? "Verifikasi URL Online" : "Online Verification Link"}</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
