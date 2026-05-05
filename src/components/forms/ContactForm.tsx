import type { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';

const defaultForm = {
  name: '',
  email: '',
  company: '',
  service: '',
  budget: '',
  message: '',
};

const ContactForm = () => {
  const [form, setForm] = useState(defaultForm);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error('Unable to send message right now.');
      }

      setStatus('success');
      setForm(defaultForm);
    } catch (err) {
      setStatus('error');
      setError((err as Error).message);
    } finally {
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="grid-two">
        <label>
          Full name
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Sarah Johnson"
          />
        </label>
        <label>
          Email address
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="you@email.com"
          />
        </label>
      </div>

      <div className="grid-two">
        <label>
          Company or brand
          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Growth Labs Ltd."
          />
        </label>

        <label>
          Service focus
          <select name="service" value={form.service} onChange={handleChange} required>
            <option value="">Select a service</option>
            <option value="shopify-development">Shopify Development</option>
            <option value="react-next">React &amp; Next.js Development</option>
            <option value="wordpress">WordPress Development</option>
            <option value="sfcc">Salesforce Commerce Cloud</option>
            <option value="frontend">Frontend Experience Design</option>
            <option value="consulting">Consulting &amp; Strategy</option>
            <option value="lead-generation">Predictable Lead Generation</option>
            <option value="google-ads">Google Ads &amp; Paid Media</option>
            <option value="full-funnel">Full-Funnel Partnership</option>
          </select>
        </label>
      </div>

      <label>
        Monthly budget
        <select name="budget" value={form.budget} onChange={handleChange}>
          <option value="">Choose an investment level</option>
          <option value="under-2k">Under $2k</option>
          <option value="2k-5k">$2k – $5k</option>
          <option value="5k-10k">$5k – $10k</option>
          <option value="10k-plus">$10k+</option>
        </select>
      </label>

      <label>
        Project details
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Share goals, timelines, KPIs and anything else that matters."
          required
        />
      </label>

      <button className="cta-button" type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending...' : 'Send message'}
      </button>

      {status === 'success' && <p className="form-success">Thanks! I’ll reply within one business day.</p>}
      {status === 'error' && <p className="form-error">{error}</p>}
    </form>
  );
};

export default ContactForm;

