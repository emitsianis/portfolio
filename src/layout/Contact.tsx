import { useRef, useState } from 'react';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      if (!formRef.current) return;

      formRef.current.reset();
      setForm({
        name: '',
        email: '',
        message: '',
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="c-space my-20" id="contact">
      <h3 className="head-text">Contact Me</h3>ƒ
      <div className="flex items-center flex-col terminal">
        <div className="terminal-header">
          <div className="terminal-btn red"></div>
          <div className="terminal-btn yellow"></div>
          <div className="terminal-btn green"></div>
        </div>
        <div className="contact-container pb-24">
          <h3 className=" head-text">Let's talk</h3>
          <p className=" text-lg text-white-600 mt-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            facere, magnam odit reprehenderit voluptatem voluptatum. Accusamus amet dolor itaque perferendis?
          </p>
          <form ref={formRef} onSubmit={handleSubmit} className=" mt-12 flex flex-col space-y-7">
            <label className=" space-y-3">
              <span className=" field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className=" field-input"
                placeholder=" John Doe"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>ƒ
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="someone@example.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">You Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Hi, I am interested in..."
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
    ;
};
export default Contact;
