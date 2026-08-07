"use client";

import Link from "next/link";
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
    value: "business-system",
    label: "Configured business system",
  },
  {
    value: "business-ai",
    label: "AI business intelligence or executive decision support",
  },
  {
    value: "workflow-audit",
    label: "Workflow or technology audit",
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
    value: "papertalk",
    label: "PaperTalk accessibility solution",
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
    label: "Contribute a skill or build with GID",
  },
  {
    value: "business-partner",
    label: "Become a business or referral partner",
  },
  {
    value: "strategic-support",
    label: "Support GID through sponsorship, mentorship, or resources",
  },
  {
    value: "early-user",
    label: "Test a product or become an early user",
  },
  {
    value: "introduction",
    label: "Make a useful introduction",
  },
  {
    value: "follow-journey",
    label: "Follow GID Technologies’ development journey",
  },
];

const validServices = new Set(serviceOptions.map((option) => option.value));
const validPaths = new Set(opportunityPaths.map((option) => option.value));

type SubmissionStatus = "idle" | "submitting" | "success" | "error";

type FieldName = "fullName" | "email" | "service" | "path" | "message";

type FieldErrors = Partial<Record<FieldName, string>>;

export default function ContactForm() {
  const searchParams = useSearchParams();

  const [service, setService] = useState("consultation");
  const [path, setPath] = useState("");
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [feedback, setFeedback] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  //Detect Graduation submissions
  const source = searchParams.get("source") ?? "";
  const campaign = searchParams.get("utm_campaign") ?? "";

  const isGraduationSubmission =
    source.startsWith("aptech-graduation") || campaign === "graduation_2026";

  const trackingParams = new URLSearchParams();

  ["source", "utm_source", "utm_medium", "utm_campaign"].forEach((key) => {
    const value = searchParams.get(key);

    if (value) {
      trackingParams.set(key, value);
    }
  });

  const trackingQuery = trackingParams.toString();

  function trackedHref(pathname: string) {
    return `${pathname}${trackingQuery ? `?${trackingQuery}` : ""}`;
  }

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

  function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function clearFieldError(field: FieldName) {
    if (!fieldErrors[field]) {
      return;
    }

    setFieldErrors((current) => {
      const next = { ...current };
      delete next[field];
      return next;
    });

    setStatus("idle");
    setFeedback("");
  }

  // async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  //   event.preventDefault();

  //   const form = event.currentTarget;
  //   const formData = new FormData(form);

  //   setStatus("submitting");
  //   setFeedback("");

  //   const payload = {
  //     fullName: String(formData.get("fullName") ?? ""),
  //     businessName: String(formData.get("businessName") ?? ""),
  //     email: String(formData.get("email") ?? ""),
  //     phone: String(formData.get("phone") ?? ""),
  //     service,
  //     path,
  //     businessLink: String(formData.get("businessLink") ?? ""),
  //     contactMethod: String(formData.get("contactMethod") ?? ""),
  //     message: String(formData.get("message") ?? ""),
  //     website: String(formData.get("website") ?? ""),
  //     source: window.location.href,
  //   };

  //   try {
  //     const response = await fetch("/api/contact", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(payload),
  //     });

  //     const result = await response.json().catch(() => null);

  //     if (!response.ok) {
  //       throw new Error(
  //         result?.error ?? "Your enquiry could not be sent. Please try again.",
  //       );
  //     }

  //     setStatus("success");

  //     setFeedback(
  //       isGraduationSubmission
  //         ? "We have received your submission and will review the path you selected."
  //         : "Your enquiry has been sent to GID Technologies. We will review it and respond through your preferred contact route.",
  //     );

  //     form.reset();

  //     // Keep the service chosen from the URL after the other fields reset.
  //     const requestedService = searchParams.get("service");
  //     const requestedPath = searchParams.get("path");

  //     setService(
  //       requestedService && validServices.has(requestedService)
  //         ? requestedService
  //         : "consultation",
  //     );

  //     setPath(
  //       requestedPath && validPaths.has(requestedPath) ? requestedPath : "",
  //     );
  //   } catch (error) {
  //     setStatus("error");
  //     setFeedback(
  //       error instanceof Error
  //         ? error.message
  //         : "Something went wrong. Please try again.",
  //     );
  //   }
  // }

  // replace the above commented-out handleSubmit function with this one to enable form submission
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      fullName: String(formData.get("fullName") ?? "").trim(),
      businessName: String(formData.get("businessName") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      service,
      path,
      businessLink: String(formData.get("businessLink") ?? "").trim(),
      contactMethod: String(formData.get("contactMethod") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      website: String(formData.get("website") ?? "").trim(),
      source: window.location.href,
    };

    const validationErrors: FieldErrors = {};

    if (payload.fullName.length < 2) {
      validationErrors.fullName = "Please enter your full name.";
    }

    if (!payload.email) {
      validationErrors.email = "Please enter your email address.";
    } else if (!validateEmail(payload.email)) {
      validationErrors.email = "Please enter a valid email address.";
    }

    if (!validServices.has(payload.service)) {
      validationErrors.service =
        "Please select what you would like to discuss.";
    }

    if (payload.service === "build-with-gid" && !validPaths.has(payload.path)) {
      validationErrors.path = "Please select how you would like to connect.";
    }

    if (!payload.message) {
      validationErrors.message =
        "Please tell us about the problem, opportunity, or project.";
    } else if (payload.message.length < 20) {
      validationErrors.message =
        "Please provide a little more detail—at least 20 characters.";
    }

    const firstInvalidField = Object.keys(validationErrors)[0] as
      | FieldName
      | undefined;

    if (firstInvalidField) {
      setFieldErrors(validationErrors);
      setStatus("error");
      setFeedback("Please check the highlighted fields and try again.");

      requestAnimationFrame(() => {
        const field = form.elements.namedItem(firstInvalidField);

        if (field instanceof HTMLElement) {
          field.focus();
        }
      });

      return;
    }

    setFieldErrors({});
    setStatus("submitting");
    setFeedback("");

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
        isGraduationSubmission
          ? "We have received your submission and will review the path you selected."
          : "Your enquiry has been sent to GID Technologies. We will review it and respond through your preferred contact route.",
      );

      form.reset();

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

      if (!navigator.onLine) {
        setFeedback(
          "You appear to be offline. Reconnect to the internet and try again.",
        );
        return;
      }

      if (error instanceof TypeError) {
        setFeedback(
          "We could not connect to the GID contact service. Check your connection and try again.",
        );
        return;
      }

      setFeedback(
        error instanceof Error
          ? error.message
          : "Something went wrong while sending your enquiry. Please try again.",
      );
    }
  }

  const inputClassName =
    "mt-2 w-full rounded-2xl border border-white/10 bg-black/60 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-neutral-700 focus:border-white/30 focus:bg-black";

  function getInputClassName(field: FieldName) {
    return `${inputClassName} ${
      fieldErrors[field]
        ? "border-red-400/50 bg-red-400/[0.035] focus:border-red-300/70"
        : ""
    }`;
  }

  if (status === "success") {
    return (
      <div
        aria-live="polite"
        className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 md:p-10"
      >
        <div className="absolute inset-0 bg-premium-radial opacity-50" />

        <div className="relative">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.07]">
            <CheckCircle2 className="h-7 w-7 text-white" />
          </span>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
            Submission received
          </p>

          <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
            {isGraduationSubmission
              ? "Thank you for connecting with GID Technologies."
              : "Your enquiry is now with GID Technologies."}
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
            {feedback}
          </p>

          {isGraduationSubmission ? (
            <p className="mt-4 max-w-2xl leading-7 text-neutral-500">
              Thank you for connecting with us after the Aptech graduation
              presentation. In the meantime, you can explore the company, view
              the StatBet product case study, and follow the products being
              developed under GID Technologies.
            </p>
          ) : (
            <p className="mt-4 max-w-2xl leading-7 text-neutral-500">
              You may continue exploring our solutions, products, and live proof
              of execution while your enquiry is being reviewed.
            </p>
          )}

          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            <Link
              href={trackedHref("/")}
              className="inline-flex items-center justify-between rounded-2xl bg-white px-5 py-4 text-sm font-semibold text-black transition hover:bg-neutral-200"
            >
              Explore GID Technologies
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href={trackedHref("/statbet")}
              className="inline-flex items-center justify-between rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-4 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
            >
              View the StatBet Case Study
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href={trackedHref("/products")}
              className="inline-flex items-center justify-between rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-4 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
            >
              Explore the Products
              <ArrowRight className="h-4 w-4" />
            </Link>

            {isGraduationSubmission ? (
              <Link
                href={trackedHref("/graduation")}
                className="inline-flex items-center justify-between rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-4 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
              >
                Return to Graduation Page
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : (
              <Link
                href={trackedHref("/build-with-gid")}
                className="inline-flex items-center justify-between rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-4 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
              >
                Explore Build With GID
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="max-w-2xl text-xs leading-6 text-neutral-600">
              Your submission begins a review and follow-up process. It does not
              automatically create an employment, investment, sponsorship,
              partnership, contributor, project, or payment agreement.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
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
            aria-invalid={Boolean(fieldErrors.fullName)}
            aria-describedby={
              fieldErrors.fullName ? "fullName-error" : undefined
            }
            onChange={() => clearFieldError("fullName")}
            className={getInputClassName("fullName")}
          />
          {fieldErrors.fullName ? (
            <span
              id="fullName-error"
              className="mt-2 block text-xs leading-5 text-red-200"
            >
              {fieldErrors.fullName}
            </span>
          ) : null}
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
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
            onChange={() => clearFieldError("email")}
            className={getInputClassName("email")}
          />
          {fieldErrors.email ? (
            <span
              id="email-error"
              className="mt-2 block text-xs leading-5 text-red-200"
            >
              {fieldErrors.email}
            </span>
          ) : null}
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
              clearFieldError("service");

              if (event.target.value !== "build-with-gid") {
                setPath("");
                clearFieldError("path");
              }
            }}
            aria-invalid={Boolean(fieldErrors.service)}
            aria-describedby={fieldErrors.service ? "service-error" : undefined}
            className={getInputClassName("service")}
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
          {fieldErrors.service ? (
            <span
              id="service-error"
              className="mt-2 block text-xs leading-5 text-red-200"
            >
              {fieldErrors.service}
            </span>
          ) : null}
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
            How would you like to connect?
            <select
              name="path"
              required
              value={path}
              onChange={(event) => {
                setPath(event.target.value);
                clearFieldError("path");
              }}
              aria-invalid={Boolean(fieldErrors.path)}
              aria-describedby={fieldErrors.path ? "path-error" : undefined}
              className={getInputClassName("path")}
            >
              <option value="" className="bg-black">
                Select a connection path
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
            {fieldErrors.path ? (
              <span
                id="path-error"
                className="mt-2 block text-xs leading-5 text-red-200"
              >
                {fieldErrors.path}
              </span>
            ) : null}
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
            aria-invalid={Boolean(fieldErrors.message)}
            aria-describedby={fieldErrors.message ? "message-error" : undefined}
            onChange={() => clearFieldError("message")}
            className={`${getInputClassName("message")} resize-y`}
          />
          {fieldErrors.message ? (
            <span
              id="message-error"
              className="mt-2 block text-xs leading-5 text-red-200"
            >
              {fieldErrors.message}
            </span>
          ) : (
            <span className="mt-2 block text-xs leading-5 text-neutral-600">
              Please provide at least 20 characters.
            </span>
          )}
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
