import { Spinner } from "./utils/Spinner";
import { useForm } from "../hooks/use-form";

export default function SponsorForm({ className }: { className?: string }) {
  const { state, status, updateFormProperty, setStatus, clearForm } = useForm({
    name: "",
    email: "",
    message: "",
  });

  const submitForm = async (e: SubmitEvent) => {
    e.preventDefault();
    setStatus("loading");
    const formData = new FormData(e.target as HTMLFormElement);
    const response = await fetch("/api/sponsor-contact", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        if (!res.ok) {
          setStatus("error");
          throw new Error("Network response was not ok");
        }
        setStatus("success");
        clearForm();
        return res.json();
      })
      .catch((err) => {
        setStatus("error");
        console.error("There was a problem with the fetch operation:", err);
      });
  };

  return (
    <form className={className} onSubmit={submitForm}>
      <div className="flex flex-col gap-1">
        <label htmlFor="sponsorFormName">Name</label>
        <input
          className="rounded-md p-2 bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          type="text"
          id="sponsorFormName"
          name="name"
          required
          value={state.name}
          onChange={(e) => updateFormProperty("name", e.currentTarget.value)}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="sponsorFormEmail">Email</label>
        <input
          className="rounded-md p-2 bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          type="email"
          id="sponsorFormEmail"
          name="email"
          required
          value={state.email}
          onChange={(e) => updateFormProperty("email", e.currentTarget.value)}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="sponsorFormMessage">Message</label>
        <textarea
          className="rounded-md p-2 bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none min-h-40"
          id="sponsorFormMessage"
          name="message"
          required
          value={state.message}
          onChange={(e) => updateFormProperty("message", e.currentTarget.value)}
        />
      </div>
      <button
        className={`self-center md:self-start px-10 py-2 text-xl rounded-md w-[200px] text-white dark:text-black ${
          status === "loading"
            ? "bg-green-50 cursor-not-allowed"
            : "bg-green-700 dark:bg-green-200 hover:bg-green-500 dark:hover:bg-green-300 cursor-pointer"
        }`}
        type="submit"
        data-umami-event="sponsor_form_submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <div class="grid place-items-center">
            <Spinner className="fill-green-600" />
          </div>
        ) : (
          "Enviar"
        )}
      </button>
      {status === "error" && (
        <p className="text-red-500 text-sm mt-2">
          Ha ocurrido un error al enviar el mensaje. Por favor, inténtalo de
          nuevo más tarde.
        </p>
      )}
      {status === "success" && (
        <p className="text-green-500 text-sm mt-2">
          ¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.
        </p>
      )}
    </form>
  );
}
