import styles from './ModalForm.module.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function ModalForm({ isOpen, onClose }) {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    name: '',
    phone: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!form.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^[0-9+\\s()-]{7,15}$/.test(form.phone)) {
      newErrors.phone = 'Invalid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    await fetch('http://localhost:5000/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    setForm({ name: '', phone: '' });
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>

      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        {/* крестик */}
        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>

        <h3>{t('form_title')}</h3>

        <form onSubmit={handleSubmit}>

          <div className={styles.field}>
            <input
              placeholder={t('form_name')}
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />
            {errors.name && (
              <span className={styles.error}>{errors.name}</span>
            )}
          </div>

          <div className={styles.field}>
            <input
              placeholder={t('form_phone')}
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
            />
            {errors.phone && (
              <span className={styles.error}>{errors.phone}</span>
            )}
          </div>

          <button type="submit">
            {t('form_btn')}
          </button>

        </form>
      </div>
    </div>
  );
}