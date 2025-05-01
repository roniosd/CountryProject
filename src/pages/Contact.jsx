import { Input } from "../component/Input";

export const Contact = () => {
  const handelSubmit = (formData) => {
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
    <section className="text-white py-15">
      <div className="custom-container bg-slate-800 p-7 rounded-2xl">
        <h1 className="text-5xl font-bold text-center mb-9">Contact Us</h1>

        <form action={handelSubmit}>
          <Input value="name" autoComplete="off" />
          <Input value="email" autoComplete="off" />
          <Input value="phone" autoComplete="off" />

          <textarea
            className="p-5 border text-white rounded-lg w-full mt-6 resize-none"
            placeholder="Enter your massage"
            name="massage"
            rows="8"
          ></textarea>

          <button
            type="submit"
            className="py-3 text-xl bg-blue-400 w-full mt-5 rounded-full"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};
