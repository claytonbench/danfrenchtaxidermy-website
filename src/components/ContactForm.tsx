"use client";

import { useActionState } from "react";
import { submitContact, type ContactResult } from "@/app/contact/actions";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const speciesOptions = [
  "Antelope",
  "Deer",
  "Elk",
  "Bear",
  "Buffalo / Bison",
  "Bighorn Sheep",
  "Moose",
  "Mountain Goat",
  "African",
  "Exotic / Asian",
  "Small Game",
  "Other",
];

const mountOptions = [
  "Shoulder Mount",
  "Wall Pedestal",
  "Floor Pedestal",
  "European Mount",
  "Full / Life-Size Mount",
  "Rug",
  "Horn / Antler Mount",
  "Tanning Only",
  "Not Sure Yet",
];

export default function ContactForm() {
  const [state, action, pending] = useActionState<ContactResult | null, FormData>(submitContact, null);
  const errs = (state && !state.ok && state.errors) || {};

  return (
    <form action={action} className="grid gap-5">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="sr-only" aria-hidden="true" />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your Name" name="name" required error={errs.name} />
        <Field label="Phone" name="phone" type="tel" required error={errs.phone} />
      </div>
      <Field label="Email" name="email" type="email" required error={errs.email} />

      <div className="grid gap-5 sm:grid-cols-2">
        <SelectField label="Animal / Species" name="species" options={speciesOptions} />
        <SelectField label="Type of Mount" name="mountType" options={mountOptions} />
      </div>

      <div>
        <label className="block text-sm font-medium text-forest mb-2">
          Message <span className="text-bronze">*</span>
        </label>
        <textarea
          name="message"
          rows={6}
          required
          className="w-full border border-charcoal/20 bg-white rounded-sm px-3 py-2.5 focus:border-bronze focus:outline-none"
          placeholder="Tell us about your animal, the pose, any landscape or plaque options you’re thinking about."
        />
        {errs.message && <p className="text-sm text-red-700 mt-1">{errs.message}</p>}
      </div>

      {state && (
        <div
          role={state.ok ? "status" : "alert"}
          className={`flex items-start gap-2 rounded-sm p-4 text-sm ${
            state.ok ? "bg-forest/5 text-forest border border-forest/20" : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {state.ok ? <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" /> : <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />}
          <span>{state.message}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-2 inline-flex items-center justify-center gap-2 bg-forest hover:bg-forest/90 disabled:opacity-70 text-ivory px-6 py-3.5 uppercase tracking-wide text-sm rounded-sm font-semibold"
      >
        {pending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          "Send Message"
        )}
      </button>

      <p className="text-xs text-charcoal/60">
        By submitting this form you consent to Dan French Taxidermy contacting you about your inquiry. We never share your information.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-forest mb-2" htmlFor={name}>
        {label} {required && <span className="text-bronze">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full border border-charcoal/20 bg-white rounded-sm px-3 py-2.5 focus:border-bronze focus:outline-none"
      />
      {error && <p className="text-sm text-red-700 mt-1">{error}</p>}
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-forest mb-2" htmlFor={name}>
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="w-full border border-charcoal/20 bg-white rounded-sm px-3 py-2.5 focus:border-bronze focus:outline-none"
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
