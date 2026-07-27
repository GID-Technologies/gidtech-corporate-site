"use client";

import type { FormEvent } from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AlertCircle, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

const serviceOptions = [
  {
    value: "consultation",
    label: "General business consultation",
  },
  {
    value: "visibility-system",
    label: "Business visibility review",
  },
  {
    value: "business-website",
    label: "Business website or digital showroom",
  },
  {
    value: "custom-platform",
    label: "Custom platform or business tool",
  },
  {
    value: "automation",
    label: "Automation or intelligent workflow",
  },
  {
    value: "digital-care",
    label: "Ongoing digital care and maintenance",
  },
  {
    value: "build-with-gid",
    label: "Build With GID opportunity",
  },
  {
    value: "partnership",
    label: "Partnership or strategic support",
  },
  {
    value: "other",
    label: "Other enquiry",
  },
];

const opportunityPaths = [
  {
    value: "builder",
    label: "Build products with GID",
  },
  {
    value: "business-partner",
    label: "Become a business or referral partner",
  },
  {
    value: "strategic-support",
    label: "Explore sponsorship or strategic support",
  },
  {
    value: "early-user",
    label: "Become an early user or pilot business",
  },
];

const validServices = new Set(serviceOptions.map((option) => option.value));
const validPaths = new Set(opportunityPaths.map((option) => option.value));

type SubmissionStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const searchParams = useSearchParams();

  const [service, setService] = useState("consultation");
  const [path, setPath] = useState("");
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    const requestedService = searchParams.get("service");
    const requestedPath = searchParams.get("path");

    if (requestedService && validServices.has(requestedService)) {
      setService(requestedService);
    }

    if (requestedPath && validPaths.has(requestedPath)) {
      setPath(requestedPath);
    }
  }, [searchParams]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");
    setFeedback("");

    const payload = {
      fullName: String(formData.get("fullName") ?? ""),
      businessName: String(formData.get("businessName") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      service,
      path,
      businessLink: String(formData.get("businessLink") ?? ""),
      contactMethod: String(formData.get("contactMethod") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
      source: window.location.href,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          result?.error ?? "Your enquiry could not be sent. Please try again.",
        );
      }

      setStatus("success");
      setFeedback(
        "Your enquiry has been sent to GID Technologies. We will review it and respond through your preferred contact route.",
      );

      form.reset();

      // Keep the service chosen from the URL after the other fields reset.
      const requestedService = searchParams.get("service");
      const requestedPath = searchParams.get("path");

      setService(
        requestedService && validServices.has(requestedService)
          ? requestedService
          : "consultation",
      );

      setPath(
        requestedPath && validPaths.has(requestedPath) ? requestedPath : "",
      );
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  const inputClassName =
    "mt-2 w-full rounded-2xl border border-white/10 bg-black/60 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-neutral-700 focus:border-white/30 focus:bg-black";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 md:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="text-sm font-medium text-neutral-300">
          Full name
          <input
            type="text"
            name="fullName"
            required
            minLength={2}
            maxLength={100}
            autoComplete="name"
            placeholder="Your full name"
            className={inputClassName}
          />
        </label>

        <label className="text-sm font-medium text-neutral-300">
          Business or organization
          <input
            type="text"
            name="businessName"
            maxLength={120}
            autoComplete="organization"
            placeholder="Business name, if applicable"
            className={inputClassName}
          />
        </label>

        <label className="text-sm font-medium text-neutral-300">
          Email address
          <input
            type="email"
            name="email"
            required
            maxLength={160}
            autoComplete="email"
            placeholder="you@example.com"
            className={inputClassName}
          />
        </label>

        <label className="text-sm font-medium text-neutral-300">
          Phone or WhatsApp number
          <input
            type="tel"
            name="phone"
            maxLength={40}
            autoComplete="tel"
            placeholder="+234..."
            className={inputClassName}
          />
        </label>

        <label className="text-sm font-medium text-neutral-300">
          What would you like to discuss?
          <select
            name="service"
            required
            value={service}
            onChange={(event) => {
              setService(event.target.value);

              if (event.target.value !== "build-with-gid") {
                setPath("");
              }
            }}
            className={inputClassName}
          >
            {serviceOptions.map((option) => (
              <option
                key={option.value}
                value={option.value}
                className="bg-black"
              >
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className="text-sm font-medium text-neutral-300">
          Preferred contact method
          <select
            name="contactMethod"
            required
            defaultValue="email"
            className={inputClassName}
          >
            <option value="email" className="bg-black">
              Email
            </option>
            <option value="phone" className="bg-black">
              Phone call
            </option>
            <option value="whatsapp" className="bg-black">
              WhatsApp
            </option>
          </select>
        </label>

        {service === "build-with-gid" ? (
          <label className="text-sm font-medium text-neutral-300 md:col-span-2">
            Build With GID path
            <select
              name="path"
              required
              value={path}
              onChange={(event) => setPath(event.target.value)}
              className={inputClassName}
            >
              <option value="" className="bg-black">
                Select an opportunity path
              </option>

              {opportunityPaths.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  className="bg-black"
                >
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        ) : null}

        <label className="text-sm font-medium text-neutral-300 md:col-span-2">
          Business website or social link
          <input
            type="url"
            name="businessLink"
            maxLength={300}
            placeholder="https://..."
            className={inputClassName}
          />
        </label>

        <label className="text-sm font-medium text-neutral-300 md:col-span-2">
          Tell us about the problem, opportunity, or project
          <textarea
            name="message"
            required
            minLength={20}
            maxLength={3000}
            rows={7}
            placeholder="What are you trying to improve, build, solve, or contribute?"
            className={`${inputClassName} resize-y`}
          />
        </label>
      </div>

      {/* Honeypot field. Real users never see or complete this. */}
      <div className="hidden" aria-hidden="true">
        <label>
          Leave this field empty
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-xs leading-6 text-neutral-500">
          Submitting this form starts a business conversation. It does not
          automatically create a contract, partnership, job offer, project
          approval, or payment obligation.
        </p>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Send Enquiry
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </div>

      {status === "success" ? (
        <div
          aria-live="polite"
          className="mt-6 flex items-start gap-3 rounded-2xl border border-white/15 bg-white/[0.06] p-4 text-sm leading-6 text-neutral-200"
        >
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
          <p>{feedback}</p>
        </div>
      ) : null}

      {status === "error" ? (
        <div
          aria-live="polite"
          className="mt-6 flex items-start gap-3 rounded-2xl border border-red-400/20 bg-red-400/[0.06] p-4 text-sm leading-6 text-red-100"
        >
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
          <p>{feedback}</p>
        </div>
      ) : null}
    </form>
  );
}
